import http.server
import socketserver
import functools

DIRECTORY = "/Users/baderalsamhan/Desktop/Claude Projects/Guess Flag Game"
PORT = 8934

Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIRECTORY)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()
