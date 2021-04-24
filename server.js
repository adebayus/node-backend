const http = require("http");
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListerner = (request, response) => {
	const { method } = request;
	console.log(method);
	response.end(method);

	response.setHeader("Content-Type", "text/html");
	response.statusCode = 200;
	response.end("<h1> Halo Http Server!</h1>");
};

const serve = http.createServer(requestListerner);

const port = 5000;
const host = "localhost";

serve.listen(port, host, () => {
	console.log(`Server berjalan pada http://${host}:${port}`);
});

// console.log("Halo, kita akan belajar membuat server");
// console.log(serve);
