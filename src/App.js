import "./App.css";
/*import Effect from "./componentes/effect";
import Estado from "./componentes/estado";
import HolaNombre from "./componentes/propio";*/
import ListaTareas from "./ejercicio4";
import FormPrueba from "./forms";

function App() {
  /* const nombre = "javier";
  const login = false;
  const handleFunction = () => {
    alert("me ejecute");
  };*/
  return (
    <div className="App">
      {/*<HolaNombre name={nombre} isLogin={login} />

      <Estado countProps={2} funcion={handleFunction} />

      <Effect />*/}
      {/*<div style={{ marginTop: "5vh" }}>
        <ListaTareas />
    </div>*/}

      <FormPrueba />
    </div>
  );
}

export default App;
