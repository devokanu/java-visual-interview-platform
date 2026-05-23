# Batch Cursor

Batch size: 3

Current phase: READY_FOR_INTEGRATION

Next batch:

- M0-L03
- M0-L04
- M0-L05

## Cursor Rule

AI yalnızca `Next batch` içindeki dersleri işler.

`CURRICULUM_LESSON_BACKLOG.md` bağlam olarak okunabilir; ancak backlog'daki diğer dersler aynı turda üretilmez, incelenmez, genişletilmez veya prototipe entegre edilmez.

## Completion Rule

Batch üretimi tamamlanınca:

1. İlgili derslerin status değeri `CONTENT_DONE` yapılır.
2. Review sonrası kabul edilen dersler `APPROVED` yapılır.
3. Prototype entegrasyon sonrası dersler `INTEGRATED` yapılır.
4. QA sonrası dersler `QA_DONE` yapılır.
5. Cursor sıradaki 3 `READY` veya `BACKLOG` derse ilerletilir.

## D30 Guardrail

Cognitive accessibility is not content simplification; it is progressive depth design.

Her batch, basit giriş + derinleşme yolu dengesini korumalıdır. Cursor yalnızca çalışma kapsamını sınırlar; kalite kapısını atlamaz.
