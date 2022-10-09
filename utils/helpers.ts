export const validatePassword = (password: string) => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const result = passwordRegExp.test(password);
  if (result == true) {
    return password;
  } else {
    return 'Invalid password';
  }
};
