import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const scrollTo = (e, id) => {
    if (!isHome) return; // anchors only work on landing
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="csp-nav" data-testid="site-nav">
      <Link to="/" className="csp-nav-logo" data-testid="nav-logo">
        <div className="csp-nav-icon" aria-hidden>🚫</div>
        <span className="csp-nav-name">Clean Search Pro</span>
      </Link>
      <div className="csp-nav-links">
        {isHome ? (
          <>
            <a href="#features" onClick={(e) => scrollTo(e, "features")} data-testid="nav-features">Features</a>
            <a href="#compare" onClick={(e) => scrollTo(e, "compare")} data-testid="nav-compare">Compare</a>
            <a href="#pricing" onClick={(e) => scrollTo(e, "pricing")} data-testid="nav-pricing">Pricing</a>
          </>
        ) : (
          <>
            <Link to="/#features" data-testid="nav-features">Features</Link>
            <Link to="/#pricing" data-testid="nav-pricing">Pricing</Link>
          </>
        )}
        <Link
          to="/privacy-policy"
          className={pathname.includes("privacy") ? "active" : ""}
          data-testid="nav-privacy"
        >
          Privacy
        </Link>
        <a href="#" className="csp-nav-cta" data-testid="nav-cta-install">Add to Chrome</a>
      </div>
    </nav>
  );
};

export default Nav;
