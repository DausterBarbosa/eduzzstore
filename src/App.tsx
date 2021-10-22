import {Provider} from "react-redux";
import Store from "./Redux/Store";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./Assets/Styles/global.css";

import Routes from "./routes";

function App() {
  return (
    <Provider store={Store}>
      <ToastContainer/>
        <Routes/>
      <ToastContainer />
    </Provider>
  );
}

export default App;
