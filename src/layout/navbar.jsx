import logo from "../assets/logo.svg"
const Navbar = () => {
    const menuItem = [
        "Home", "Browse", "Updates", "Pricing"
    ]
    return (
        <navbar>
            <div className="nav_logo">
                <img src={logo} alt="logo" />
                <span>Serendipity</span>
            </div>
            <div className="nav_menu">
                {menuItem.map((item) => <div className="nav_menu-items">{item}</div>)}
                <div className="nav_menu-button"><button className=""></button></div>
            </div>
        </navbar>
    );
}

export default Navbar;