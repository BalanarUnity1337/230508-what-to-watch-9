import {HTMLInputTypeAttribute} from 'react';
import {mergeClasses} from '../../shared/lib';

type Props = {
  id: string
  name: string
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute
  error?: boolean
}

function SignInField({id, name, label, placeholder, type, error}: Props): JSX.Element {
  return (
    <div
      className={mergeClasses({
        'sign-in__field--error': error,
      }, 'sign-in__field')}
    >
      <input className="sign-in__input" type={type} placeholder={placeholder} name={name} id={id} />
      <label className="sign-in__label visually-hidden" htmlFor={id}>{label}</label>
    </div>
  );
}

export default SignInField;
