from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import mimetypes

mimetypes.add_type('text/javascript; charset=utf-8', '.js')
mimetypes.add_type('text/html; charset=utf-8', '.html')

class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        '.js': 'text/javascript; charset=utf-8',
        '.html': 'text/html; charset=utf-8',
    }

ThreadingHTTPServer(('127.0.0.1', 4174), Handler).serve_forever()
