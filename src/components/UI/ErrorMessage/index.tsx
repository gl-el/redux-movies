import s from './ErrorMessage.module.scss';

export function ErrorMessage({ message = 'Error occured' }: { message?: string }) {
  return <p className={s.message}>⛔ {message}</p>;
}
