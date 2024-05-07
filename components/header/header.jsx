import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <div className="logo">
            <img src="/img/logo.png" width={30} alt="logo" />
            Planwell.io
          </div>
        </Link>

        <nav>
          <Link href="https://www.planwell.ai/">Home</Link>
          <Link href="https://www.planwell.ai/planning">Planning</Link>
          <Link href="https://www.planwell.ai/who-we-are">Who We Are</Link>
          <Link href="https://www.planwell.ai/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
