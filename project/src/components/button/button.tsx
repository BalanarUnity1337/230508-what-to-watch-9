import {PropsWithChildren, ReactNode} from 'react';
import mergeClasses from '../../utils/mergeClasses';

type ButtonProps = PropsWithChildren<{
  icon?: ReactNode
  classes?: string[]
}>

function Button({icon, classes, children}: ButtonProps): JSX.Element {
  const innerClassName: string = mergeClasses(classes, 'btn');

  return (
    <button className={innerClassName} type="button">
      {icon}

      <span>
        {children}
      </span>
    </button>
  );
}

export default Button;
