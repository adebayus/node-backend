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
	const { method, url } = request;

	if (url === "/") {
		if (method === "GET") {
			response.end("<h1>Ini Adalah Homepage</h1>");
		} else {
			response.statusCode = 400;
			response.end("Halaman tidak dapat diakses dengan <any> request");
		}
	} else if (url === "/about") {
		if (method === "GET") {
			response.end("<h1>Halo Ini Adalah About </h1>");
		} else if (method === "POST") {
			let body = [];
			request.on("data", (chunk) => {
				body.push(chunk);
			});
			request.on("end", () => {
				body = Buffer.concat(body).toString();
				const { name } = JSON.parse(body);
				response.end(`<h1>Halo, ${name} </h1>`);
			});
		} else {
			response.statusCode = 400;
			response.end("<h1> Halaman tidak dapat diakses</h1>");
		}
	} else {
		response.statusCode = 404;

		response.end("</h1>Halaman tidak ditemukan</h1>");
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
