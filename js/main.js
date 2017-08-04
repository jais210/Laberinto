function laberinto() {
  var body = document.getElementsByTagName("body")[0];
  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

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
    var hilera = document.createElement("tr");

    for (var j = 0; j < mapa[i].length; j++) {
      var celda = document.createElement("td");
      celda.setAttribute("contenteditable","true");
      hilera.appendChild(celda);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
  tabla.setAttribute("width", "50%");
  tabla.setAttribute();
}

// código reciclado
// for (var i = 0; i < mapa.length; i++) {
//   for (var j = 0; j < mapa[i].length; j++)
//     if (mapa[i][j] == "*") {
//       // con color
//       document.write("*");
//     } else if (mapa[i][j] == "o") {
//       // entrada color azul
//       document.write("o");
//     } else if (mapa[i][j] == "W") {
//       // salida color rojo
//       document.write("W");
//     } else {
//       document.write("-");
//     } // imprimir sin color
// }
