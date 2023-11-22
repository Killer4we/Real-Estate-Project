import { Route,Routes} from "react-router-dom";
import Navbar from './Components/jsx/Navbar'
import Footer from './Components/jsx/Footer'
import HomeComp from "./Components/HomeComp";
import Signin from "./Components/jsx/Signin";
import Signup from "./Components/jsx/Signup";
import FeaturedPropertiesComp from "./Components/FeaturedPropertiesComp";
import PropertiesComp from './Components/PropertiesComp';
import PropertyComp from "./Components/PropertyComp";
import AdduserComp from "./Components/AdduserComp";
import PropertyDetail from './Components/jsx/PropertyDetail';
import EditProperty from './Components/jsx/UpdateProperty';

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
        <Route path = "/properties" element = {<PropertyComp/>}/>
        <Route path='/propertyDetail/:id' element={
          <>
            <Navbar />
            <PropertyDetail />
            <Footer />
          </>
        } />
        <Route path='/updateProperty/:id' element={
          // user ?
            <>
              <Navbar />
              <EditProperty />
              <Footer />
            </>
            // : <Navigate to='/signin' />
        } />
      </Routes>
    </div>
   
    );
}

export default App;
