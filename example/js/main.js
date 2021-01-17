document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var flipdownDate = (new Date().getTime() / 1000) + (86400 * 2) + 1




  var dateString='2021-01-22T14:00'
  var d = new Date(dateString)
  console.log(d)
  
  var flipdownDate = (new Date(dateString).getTime() / 1000)  



  // Set up FlipDown
  // var flipdown = new FlipDown(twoDaysFromNow)
  var flipdown = new FlipDown(flipdownDate)

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
