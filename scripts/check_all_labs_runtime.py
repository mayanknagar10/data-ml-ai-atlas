from __future__ import annotations

import contextlib
import io
import runpy
import signal
import time
import traceback
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TIMEOUT_SECONDS = 12


class LabTimeout(Exception):
    pass


def _alarm(_signum, _frame):
    raise LabTimeout(f"lab exceeded {TIMEOUT_SECONDS}s")


def main() -> None:
    signal.signal(signal.SIGALRM, _alarm)
    files = sorted((ROOT / "labs").glob("*/verify_it.py"))
    failures = []
    started = time.time()
    for path in files:
        out, err = io.StringIO(), io.StringIO()
        try:
            signal.setitimer(signal.ITIMER_REAL, TIMEOUT_SECONDS)
            with contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
                runpy.run_path(str(path), run_name=f"__atlas_lab_{path.parent.name}__")
        except BaseException as exc:  # report lab errors without stopping the batch
            failures.append(
                (
                    path.relative_to(ROOT),
                    type(exc).__name__,
                    str(exc),
                    traceback.format_exc()[-1200:],
                    out.getvalue()[-500:],
                    err.getvalue()[-500:],
                )
            )
        finally:
            signal.setitimer(signal.ITIMER_REAL, 0)

    elapsed = time.time() - started
    if failures:
        lines = [f"{len(failures)} of {len(files)} runtime labs failed:"]
        for path, kind, message, trace, stdout, stderr in failures:
            lines += [f"\n{path}: {kind}: {message}", trace]
            if stdout:
                lines += ["stdout:", stdout]
            if stderr:
                lines += ["stderr:", stderr]
        raise SystemExit("\n".join(lines))
    print(f"OK: runtime-executed {len(files)} generated verify_it.py labs in {elapsed:.1f}s")


if __name__ == "__main__":
    main()
