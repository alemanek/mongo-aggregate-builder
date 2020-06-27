import { TAggExp } from '../types/aggExp.type';

export type TMatch<T extends TAggExp> = {
  /**
   * For every key in T use the type if it is primative otherwise use a TMatch type as the type.
   *
   * NOTE:  Current limitations are that it will allow for value matching or expression operator objects
   *         but no strict checks are placed on the operator objects yet.
   */
  readonly [P in keyof T]?: T[P] extends object ? TMatch<T[P]> : T[P] | object;
}