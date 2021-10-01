import classes from "./RecipeContainer.module.css";
import Item from "./Item";

const RecipeContainer = (props) => {
  const list = props.data;

  return (
    <>
      <div className={classes.container}>
        {props.first && (
          <div className={classes.first}>
            <h2>Search your food </h2>
            <h2>Find your recipe</h2>
            <p>Made by Akaash Varadhrajan</p>
          </div>
        )}
        {!props.first && list.length === 0 && (
          <h2 className={classes.notfound}>NOT found</h2>
        )}
        {list.length !== 0 &&
          list.map((data) => (
            <Item
              recipedata={data}
              showingred={props.show}
              showNutri={props.onshowNutri}
            />
          ))}
      </div>
    </>
  );
};
export default RecipeContainer;
