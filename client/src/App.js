import { Route,Routes} from "react-router-dom";
import HomeComp from "./Components/HomeComp";
import Signin from "./Components/jsx/Signin";
import Signup from "./Components/jsx/Signup";
import FeaturedPropertiesComp from "./Components/FeaturedPropertiesComp";
import PropertiesComp from './Components/PropertiesComp';
import PropertyComp from "./Components/PropertyComp";
import AdduserComp from "./Components/AdduserComp";
function App() {
  return (
    <div>
      <Routes>
      <Route path = "/" element = {
        <HomeComp/>
      }/>     
        <Route path = "/signup" element = {<Signup/>}/>
        <Route path = "/signin" element = {<Signin/>}/>
        <Route path="/FeaturedProperties" element = {<FeaturedPropertiesComp/>}/>
        <Route path = "/PopularProperties" element = {<PropertiesComp/>}/>
        <Route path = "/addproperty" element = {<AdduserComp/>}/>
        <Route path = "/property" element = {<PropertyComp/>}/>
      </Routes>
    </div>
   
    );
}

export default App;
