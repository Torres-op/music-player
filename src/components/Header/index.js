import "./styles.css";
import Logo from "../../assets/logo.svg";
import ProfileImage from "../../assets/profile.jpg";

export default function Header() {
  return (
    <>
      <header>
        <img src={Logo} alt="Logo" />
        <div className="profile">
          <img src={ProfileImage} alt="Imagem de perfil" />
          <strong>Bem vindo, Daniel.</strong>
        </div>
      </header>
    </>
  );
}
