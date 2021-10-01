import classes from "./Ingredient.module.css";
const Nutrients = (props) => {
  const data = props.data;
  return (
    <div className={classes.backdrop}>
      <div className={`${classes.modal} ${classes.nutri}`}>
        <table>
          <thead>
            <tr>
              <th>Nutrients </th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.left}>Energy</td>
              <td className={classes.right}>
                {data.ENERC_KCAL.quantity.toFixed(2)} Kcal
              </td>
            </tr>
            <tr>
              <td className={classes.left}>Protien</td>
              <td className={classes.right}>
                {data.PROCNT.quantity.toFixed(2)} g
              </td>
            </tr>
            <tr>
              <td className={classes.left}>Sugar</td>
              <td className={classes.right}>
                {data.SUGAR.quantity.toFixed(2)} g
              </td>
            </tr>
            <tr>
              <td className={classes.left}>Fat</td>
              <td className={classes.right}>
                {data.FAT.quantity.toFixed(2)} g
              </td>
            </tr>

            <tr>
              <td className={classes.left}>Fiber</td>
              <td className={classes.right}>
                {data.FIBTG.quantity.toFixed(2)} g
              </td>
            </tr>
          </tbody>
        </table>
        <div className={classes.btnarea}>
          <button
            className={`${classes.btn} ${classes.red}`}
            onClick={props.oncancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default Nutrients;
