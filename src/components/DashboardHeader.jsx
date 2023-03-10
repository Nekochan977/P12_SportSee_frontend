import "./DashboardHeader.css"
import PropTypes from "prop-types"

function DashboardHeader({firstName}) {
    return (

        <div className="dashboard-header-container">
            <h1 className="dashboard-header-title">Bonjour&nbsp;
                <span className="red-text">{firstName}</span>
            </h1>
            <p className="dashboard-header-text">Félicitation! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

DashboardHeader.propTypes = {
    firstName: PropTypes.string,
}

export default DashboardHeader
