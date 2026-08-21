# Columnar Storage, Parquet & Predicate Pushdown — Code Lab

Expose dictionary encoding and min/max row-group pruning, then compare the result with an idiomatic PyArrow Parquet scan (Use It requires `pyarrow`).

## 1. Build it

Start with `build_it.py` to understand the mechanism with minimal abstraction.

## 2. Use it

Then open `use_it.py` to see the same idea through a library or production-oriented interface.

## 3. Ship it

Use `ship_it.md` to connect the learning artifact to a production/system-design decision.

## 4. Verify it

Run `verify_it.py` for sanity checks. These examples are intentionally small learning artifacts; check each file's imports and hardware requirements before running.

```bash
python build_it.py
python use_it.py
python verify_it.py
```

Return to the website lesson for the interview answer, theory, mistakes and production context.
