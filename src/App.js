import store from "./store/store";
import './App.css';
import { Provider } from "react-redux";
import Images from "./components/images";
// import Button from "./components/buttons";
function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <div className="App">
     <Images></Images>
    {/* <Button></Button> */}
      </div>
    </Provider>
    </div>
  );
}

export default App;
