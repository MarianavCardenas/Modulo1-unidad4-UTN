let distancia= prompt ("Ingrese distancia recorrida");

if (distancia < 1000) { document.write ("Medio de traslado: Pie");}
else if (distancia >= 1000 &&  distancia < 10000 ) { document.write ("Medio de traslado: Bicicleta") }
else if (distancia >= 10000 &&  distancia < 30000 ) { document.write ("Medio de traslado: Colectivo") }
else if (distancia >= 30000 &&  distancia < 100000 ) { document.write ("Medio de traslado: Auto") }
else if ( distancia >= 100000 ) { document.write ("Medio de traslado: Avion") }