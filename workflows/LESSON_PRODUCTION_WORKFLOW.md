# Lesson Production Workflow

Tek bir dersin içerik üretim akışı. Tam müfredat üretimi için kullanılmaz.

## 1. Hazırlık

1. `PROJECT_CONTEXT.md`, `AI_HANDOFF.md`, `DECISIONS.md` oku.
2. `LESSON_TEMPLATE.md`, `VISUAL_ANIMATION_SYSTEM.md`, `INTERVIEW_SYSTEM.md` oku.
3. Önceki ders ve hedeflenen sonraki bağlantıyı belirle.
4. Kısa lesson brief doldur:
   - Module
   - Lesson code
   - Lesson title
   - Previous lesson
   - Required metaphor
   - Must bridge to
   - Special constraints

## 2. İçerik Üretimi

1. `prompts/01_generate_lesson.md` kullan.
2. Tek ders final content candidate üret.
3. D30'u koru: erişilebilirlik, derinliği yok etmek değil progressive depth tasarlamaktır.
4. Görsel metaforu konuya özgü kur.
5. Micro-assessment ve soft-check ekle.

## 3. İnceleme

1. `prompts/02_review_lesson.md` kullan.
2. `checklists/lesson_quality_checklist.md` ve `checklists/depth_ladder_checklist.md` üzerinden kontrol et.
3. Review sonucu:
   - Kabul
   - Minimal patch
   - Yeniden çalışma

## 4. Yama

1. Sadece seçili sorunlar varsa `prompts/03_patch_lesson.md` kullan.
2. Tüm dersi baştan yazma.
3. Eğitim hedefini ve metafor yönünü değiştirme.

## 5. Kabul

1. Kullanıcı veya proje beyni final content candidate'ı kabul eder.
2. Hafıza güncellemesi gerekiyorsa `prompts/06_update_project_memory.md` kullan.
3. Prototipe entegrasyon ayrı issue/workflow ile yapılır.

## Yapılmayacaklar

- Tam müfredat üretmek.
- Yeni dersleri kendiliğinden eklemek.
- Stack veya mimari kararı vermek.
- Görseli jenerik diyagrama çevirmek.
