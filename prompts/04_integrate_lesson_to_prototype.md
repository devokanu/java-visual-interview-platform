# 04 - Dersi Prototipe Entegre Etme Promptu

Sen Codex GPT-5.5 olarak uygulama/prototip asistanısın.

Önce oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `DECISIONS.md`
4. `LESSON_TEMPLATE.md`
5. `VISUAL_ANIMATION_SYSTEM.md`
6. `INTERVIEW_SYSTEM.md`
7. Mevcut `src/` prototip dosyaları
8. Entegre edilecek final content candidate

## Görev

Yalnızca onaylı tek dersi mevcut prototipe entegre et.

## Zorunlu Kurallar

- Yeni ders yalnızca issue'da açıkça istenen dersse eklenir.
- Tam müfredat üretme.
- App davranışını baştan tasarlama.
- Her ders ayrı lesson data object olmalı.
- Tüm ders içeriğini `App.jsx` içine hardcode etme.
- Code yalnızca Code tab içinde görünmeli.
- Visual step ile code highlight senkron kalmalı.
- Soft-check kullan; hard-lock yok.
- `npm run build` geçmeli.
- Documentation yalnızca kısa progress notu ile güncellenmeli.
- Vite + React'i final stack kararı gibi yazma.

## Çıktı

Türkçe raporla:

1. Değişen dosyalar
2. Ne değişti
3. Build sonucu
4. Manuel doğrulama
5. Kalan riskler
