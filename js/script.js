function setYearToCopyright(){
  var currentYear = document.querySelector('.copyright__this-year');
  var currentDate = new Date();
  currentYear.innerHTML = currentDate.getFullYear();
}
setYearToCopyright();