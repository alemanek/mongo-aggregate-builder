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
export const objToDotNotation = (excludedClassNames: string[]) => (obj: any, prefix: string = '', result: any = {}): object => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const value = obj[key]
    const newKey = prefix !== '' ? `${prefix}.${key}` : key;

    const className = value?.constructor?.name;
    const isExcludedFromConversion = excludedClassNames.find(e => className === e) != null;

    // Its a non-null object.
    if (value != null && typeof value === 'object' && !isExcludedFromConversion) {
      // Iterate through its keys passing in our current result object.
      objToDotNotation(excludedClassNames)(value, newKey, result);
    } else {
      // Set the value to the dot notation key.
      result[newKey] = value;
    }
  }

  return result;
}