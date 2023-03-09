import "./Card.css"
import PropTypes from "prop-types"
function Card({icon, quantity, unit, nutrimentType}){

    return(
        <div className="card-container">
            <div className="card-item">
                <div className="card-icon">
                    <img src={icon} alt="icon"/>
                </div>
                <div className="card-text-content">
                    <h3 className="key-data-name">{quantity} {unit}</h3>
                    <p className="key-data-value">{nutrimentType}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string,
    nutrimentType: PropTypes.string,
}

export default Card