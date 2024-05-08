export const checkValidData = (userName, password) => {
  userName = /^[A-Za-z][A-Za-z_]{7,29}$/.test(userName);
  password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if (!userName) return "Username is not Valid";
  if (!password) return "Password is not Valid";
  return null;
};
