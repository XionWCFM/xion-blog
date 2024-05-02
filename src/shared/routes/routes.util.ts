import * as qs from "qs";

type DefaultQuery = Record<string, unknown>;
type DefaultPathname = Array<[string, unknown]>;
export type DefaultRouterType = {
  query?: DefaultQuery;
  pathname?: DefaultPathname;
  catchAll?: string;
};
type TupleArrayToRecord<T extends Array<[string, unknown]>> = {
  [K in T[number][0]]: Extract<T[number], [K, any]>[1];
};
type ExtractPathnameValue<T extends DefaultPathname> = {
  [K in keyof T]: T[K] extends [unknown, infer V] ? V : never;
};

export type RoutesString = `/${string}`;
export type RoutesQueryAndPath<T extends DefaultRouterType = DefaultRouterType> = {
  query: T["query"] extends DefaultQuery ? T["query"] : DefaultQuery;
  pathname: T["pathname"] extends DefaultPathname
    ? TupleArrayToRecord<T["pathname"]>
    : // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      Record<string, any>;
  pathnameValue: T["pathname"] extends DefaultPathname
    ? ExtractPathnameValue<T["pathname"]>
    : string[];
  pathnameTuple: T["pathname"] extends DefaultPathname ? T["pathname"] : DefaultPathname;
  pathnameCatchAll: T["catchAll"] extends string
    ? Record<T["catchAll"], string[]>
    : Record<string, string[]>;
  arg: {
    query?: T["query"] extends DefaultQuery ? T["query"] : DefaultQuery;
    pathname?: T["pathname"] extends DefaultPathname
      ? ExtractPathnameValue<T["pathname"]>
      : string[];
  };
};

export const parseSearchParams = <T extends Record<string, unknown>>(param?: string): T => {
  return qs.parse(param ? param.replace(/^\?/, "") : "") as T;
};

export const stringfySearchParams = (obj?: Record<string, unknown>): string => {
  return qs.stringify(obj ?? {}, { arrayFormat: "repeat" });
};

export const stringfyPathname = (str?: string[]) => {
  return str?.join("/") ?? "";
};

export const createInternalPath = <
  E extends DefaultRouterType = DefaultRouterType,
  T extends RoutesString = RoutesString
>(
  basePath: T,
  option?: RoutesQueryAndPath<E>["arg"]
) => {
  const path = stringfyPathname(option?.pathname as string[]);
  const query = stringfySearchParams(option?.query);
  const pathSlash = path.length > 0 ? "/" : "";
  const questionmark = query.length > 0 ? "?" : "";
  return `${basePath}${pathSlash}${path}${questionmark}${query}`;
};
