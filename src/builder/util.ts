export const objNotationToDot = (obj: any, prefix: string = '', result: any = {}): object => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }

    const value = obj[key]
    const newKey = prefix !== '' ? `${prefix}.${key}` : key;

    // Its a non-null object.
    if (value != null && typeof value === 'object') {
      // Iterate through its keys passing in our current result object.
      objNotationToDot(value, newKey, result);
    } else {
      // Set the value to the dot notation key.
      result[newKey] = value;
    }
  }

  return result;
}