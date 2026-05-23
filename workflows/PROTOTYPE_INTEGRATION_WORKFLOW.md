# Prototype Integration Workflow

Onaylı tek dersin mevcut prototipe entegrasyon akışı.

## 1. Hazırlık

1. `PROJECT_CONTEXT.md`, `AI_HANDOFF.md`, `DECISIONS.md` oku.
2. Mevcut `src/App.jsx`, `src/data/*.js`, `src/styles.css` yapısını incele.
3. Onaylı final content candidate dosyasını oku.
4. Entegrasyon kapsamını doğrula: yalnızca istenen ders.

## 2. Veri Modeli

1. Yeni ders için ayrı lesson data object oluştur.
2. İçeriği `App.jsx` içine hardcode etme.
3. Assessment, rescue, code lines, visual steps, nextStep bilgilerini data içinde tut.
4. `lessons.js` veya mevcut ders kayıt yapısına minimal ekleme yap.

## 3. UI Entegrasyonu

1. Ders geçişini sakin ve yönlendirici yap.
2. Theory / Visual / Code / Interview tek mod görünürlüğünü koru.
3. Code yalnızca Code tab içinde görünsün.
4. Visual stage konuya özgü olsun.
5. Step controls çalışsın: Geri, Sonraki Adım, Tekrar İzle.
6. Soft-check hard-lock'a dönüşmesin.

## 4. Doğrulama

1. `npm run build` çalıştır.
2. `checklists/prototype_checklist.md` üzerinden kontrol et.
3. `checklists/accessibility_checklist.md` üzerinden temel erişilebilirliği kontrol et.
4. `checklists/mobile_test_checklist.md` ile dar viewport riski çıkar.

## 5. Hafıza

1. Sadece kısa progress notu gerekiyorsa `PROJECT_CONTEXT.md` ve `AI_HANDOFF.md` güncelle.
2. Gerçek karar kabul edilmediyse `DECISIONS.md` güncelleme.
3. Vite + React'i final stack olarak yazma.

## Yapılmayacaklar

- Yeni lesson chain üretmek.
- ADR başlatmak.
- Deploy etmek.
- P0 baseline'ı bozacak redesign yapmak.
