export function isValidEmail(emailAdress: string): boolean {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}

export function dateFormatter(date: string, locale = 'id-ID') {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const changedDateFormatted = new Date(date);
  return changedDateFormatted.toLocaleDateString(
    locale,
    options as Intl.DateTimeFormatOptions,
  );
}

export function getTime(dateTimeString: string) {
  const changedDateFormatted = new Date(dateTimeString);
  return changedDateFormatted.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function getUsernameFromEmail(email: string) {
  const matchResult = email.match(/^([^@]*)@/);
  if (matchResult) return matchResult[1];
  else return null;
}

export function generateRandomString(count: number) {
  const letter =
    '0123456789ABCDEFGHIJabcdefghijklmnopqrstuvwxyzKLMNOPQRSTUVWXYZ0123456789abcdefghiABCDEFGHIJKLMNOPQRST0123456789jklmnopqrstuvwxyz';
  let randomString = '';
  for (let i = 0; i < count; i++) {
    const randomStringNumber = Math.floor(
      1 + Math.random() * (letter.length - 1),
    );
    randomString += letter.substring(
      randomStringNumber,
      randomStringNumber + 1,
    );
  }
  return randomString;
}
