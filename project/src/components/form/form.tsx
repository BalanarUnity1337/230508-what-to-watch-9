import {FormEvent, PropsWithChildren} from 'react';

type Props = PropsWithChildren<{
  classes?: string
}>

function Form({classes, children}: Props): JSX.Element {
  return (
    <form action="#" className={classes} onSubmit={(e: FormEvent) => e.preventDefault()}>
      {children}
    </form>
  );
}

export default Form;
