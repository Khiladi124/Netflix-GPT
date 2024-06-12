import {Provider} from "react-redux";
import Body from './Components/Body';
import appStore from "./utils/appStore";
function App() {
  return (
    <div >
      <Provider>
        <Body />
      </Provider>
      
    </div>
  );
}

export default App;
