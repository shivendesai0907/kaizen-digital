
const fs = require('fs');
const content = fs.readFileSync('/Users/viswanathreddy/Desktop/Desktop - VISWANATH’s MacBook Pro/koraxis/koraxis landing/components/Features.tsx', 'utf8');

let openDivs = 0;
let closeDivs = 0;

// This is a naive parser but should work for this file
const tags = content.match(/<div|<\/div>|\/>/g);

let depth = 0;
tags.forEach((tag, i) => {
  if (tag === '<div') {
    // Check if it's self-closing by looking ahead to the next /> before the next <
    let nextSlash = content.indexOf('/>', content.indexOf(tag, i));
    let nextOpen = content.indexOf('<', content.indexOf(tag, i) + 1);
    if (nextSlash !== -1 && (nextOpen === -1 || nextSlash < nextOpen)) {
      // Self closing, do nothing
    } else {
      depth++;
      openDivs++;
    }
  } else if (tag === '</div>') {
    depth--;
    closeDivs++;
  }
});

console.log('Open divs:', openDivs);
console.log('Close divs:', closeDivs);
console.log('Final depth:', depth);
