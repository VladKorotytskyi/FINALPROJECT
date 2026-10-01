import logo from "../img/logo.png";

export function Header() {
  return (
    <header>
      <img style={{ width: "33px", height: "auto", position: "relative", left: "0" }} src={logo} alt="Logo" />
      <h1 style={{ margin: "0", padding: "0", position: "absolute", left: "20px", top: "10px", fontSize: "24px" }}>INVESTIQ</h1>
    </header>
  );
}
