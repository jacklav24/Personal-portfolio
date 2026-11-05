# Jack LaVergne · Portfolio

A restrained, responsive portfolio focused on applied machine learning, signal processing, and software. Flask renders the page; local CSS and JavaScript provide the design and illustrative SVG studies. No Node.js, external fonts, analytics, or API keys required.

## Run

Install [uv](https://docs.astral.sh/uv/getting-started/installation/), then:

```sh
uv sync --locked
uv run portfolio
```

Open http://127.0.0.1:8000. Stop with Ctrl+C.

```sh
uv run portfolio --dev                  # development reload
uv run portfolio --port 8080            # another local port
uv run portfolio --host 0.0.0.0         # listen on all interfaces
uv run pytest                          # checks
uv lock                                # regenerate the dependency lock
uv sync                                # synchronize the environment
```

Waitress serves the application by default. Use `--dev` only locally. For public hosting, place the app behind a managed HTTPS reverse proxy and run `uv sync --locked --no-dev` followed by `uv run --no-dev portfolio --host 0.0.0.0 --port 8000`.

## Edit

- `src/portfolio/templates/index.html`: copy, experience, project links, and social links.
- `src/portfolio/static/style.css`: responsive layout, typography, colors.
- `src/portfolio/static/app.js`: deterministic decorative signal and chart illustrations.
- `src/portfolio/__init__.py`: application, headers, and CLI.

All content is rendered on the server and usable without JavaScript. JavaScript only draws decorative illustrations. Reduced motion preferences are respected. Model metrics come from the owner-provided August 2026 resume; chart artwork is illustrative.

## Content provenance

Public information reviewed November 5, 2026:

- [GitHub profile and repositories](https://github.com/jacklav24)
- [Audio Pitch Core](https://github.com/jacklav24/audio-pitch-core)
- [NBA Player Points Predictor](https://github.com/jacklav24/NBA-Player-Points-Predictor)
- [LinkedIn profile: education and project descriptions](https://www.linkedin.com/in/jack-lavergne-/)
- [Public LinkedIn activity quoting Jack's Kiewit internship post](https://www.linkedin.com/in/allaboutkirkbramwell)
- [NSRI collaborator's post naming Jack as a technical research intern](https://www.linkedin.com/posts/allaboutkirkbramwell_this-year-ive-had-the-unique-opportunity-activity-7366916158773489664-xAEy)

The owner-provided August 2026 resume is the source of truth for internship titles, dates, education, contact email, and reported metrics. The original resume is not committed or served. Contact uses the professional email supplied in that resume. Review profile copy and education dates when updating the site.
