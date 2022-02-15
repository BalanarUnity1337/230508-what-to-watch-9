import {HTMLInputTypeAttribute} from 'react';

type SignInFieldProps = {
  id: string
  name: string
  label: string
  placeholder: string
  type: HTMLInputTypeAttribute
  error?: boolean
}

function SignInField({id, name, label, placeholder, type, error}: SignInFieldProps): JSX.Element {
  const errorClassName: string = error ? 'sign-in__field--error' : '';

  return (
    <div className={`sign-in__field ${errorClassName}`}>
      <input className="sign-in__input" type={type} placeholder={placeholder} name={name} id={id} />
      <label className="sign-in__label visually-hidden" htmlFor={id}>{label}</label>
    </div>
  );
}

export default SignInField;
