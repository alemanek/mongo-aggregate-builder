import { AggregatePipeline, Meta, MetaEnum, SortEnum } from '../../src';
import { IMatchTest1 } from './interfaces/match.spec.interface1';

describe('Aggregate - Sort', () => {
  beforeEach(async () => {
    jest.resetAllMocks();
  });

  it('Simple sorting with sub-document', () => {
    const aggregatePipeline = new AggregatePipeline().sort<IMatchTest1>({
      firstName: new Meta(MetaEnum.TextScore),
      address: {
        street: SortEnum.Descending,
        zip: SortEnum.Ascending
      }
    });

    const expectedDocument = {
      $sort: {
        'firstName': { $meta: 'textScore' },
        'address.street': SortEnum.Descending,
        'address.zip': SortEnum.Ascending
      }
    };

    expect(aggregatePipeline.getPipeline()).toEqual([expectedDocument]);
  });
});