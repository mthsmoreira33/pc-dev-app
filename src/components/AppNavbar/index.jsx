import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsList } from "react-icons/bs";
import { FaArrowRightFromBracket, FaCircleHalfStroke, FaCircleUser } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { handleHighContrast, handleLogout, handleMeuPerfil } from "../../utils/handleActions";

function AppNavbar() {
  const navigate = useNavigate();

  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem("isHighContrast") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isHighContrast", isHighContrast);
  }, [isHighContrast]);

  const menuItems = [
    { href: "/vagas", text: "Vagas", active: true },
    { href: "/cursos", text: "Cursos" },
    { href: "/plugins", text: "Plugins" },
  ];

  const iconItems = [
    {
      title: "Alto-contraste",
      icon: <FaCircleHalfStroke />,
      onClick: () => handleHighContrast(setIsHighContrast),
    },
    {
      title: "Meu Perfil",
      icon: <FaCircleUser />,
      onClick: () => handleMeuPerfil(navigate),
    },
    {
      title: "Logout",
      icon: <FaArrowRightFromBracket />,
      onClick: () => handleLogout(navigate),
    },
  ];

  return (
    <header>
      <Navbar
        expand="lg"
        className={isHighContrast ? "bg-black border-bottom border-white p-3" : "bg-dark p-3"}
      >
        <Container fluid>
          <Navbar.Brand href={menuItems[0].href}>
            <img
              src={isHighContrast ? '/src/assets/img/logo-pcdev-high-contrast.png' : '/src/assets/img/logo-pcdev.png'}
              alt="logo PCDEV com a palavra PC na cor azul claro, a palavra EV na cor laranja e a letra D dividida em azul em cima e laranja em baixo."
              className="img-fluid"
              width={150}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav">
            <BsList className="text-light" size={30} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarNav" className="justify-content-end">
            <Nav className="text-center align-items-center gap-2">
              {menuItems.map((item, index) => (
                <Nav.Link
                  key={index}
                  href={item.href}
                  className={`text-light hover-effect ${item.active ? "active" : ""}`}
                  aria-current={item.active ? "page" : undefined}
                >
                  {item.text}
                </Nav.Link>
              ))}
              <Nav
                as="ul"
                className="d-flex text-center align-items-center justify-content-around list-unstyled"
              >
                {iconItems.map((item, index) => (
                  <li key={index}>
                    <Nav.Link
                      as="button"
                      className="text-light"
                      title={item.title}
                      onClick={(e) => {
                        e.preventDefault();
                        item.onClick();
                      }}
                    >
                      {item.icon}
                    </Nav.Link>
                  </li>
                ))}
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default AppNavbar;
