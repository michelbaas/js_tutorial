// >> check forEach loop, arrayFrom en regexp en functions

// lowerCase input
// array chars
// forEach loop through @ and print result, from @ till the end and print result

// of gebruik i.p.v. arrays >> regexp en gebruik pop/unshift
// naam: /\w+\@/g >> domein: /\@\w+\.\w+/g

// substring, splice?
// Array maken, indexeer plaats van @ en .tld

// >> uiteindelijke keuze: toLowerCase, indexOf, substring...

// extract username and domain-name from e-mail address.
function emailParts(address) {
  // to make sure the presented result will be in lowercase.
  const lowerCased = address.toLowerCase();
  // determine index number of the "@".
  const indexAt = lowerCased.indexOf("@");
  // to fetch the username from the e-mail address.
  const userName = lowerCased.slice(0, indexAt);
  // to fetch the domainName from the e-mail address.
  const domainName = lowerCased.slice(indexAt + 1);
  // return result
  const result = `Username: ${userName}, domainname: ${domainName}.`
  return result;
}

// the way much simpler method, I found looking through the society answers...
function partsSimplified(address) {
  let splitIt = address.toLowerCase().split("@");
  return splitResult = `Username: ${splitIt[0]}, domainname: ${splitIt[1]}.`
}
