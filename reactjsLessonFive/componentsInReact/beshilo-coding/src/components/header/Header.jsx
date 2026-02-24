
import './Header.css'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        Beshilo Coding Academy
      </div>

      <nav className="nav">
        <ul>
         
           <li><a Link to="/">Home</a></li>
          <li><a Link to="/courses">Courses</a></li>
          <li><a Link to="/aboutus">About Us</a></li>
          <li><a Link to="/signin">Sign In</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;