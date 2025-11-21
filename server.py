import http.server
import socketserver
import os

PORT = 8080

class CleanUrlHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Get the path from the request
        path = self.path.split('?')[0]
        
        # If it's a directory, let the default handler handle it (index.html)
        if path.endswith('/'):
            return super().do_GET()
            
        # If the path has an extension, let the default handler handle it
        if '.' in os.path.basename(path):
            return super().do_GET()
            
        # Try to find a corresponding .html file
        html_path = path + '.html'
        if os.path.exists(os.getcwd() + html_path):
            self.path = html_path
            return super().do_GET()
            
        # Fallback to default behavior (will likely 404)
        return super().do_GET()

Handler = CleanUrlHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print("Clean URLs enabled (e.g. /contact will serve /contact.html)")
    httpd.serve_forever()
