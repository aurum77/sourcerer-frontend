import "./Welcome.css";

export function Welcome() {
  return (
    <div className="welcome__container">
      <div className="welcome__msg">
        <div>Let's</div>
        <div>build</div>
        <div>a</div>
        <div>heckin</div>
        <div>website</div>
      </div>
      <img src="../public/mars.png" className="welcome__img" />
    </div>
  );
}
