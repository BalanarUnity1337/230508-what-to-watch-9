import {PropsWithChildren} from 'react';
import {mergeClasses} from '../../shared/lib';

type FormProps = PropsWithChildren<{
  classes?: string
}>

function Form({classes, children}: FormProps): JSX.Element {
  return (
    <form action="#" className={mergeClasses(classes)}>
      {children}
    </form>
  );
}

export default Form;
