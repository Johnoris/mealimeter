import "./footer.css";

function Footer () {
    return(
        <footer>
            <div className="footer-section">
                <div className="footer-section1">
                    <h1>Stay Connected </h1>
                    <p>Join the Mealimeter mailing list, and stay up to date on all new products.</p>
                    <input type="email" className="enter-email" placeholder="Email Address"/>
                    <input type="submit" value="Sign- up" className="submit-email"/><br/>
                    <span className="social-icons">
                        <img src={require('../../Assets/images/instagram-icon.png')}/>
                        <img src={require('../../Assets/images/twitter-icon.png')}/>
                        <img src={require('../../Assets/images/linkedin-icon.png')}/>
                    </span>
                </div>
                <div className="footer-section2">
                    <img src={require('../../Assets/images/footer-card.png')}/>
                </div>
                <div className="footer-section3">
                    <h1>Navigate</h1>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Become a vendor</a></li>
                        <li><a href="#">Own a Franchise</a></li>
                        <li><a href="#">The Future Cafeteria</a></li>
                        <li><a href="#">Get Mealimeter</a></li>
                        <li><a href="#">Daily Freshness Policy</a></li>
                        <li><a href="#">Nutri Van by Mealimeter</a></li>
                    </ul>
                </div>
            </div>
            <h2>Our Partners</h2>
            <div className="footer-icons">
                <img src={require("../../Assets/images/fate-icon.png")}/>
                <img src={require("../../Assets/images/food-program-icon.png")}/>
                <img src={require("../../Assets/images/gain-icon.png")}/>
            </div>
        </footer>
    )
}
export default Footer;