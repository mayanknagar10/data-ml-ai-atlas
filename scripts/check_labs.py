from __future__ import annotations

import ast
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
lab_root = ROOT / "labs"
files = sorted(lab_root.glob("*/**/*.py"))
assert files, "No generated lab Python files found; run python scripts/build.py"
errors=[]
for path in files:
    try:
        ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
    except SyntaxError as e:
        errors.append(f"{path.relative_to(ROOT)}:{e.lineno}: {e.msg}")
if errors:
    raise SystemExit("Lab syntax errors:\n" + "\n".join(errors))
print(f"OK: syntax-checked {len(files)} generated Python lab files")
