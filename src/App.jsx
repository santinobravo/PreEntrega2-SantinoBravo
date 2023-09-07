import "./App.css"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/itemListContainer";


function App(){
  return (
  <main className="main">
    <NavBar />
    <ItemListContainer text ={"BIENVENIDOS A BIG BURGER" }/>
  </main>
  );
}

export default App;