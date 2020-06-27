import { MetaEnum } from './meta.enum';

/**
 * Meta object which can be used in a few different aggregation stages to provide for "textScore" in full text queries.
 *
 * NOTE:  You must use this class so that
 */
export class Meta {
  /**
   * Meta object
   */
  public readonly $meta: MetaEnum;

  /**
   *
   * @param meta
   */
  constructor(meta: MetaEnum) {
    this.$meta = meta;
  }
}