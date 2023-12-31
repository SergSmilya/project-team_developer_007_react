import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPopularRecipes } from "../../redux/popularRecipes/selectors";
import { getPopularRecipes } from "../../redux/popularRecipes/operations";
import { Link } from "react-router-dom";

import css from './AddRecipeComponents.module.css';
import recipeMock from "../../images/addrecipe/add_photo_icon_x1.png";

export default function PopularRecipe() {
  const dispatch = useDispatch();
  const popularRecipesObj = useSelector(selectPopularRecipes);
  const popularRecipes = popularRecipesObj?.recipes || [];

  useEffect(() => {
    dispatch(getPopularRecipes());
  }, [dispatch]);


  return (
    <div>
      <h3 className={css.subtitle}>Popular recipe</h3>
      {popularRecipes.length > 0 ? (
        <ul className={css.popularRecipesList}>
          {popularRecipes.map(recipe => <li className={css.popularRecipesItem} key={recipe._id}>
            <Link to={`/recipe/${recipe._id}`} className={css.popularRecipesLink}>
              <img src={recipe.preview || recipeMock} alt="popularDish" className={css.recipePreview} />
              <div>
                <h5 className={css.popularRecipeSubtitle}>{recipe.title}</h5>
                <p className={css.popularRecipeText}>{recipe.instructions}</p>
              </div>
            </Link>
          </li>)}
        </ul>
      ) : (
        <p className={css.notFoundText}>There are no popular recipes yet</p>
      )}
    </div>
  );
};