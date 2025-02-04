import "./header.css";

import logoImage from "../../assets/react.svg";

export const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="" />
    </header>
  );
};
