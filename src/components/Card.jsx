import "./Card.css"
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

export default Card