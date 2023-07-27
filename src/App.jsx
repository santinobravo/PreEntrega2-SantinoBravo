import "./App.css"
import ItemListContainer from "./components/itemListContainer";
import NavBar from "./components/NavBar";


function App(){
  return (
  <main className="main">
    <NavBar />
    <ItemListContainer text ={"BIENVENIDOS A BIG BURGER" }/>
  </main>
  );
}

export default App;