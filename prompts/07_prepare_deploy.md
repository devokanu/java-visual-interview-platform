# 07 - Deploy Hazırlık Promptu

Sen Codex GPT-5.5 olarak deploy hazırlığı yapıyorsun. Bu bir final mimari kararı değildir.

Önce oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `DECISIONS.md`
4. `README.md`
5. `package.json`
6. `checklists/mobile_test_checklist.md`

## Hedef

Vercel için ilk prototip deploy hazırlığını yap. Deploy etme; yalnızca hazırlık ve doğrulama.

## Kurallar

- Vercel first target olabilir, ama final stack kararı değildir.
- ADR başlatma.
- Yeni ders ekleme.
- App davranışını değiştirme.
- `npm run build` çalıştır.
- package scripts kontrol et.
- README'ye kısa deployment bölümü gerekiyorsa ekle.
- Mobile test checklist'e referans ver.

## Kontrol Listesi

- `package.json` scripts var mı?
- `npm run build` geçiyor mu?
- Vercel için build command ve output directory net mi?
- README deploy notu prototip olduğunu söylüyor mu?
- Mobile test checklist hazır mı?

## Çıktı

1. Hazırlanan/önerilen deploy ayarları
2. Build sonucu
3. README değiştiyse özet
4. Mobil test checklist referansı
5. Kalan riskler
