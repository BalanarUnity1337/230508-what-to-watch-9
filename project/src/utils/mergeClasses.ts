const mergeClasses = (classes: string[] | undefined, staticClass?: string): string => {
  const innerStaticClass: string = staticClass || '';

  return Array.isArray(classes)
    ? `${classes.join(' ')} ${innerStaticClass}`
    : `${innerStaticClass}`;
};

export default mergeClasses;
