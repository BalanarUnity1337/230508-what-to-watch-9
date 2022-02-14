import {PropsWithChildren} from 'react';
import mergeClasses from '../../utils/mergeClasses';

type FormProps = PropsWithChildren<{
  classes?: string[]
}>

function Form({classes, children}: FormProps): JSX.Element {
  const innerClasses: string = mergeClasses(classes);

  return (
    <form action="#" className={innerClasses}>
      {children}
    </form>
  );
}

export default Form;
