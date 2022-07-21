export const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export const isPassWordValid = (password) => {
  if (!password) {
    return false;
  }
  return true;
};
