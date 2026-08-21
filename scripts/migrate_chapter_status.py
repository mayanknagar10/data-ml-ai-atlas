from __future__ import annotations

import argparse
import copy
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "source" / "atlas.json"


def migrate(data: dict) -> dict:
    migrated = copy.deepcopy(data)
    for lesson in migrated["lessons"]:
        lesson.pop("status", None)
        lesson.setdefault("editorial", {"status": "summary"})
    return migrated


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Replace legacy generated lesson statuses with explicit editorial states."
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Write the idempotent migration to source/atlas.json.",
    )
    args = parser.parse_args()
    if not args.apply:
        parser.error("refusing to write without --apply")

    source = json.loads(SOURCE.read_text(encoding="utf-8"))
    migrated = migrate(source)
    SOURCE.write_text(
        json.dumps(migrated, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Migrated {len(migrated['lessons'])} lesson editorial states")


if __name__ == "__main__":
    main()
