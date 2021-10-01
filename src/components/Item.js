import classes from "./Item.module.css";
const Item = (props) => {
  const data = props.recipedata;
  const title = data.recipe.label;
  const img = data.recipe.image;
  const show = props.showingred;
  const showNutri = props.showNutri;
  const linkurl = data.recipe.url;

  const onshowhandler = () => {
    show(data.recipe.ingredients, linkurl);
  };
  const onShowNuriHandler = () => {
    showNutri(data.recipe.totalNutrients);
    console.log(data.recipe.totalNutrients);
  };
  return (
    <div className={classes.card}>
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h3 className={classes.greenbtn} onClick={onshowhandler}>
        Ingredients
      </h3>
      <h3 className={classes.redbtn} onClick={onShowNuriHandler}>
        View Nutrients
      </h3>
    </div>
  );
};
export default Item;
