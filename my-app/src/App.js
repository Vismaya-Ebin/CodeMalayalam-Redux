import "./App.css";
import StateHook from "./StateHook.js";
import ReactReduxHook from "./ReactReduxHook.js";
import ClassRedux from "./ClassRedux.js";
import LabelComponent from "./LabelComponent.js";
import ReduxToolkit from "./ReduxToolkit.js";
import ReduxCheckbox from './ReduxCheckbox.js';
import Message from './TestDom/Message.js';
import MessageFunction from './TestDom/MessageFunction.js';
import FocusableInput from './TestDom/FocusableInput.js';
import {GroceryApp} from './TestDom/GroceryApp.js';
import ImageGallery from './TestDom/ImageGallery.js';
import ImageGalleryFunction from './TestDom/ImageGalleryFunction.js';
// import Apps from './TestDom/ChangeUsername.js';

function App() {
  const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
  return (
    <div className="App">
      {/* <Message/>
      <MessageFunction/>
      <FocusableInput shouldFocus={true} />
      <ImageGallery links={ links } />
      <ImageGalleryFunction links={ links }/>
      <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  /> */}
  
      {/* <StateHook />
      <ReactReduxHook/>
      <ClassRedux/>
      <LabelComponent/> */}
      <ReduxToolkit/>
      <ReduxCheckbox/>
      
    </div>
  );
}

export default App;
