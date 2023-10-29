import s from './ErrorMessenger.module.scss';

// ErrorMessage, почему месенжер
export function ErrorMessenger({ message = 'Error occurred' }: { message?: string }) {
  return <p className={s.message}>⛔ {message}</p>;
}
