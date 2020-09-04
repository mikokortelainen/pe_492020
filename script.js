// Tehtava 1
function numeroGen()
{
  var lottoNumerot = [];
  var arvoLotto;            //7 = 7 numeroa.
  for(var lotto = 0; lotto < 7; lotto++)
  {
    // Generoi random numeroita.
    arvoLotto = Math.floor(Math.random()*20);
    lottoNumerot[lotto] = arvoLotto;
  }
  document.getElementById("numeroVastaus").innerHTML = "<p>"+lottoNumerot+"</p>";
}

// Tehtava 2
function taulukkoLasku()
{
  var jono = [];
  // Muuntaa NÄMÄ luvut taulukoksi.
  jono = [[3, 4, 2, 5], [1, 6, 2, 4], [6, 2, 8, 5], [2, 5, 7, 3]];
  //jono = [[document.getElementById('luvutt').value]];

  var taulu = '<table border="2">';
  for(var j = 0; j < jono.length; j++)
  {
    taulu += "<tr>";
    for(var k = 0; k < jono[j].length; k++)
    {
      taulu += "<td>" + jono[j][k] + "</td>";
    }
    taulu += "</tr>";
  }
  taulu += "</table>";

  document.getElementById("grid").innerHTML = taulu;
}

// Tehtava 3
function arvoKortit()
{
  var x = [""];
  var symbolit = ["♤", "♡", "♣", "♤"];
  var numerot = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  laskin = 1;
  for(m = 0; m < symbolit.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == symbolit.length && n == numerot.length)
      {
        x[laskin] = symbolit[m] + numerot[n];
      }
      else {
        x[laskin] = symbolit[m]+numerot[n];
        laskin++;
      }
    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = x[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }

  document.getElementById("korttiArvonta").innerHTML = '<p>'+kortit+'</p>';
}
