import AuthNav from 'components/AuthNav.jsx/AuthNav';
import sprite from '../../images/svg/sprite.svg'
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <section className={css.Welcome__section}>
      <div className={css.Welcome__container}>
        
        <div className={css.Welcome__svgwrapper}>
          <svg width={44} height={44}>
            <use href={sprite + '#forkknife_welc'} />
          </svg>
        </div>
        
        <h1 className={css.Welcome__title}>Welcome to the app!</h1>
        <p className={css.Welcome__subtitle}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <AuthNav />
      </div>
    </section>
  );
};

export default WelcomePage;
