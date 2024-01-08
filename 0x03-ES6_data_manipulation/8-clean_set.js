export default function cleanSet(set, startString) {
  const strings = [];
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }
  set.forEach((string) => {
    if (typeof string === 'string' && string.startsWith(startString)) {
      strings.push(string.slice(startString.length));
    }
  });
  return strings.join('-');
}
