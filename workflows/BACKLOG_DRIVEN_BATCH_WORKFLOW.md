# Backlog-Driven Batch Workflow

Bu workflow, `CURRICULUM_LESSON_BACKLOG.md` ve `BATCH_CURSOR.md` ile siradaki 3 dersi kontrollu uretmek icindir.

Temel kural: Backlog tum yolu gosterir; cursor aktif is kapsamidir. AI backlog'u baglam olarak okur ama yalnizca cursor'daki dersleri isler.

## 1. Backlog ve Cursor Oku

1. `PROJECT_CONTEXT.md` oku.
2. `AI_HANDOFF.md` oku.
3. `CURRICULUM_LESSON_BACKLOG.md` oku.
4. `BATCH_CURSOR.md` oku.
5. `Next batch` disinda ders isleme.

## 2. Claude Next Batch Icerik Uretir

1. `prompts/12_generate_next_batch_from_backlog.md` kullan.
2. Sadece `BATCH_CURSOR.md` icindeki 3 dersi uret.
3. D30'u koru: cognitive accessibility is not content simplification; it is progressive depth design.
4. Her ders LESSON_TEMPLATE v0.3.1'e uyar.
5. Tam mufredat uretme.

## 3. Review Yapilir

1. `prompts/09_review_lesson_batch.md` kullan.
2. `checklists/batch_lesson_quality_checklist.md` ile kontrol et.
3. Her ders icin karar ver:
   - Pass
   - Patch Needed
   - Reject

## 4. Patch Gerekiyorsa Patch Yapilir

1. Yalnizca review bulgularini duzelt.
2. Tum dersi veya batch'i bastan yazma.
3. Cursor disi derslere dokunma.

## 5. Backlog Status CONTENT_DONE / APPROVED Yapilir

1. Content uretimi bitince `prompts/13_update_batch_cursor.md` kullan.
2. Ders status'lerini `CONTENT_DONE` yap.
3. Review kabulunden sonra `APPROVED` yap.
4. Cursor phase'i dogru faza cek.

## 6. Codex Prototype Integration Yapar

1. Sadece `APPROVED` olan current batch dersleri entegre edilir.
2. `prompts/10_integrate_lesson_batch_to_prototype.md` kullan.
3. Her ders ayri data object olur.
4. Code sadece Code tab'da gorunur.
5. Soft-check korunur.
6. Buyuk refactor yapilmaz.

## 7. QA Yapilir

1. `npm run build` calistirilir.
2. Lesson navigation kontrol edilir.
3. Visual steps kontrol edilir.
4. Code highlight sync kontrol edilir.
5. Assessment ve soft-check kontrol edilir.
6. Mobile riskler not edilir.

## 8. Backlog Status INTEGRATED / QA_DONE Yapilir

1. Prototype entegrasyonundan sonra status `INTEGRATED` olur.
2. QA basariliysa status `QA_DONE` olur.
3. QA riskleri varsa not alanina kisa risk eklenir.

## 9. Cursor Sonraki 3 Derse Ilerler

1. Mevcut batch QA_DONE olduktan sonra cursor ilerler.
2. Siradaki 3 `READY` veya `BACKLOG` ders secilir.
3. Yeni dersler `READY` yapilir.
4. `Current phase` tekrar `CONTENT_GENERATION` olur.

## Yapilmayacaklar

- Backlog'un tamamini tek turda uretmek.
- Cursor disi ders icin icerik uretmek.
- Yeni ders sayisini kendiliginden artirmak.
- ADR baslatmak.
- Stack veya hosting karari finallemek.
- `src/` dosyalarina backlog/cursor turunda dokunmak.
