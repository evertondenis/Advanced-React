import Nav from "../components/Nav";

const Header = () => (
  <div>
    <div className="bar">
      <a href="">Sick Fits</a>
      <Nav />
      <div className="sub-bar">
        <p>Search</p>
        <div>Cart</div>
      </div>
    </div>
  </div>
);

export default Header;
