import { Meta } from 'src';
import { TMatchNumberExp } from './match/matchExprNumber.type';

/**
 * Types that we don't want to convert to any other form.
 */
type TExcludeFromTransform = TMatchNumberExp | Meta;

/**
 * This is used to type the constant keys array to check.  Not sure why key but "keyof TExcludeFromTransform" results
 * in a "never" type so to keep this correct we will need to maintain the two types.
 */
type TExcludeFromTransformKeys = keyof TMatchNumberExp | keyof Meta;

/**
 * The array of keys which indicate that an object shouldn't be converted if it has one or more.
 */
const keysToCheck: TExcludeFromTransformKeys[] = ['$gt', '$lt', '$lte', '$gte', '$meta'];

/**
 * Function used to determine if the object should be transformed or if it should be skipped.  The reason for this is
 * if the object has one or more reserved keys indicating that it is not something that should be transformed.
 * 
 * @param obj to evaluate
 * @returns true if the object should be excluded from any parsing or manipulation, false if not.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
export function isExcludedFromParse(obj: any): obj is TExcludeFromTransform {
    // If it contains any of our excluded keys then it is excluded.
    return keysToCheck.find(key => Object.prototype.hasOwnProperty.call(obj, key)) != null;
}
