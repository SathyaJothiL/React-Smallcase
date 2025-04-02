export function capitalizeFirstletter(word) {
  let capital = word.charAt(0).toUpperCase();
  let str = word.slice(1);
  let res = capital + str;
  return res;
}
