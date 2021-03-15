import { AggregatePipeline, TMatch } from '../../src';
import { IMatchTest1 } from './interfaces/match.spec.interface1';

describe('Aggregate - Match', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });

  it('Simple value match with sub-document', () => {
    const aggregatePipeline = new AggregatePipeline()
      .match<IMatchTest1>({
        firstName: 'test',
        address: {
          street: 'test',
          zip: 55
        }
      });

    const expectedDocument = {
      $match: {
        'firstName': 'test',
        'address.street': 'test',
        'address.zip': 55
      }
    };

    expect(aggregatePipeline.getPipeline()).toEqual([expectedDocument])
  })

  it('Testing out range operators $gt, $lt', () => {
    const test1: TMatch<IMatchTest1> = {
      firstName: 'test',
      address: {
        street: 'test',
        zip: { $gt: 55, $lt: 66 }
      }
    }


    const aggregatePipeline = new AggregatePipeline()
      .match<IMatchTest1>(test1);

    const expectedDocument = {
      $match: {
        'firstName': 'test',
        'address.street': 'test',
        'address.zip': { $gt: 55, $lt: 66 }
      }
    };

    expect(aggregatePipeline.getPipeline()).toEqual([expectedDocument])
  })

  it('Testing out range operators $gte, $lte', () => {
    const test1: TMatch<IMatchTest1> = {
      address: {
        zip: { $gte: 55, $lte: 66 }
      }
    }

    const aggregatePipeline = new AggregatePipeline()
      .match<IMatchTest1>(test1);

    const expectedDocument = {
      $match: {
        'address.zip': { $gte: 55, $lte: 66 }
      }
    };

    expect(aggregatePipeline.getPipeline()).toEqual([expectedDocument])
  })
})