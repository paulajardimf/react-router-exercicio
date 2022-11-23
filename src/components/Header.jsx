import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLoginPage, goToProfilePage, goToProductPage } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>Ir para página inicial</button>
      <button onClick={() => goToProfilePage(navigate, "paula")}>Ir para página de perfil</button>
      <button onClick={() => goToLoginPage(navigate)}>Ir para página de login</button>
      <button onClick={() => goToProductPage(navigate, "001")}>Ir para página de produtos</button>
    </header>
  );
}

export default Header;