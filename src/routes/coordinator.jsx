export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToProfilePage = (navigate, name) => {
  navigate(`/profile/${name}`);
};

export const goToLoginPage = (navigate) => {
  navigate(`/Login`);
};

export const goToProductPage = (navigate, id) => {
  navigate(`/product/${id}`);
};
