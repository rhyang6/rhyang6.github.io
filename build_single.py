"""Bundle the site into one self-contained HTML file that opens without a server.

Author: Rui Heng Yang

Usage: python3 build_single.py  ->  writes Rui-Heng-Yang-Website.html
"""
import base64
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "Rui-Heng-Yang-Website.html"


def data_uri(path: Path, mime: str) -> str:
    return f"data:{mime};base64,{base64.b64encode(path.read_bytes()).decode()}"


def replace_once(text: str, old: str, new: str) -> str:
    if text.count(old) != 1:
        raise ValueError(f"expected exactly one occurrence of {old!r}, found {text.count(old)}")
    return text.replace(old, new)


html = (ROOT / "index.html").read_text()
html = replace_once(html, '<link rel="stylesheet" href="styles.css">',
                    f"<style>\n{(ROOT / 'styles.css').read_text()}</style>")
html = replace_once(html, '<script src="data.js"></script>',
                    f"<script>\n{(ROOT / 'data.js').read_text()}</script>")
html = replace_once(html, '<script src="main.js"></script>',
                    f"<script>\n{(ROOT / 'main.js').read_text()}</script>")
html = replace_once(html, 'href="assets/favicon.svg"',
                    f'href="{data_uri(ROOT / "assets/favicon.svg", "image/svg+xml")}"')
# Browsers block opening data: PDFs in a new tab, so the bundled CV link downloads instead.
html = replace_once(html, '<a href="assets/Rui_Heng_Yang_CV.pdf" target="_blank">',
                    f'<a href="{data_uri(ROOT / "assets/Rui_Heng_Yang_CV.pdf", "application/pdf")}" '
                    'download="Rui_Heng_Yang_CV.pdf">')

# Inline every figure referenced from data.js.
for fig in sorted((ROOT / "assets/figs").glob("*.jpg")):
    html = html.replace(f"assets/figs/{fig.name}", data_uri(fig, "image/jpeg"))
if "assets/figs/" in html:
    raise ValueError("a figure referenced in the page is missing from assets/figs/")

OUT.write_text(html)
print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.0f} KB)")
