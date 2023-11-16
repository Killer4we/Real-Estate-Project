import { Fragment } from "react";
import Navbar from "./jsx/Navbar";
import FeaturedProperties from "./jsx/FeaturedProperties";
import Footer from "./jsx/Footer";
function FeaturedPropertiesComp(){
    return (
        <Fragment>
            <Navbar/>
            <FeaturedProperties/>
            <Footer/>
        </Fragment>
    );
}
export default FeaturedPropertiesComp;