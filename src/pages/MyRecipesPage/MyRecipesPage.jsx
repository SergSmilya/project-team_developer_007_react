import { useSelector } from 'react-redux';

import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from '../../pages/pages.module.css';
import myRecipesCss from './MyRecipesPage.module.css';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import {
  selectMyRecipesError,
  selectMyRecipesIsLoading,
} from 'redux/myRecipes/selectors';
import { useEffect } from 'react';
import searchCss from '../SearchPage/searchContainer.module.css';
import Paginator from 'components/MyRecipesPagination/Paginator';
import { useLocation } from 'react-router-dom';
import Loader from 'components/Loader';

const MyRecipesPage = () => {
  const isLoading = useSelector(selectMyRecipesIsLoading);
  const error = useSelector(selectMyRecipesError);

  // useEffect(() => {
  //   if (token) {
  //     dispatch(fetchMyRecipes(page));
  //   }
  // }, [dispatch, token, page]);

  const text = 'My recipes';

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={`${myRecipesCss.wrapper_leaf}`}>
        <div className={myRecipesCss.leaf_bg}></div>
        <div className={css.section}>
          {isLoading && !error && <Loader />}
          {error && <p>{error}</p>}
          <div className={`${css.container} ${searchCss.container}`}>
            <MainPageTitle text={text} />
          </div>

          <div className={`${css.container} ${myRecipesCss.wrapper} `}>
            <MyRecipesList />
          </div>
          <div
            className={`${myRecipesCss.container} ${myRecipesCss.pagin_container}`}
          >
            <Paginator
            // onPageChange={page => dispatch(fetchMyRecipes(page))}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyRecipesPage;
