export function getLocaleDate(date: string | Date, locate = "pt-br"): string {
  const _date = new Date(date);

  return _date.toLocaleDateString(locate, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })

}