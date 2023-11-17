import "./Nav.css";

const Nav =  () => { 
    
    return  <header> 
        <a href="#" className="logo"> <i className="bx bx-home"></i>IRON FITNESS</a>
        <ul className="navlist">
            <li><a href={"/"} className="active">Home</a></li> 
            <li><a href={"/our_shop"}>Our shop</a></li>
            <li><a href={"/our_custom"}>Our custom</a></li>  
        </ul>
        <div className="nav-icons">
            <a href="#"><i className="bx bx-search"></i></a>
            <a href={"/login"}><i className="bx bx-user"></i></a>
            <a href={"/shopping_cart"}><i className="bx bx-cart"></i></a>
            <div className="bx bx-menu" id="menu-icon"></div>
        </div>
    </header>;
};
export default Nav;
