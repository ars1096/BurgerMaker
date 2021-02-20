import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import BurgerIngredient from "./components/Burguer/BurgerIngredient/BurgerIngredient";

function App() {
  return (
    <Layout>
      <BurgerBuilder />
      <BurgerIngredient type="bread-bottom" />
    </Layout>
  );
}

export default App;
