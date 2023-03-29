import meditationIcon from "../../assets/meditation-icon.svg"
import swimmingIcon from "../../assets/swimming-icon.svg"
import cyclingIcon from "../../assets/cycling-icon.svg"
import weightliftingIcon from "../../assets/weightlifting-icon.svg"
import "./VerticalNavigation.css"

function VerticalNavigation() {
  return (
    <div className="vertical-nav-container">
      <nav className="vertical-nav">
        <ul>
          <li>
            <img
              className="vertical-nav-icon"
              src={meditationIcon}
              alt="meditaiton icon"
            />
          </li>
          <li>
            <img
              className="vertical-nav-icon"
              src={swimmingIcon}
              alt="swimming icon"
            />
          </li>
          <li>
            <img
                className="vertical-nav-icon"
                src={cyclingIcon}
                alt="cycling icon" />
          </li>
          <li>
            <img
              className="vertical-nav-icon"
              src={weightliftingIcon}
              alt="weightlifting icon"
            />
          </li>
        </ul>
      </nav>
      <div className="vertical-text">
        <p>Copyright, SportSee 2020</p>
      </div>
    </div>
  )
}
export default VerticalNavigation
