export const logOut = () => {
  localStorage.clear();
};

export const isLogIn = () => {
  if (JSON.parse(localStorage.getItem("email"))) {
    return true;
  }
  return false;
};
