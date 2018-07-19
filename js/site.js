function barAlert(element) {
  console.log(element);
  let state = element.textContent.trim();
  let year = element.getAttribute("year");
  let data = element.getAttribute("data-value");
  let message = state
    + ' emitted '
    + data
    + ' million metric tons of CO2 in '
    + year;
  alert(message)
}
