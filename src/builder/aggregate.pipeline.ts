import { IStage } from './interfaces/stage.interface';
import { MatchStage } from './match.stage';
import { TMatch } from './types/match.type';

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
   * Gets the current pipeline.
   */
  public getPipeline(): IStage[] {
    return this.pipeline;
  }
}