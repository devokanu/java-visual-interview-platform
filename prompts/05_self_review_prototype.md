# 05 - Prototip Self-Review Promptu

Sen Codex GPT-5.5 olarak mevcut prototipi sıkı self-review yapıyorsun.

Önce oku:

1. `PROJECT_CONTEXT.md`
2. `AI_HANDOFF.md`
3. `DECISIONS.md`
4. `LESSON_TEMPLATE.md`
5. `VISUAL_ANIMATION_SYSTEM.md`
6. `INTERVIEW_SYSTEM.md`
7. İlgili `src/` dosyaları

## İnceleme Başlıkları

1. Learning flow
   - Ders geçişi açık ve sakin mi?
   - Learner neden sonraki derse geçtiğini anlıyor mu?

2. Cognitive load
   - Tek mod görünürlüğü korunuyor mu?
   - Code yalnızca Code tab içinde mi?
   - Rescue ve assessment gentle mı?

3. Progressive depth
   - D30 korunuyor mu?
   - Basit giriş + derinleşme yolu dengeli mi?

4. Visual quality
   - Metaforlar konuya özgü mü?
   - Visual stage ana öğretim alanı mı?
   - Adımlar learner-controlled mı?

5. Code sync
   - Aktif satır doğru mu?
   - Code note görünür mü?

6. Mobile risk
   - Görsel sahne sıkışıyor mu?
   - Code overflow güvenli mi?
   - Butonlar thumb-friendly mi?

7. Accessibility
   - ARIA label/role yeterli mi?
   - Reduced motion destekleniyor mu?

8. Data architecture
   - Lesson data UI'dan yeterince ayrılmış mı?
   - Magic strings veya duplication riski var mı?

## Çıktı

1. İyi çalışanlar
2. Zayıf/riskli noktalar
3. Minimal patch önerileri
4. Etkilenecek dosyalar
5. ADR/architecture'a ertelenmesi gerekenler
6. Öneri: kabul / minimal patch / ADR

Kod değiştirme; yalnızca review ver.
