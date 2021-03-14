import { Meta, SortEnum } from '../..';

/**
 * Type of the sort object.
 */
export type TSort<T> = {
  /**
   * If it is an object type recursively build up more TSort types.  It is it a primitive type
   * constrain the value to -1, 1, or the Meta object.
   */
  readonly [P in keyof T]?: T[P] extends object ? TSort<T[P]> : SortEnum.Descending | SortEnum.Ascending | Meta;
}