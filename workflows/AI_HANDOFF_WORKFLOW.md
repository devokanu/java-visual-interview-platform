# AI Handoff Workflow

Claude, Gemini ve Codex arasında güvenli devir-teslim akışı.

## 1. Her Turun Başında

1. `PROJECT_CONTEXT.md` oku.
2. `AI_HANDOFF.md` oku.
3. `DECISIONS.md` oku.
4. Görev türüne göre ilgili dosyaları oku:
   - Ders üretimi: `LESSON_TEMPLATE.md`, `VISUAL_ANIMATION_SYSTEM.md`, `INTERVIEW_SYSTEM.md`
   - Kaynak entegrasyonu: `SOURCE_INGESTION.md`
   - Prototip: mevcut `src/` dosyaları ve checklistler

## 2. Rol Kontrolü

- Claude: proje beyni, müfredat, review, hafıza ve karar netliği.
- Gemini: kaynak ön tarama, boşluk analizi, alternatif öneri.
- Codex GPT-5.5: prototip, kod, test, refactor, uygulama entegrasyonu.

Rol dışına çıkma. Gerekirse işi doğru role devret.

## 3. Çalışma Sırasında

1. PROJECT_CONTEXT ile çelişki varsa PROJECT_CONTEXT geçerlidir.
2. D30 korunur: cognitive accessibility, progressive depth design'dır.
3. Tam müfredat veya yeni ders üretimi yalnızca açık istekle yapılır.
4. Hard-lock kullanılmaz; soft-check korunur.
5. App code ve memory update aynı turda gereksiz yere karıştırılmaz.

## 4. İş Bitince

1. Yapılan işi kısa raporla.
2. Build/test sonucu varsa yaz.
3. Kalan riskleri yaz.
4. Anlamlı ilerleme veya karar varsa:
   - `PROJECT_CONTEXT.md`
   - `AI_HANDOFF.md`
   - gerekirse `DECISIONS.md`
   güncellenir.

## 5. Devir Notu

Bir sonraki AI için şu bilgileri bırak:

- Mevcut görev durumu.
- Hangi dosyalar değişti.
- Hangi kararlar kabul edildi.
- Ne yapılmamalı.
- Sıradaki önerilen küçük adım.

## Yapılmayacaklar

- Sadece sohbet hafızasına güvenmek.
- Karar alınmadan DECISIONS.md'ye kalıcı karar yazmak.
- Prototip stack'i final mimari gibi göstermek.
