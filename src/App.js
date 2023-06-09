import { useSelector,useDispatch } from "react-redux";
import{Home,Login,Public} from'./containers/public/'
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
function App() {

  const{test} = useSelector(state=> state.app)
  console.log(test);
  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>}/>
          <Route path={path.LOGIN} element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
