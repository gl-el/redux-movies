import cx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';
import s from './Input.module.scss';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <input type={props.type} className={cx(s.input, props.className)} {...props} ref={ref} />;
});
