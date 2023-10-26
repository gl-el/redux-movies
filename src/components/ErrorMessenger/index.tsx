import s from './ErrorMessenger.module.scss';

export function ErrorMessenger({ message = 'Error occured' }: { message?: string }) {
  return <p className={s.message}>⛔ {message}</p>;
}
