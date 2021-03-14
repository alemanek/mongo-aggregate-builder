import { MatchStage } from './match/match.stage';
import { TMatch } from './match/match.type';
import { SortStage } from './sort/sort.stage';
import { TSort } from './sort/sort.type';
import { IStage } from './stage.interface';

/**
 * Represents a set of generic aggregate pipeline expressions.  Order is preserved.
 */
export class AggregatePipeline {
  /**
   * The stages of the aggregation pipeline to execute.
   */
  private readonly pipeline: IStage[] = [];

  /**
   * Builds an aggregation pipeline.  A set of stages can optionally be provided.
   * @param pipeline stages to initialize this aggregation pipeline with.
   */
  constructor(pipeline: IStage[] = []) {
    this.pipeline = pipeline;
  }

  /**
   * Adds a match stage to the aggregation pipeline.
   * @param matchQuery for this stage.
   */
  public match<T>(matchQuery: TMatch<T>): AggregatePipeline {
    this.pipeline.push(new MatchStage(matchQuery));
    return this;
  }

  /**
   * Adds a sort stage to the aggregation pipeline
   * @param sortQuery for this stage.
   */
  public sort<T>(sortQuery: TSort<T>): AggregatePipeline {
    this.pipeline.push(new SortStage(sortQuery));
    return this;
  }

  /**
   * Gets the current pipeline.
   */
  public getPipeline(): IStage[] {
    return this.pipeline;
  }
}
