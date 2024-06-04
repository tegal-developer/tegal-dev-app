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
