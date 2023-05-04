
const http =require('http');

//404 Error msj
//200 todo correcto 



//request : Lo que se esta solicitando toda la info de la url por parte del cliente, header etc
//response: Es la respuesta del servidor 
http.createServer((request, response)=>{

    // response.writeHead(200, {'Content-Type': 'text/plain'});
    // response.writeHead(200, {'Content-Type': 'application/json'});
    // response.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // response.writeHead(200, {'Content-Type': 'application/csv'});


    //indicar a NOde que ya termine de escribir mi respuesta 
    // response.write('id, nombre\n');
    // response.write('1, Eivar \n');
    // response.write('2, Juan \n');
    // response.write('3, Alejandro \n');

    response.write('Hola Mudo')
    response.end()


})
//indica en que puerto desea levantar la aplicacion 
.listen(8080);

console.log('Escuchando el puerto', 8080);