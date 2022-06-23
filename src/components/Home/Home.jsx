import Nav from '../nav/nav'
import './home.css'
import Button from "../button/Button"
import Card from '../card/card'
import mealimeterOfficeIcon from '../../Assets/images/mealimeter-office-icon.svg'
import mealimeterBusinessIcon from '../../Assets/images/mealimeter-businesses-icon.svg'
import mealimeterHospitalIcon from '../../Assets/images/mealimeter-hospital-icon.svg'
import mealimeterBuildingIcon from '../../Assets/images/mealimeter-building-icon.svg'
import Fasfa from '../fasfa-component/fasfa'


function  Home() {
    return(
        <body>
            <Fasfa />
            <header className="home-header">
                <Nav/>
                <div className='header-content'>
                    <h1>Lets make it <span>super-easy</span> to get hot or cold nutritious meals in your building</h1>
                        <Button href="#" value="Get a free Mealimeter"/> 
                </div>
            </header>
            <div className='fridge-container'>
                <div className='fridge-container-text'>
                    <h2>Get an affordable meal in <span>30 seconds!</span></h2>
                    <p>Mealimeter provides access to fresh and nutritious meals, snacks and beverages via a Mealimeter kiosk in your location, daily. No more long queues, change, card transaction failures, etc. We’ve designed mealimeter specifically for our local environment and made sure none of these issues prevent your employees from getting healthy meals, fast!</p>
                    <div className='highlights'>
                        <span className='highlights-1'>
                            <h3>Savings on healthy meal Options:</h3>
                            <p>No delivery costs, Very low overheads, Sourcing directly from farmers</p>
                        </span>
                        <span className='highlights-2'>
                            <h3>Great menu:</h3>
                            <p>Get access to carefully curated healthy meals and snacks from the best vendors in Nigeria. No junk.</p>
                        </span>
                        <span className='highlights-3'>
                            <h3>Organisation specific Meal planning</h3>
                            <p>Mealimeter helps organisations create mealplans specific to their employee needs and operational hours.</p>
                        </span>
                        <span className='highlights-4'>
                            <h3>IOT-supported Food kiosk with Real-time Monitoring:</h3>
                            <p>Automated Restocking Your office will never run out of your favorites.</p>
                        </span>
                    </div>
                </div>
                <div className='fridge-container-img'>
                    <img src={require("../../Assets/images/Fridge-img.png")}/>
                </div>
            </div>
            <div className='mealimeter-types'>
                <h2>There is a Mealimeter <br/>for <span>everyone</span></h2>
                <p>Select an option to get a <strong>free </strong>Mealimeter automated kiosk installed in your location.</p>
            </div>
            <div className='card-container'>
                <Card src={mealimeterOfficeIcon} text="Mealimeter for Corporates"/>
                <Card src={mealimeterHospitalIcon} text="Mealimeter for Hospitals"/>
                <Card src={mealimeterBusinessIcon} text="Mealimeter for SMEs/ Startups"/>
                <Card src={mealimeterBuildingIcon} text="Mealimeter for Apartment Buildings"/>
            </div>
            <div className='partners'>
                <h2>We <span>don’t</span> do it alone</h2>
                <p> We work with passionate Farmers and food entrepreneurs within the nutrition ecosystem<br/> to provide fresh, healthy  and tasty meals to our customers. We help them increase demand<br/> and provide real-time data on customer behavior for future product development.</p>
                <div className='partners-logo1'>
                    <img className='express' src={require("../../Assets/images/smoothie-logo-partners.png")}/>
                    <img className='boomsky' src={require("../../Assets/images/boomsky-partner.png")}/>
                    <img className='nuli'  src={require("../../Assets/images/nuli-partners.png")}/>
                    <img className='fusion'  src={require("../../Assets/images/fruits-fusion-partner.png")}/>
                    <img className='sofresh'  src={require("../../Assets/images/so-fresh-partner.png")}/>
                </div>
                <div className='partners-logo2'>
                    <img src={require("../../Assets/images/health-kitchen-partner.png")}/>
                    <img src={require("../../Assets/images/oh-so-partner.png")}/>
                    <img src={require("../../Assets/images/green-grill-partner.png")}/>
                    <img src={require("../../Assets/images/green-apron-partner.png")}/>
                    <img src={require("../../Assets/images/eden-juicebar-partner.png")}/>
                </div>
                <Button href="#" value="Become a Vendor" className="become-a-vendor"/>
            </div>
        </body>
    )
 }
 export default Home;