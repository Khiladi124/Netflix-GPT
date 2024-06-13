import {Provider} from "react-redux";
import Body from './Components/Body';
import appStore from "./utils/appStore";

function App() {
   
 

  return (
  <div className="bg-gray-900">
      <Provider store={appStore}><Body/></Provider>
  </div>
  );
}

export default App;
