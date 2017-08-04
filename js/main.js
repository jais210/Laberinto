function laberinto(){
var body = document.getElementsByTagName("body")[0];
var tabla   = document.createElement("table");
var tblBody = document.createElement("tbody");


for (var i = 0; i < celdas; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
 
    for (var j = 0; j < celdas ; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode(+i+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
 
    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }


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
  for (var j = 0; j < mapa[i].length; j++)
    if (mapa[i][j] == "*") {
      // con color
      document.write("*");
    } else if (mapa[i][j] == "o") {
      // entrada color azul
      document.write("o");
    } else if (mapa[i][j] == "W") {
      // salida color rojo
      document.write("W");
    } else {
      document.write("-");
    } // imprimir sin color
}

  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}

