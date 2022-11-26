import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="header">
        <div className="header__brand">SOURCERER</div>
        <div className="header__spacer" />
        <div className="header__item">Sign in</div>
        <div className="header__item">Sign up</div>
      </div>
    </header>
  );
}
