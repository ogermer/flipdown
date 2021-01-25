document.addEventListener('DOMContentLoaded', () => {

////////////////
  console.log("---TEST---")
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('myParam');

  //console.log(window.location.search.substring(1))
  
  console.log(window.location.href);

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  console.log(getParameterByName('param1'))
  console.log(getParameterByName('param2'))
  console.log(getParameterByName('date'))

  var urlDate=getParameterByName('date')
  console.log(urlDate)

  ////////////////


  // Unix timestamp (in seconds) to count down to

  var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1

  var dateString='2021-02-28T14:00'
  var d = new Date(dateString)
  console.log(d)

  
  // var dateString='2021-01-22T14:00'
  // var d = new Date(dateString)
  // console.log(d)
  // var flipdownDate = (new Date(dateString).getTime() / 1000)  

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)
  // var flipdown = new FlipDown(flipdownDate)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

  // Black Theme


  // Toggle theme
/*  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle('light-theme');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  }, 5000);*/


/*  // Show version number
  var ver = document.getElementById('ver');
  ver.innerHTML = flipdown.version;
*/

});
