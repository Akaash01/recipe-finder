import { useRef } from "react";
import classes from "./Header.module.css";
const Header = (props) => {
  const input = useRef();
  const onSearch = (e) => {
    props.onTextChange(e, input.current.value);
    console.log(input.current.value);
  };
  // const onChangeHandler = (e) => {
  //   if (e.keyCode === 13) onSearch(e);
  //   console.log(e);
  // };
  return (
    <div className={classes.header}>
      <div className={classes.name}>
        <img src="./images/hamburger.svg" alt="" />
        <h2>Recipe Finder</h2>
      </div>
      <form>
        <div className={classes.search}>
          <img src="./images/search-icon.svg" alt="" />
          <input type="text" placeholder="Search here" ref={input} />
          <button className={classes.searchbtn} onClick={onSearch}>
            search
          </button>
        </div>
      </form>
    </div>
  );
};
export default Header;
