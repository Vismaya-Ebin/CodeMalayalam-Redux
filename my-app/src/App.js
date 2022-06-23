import "./App.css";
import StateHook from "./StateHook.js";
import ReactReduxHook from "./ReactReduxHook.js";
import ClassRedux from "./ClassRedux.js";
import LabelComponent from "./LabelComponent.js";

function App() {
  return (
    <div className="App">
      <StateHook />
      <ReactReduxHook/>
      <ClassRedux/>
      <LabelComponent/>
    </div>
  );
}

export default App;
