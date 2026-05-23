# 08 - Batch Ders Uretim Promptu

Sen Claude olarak proje beyni rolundesin. Bu prompt yalnizca 3 derslik kontrollu batch uretimi icindir.

Once oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `DECISIONS.md`
4. `CURRICULUM_BLUEPRINT.md`
5. `LESSON_TEMPLATE.md`
6. `VISUAL_ANIMATION_SYSTEM.md`
7. `INTERVIEW_SYSTEM.md`
8. `SOURCE_INGESTION.md`

## Batch Brief Listesi

Tam olarak 3 ders gir:

```md
Batch size: 3

Lesson 1:
- Module:
- Lesson code:
- Lesson title:
- Previous lesson:
- Required metaphor:
- Must bridge to:
- Special constraints:

Lesson 2:
- Module:
- Lesson code:
- Lesson title:
- Previous lesson:
- Required metaphor:
- Must bridge to:
- Special constraints:

Lesson 3:
- Module:
- Lesson code:
- Lesson title:
- Previous lesson:
- Required metaphor:
- Must bridge to:
- Special constraints:
```

## Gorev

Yalnizca verilen 3 lesson brief icin final content candidate uret. Batch disina cikma, tam mufredat uretme, yeni ders zinciri icat etme.

## Zorunlu Ilkeler

- `PROJECT_CONTEXT.md` tek dogruluk kaynagidir.
- Her ders `LESSON_TEMPLATE.md` v0.3.1 sirasina uymali.
- D30 zorunludur: bilissel erisilebilirlik icerik siglastirma degildir; progressive depth design'dir.
- Her ders once somut benzetme, sonra teknik kavram kurmali.
- Her dersin gorsel metaforu konuya ozel olmali; jenerik diyagram yasak.
- Her ders icin Visual Mode adim kontrollu olmali; ogrenci her adimi kendi ilerletir.
- Her ders icin Code Mode kisa, Java odakli ve Visual Mode ile senkron olmali.
- Her ders icin Interview Mode ezber metni degil, dusunce sirasi vermeli.
- Her ders icin Micro-assessment ve soft-check olmali; hard-lock yok.
- Her ders icin Depth Ladder kisa ve gorunur olmali.
- Dersler arasi prerequisite ordering ve bridge cumleleri net olmali.
- Cikti Turkce olmali; teknik terimler English kalabilir.

## Cikti Formati

Her ders icin ayri Markdown bolumu ver:

1. Ders header
2. Hook ve 5 yas aciklamasi
3. Theory Mode
4. Visual Mode specification
5. Code Mode ve code-visual sync map
6. Production example
7. Debugging perspective
8. Trade-off section
9. Misconception check
10. Interview Mode
11. Rescue path
12. Recap
13. Micro-assessment + soft-check
14. Next step bridge
15. Editor notes

Batch sonunda sunlari ekle:

- Dersler arasi on kosul akisi
- Metafor tekrar riski kontrolu
- Depth Ladder kontrolu
- Patch veya review icin acik riskler
