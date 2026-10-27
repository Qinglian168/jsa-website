#!/usr/bin/env python3
"""
Audit internal links in src/ against the built output in out/.

Usage (build first):
    npm run build
    python3 scripts/audit-internal-links.py

Exits with code 1 if any internal link points to a page that does not exist
in the static export. Run this after touching Footer.tsx, Header.tsx,
src/app/page.tsx or any navigation component — regression class found on
2026-10-27: three footer links (/products/firewall, /products/storage,
/products/unified-communications) had been pointing at non-existent pages
on every page of the site.
"""
import os
import re
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "src")
OUT = os.path.join(ROOT, "out")

# Matches quoted strings that look like site routes: "/products/router"
ROUTE_RE = re.compile(r'"/([a-z0-9][a-z0-9/-]*)"')

# Not routes: asset paths, build internals, file references
SKIP_FIRST_SEGMENT = {
    "_next", "images", "icons", "fonts", "logo", "favicon",
    "js", "css", "static", "api",
}


def collect_routes():
    routes = defaultdict(set)
    for dirpath, _, filenames in os.walk(SRC):
        for fn in filenames:
            if not fn.endswith((".tsx", ".ts")):
                continue
            path = os.path.join(dirpath, fn)
            rel = os.path.relpath(path, ROOT)
            with open(path, encoding="utf-8", errors="ignore") as fh:
                content = fh.read()
            for m in ROUTE_RE.finditer(content):
                seg = m.group(1)
                if seg.split("/")[0] in SKIP_FIRST_SEGMENT:
                    continue
                if "." in seg.split("/")[-1]:  # file reference, not a route
                    continue
                routes[("/" + seg).rstrip("/") or "/"].add(rel)
    return routes


def exists(url: str) -> bool:
    if url == "/":
        return os.path.exists(os.path.join(OUT, "index.html"))
    base = url.lstrip("/")
    return (
        os.path.exists(os.path.join(OUT, base + ".html"))
        or os.path.exists(os.path.join(OUT, base, "index.html"))
        or os.path.exists(os.path.join(OUT, base))
    )


def main() -> int:
    if not os.path.isdir(OUT):
        print("out/ not found — run `npm run build` first.", file=sys.stderr)
        return 2

    routes = collect_routes()
    broken = {u: sorted(s) for u, s in routes.items() if not exists(u)}

    print(f"Routes checked : {len(routes)}")
    print(f"Broken links   : {len(broken)}")
    if broken:
        print()
        for url in sorted(broken):
            print(f"  BROKEN {url}")
            for src in broken[url]:
                print(f"      referenced in: {src}")
        print("\nFix by pointing the link at an existing page, or create the page.")
        return 1
    print("All internal links resolve.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
