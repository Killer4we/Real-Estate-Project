import { Route,Routes} from "react-router-dom";
import HomeComp from "./Components/HomeComp";
import Signin from "./Components/jsx/Signin";
import Signup from "./Components/jsx/Signup";
import FeaturedProperties from "./Components/jsx/FeaturedProperties";
// import PropertiesComp from './Components/PropertiesComp';
// import AboutPropertiesComp from './Components/AboutPropertiesComp';
function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element = {
        <HomeComp/>
      }/>     
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path="/featured" element = {<FeaturedProperties/>}/>
        {/* <Route path = "/aboutProperties" element = {<AboutPropertiesComp/>}/> */}
        {/* <Route path = "/Properties" element = {<PropertiesComp/>}/> */}
        {/* <Route path="/userid" element = {<UpdatedNavbar/>}/> */}
      </Routes>
    </div>
    // <div>
    //   <h1>Hello</h1>
    // </div>
    );
}

export default App;
