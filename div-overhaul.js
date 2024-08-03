function convertElementsToDiv(element) {
  // Return if invalid element
  if (!element || !element.tagName)
    return;
  // If element is not a div, convert it to a div
  if (element.tagName.toLowerCase() !== 'div') {
    const div = document.createElement('div');
    div.innerHTML = element.innerHTML;

    // Copy attributes
    Array.from(element.attributes).forEach(attr => {
      div.setAttribute(attr.name, attr.value);
    });

    // Replace element with div
    element.replaceWith(div);
    element = div;
  }
  // Recursively convert children
  Array.from(element.children).forEach(child => {
    convertElementsToDiv(child);
  });
}

function startConversion() {
  convertElementsToDiv(document.body);
}

startConversion();