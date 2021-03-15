import { Meta } from 'src';
import { TMatchNumberExp } from '../match/matchExprNumber.type';

/**
 * Types that we don't want to convert to any other form.
 */
type TExcludeFromTransform = TMatchNumberExp & Meta;

/**
 * This is used to type the constant keys array to check.
 */
type TExcludeFromTransformKeys = keyof TExcludeFromTransform;

/**
 * The array of keys which indicate that an object shouldn't be converted if it has one or more.
 * 
 * NOTE:  Still working out a way to have this generated at compile time.  It looks like I may need to write a 
 *        transformer that hooks into the build the process to generate this.
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
export function isExcludedFromTransform(obj: any): obj is TExcludeFromTransform {
    // If it contains any of our excluded keys then it is excluded.
    return keysToCheck.find(key => Object.prototype.hasOwnProperty.call(obj, key)) != null;
}
