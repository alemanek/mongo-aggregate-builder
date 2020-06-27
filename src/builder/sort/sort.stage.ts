import { Meta } from '../..';
import { objToDotNotation } from '../functions/objToDotNotation';
import { IStage } from '../stage.interface';
import { TSort } from './sort.type';

/**
 * Mongo aggregates sort stage.
 */
export class SortStage<T> implements IStage {
  /**
   * The $sort object.  This needs to be type any as it is normalized to dot notation.
   */
  public readonly $sort: any;

  /**
   * Construct a sort stage.
   * @param sortQuery
   */
  constructor(sortQuery: TSort<T>) {
    this.$sort = objToDotNotation([Meta.name])(sortQuery);
  }
}