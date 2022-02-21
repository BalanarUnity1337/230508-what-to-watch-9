import {PropsWithChildren} from 'react';

type FormProps = PropsWithChildren<{
  classes?: string
}>

function Form({classes, children}: FormProps): JSX.Element {
  return (
    <form action="#" className={classes}>
      {children}
    </form>
  );
}

export default Form;
