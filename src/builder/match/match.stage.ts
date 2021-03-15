import { IStage } from '../stage.interface';
import { objToDotNotation } from '../transformer/objToDotNotation.func';
import { TMatch } from './match.type';

/**
 * Abstraction for the $match aggregation query stage
 * @see {@link https://docs.mongodb.com/manual/reference/operator/aggregation/match/}
 */
export class MatchStage<T> implements IStage {
  /**
   * Since we normalize this to dot notation we need to use the "any" type.
   */
  public readonly $match: Record<string, unknown>;

  /**
   * Build the match stage with the query provided.
   * @param matchQuery for this stage.
   */
  constructor(matchQuery: TMatch<T>) {
    this.$match = objToDotNotation(matchQuery);
  }
}