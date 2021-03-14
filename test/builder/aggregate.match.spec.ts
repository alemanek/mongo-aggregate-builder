import { AggregatePipeline } from '../../src';
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

  it('Testing out range operators $gt, $gte', () => {
    const aggregatePipeline = new AggregatePipeline()
      .match<IMatchTest1>({
        firstName: 'test',
        address: {
          street: 'test',
          zip: { $gt: 55, $lt: 77 },
        }
      });

    const expectedDocument = {
      $match: {
        'firstName': 'test',
        'address.street': 'test',
        'address.zip': { $gt: 55, $lt: 77 }
      }
    };

    expect(aggregatePipeline.getPipeline()).toEqual([expectedDocument])
  })
})