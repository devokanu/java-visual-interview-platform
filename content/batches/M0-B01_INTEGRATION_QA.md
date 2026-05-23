# M0-B01 Integration QA

## 1. Build Result

**PASS**

- `npm.cmd run build` başarıyla geçti.
- Vite production build tamamlandı.
- Derleme sırasında hata alınmadı.

## 2. Flow Verification

**PASS**

Kontrol edilen ders zinciri:

- M0-L01 varsayılan açılış dersi olarak ayarlı.
- M0-L01 → M0-L02 çalışıyor.
- M0-L02 → M0-L03 çalışıyor.
- M0-L03 → M0-L04 çalışıyor.
- M0-L04 → M0-L05 çalışıyor.
- M0-L05 → M1-L01 placeholder çalışıyor.

M0-L05 placeholder metni:

> M1-L01 henüz üretilmedi. Şimdilik burada durabilirsin.

Ek kontrol:

- `src/data/lessons.js` içinde yalnızca M0-L01, M0-L02, M0-L03, M0-L04, M0-L05 listeleniyor.
- Aktif batch dışında yeni ders eklenmedi.

## 3. Code Tab Verification

**PASS**

- `CodePanel` yalnızca `activeTab === "code"` koşulu sağlandığında render ediliyor.
- Theory, Visual ve Interview tab'lerinde tam Java kod paneli görünmüyor.
- Her dersin step → code line eşleşmeleri veri seviyesinde kontrol edildi; geçersiz satır referansı bulunmadı.
- M0-L01/M0-L02 code visibility baseline korunuyor.

## 4. Soft-Check Verification

**PASS**

- Yanlış cevap `softCheck` durumunu tetikliyor.
- Retry cevabı verildiğinde `assessmentDone` true oluyor; bu yüzden ikinci yanlış cevap hard-lock üretmiyor.
- Her derste `secondWrongReminder` mevcut.
- Akış destekleyici ve non-shaming kalıyor.

## 5. Visual Metaphor Verification

**PASS**

Metafor eşleşmeleri doğru:

- M0-L01: sandviç gişesi
- M0-L02: komut kartlı robot
- M0-L03: aydınlatmalı komut panosu
- M0-L04: etiketli saklama kutuları
- M0-L05: eksik adımlı tarif kartı + yapışkan not panosu

Notlar:

- M0-L03, M0-L04 ve M0-L05 için görsel tipler ayrı `visualType` değerleriyle ayrılmış.
- Görsel adımlar learner-controlled akışta kalıyor.
- Side concept panel aktif step verisinden besleniyor.
- Metaforlar birbirinin tekrarı değil; her biri kendi kavramını taşıyor.

## 6. Mobile / Accessibility Risk Notes

**PASS WITH RISK NOTES**

Kaynak kontrolünde görülen güçlü noktalar:

- Tab container `role="tablist"` kullanıyor.
- Tab button'ları `role="tab"`, `aria-selected`, `aria-controls` kullanıyor.
- Aktif panel `role="tabpanel"` kullanıyor.
- Concept panel `aria-live="polite"` kullanıyor.
- Radio seçenekleri label ile bağlı.
- Button min-height yaklaşık 44px.
- Code panel yatay/dikey overflow ile taşmayı güvenli yönetiyor.
- `prefers-reduced-motion: reduce` desteği var.
- Mobil için `max-width: 920px` ve `max-width: 620px` media query'leri var.

Kalan riskler:

- Gerçek iPhone / Android cihaz testi yapılmadı.
- M0-L05 sahnesi 11 adımlı olduğu için küçük ekranda dikey yük ve görsel yoğunluk gerçek cihazda ayrıca kontrol edilmeli.
- Yeni M0-L03/M0-L04/M0-L05 görsel sahneleri CSS/HTML prototip seviyesinde; nihai animasyon kalitesi daha sonra ayrı QA veya ADR sonrası ele alınmalı.
- Browser üzerinden click-by-click manuel test bu raporda yapılmadı; doğrulama build + kaynak/data kontrolüyle yapıldı.

## 7. Overall Decision

**QA_PASS**

M0-L01 → M0-L05 prototip akışı entegrasyon QA açısından geçiyor.

Bir sonraki önerilen adım:

- Backlog/cursor durumlarını INTEGRATED / QA_DONE olarak güncellemek.
- Cursor'ı bir sonraki batch'e yalnızca bu durum güncellemesinden sonra ilerletmek.
