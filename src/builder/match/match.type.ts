import { TMatchNumberExp } from './matchExprNumber.type';

export type TMatch<T> = {
  /**
   * For every key in T if it is an object type then recursively walk into that type.  If it is a primitive type then the following rules apply:
   *   - If it is of type number then it can accept a number value or an object matching one of the defined number expressions.
   *   - Otherwise it can accept the primitive type. (for now this will be expanded for the rest of the possible match expressions later.)
   */
  readonly [P in keyof T]?: T[P] extends Record<string, unknown> ? TMatch<T[P]> : T[P] extends number ? TMatchNumberExp | T[P] : T[P];
}