# Batch Lesson Factory Workflow

Bu workflow kalan mufredat basliklarini 3 derslik paketlerle hizli ama kontrollu uretmek icindir. Tam mufredat uretimi degildir; kalite kapisi atlanmaz.

## 1. Batch Issue Ac

1. `.github/ISSUE_TEMPLATE/lesson_batch.yml` kullan.
2. Batch size'i 3 olarak tut.
3. Her ders icin kisa lesson brief doldur:
   - Module
   - Lesson code
   - Lesson title
   - Previous lesson
   - Required metaphor
   - Must bridge to
   - Special constraints
4. Batch disina cikilmamasi kuralini issue'ya yaz.

## 2. Claude Content Uret

1. `prompts/08_generate_lesson_batch.md` kullan.
2. Yalnizca issue'daki 3 ders icin final content candidate uret.
3. Her ders LESSON_TEMPLATE v0.3.1'e uymali.
4. D30 korunmali: bilissel erisilebilirlik siglastirma degil, progressive depth tasarimidir.
5. Her dersin gorsel metaforu konuya ozel olmali.

## 3. Review Issue Ac

1. Batch ciktisi icin review issue ac.
2. `prompts/09_review_lesson_batch.md` kullan.
3. `checklists/batch_lesson_quality_checklist.md` ile dersler arasi kaliteyi kontrol et.
4. Her ders icin karar ver:
   - Pass
   - Patch Needed
   - Reject

## 4. Patch Gerekiyorsa Patch

1. Sadece review'da secilen sorunlari patch et.
2. Tum batch'i bastan yazma.
3. Egitim hedefini, on kosul sirasini ve onayli metafor yonunu degistirme.

## 5. Codex Prototype Integration

1. Sadece Pass olan veya patch sonrasi kabul edilen 3 dersi entegre et.
2. `prompts/10_integrate_lesson_batch_to_prototype.md` kullan.
3. Her ders ayri data object olmali.
4. `lessons.js` navigation sirasi guncellenmeli.
5. Code sadece Code tab'da gorunmeli.
6. Soft-check ve rescue flow korunmali.
7. Buyuk refactor yapma.

## 6. Codex QA

1. `npm run build` calistir.
2. Tab akisini kontrol et.
3. Visual step ve code highlight sync kontrol et.
4. Assessment ve soft-check kontrol et.
5. Mobile riskleri not et.

## 7. Memory Update

1. `prompts/11_batch_memory_update.md` kullan.
2. `PROJECT_CONTEXT.md` ve `AI_HANDOFF.md` icine kisa progress notlari ekle.
3. `DECISIONS.md` yalnizca gercek kalici karar varsa guncellenir.

## 8. Issue Kapatma

1. Issue comment olarak Turkce ozet yaz:
   - Uretilen dersler
   - Review kararlari
   - Prototype integration durumu
   - Build sonucu
   - Kalan riskler
2. Kullanici onayi olmadan commit veya release yapma.

## Kalite Kapilari

- Batch disina cikilmadi mi?
- Her ders D30'a uyuyor mu?
- Metaforlar konuya ozel mi?
- On kosul akisi dogru mu?
- Visual Mode ogretimin merkezi mi?
- Soft-check hard-lock'a donusmedi mi?
- Tam mufredat uretilmedi mi?
