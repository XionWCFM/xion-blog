import {
  ComponentPropsWithoutRef,
  ComponentType,
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext as useReactContext
} from "react";

export const provider = <T extends ComponentType<any>>(
  Component: T,
  prop?: Omit<ComponentPropsWithoutRef<T>, "children">
): [T, ComponentPropsWithoutRef<T>] => [Component, prop as ComponentPropsWithoutRef<T>];

export const tree = <T extends ReturnType<typeof provider>>(providerTree: Array<T>) => {
  return function Wrapper({ children }: PropsWithChildren): ReactNode {
    return providerTree.reduceRight<ReactNode>((acc, [Provider, props]) => {
      return <Provider {...props}>{acc}</Provider>;
    }, children);
  };
};
export const context = <T extends Record<string, any>>(initialValue: T | null) => {
  type GeneratedContextType = T | null;
  const Context = createContext<GeneratedContextType>(initialValue);
  const useContext = () => {
    const value = useReactContext(Context);
    if (!value) {
      throw new Error("should provid context");
    }
    return value;
  };

  return [Context.Provider, useContext] as const;
};

export const builder = { provider, tree, context };
