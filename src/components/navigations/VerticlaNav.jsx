import logo from '../../assets/logo.svg'
import './VerticalNav.css'

function VerticalNavigation(){
    return(
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav className="nav">
                <ul className="navigationLinks">
                    <li className="navigationItem">Accueil</li>
                    <li className="navigationItem">Profil</li>
                    <li className="navigationItem">Réglage</li>
                    <li className="navigationItem">Communauté</li>
                </ul>
            </nav>
        </header>
    )
}
export default VerticalNavigation