import logo from "../assets/img/dc-logo.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div>
            <img src={logo} alt="DC Logo" />
          </div>
          <nav>
            <ul id="header-menu">
              <li id="menu-item">Characters</li>
              <li className="active" id="menu-item">
                Comics
              </li>
              <li id="menu-item">Movies</li>
              <li id="menu-item">TV</li>
              <li id="menu-item">Games</li>
              <li id="menu-item">Collectibles</li>
              <li id="menu-item">Videos</li>
              <li id="menu-item">Fans</li>
              <li id="menu-item">News</li>
              <li id="menu-item">Shop</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
