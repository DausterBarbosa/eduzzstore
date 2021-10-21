import {Provider} from "react-redux";
import Store from "./Redux/Store";

import "./Assets/Styles/global.css";

import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>
      <Routes/>
    </Provider>
  );
}

export default App;
