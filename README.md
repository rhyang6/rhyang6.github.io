# Rui Heng Yang: personal website

Author: Rui Heng Yang

Static site with no dependencies. `Rui-Heng-Yang-Website.html` is a single-file bundle of the sources
that opens directly from disk; rebuild it after any edit to the sources or `assets/`:

```sh
python3 build_single.py
```

- **Content:** edit `data.js` for publications, experience, patents, and education. Edit `index.html` for the bio and sidebar links, and `hobbies.html` for the Hobbies page (not included in the single-file bundle).
- **Style:** colours and fonts are CSS variables at the top of `styles.css`.
- **CV:** replace `assets/Rui_Heng_Yang_CV.pdf`.

## Preview locally

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then open http://127.0.0.1:8080/.
