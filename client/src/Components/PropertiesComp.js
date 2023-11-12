import { Fragment } from "react";
import Navbar from "./jsx/Navbar";
import Footer from "./jsx/Footer";
import FeaturedProperties from "./jsx/FeaturedProperties";
function PropertiesComp(){
    return(
        <Fragment>
            <Navbar/>
            <FeaturedProperties/>
            <Footer/>
        </Fragment>
    );
}
export default PropertiesComp;