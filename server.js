const http = require("http");
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListerner = (request, response) => {
	response.setHeader("Content-Type", "text/html");
	response.statusCode = 200;
	const { method } = request;
	if (method === "GET") {
		response.end("<h1>Hello</h1>");
	}
	if (method === "POST") {
		response.end("<h1>Hai</h1>");
	}
	if (method === "PUT") {
		response.end("<h1>Bonjour</h1>");
	}
	if (method === "DELETE") {
		response.end("<h1>Salam</h1>");
	}
};

const serve = http.createServer(requestListerner);

const port = 5000;
const host = "localhost";

serve.listen(port, host, () => {
	console.log(`Server berjalan pada http://${host}:${port}`);
});

// console.log("Halo, kita akan belajar membuat server");
// console.log(serve);
