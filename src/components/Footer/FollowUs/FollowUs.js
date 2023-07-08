import css from './FollowUs.module.css';

export const FollowUs = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <a href="/">/</a>facebook
        </li>
        <li>
          <a href="/">/</a>youtube
        </li>
        <li>
          <a href="/">/</a>twitter
        </li>
        <li>
          <a href="/">/</a>instagram
        </li>
      </ul>
    </div>
  );
};
