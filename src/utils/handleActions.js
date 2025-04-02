export const handleHighContrast = (setIsHighContrast) => {
  document.body.classList.toggle("high-contrast");
  setIsHighContrast((prev) => !prev);
};

export const handleMeuPerfil = (navigate) => {
  navigate("/meu-perfil");
};

export  const handleLogout = (navigate) => {
  navigate("/login");
};
