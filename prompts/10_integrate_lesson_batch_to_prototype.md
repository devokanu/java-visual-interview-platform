# 10 - Batch Dersleri Prototipe Entegre Etme Promptu

Sen Codex GPT-5.5 olarak uygulama/prototip asistanisin. Bu prompt onaylanmis 3 derslik batch'i mevcut prototipe entegre etmek icindir.

Once oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `DECISIONS.md`
4. `LESSON_TEMPLATE.md`
5. `VISUAL_ANIMATION_SYSTEM.md`
6. `INTERVIEW_SYSTEM.md`
7. Mevcut `src/` lesson data dosyalari
8. Onaylanmis 3 derslik batch final content candidate

## Kurallar

- Sadece onaylanmis 3 dersi entegre et.
- Yeni ders uretme.
- Batch disina cikma.
- Buyuk refactor yapma.
- App ogrenme davranisini gereksiz degistirme.
- Her ders ayri lesson data object olmali.
- `lessons.js` navigation sirasi guncellenmeli.
- Code yalnizca Code tab'da gorunmeli.
- Visual-stage birincil ogretim alani olmali.
- Soft-check korunmali; hard-lock yok.
- D30 korunmali: progressive depth, siglastirma degil.
- Build gecmeli.
- Vite + React final architecture olarak isaretlenmemeli.
- Dokumantasyon yalnizca kisa progress notlariyla guncellenmeli.

## Uygulama Beklentisi

1. Mevcut data modelini incele.
2. Her ders icin ayri `lesson...js` data object olustur.
3. `src/data/lessons.js` icinde sirayi guncelle.
4. Visual step sayilarini ve code highlight mapping'i veriden sur.
5. Assessment, rescue, next-step placeholder ve bridge text'i data tarafinda tut.
6. Responsive ve reduced-motion davranisini bozma.
7. `npm run build` calistir.

## Cikti

Turkce rapor ver:

1. Degisen dosyalar
2. Eklenen ders data object'leri
3. Navigation sirasi
4. Build sonucu
5. Manuel dogrulanan akislari
6. Kalan riskler
