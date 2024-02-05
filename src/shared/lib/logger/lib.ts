import { glue } from './atom';

export const tupleToString = <T>(tuple: readonly [...string[]]) => {
  return tuple.join(glue) as T;
};

export const stringToTuple = <T>(text: string) => {
  return text.split(glue) as T;
};
