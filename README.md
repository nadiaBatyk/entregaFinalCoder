# entregaFinalCoder

## Comandos para correr el proyecto
npm run start

## Configuraciones especiales al levantar el proyecto
Se pueden indicar las siguientes opciones como variable de entorno, al momento de levantar el proyecto:
1. Entorno de desarollo => dev ó prod => por defecto levanta en modo desarrollo => se puede elegir asi => NODE_ENV=dev npm run start
2. Puerto => por defecto esta en el 8080 => se puede elegir asi => PORT=5050 npm run start
3. Tipo persistencia => por defecto esta mongoDB y es la única que está implementada, pero hay un factory implementado y en caso de que se quiera agregar otro tipo se puede indicar asi => DB_NAME=mysql npm run start
4. Mail y Teléfono administrador => ya tienen valores por defecto pero se pueden reemplazar asi => ADMIN_MAIL=admin@gmail.com ADMIN_TEL=1144445555 npm run start (en caso de cambiar el mail, hay que setear una nueva password para el mismo para que permita enviar los mails sin problemas).

## Consideraciones del proyecto

- Se implementaron las siguientes vistas utilizando HandleBars:
1. Login => GET ruta "/" ó "/login"
2. Registro => GET ruta "/register"
3. Info => GET ruta "/config" muestra la configuración del servidor
4. Chat => GET ruta "/chat" donde se encuentra el canal de websocket
5. Error => GET rutas "*" (notFound) ó si ocurre un error de validacion ó item no encontrado en cualquier otro método, etc. 

- El resto de las rutas se pueden probar via postman con el crud completo (get,post,put,delete) según cada caso.
- Los POST / PUT de las rutas tienen validators, por lo que si algun campo no pasa la validaación dara error.
- El schema del carrito tiene un objeto tipo userSchema porque era necesario para obtener informacion del usuario para el envio de mails y mensajes al momento de registrar una nueva orden. Era más conveniente que sólo agregar el mail ó la dirección al schema.
- Sólo para los fines de evaluación, no incluí en el .gitignore el archivo .env , asi se pueden ver las variables de entorno, pero sino normalmente siempre incluyo el .env en el gitignore

## Principales rutas implementadas y UserFlow

1. GET Ruta "/" redirige a login si el usuario no esta logueado => si ya esta logueado y tiene sesion activa => redirige a "/productos". 
2. GET ruta "/productos" devuelve json con todos los productos =>  GET ruta "/productos/:id" devuelve el producto con id indicado
3. GET ruta "/productos?categoria=xxx" devuelve solo los productos de esa categoria
4. GET ruta "/chat/:email" devuelve solo los mensajes en las que el email indicado es *destinatario ó remitente* del mensaje
5. GET ruta "/carrito" devuelve json con todos los carritos =>  GET ruta "/carrito/:id" devuelve el carrito con id indicado
5. GET ruta "/carrito/:id/productos" devuelve json con todos los productos que están dentro del carrito
6. POST ruta "/carrito" crea 1 nuevo carrito pero es necesario que cuente con 1 producto como minimo
7. POST ruta "/carrito/:id" agrega 1 producto al carrito con el id indicado
8. DELETE ruta "/carrito/:idCart/productos/:id" borra el producto indicado al carrito con el id seleccionado
9. GET ruta "/orders" devuelve json con todas las ordenes
10. GET ruta "/orders?userId=xxx" devuelve solo las órdenes del usuario indicado
11. POST ruta "/orders" crea 1 nueva orden pero es necesario que cuente con 1 producto como minimo => ya que tiene un carrito adentro

## Consultas
Ante cualquier consulta puede enviarme un mail a: nadia.batyk@gmail.com
Muchas gracias :)
