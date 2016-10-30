// <script>

var c = document.getElementById("mycanvas");
var ctx = c.getContext('2d');
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 80);
grd.addColorStop(0, "#064485");
grd.addColorStop(1, "#032d59");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 250, 250);

// </script>

// <p><strong>Note:</strong> The canvas tag is not supported in Internet
// Explorer 8 and earlier versions.</p>

// </body>
// </html>
