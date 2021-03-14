/**
 * Converts an object from json object notation to json dot notation.
 *
 * Example:
 * {
 *   address: {
 *     street: 'some street'
 *   }
 * }
 * TO
 * {
 *   'address.street': 'some street'
 * }
 * @param excludedClassNames Class names to exclude from the conversion.
 */
export const objToDotNotation = (excludedClassNames: string[]) =>
  (obj: Record<string, unknown>, prefix = '', result: Record<string, unknown> = {}): Record<string, unknown> => {
    for (const key in obj) {
      if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        continue;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- It really can be any value so turning this rule off for this line.
      const value: any = obj[key]
      const newKey = prefix !== '' ? `${prefix}.${key}` : key;

      const isObject = typeof value === 'object'
      const className = isObject ? value?.constructor?.name : null;
      const isExcludedFromConversion = excludedClassNames.find(e => className === e) != null;

      // Its a non-null object.
      if (value != null && isObject && !isExcludedFromConversion) {
        // Iterate through its keys passing in our current result object.
        objToDotNotation(excludedClassNames)(value, newKey, result);
      } else {
        // Set the value to the dot notation key.
        result[newKey] = value;
      }
    }

    return result;
  }
