import s from './Loader.module.scss';

export function Loader() {
  return (
    <div className={s.loader}>
      <span className={s.ico}>⌛</span> Loading...
    </div>
  );
}
