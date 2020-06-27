import { IStage } from './interfaces/stage.interface';
import { TMatch } from './types/match.type';
import { objNotationToDot } from './util';

/**
 * Abstraction for the $match aggregation query stage
 * @see {@link https://docs.mongodb.com/manual/reference/operator/aggregation/match/}
 */
export class MatchStage<T> implements IStage {
  /**
   * Since we normalize this to dot notation we need to use the "any" type.
   */
  public readonly $match: any;

  /**
   * Build the match stage with the query provided.
   * @param matchQuery for this stage.
   */
  constructor(matchQuery: TMatch<T>) {
    this.$match = objNotationToDot(matchQuery);
  }
}