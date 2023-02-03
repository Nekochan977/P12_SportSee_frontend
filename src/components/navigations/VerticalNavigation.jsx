import meditationIcon from "../../assets/meditation-icon.svg"
import swimmingIcon from "../../assets/swimming-icon.svg"
import cyclingIcon from "../../assets/cycling-icon.svg"
import weightliftingIcon from "../../assets/weightlifting-icon.svg"
import "./VerticalNavigation.css"

function VerticalNavigation() {
  return (
    <div className="verticalNavContainer">
      <nav className="verticalNav">
        <ul>
          <li>
            <img
              className="verticlIcon"
              src={meditationIcon}
              alt="meditaiton icon"
            />
          </li>
          <li>
            <img
              className="verticlIcon"
              src={swimmingIcon}
              alt="swimming icon"
            />
          </li>
          <li>
            <img className="verticlIcon" src={cyclingIcon} alt="cycling icon" />
          </li>
          <li>
            <img
              className="verticlIcon"
              src={weightliftingIcon}
              alt="weightlifting icon"
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default VerticalNavigation
