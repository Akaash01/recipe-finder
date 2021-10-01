import classes from "./Ingredient.module.css";
const Ingredient = (props) => {
  const items = props.data;
  console.log(props.Seemore);
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h2>Ingredients</h2>
        <div className={classes.scroll}>
          <ol>
            {items.map((item) => (
              <li>{item.text}</li>
            ))}
          </ol>
        </div>

        <div className={classes.btnarea}>
          <a href={props.Seemore}>
            <button className={`${classes.btn} ${classes.grn}`}>
              See more
            </button>
          </a>
          <button
            onClick={props.oncancel}
            className={`${classes.btn} ${classes.red}`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Ingredient;
