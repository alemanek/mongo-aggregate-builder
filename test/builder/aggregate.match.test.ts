import {AggregatePipeline} from "../../src";
import {IMatchTest1} from "./interfaces/match.test.interface1";

function test() {
    const aggregatePipeline = new AggregatePipeline().match<IMatchTest1>({
        firstName: 'test', address: {
            street: 'test',
            zip: 55,
            state: { $gte: "" }
        }
    });


}