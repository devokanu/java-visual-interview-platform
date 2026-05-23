# 13 - Batch Cursor Guncelleme Promptu

Sen Codex GPT-5.5 veya Claude olarak backlog/cursor guncelliyorsun. Bu prompt ders icerigi uretmez.

Once oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `CURRICULUM_LESSON_BACKLOG.md`
4. `BATCH_CURSOR.md`
5. Ilgili batch sonucu / review / QA raporu

## Gorev

Batch sonucu sonrasinda yalnizca `CURRICULUM_LESSON_BACKLOG.md` ve `BATCH_CURSOR.md` dosyalarini guncelle.

## Status Gecisleri

- Content generation tamamlandiysa: `READY` veya `BACKLOG` -> `CONTENT_DONE`
- Review patch istiyorsa: `CONTENT_DONE` -> `REVIEW_NEEDED`
- Review kabul ettiyse: `CONTENT_DONE` veya `REVIEW_NEEDED` -> `APPROVED`
- Prototype entegrasyon tamamlandiysa: `APPROVED` -> `INTEGRATED`
- QA tamamlandiysa: `INTEGRATED` -> `QA_DONE`

## Cursor Ilerletme

1. Mevcut `Next batch` derslerinin yeni durumlarini kontrol et.
2. Faz tamamlandiysa `Current phase` alanini siradaki faza al.
3. QA tamamlandiysa cursor'u backlog'daki siradaki 3 `READY` veya `BACKLOG` derse ilerlet.
4. Yeni batch'i `READY` yapman gerekiyorsa yalnizca status guncelle; ders icerigi yazma.

## Yasaklar

- Yeni ders icerigi uretme.
- Ders basliklarini genisletme.
- Prototipe ders entegre etme.
- `src/` dosyalarina dokunma.
- ADR veya final stack karari baslatma.

## Cikti

Turkce rapor ver:

1. Guncellenen dosyalar
2. Degisen status satirlari
3. Yeni `Current phase`
4. Yeni `Next batch`
5. Ders icerigi uretilmedi teyidi
