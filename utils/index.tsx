function isValidEmail(emailAdress: any) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}

export { isValidEmail };
