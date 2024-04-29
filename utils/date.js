export function formatDate(date) {
  if(!date) return "bad format"; 
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function parseDate(dateString) {
  const [day, month, year] = dateString.split('.');
  return new Date(year, month - 1, day);
}