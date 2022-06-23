import "./fasfa.css"
import dropdownIcon from "../../Assets/images/dropdown-icon.svg"

function Fasfa () {
    return(
        <div className="menu">
            <img src={require("../../Assets/images/close.png")} className="close-icon"/>
            <ul className='menu-text'>
                <li>
                    <div>
                        <a href='#'>Get a free Mealimeter</a>
                        <img className="dropdown" src={dropdownIcon}/>
                        <div className='dropdown-rectangle'>
                            <a href='#'><p>Mealimeter for Corporates</p></a>
                            <a href='#'><p>Mealimeter for Hospitals</p></a>
                            <a href='#'><p>Mealimeter for SME’s/ Startups</p></a>
                            <a href='#'><p>Mealimeter for Apartment Buildings</p></a>
                        </div>
                    </div>
                </li>
                <li><a href='#'>How it works</a></li>
                <li><a href='#'>Become an Affiliate</a></li>
                <li><a href='#'>Innovating for Africa</a></li>
            </ul>
        </div>
    )
}
export default Fasfa;
