# AI Orchestration Board

Bu dosya Claude, Gemini ve Codex arasında küçük yerel devirleri koordine etmek için kullanılır. GitHub issue hâlâ büyük iş paketleri ve kalıcı kayıt için kullanılabilir; küçük alt adımlar önce bu board üzerinden yürütülür.

## Current Milestone

M0-B01 integration completed; update backlog/cursor and prepare next batch.

## Active Batch

- M0-L03 — Bilgisayar Komutları Nasıl Çalıştırır?
- M0-L04 — Kod, Veri ve Bellek Arasındaki İlk Bağ
- M0-L05 — Hata Nedir? Bilgisayar Neden Beklenmeyen Şey Yapar?

## Current Task

Update backlog and cursor after M0-B01 QA_PASS.

## Assigned AI

Codex

## Input Sources

- content/batches/M0-B01_INTEGRATION_QA.md
- CURRICULUM_LESSON_BACKLOG.md
- BATCH_CURSOR.md
- PROJECT_CONTEXT.md
- AI_HANDOFF.md

## Output Target

- updated CURRICULUM_LESSON_BACKLOG.md
- updated BATCH_CURSOR.md
- updated PROJECT_CONTEXT.md
- updated AI_HANDOFF.md

## Rules / Do Not Do

- Do not modify src/.
- Do not generate new lesson content.
- Do not start next batch generation.
- Do not update DECISIONS.md unless absolutely necessary.
- Mark M0-L03, M0-L04, M0-L05 as INTEGRATED / QA_DONE according to existing backlog status conventions.
- Advance BATCH_CURSOR to the next 3 lessons only after marking M0-B01 completed.
- Keep batch size 3.
- Current phase after update should be CONTENT_GENERATION for the next batch.
- Preserve D30: Cognitive accessibility is not content simplification; it is progressive depth design.
- Do not start ADR.
- Do not deploy.

## Review Status

M0-B01 integration QA_PASS.

- Build passed.
- M0-L01 → M0-L05 flow works.
- Code tab rule preserved.
- Soft-check preserved.

## Next Action

After cursor update, next AI task will be Claude generating the next active batch from backlog/cursor.

## Status Values

- TODO: Task is known but not started.
- IN_PROGRESS: Assigned AI is working.
- REVIEW_NEEDED: Output exists and needs review.
- PATCH_NEEDED: Review found a specific fix.
- APPROVED: Review passed and output can move to the next step.
- BLOCKED: Input is missing or scope is unclear.
- DONE: Task completed and next action recorded.

## How Each AI Should Use This Board

### Claude

1. Read `PROJECT_CONTEXT.md`, `AI_HANDOFF.md`, and this board.
2. Work only when `Assigned AI` is Claude.
3. Use only listed input sources.
4. Produce exactly the listed output target.
5. Update this board's `Review Status` or `Next Action` only if asked.

### Gemini

1. Read `PROJECT_CONTEXT.md`, `AI_HANDOFF.md`, and this board.
2. Work only when assigned to review or second opinion.
3. Review against D30, cognitive load, visual specificity, Markdown validity, and task scope.
4. Return Pass / Patch Needed / Reject with concise reasons.

### Codex

1. Read `PROJECT_CONTEXT.md`, `AI_HANDOFF.md`, and this board.
2. Work only when `Assigned AI` is Codex.
3. For storage/integration tasks, modify only files named by the board.
4. Never infer permission to modify `src/` unless the board explicitly says so.
5. Report changed files, verification, and the next board status.

## Board Hygiene

- Keep this board short.
- Do not store full lesson content here.
- Store batch outputs and review artifacts under `content/batches/`.
- If a task grows large or needs durable discussion, open a GitHub issue.
