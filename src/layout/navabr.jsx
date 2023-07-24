import logo from "Images/logo.svg"
const Navbar = () => {
    return ( 
        <nav className="flex justify-between">
            <div><img src={logo} alt="logo" /></div>
            <div></div>
        </nav>
     );
}
 
export default Navbar;