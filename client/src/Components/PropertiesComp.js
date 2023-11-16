import { Fragment } from "react";
import Navbar from "./jsx/Navbar";
import HomePage from "./jsx/HomePage";
import Footer from "./jsx/Footer";
// import FeaturedProperties from "./jsx/FeaturedProperties";
import PopularProperties from "./jsx/PopularProperties";
function PropertiesComp(){
    return(
        <Fragment>
            <Navbar/>
            {/* <HomePage/> */}
            <PopularProperties/>
            {/* <FeaturedProperties/> */}
            <Footer/>
        </Fragment>
    );
}
export default PropertiesComp;