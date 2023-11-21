import { Fragment } from "react";
import Navbar from "./jsx/Navbar";
import Footer from "./jsx/Footer";
import Properties from "./jsx/Properties";
function PropertyComp(){
    return (
        <Fragment>
            <Navbar/>
            {/* <Properties/> */}
            <div>
                Hi This is Abhinav Tomar
            </div>
            <Footer/>
        </Fragment>
    );
}
export default PropertyComp;