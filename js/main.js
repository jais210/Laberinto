  var laberinto = document.getElementById('laberinto');
  var table = document.createElement('table');
  table.border = "1";
  table.setAttribute('bordercolor', 'white');
  table.setAttribute('width', '55%');
  var mapa = [
    "******************",
    "*_________*______*",
    "*_*****_____******",
    "*______***__*__*_*",
    "***_*____*____**_*",
    "*___*____**__*___*",
    "*_********__**_*_*",
    "*____*______*__*_*",
    "*_**_*__*****_**_*",
    "*o*__*________**W*",
    "******************"
  ];

  for (var i = 0; i < mapa.length; i++) {
    var tr = document.createElement("tr")

    for (var j = 0; j < mapa[i].length; j++) {
      var td = document.createElement("td");
      td.setAttribute("contenteditable", "true");


      if (mapa[i][j] == "*") {
        // con color
        td.setAttribute("class", "verde");
      } else if (mapa[i][j] == "o") {
        // entrada color azul
        td.setAttribute("class", "azul");
      } else if (mapa[i][j] == "W") {
        // salida color rojo
        td.setAttribute("class", "rojo");
      } else {
        td.setAttribute("class", "blanco");
      } // imprimir sin color
      tr.appendChild(td);
    }

    table.appendChild(tr);

  }

  laberinto.appendChild(table);

  