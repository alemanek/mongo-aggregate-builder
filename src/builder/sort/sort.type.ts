import { Meta } from '../..';

/**
 * Type of the sort object.
 */
export type TSort<T> = {
  /**
   * If it is an object type recursively build up more TSort types.  It is it a primitive type
   * constrain the value to -1, 1, or the Meta object.  Strangely enough this constraint didn't work
   * with just using SortEnum.
   */
  readonly [P in keyof T]?: T[P] extends object ? TSort<T[P]> : -1 | 1 | Meta;
}