import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>My Logo</h1>

      <section class="menu">
        <ul class="menu-list">
          <li>Home</li>
          <li class="active">Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <button>
          <i class="fas fa-times"></i>
          <i class="fas fa-bars"></i>
        </button>
      </section>
    </header>
  );
};

export default Header;
