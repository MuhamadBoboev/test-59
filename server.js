/* eslint-disable no-undef */
// JSON Server module
// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Убедитесь, что файл db.json существует
const middlewares = jsonServer.defaults();


server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});