import { Fragment } from "react";
import Navbar from "./jsx/Navbar";
import Footer from "./jsx/Footer";
import PopularProperties from "./jsx/PopularProperties";
function AboutPropertiesComp(){
    return(
        <Fragment>
            <Navbar/>
            <PopularProperties/>
            <Footer/>
        </Fragment>
    );
}
export default AboutPropertiesComp;