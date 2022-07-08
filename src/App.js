import "./App.css";

//import des films
import data from "./assets/data.json";

//components
import Section from "./components/Section";

function App() {
  // console.log(data);
  return (
    <div className="App">
      <h1 style={{color:"red"}}>Netflix</h1>
      {data.map((mainCategory, index) => {
        return <Section key={index} mainCategory={mainCategory} />;
      })}
    </div>
  );
}

export default App;
