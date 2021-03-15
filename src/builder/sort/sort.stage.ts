import { IStage } from '../stage.interface';
import { objToDotNotation } from '../transformer/objToDotNotation.func';
import { TSort } from './sort.type';

/**
 * Mongo aggregates sort stage.
 */
export class SortStage<T> implements IStage {
  /**
   * The $sort object.  This needs to be type any as it is normalized to dot notation.
   */
  public readonly $sort: Record<string, unknown>;

  /**npm 
   * Construct a sort stage.
   * @param sortQuery
   */
  constructor(sortQuery: TSort<T>) {
    this.$sort = objToDotNotation(sortQuery);
  }
}