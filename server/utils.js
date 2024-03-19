export function getDateTime(timeZone) {
  return new Date(
    new Date().toLocaleString("en-US", {
      timeZone,
    })
  );
}
