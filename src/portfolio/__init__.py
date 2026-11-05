"""A small, self-contained portfolio application."""
import argparse
from datetime import date
from flask import Flask, render_template
from waitress import serve


def create_app():
    app = Flask(__name__)

    @app.get("/")
    def index():
        return render_template("index.html", year=date.today().year)

    @app.get("/health")
    def health():
        return {"status": "ok"}

    @app.after_request
    def headers(response):
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; base-uri 'self'; frame-ancestors 'none'"
        return response

    return app


def main():
    parser = argparse.ArgumentParser(description="Run Jack LaVergne's portfolio")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000)
    parser.add_argument("--dev", action="store_true", help="Enable local development reload")
    args = parser.parse_args()
    app = create_app()
    print(f"Portfolio → http://{args.host}:{args.port}", flush=True)
    if args.dev:
        app.run(host=args.host, port=args.port, debug=True)
    else:
        serve(app, host=args.host, port=args.port)
