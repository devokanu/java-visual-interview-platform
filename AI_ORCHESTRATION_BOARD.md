# AI Orchestration Board

Bu dosya Claude, Gemini ve Codex arasında küçük yerel devirleri koordine etmek için kullanılır. GitHub issue hâlâ büyük iş paketleri ve kalıcı kayıt için kullanılabilir; küçük alt adımlar önce bu board üzerinden yürütülür.

## Current Milestone

M0-B01 approved content storage and backlog/cursor update.

## Active Batch

- M0-L03 — Bilgisayar Komutları Nasıl Çalıştırır?
- M0-L04 — Kod, Veri ve Bellek Arasındaki İlk Bağ
- M0-L05 — Hata Nedir? Bilgisayar Neden Beklenmeyen Şey Yapar?

## Current Task

Store approved M0-B01 clean lesson content into stable lesson content files and update backlog/cursor status.

## Assigned AI

Codex

## Input Sources

- content/batches/M0-B01_CLEAN.md
- content/batches/M0-B01_CLEAN_REVIEW.md
- CURRICULUM_LESSON_BACKLOG.md
- BATCH_CURSOR.md
- PROJECT_CONTEXT.md
- AI_HANDOFF.md

## Output Target

- content/lessons/m0/M0-L03.md
- content/lessons/m0/M0-L04.md
- content/lessons/m0/M0-L05.md
- updated CURRICULUM_LESSON_BACKLOG.md
- updated BATCH_CURSOR.md

## Rules / Do Not Do

- Do not rewrite lesson meaning.
- Do not change lesson IDs or titles.
- Do not generate new lessons.
- Do not modify `src/`.
- Do not integrate into prototype yet.
- Only split/store approved Markdown and update backlog/cursor status.
- Set M0-L03, M0-L04, M0-L05 status to APPROVED or CONTENT_APPROVED according to existing backlog status conventions.
- Move BATCH_CURSOR phase to READY_FOR_INTEGRATION.
- Do not advance cursor to the next batch yet; cursor advances only after prototype integration + QA.
- Preserve D30: Cognitive accessibility is not content simplification; it is progressive depth design.
- Do not start ADR.
- Do not deploy.

## Review Status

APPROVE_FOR_STORAGE.

- M0-L03: PASS.
- M0-L04: PASS.
- M0-L05: PASS.

## Next Action

After storage is complete, Codex will integrate M0-B01 into the prototype in a separate task.

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
