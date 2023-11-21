
import "../css/footer.css";
function Footer(){
    return (
        <>
            <footer>
                <div class="footer-column" id="about">
                <h4>About the Website</h4>
                <p>Hello guys. It is a real estate website where you can buy and view properties online.</p>
                </div>
                
                <div class="footer-column" id="contacts">
                <h4>Contacts</h4>
                <p>Github: <a href="https://github.com/Killer4we/Real-Estate-Project" target="_blank">https://github.com/Killer4we/Real-Estate-Project</a></p>
                </div>

                <div class="footer-column" id="location">
                <h4>Location</h4>
                <p>VIT Chennai</p>
                </div>
            </footer>
        </>
    );
}
export default Footer;