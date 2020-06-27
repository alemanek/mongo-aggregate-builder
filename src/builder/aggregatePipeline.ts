import {TMatch} from "./types/match.type";

export class AggregatePipeline {
    #pipeline: object[] = [];

    public match<T>(matchObj: TMatch<T>): AggregatePipeline {
        this.#pipeline.push(matchObj);
        return this;
    }
}