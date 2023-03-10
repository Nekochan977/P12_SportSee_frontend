import "./Card.css"
import PropTypes from "prop-types"
/**
 * Card
 * @param {string} icon for nutrient type
 * @param {number} quantity number of calories, proteins, carbohydrates or lipids
 * @param {string} unit in g or kg
 * @param {string} nutrientType calorie, protein, carbohydrate or lipid
 * @returns card used for calorie, protein, carbohydrate and lipid
 */
function Card({icon, quantity, unit, nutrientType}){

    return(
        <div className="card-container">
            <div className="card-item">
                <div className="card-icon">
                    <img src={icon} alt="icon"/>
                </div>
                <div className="card-text-content">
                    <h3 className="key-data-name">{quantity} {unit}</h3>
                    <p className="key-data-value">{nutrientType}</p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    icon: PropTypes.string,
    quantity: PropTypes.number,
    unit: PropTypes.string,
    nutrientType: PropTypes.string,
}

export default Card