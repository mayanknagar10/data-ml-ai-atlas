# Resume + Job Description Mapper

Route: `#/analyzer`

The mapper is intentionally **browser-side and deterministic**. It does not require an LLM, API key, backend, database or user account.

## What it does

1. Accepts a resume as PDF/TXT/Markdown or pasted text.
2. Accepts a job description as PDF/TXT/Markdown or pasted text.
3. Extracts text locally in the browser.
4. Auto-detects or accepts an explicit target role.
5. Matches phrases, technologies and curriculum vocabulary against Atlas lessons.
6. Produces:
   - prioritized preparation topics
   - resume + JD overlap
   - JD-emphasized topics not strongly evidenced in the resume
   - resume-driven topics likely to invite follow-up questions
   - a configurable day-by-day study plan
7. Links every result directly to its Atlas lesson.

## Privacy model

- Resume and JD text are kept only in page memory.
- Inputs are not saved to `localStorage`.
- No document content is sent to an Atlas API because there is no Atlas backend.
- PDF parsing uses Mozilla PDF.js loaded from cdnjs only when a PDF is selected. The selected file is passed to PDF.js in the browser.
- Users who do not want the optional CDN dependency can paste plain text instead.

## Important interpretation rule

A **potential gap** means:

> the job description strongly emphasizes this topic, but the extracted resume text does not strongly evidence it.

It does **not** mean the candidate lacks the skill. A resume is incomplete evidence.

## Matching approach

The analyzer combines:

- weighted lesson-title and module vocabulary
- selected lesson key points
- deterministic skill/technology aliases
- job-description line weighting for terms such as `required`, `must`, `preferred`, and `nice to have`
- role-specific relevance boosts
- Atlas lesson priority

The output is a preparation ranking, not a hiring score.

## Supported files

- PDF
- TXT
- Markdown

For DOCX or other formats, copy/paste the text into the textarea.

## Development checks

```bash
node --check analyzer.js
node scripts/check_analyzer.js
```

The analyzer smoke tests cover Data Engineering, AI/GenAI and Computer Vision scenarios.
