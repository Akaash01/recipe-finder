import Axios from "axios";
import { useState } from "react";
import classes from "./App.module.css";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import Ingredient from "./components/Ingredient";
import Nutrients from "./components/Nutrients";
function App() {
  const [isModel, setModel] = useState(false);
  const [isNutri, setNutri] = useState(false);
  const [recipeList, updaterecipeList] = useState([]);
  const [isfirst, setFirst] = useState(true);
  const apiid = process.env.REACT_APP_APIID;
  const apikey = process.env.REACT_APP_APIKEY;
  const [ingredients, setIngredients] = useState({});
  const [nutrients, setNutrients] = useState({});
  const [link, setLink] = useState("");
  window.onscroll = function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
      window.pageXOffset || document.documentElement.scrollLeft;
    if (isModel) {
      window.scrollTo(scrollTop, scrollLeft);
    }
  };
  const showingred = (items, linkurl) => {
    setModel(!isModel);
    // window.onscroll();

    setIngredients(items);
    setLink(linkurl);
    console.log(items);
  };
  const showNutri = (items) => {
    setNutri(!isNutri);
    // window.onscroll();
    setNutrients(items);
  };
  const fetchdata = async (e, item) => {
    e.preventDefault();
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${item}&app_id=${apiid}&&app_key=${apikey}`
    ).then((d) => d);
    updaterecipeList(res.data.hits);
    setFirst(false);
  };
  const onTextChange = (event, input) => {
    // clearTimeout(timeoutId);
    // const timeout = setTimeout(() => fetchdata(event, event.target.value), 500);
    // updateTimeoutId(timeout);
    fetchdata(event, input);
  };
  return (
    <div
      className={classes.App}
      style={isModel ? { overflow: "hidden" } : { background: "transparent" }}
    >
      {isNutri && <Nutrients data={nutrients} oncancel={showNutri} />}
      {isModel && (
        <Ingredient data={ingredients} oncancel={showingred} Seemore={link} />
      )}
      <Header onTextChange={onTextChange} />
      <RecipeContainer
        data={recipeList}
        show={showingred}
        onshowNutri={showNutri}
        first={isfirst}
      />
    </div>
  );
}
export default App;
