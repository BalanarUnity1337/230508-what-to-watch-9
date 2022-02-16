const mergeClasses = (
  classes?: Record<string, boolean | undefined> | string,
  staticClass = '',
): string => {
  let result = staticClass;

  if (typeof classes === 'string') {
    result += ` ${classes}`;
  } else if (typeof classes === 'object') {
    result += Object.entries(classes)
      .reduce((acc, [className, condition]) => {
        if (condition) {
          acc += ` ${className}`;
        }

        return acc;
      }, '');
  }

  return result;
};

export default mergeClasses;
