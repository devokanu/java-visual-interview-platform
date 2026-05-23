DECISIONS.md
Sürüm: v0.3

# Karar Günlüğü (Decision Log)

Verilmiş ve onaylanmış kararlar burada kalıcıdır. Bir karar değişirse: eskisi "Geçersiz kılındı" olarak işaretlenir, yenisi yeni satır olarak eklenir. Karar silinmez.

| ID | Decision (Karar) | Rationale (Gerekçe) | Status (Durum) | Date/Owner |
|---|---|---|---|---|
| D1 | Claude Chat/Desktop projenin beynidir. | Uzun-form dokümantasyon, mimari ve erişilebilirlik incelemesi için uygun. | Aktif | Kurulum / Claude |
| D2 | Gemini Antigravity boşluk analizi ve araştırma asistanıdır. | İkinci görüş ve eksik konu tespiti için. | Aktif | Kurulum / Claude |
| D3 | Codex GPT-5.5 uygulama/prototip asistanıdır. | Kod, refactor, test üretimi için. | Aktif | Kurulum / Claude |
| D4 | Platform çıktı dili Türkçe'dir. | Hedef kitle Türkçe öğrenecek. | Aktif | Kurulum / Kullanıcı |
| D5 | Teknik terimler İngilizce kalabilir; ilk geçişte basit Türkçe açıklama zorunlu. | Hem mülakat gerçekliği hem anlaşılırlık. | Aktif | Kurulum / Kullanıcı |
| D6 | Hedef: Principal Java Backend mülakat hazırlığı. "20 yıllık geliştirici olma" vaadi yoktur. | Dürüstlük + gerçekçi öğrenme hedefi. | Aktif | Kurulum / Kullanıcı |
| D7 | Öğrenci adım adım yönlendirilir; sıradaki adım kararı ona bırakılmaz. | Hedef profilin karar yükü taşımaması. | Aktif | Kurulum / Kullanıcı |
| D8 | Her konu 5 katmanla işlenir: somut benzetme + görsel/animasyon + üretim örneği + kod örneği + mülakat pratiği. | Soyut→somut köprüsü ve kalıcılık. | Aktif | Kurulum / Claude |
| D9 | Tam müfredat şimdi dökülmez; önce hafıza/devir-teslim sistemi kurulur. | Bakım riski + bilişsel yük + güvenli ilerleme. | Aktif | Kurulum / Kullanıcı |
| D10 | Hiçbir AI yalnızca sohbet hafızasına güvenmez. PROJECT_CONTEXT.md tek doğruluk kaynağıdır. | Tutarlılık ve devir-teslim güvenliği. | Aktif | Kurulum / Claude |
| D11 | Her ders dört mod içerebilir: Theory / Visual / Code / Interview. | Farklı öğrenme kanalları + bilişsel esneklik. | Aktif | v0.2 / Kullanıcı |
| D12 | Jenerik tek görsel şablonu yeniden kullanmak yasaktır; her konu özgün metafor alır. | Yüzeysel/karışan görseller öğrenmeyi bozar. | Aktif | v0.2 / Kullanıcı |
| D13 | Kod gösterildiğinde görsel anlatım kodla senkronize olur. | Soyut kod ile görsel anlamın eşleşmesi. | Aktif | v0.2 / Kullanıcı |
| D14 | Müfredat Principal seviyesi alanlarla genişletildi: modern Java 21+, virtual threads, DDD, dayanıklılık desenleri, liderlik vb. | Hedef rol gerçeğine tam kapsama. | Aktif | v0.2 / Kullanıcı |
| D15 | Sıradaki acil adım Gemini değil; kullanıcının dosyaları Cowork/klasöre taşımasıdır. | Sürüm karışıklığını önlemek. | Tamamlandı | v0.2 / Kullanıcı |
| D16 | Gemini boşluk analizi sonuçları olduğu gibi değil, kontrollü filtreden geçirilerek entegre edilir. | İkinci görüş değerlidir ama hedef profile aykırı öneriler ayıklanmalıdır; körü körüne kabul hedef kitleyi bozar. | Aktif | v0.3 / Kullanıcı + Claude |
| D17 | "Devam Et" butonu soft-check ile çalışır; hard-lock yasaktır. Yanlış cevap utandırma değil, "Daha basit anlatalım mı?" önerisi tetikler. | Öğrenme güçlüğü olan kullanıcıda sert kilit utanç ve terk üretir; nazik kurtarma sürdürülebilirliği artırır. | Aktif | v0.3 / Kullanıcı |
| D18 | M27 tam Sistem Tasarımı Kuşak 6'da kalır. Kuşak 4'ten önce yalnızca "Sistem Tasarımına Mini Giriş / Ölçeklenme Sezgisi" köprüsü eklenir. | Tam sistem tasarımının erken konumlandırılması bilişsel olarak ağır olur; yine de ölçeklenme sezgisi mesajlaşma/önbellek öncesi zemine ihtiyaç duyar. | Aktif | v0.3 / Kullanıcı |
| D19 | Kaynak entegrasyon iş akışı SOURCE_INGESTION.md'de tanımlanır ve uygulanır. | Dış kaynak eklemeleri kontrolsüz olursa müfredat çakışır ve hafıza bozulur. | Aktif | v0.3 / Kullanıcı + Claude |
| D20 | Tüm kaynaklar için Referans alanı zorunludur; çakışan içerik ham eklenmez, var olan derse atıf olarak bağlanır. | İzlenebilirlik + duplikasyon önleme + güven. | Aktif | v0.3 / Kullanıcı + Claude |
| D21 | İleri veritabanı iç yapıları müfredata eklenir: B-Tree, LSM Tree, MVCC, izolasyon seviyeleri. | Principal seviyesi mülakatlarda indeks ve eşzamanlılık derinliği beklenir. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D22 | CQRS ve Event Sourcing müfredata eklenir. | Principal mimari mülakatlarında okuma/yazma ayrımı ve olay tarihçesi sık sorulur. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D23 | Mülakat sistemine STAR metodu, Log analizi formatı, Stack-trace debugging formatı ve Sistem Tasarımı Simülasyonu eklenir. | Principal mülakatlarının yarısı davranışsaldır; üretim teşhisi ve tasarım çizimi de ayrı pratik biçimleridir. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D24 | OIDC, SAML, RBAC, ABAC güvenlik konuları M16 ekosistemine eklenir. | Kurumsal kimlik federasyonu ve rol/öznitelik tabanlı erişim Principal güvenlik tasarımı bilgisidir. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D25 | gRPC ve WebSocket API/protokol alternatifleri Kuşak 4'e eklenir. | REST ötesi iletişim protokolleri mikroservis haberleşmesinde gereklidir. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D26 | FinOps / bulut maliyet optimizasyonu Kuşak 7'ye eklenir. | Principal seviyesinde mimari kararların finansal bedelini savunabilmek beklenir. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D27 | GraalVM / Spring Native opsiyonel ileri konu olarak eklenir; temel ön koşul değildir. | Bilişsel yük yönetimi: bu konu kritik ama sonradan eklenecek bir derinlikleştirme katmanıdır. | Aktif | v0.3 / Kullanıcı |
| D28 | M9 ile M10 yer değiştirir: önce JVM İçi Yapısı, sonra Java Memory Model. | Bellek modelini fiziksel yapı bilgisi olmadan anlatmak soyut kalır; sıra düzeltmesi bilişsel erişilebilirliği artırır. | Aktif | v0.3 / Gemini öneri + Kullanıcı onay |
| D29 | LESSON_TEMPLATE'e "Devam Et" öncesi mikro-değerlendirme adımı eklenir; yanlış cevap otomatik kurtarma tetiği çalıştırır. | Anlamadan ilerleme önlenir; ama tetik nazik soft-check biçimindedir. | Aktif | v0.3 / Kullanıcı |
| D30 | M0-L01 patched prototype direction is accepted as the P0 learning experience baseline. | İlk ders prototipi; düşük bilişsel yük, tek mod görünürlüğü, sandviç gişesi görsel odağı, kod senkronu ve soft-check davranışı için başlangıç ürün deneyimi referansı olarak kabul edildi. | Aktif | 2026-05-23 / Kullanıcı + Codex |
| D31 | Vite + React şu an yalnızca prototip uygulama yığınıdır; final mimari/stack kararı değildir. | M0-L01 deneyimini hızlı doğrulamak için kullanıldı. Final stack kararı açık kalır ve daha sonra ayrı ADR/DECISIONS turunda ele alınmalıdır. | Aktif | 2026-05-23 / Kullanıcı + Codex |
| D32 | M0-L01 → M0-L02 two-lesson prototype baseline accepted. | Minimal polish patch tamamlandı; build geçti; M0-L01 → M0-L02 akışı ve M0-L02 → M0-L03 placeholder çalışıyor. Mobil görsel sahne için gerçek cihaz testi hâlâ gereklidir. | Aktif | 2026-05-23 / Kullanıcı + Codex |

## Açıklamalı Notlar

- D5 örnek format: Thread pool: önceden hazırlanmış işçi thread (iş parçacığı) havuzu. / Backpressure: sisteme kaldıramayacağı kadar iş gelmesini yavaşlatma mekanizması. / Idempotency: aynı işlem birden çok kez çalışsa bile sonucu bozmayan tasarım.
- D17 alt-kuralı: Soft-check başarısızlığında en az 1, en fazla 3 basitleştirme kademesi sunulur; sonuncu kademe ön koşul kurtarma akışına (prerequisite rescue) yönlendirir. Kademe sayısının kalibrasyonu açık soru O7'de.
- D27 örneği: GraalVM/Spring Native bir derse "Opsiyonel — Cloud-Native Optimizasyon" etiketiyle eklenir; ana yolun ön koşul zinciri içine girmez.
- D31 notu: Final stack kararı hâlâ PROJECT_CONTEXT.md §15 O1 kapsamındadır; Vite + React yalnızca M0-L01 prototipinin uygulama aracıdır.
- Henüz karar verilmemiş konular PROJECT_CONTEXT.md §15 (Açık Sorular)'da. Karara dönüşünce buraya yeni satır olarak taşınır.
