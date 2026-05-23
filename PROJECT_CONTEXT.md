PROJECT_CONTEXT.md
Sürüm: v0.3
Tek Doğruluk Kaynağı (Single Source of Truth)
Bu dosya projenin merkezi hafızasıdır. Hiçbir AI sadece sohbet hafızasına güvenmez. Her AI çalışmaya başlamadan önce bu dosyayı okur, anlamlı bir iş bitirdikten sonra bu dosyayı günceller.
Sohbet geçmişi ile bu dosya çelişirse: bu dosya geçerlidir ve çelişki açıkça belirtilir.

Proje Amacı (Project Purpose)
Öğrenme güçlüğü çeken bireyleri sıfırdan başlayarak Principal Java Backend Engineer (kıdemli baş yazılım mühendisi) seviyesinde mülakat hazırlığına ulaştıran, rehberli bir web platformu inşa etmek.
Amaç yanlış bir vaat değildir: Öğrenci sihirli şekilde 20 yıllık geliştirici olmaz. Gerçek amaç şudur:

Doğru zihinsel modeller (mental model: kafadaki çalışma şeması),
Üretim ortamı muhakemesi (production reasoning: gerçek sistemde ne olur düşüncesi),
Hata ayıklama içgüdüsü (debugging instinct),
Sistem tasarımı yargısı (system design judgment),
Ödünleşim farkındalığı (trade-off awareness: her kararın bir bedeli olduğunu görme),
Ve kıdemli seviyede mülakat cevabı kalitesi geliştirmek.

Hedef Öğrenci Profili (Target Learner Profile)

Tıbbi olarak anlamlı öğrenme güçlükleri olabilir.
Soyut kavramlarda zorlanır.
Somut, gerçek hayattan benzetmelere (analogy) ihtiyaç duyar.
Görsel anlatım ve animasyona ihtiyaç duyar.
Bazı kavramları yalnızca 5 yaşındaki bir çocuğun anlayacağı sadelikte anlatılınca kavrar.
"Sırada ne çalışmalıyım?" kararını vermek zorunda bırakılmamalıdır.
Platform onu adım adım yönlendirmelidir.

Pazarlık Edilemez Öğrenme İlkeleri (Non-Negotiable Learning Principles)

Önce somut, sonra soyut. Her kavram önce gerçek hayat benzetmesiyle başlar.
Tek seferde tek fikir. Bir lesson (ders) sayfasında bilişsel yük düşük tutulur.
Karar yükü öğrenciye verilmez. Sıradaki adım her zaman platform tarafından önerilir.
Her konu beş katmanla anlatılır: benzetme → görsel/animasyon → üretim örneği → kod örneği → mülakat pratiği.
Eksik ön bilgi tespit edilince "kurtarma akışı" (prerequisite rescue) devreye girer.
Başarısızlık utanç değildir. Geri bildirim nazik, cesaretlendirici ve net olur.
Tekrar ve aralıklı hatırlama sisteme gömülüdür.
v0.3: Soft-check ilkesi — "Devam Et" sert biçimde kilitlenmez; yanlış cevap utandırma değil, nazik basitleştirme tetikler.

Ürün Vizyonu (Product Vision)
Web tabanlı, rehberli, doğrusal-ama-esnek bir öğrenme yolu. Öğrenci tek bir "Devam Et" butonuyla ilerleyebilir. Her ders kendi içinde bütün; her modül bir öncekine yaslanır. Sonradan kaynak temelli içerik genişletmesi (source-based expansion) yapılacaktır — bu genişletmenin kuralları SOURCE_INGESTION.md'de tanımlıdır.
Onaylanmış Platform Yapısı (Approved Platform Structure)

Rehberli müfredat (guided curriculum)
Ders sayfaları (lesson pages) — sekmeli/akordeon yapı: Theory / Visual / Code / Interview aynı anda tek sekme görünür.
Konuya özel görsel anlatımlar
Animasyon spesifikasyonları
Üretim örnekleri
Kod örnekleri
Senaryo tabanlı öğrenme
Mock interview (deneme mülakatı) modu
Senior/Principal mülakat soru-cevapları + STAR + Log/Stack-Trace + Sistem Tasarımı Simülasyonu (bkz. INTERVIEW_SYSTEM.md)
Prerequisite rescue (ön koşul kurtarma) akışı
Otomatik kurtarma tetiği (yanlış cevap → nazik basitleştirme önerisi)
Mikro-değerlendirme (micro-assessment) "Devam Et" öncesi
İlerleme takibi (progress tracking)
Kaynak tabanlı içerik genişletme — SOURCE_INGESTION.md'ye göre

Onaylanmış Müfredat Yönü (Approved Curriculum Direction)
Bkz. CURRICULUM_BLUEPRINT.md (v0.3'te Gemini boşluk analizinden seçilmiş eklemeler entegre edildi: CQRS/Event Sourcing, ileri DB iç yapıları, OIDC/SAML/RBAC/ABAC, gRPC/WebSocket, FinOps, opsiyonel GraalVM/Spring Native, Kuşak 4 öncesi mini sistem tasarımı köprüsü, M9/M10 sıra düzeltmesi). Şimdilik yalnızca üst düzey modül grupları ve ön koşul mantığı onaylandı. Tam ders dökümü henüz yapılmadı.
Şu An Üzerinde Çalışılan Modül / Ders (Current Module / Lesson)

Aşama: M0-L01 → M0-L02 baseline sonrası Vercel mobil test yayını.
Durum: Two-lesson prototype deployed to Vercel for mobile testing. İlk Vercel build, generated dependency/build output tracking nedeniyle başarısız oldu; node_modules/dist Git tracking'den çıkarılıp .gitignore eklenerek/güncellenerek düzeltildi. Mobil görsel sahne hâlâ gerçek cihaz testi gerektirir.
Sıradaki: mobile test checklist ile gerçek cihaz doğrulaması.

Görsel ve Animasyon Kuralları (Visual and Animation Rules)
Bkz. VISUAL_ANIMATION_SYSTEM.md (v0.3'te modül-grubu metaforları "başlangıç noktası" olarak çerçevelendi; her konu yine kendi özgün görseliyle ele alınır). Özet: jenerik şablon yasak; her konuya özgün görsel metafor; kod gösterilirken görsel ile senkron; görsel sahne ana öğretim alanıdır, süs değildir.
UI/UX Kuralları

Tek ana eylem butonu ("Devam Et"). Seçenek bombardımanı yok.
"Devam Et" yumuşak kontrol (soft-check) ile çalışır — sert kilit (hard-lock) yasak.
Mikro-değerlendirme: "Devam Et" öncesi 1 çok basit anlama kontrolü.
Yanlış cevap → otomatik "Daha basit anlatalım mı?" önerisi (kurtarma tetiği).
Yüksek kontrast, büyük yazı tipi, sade düzen.
Her sayfada "neredeyim / ne kadar kaldı" göstergesi.
Dağıtıcı animasyon, oto-oynatılan ses, ani açılır pencere yok.
"Geri dön" ve "tekrar izle/oku" her yerde mevcut.
Ders içi modlar sekme/akordeon mantığıyla sunulur; tüm içerik aynı anda yığılı verilmez (bkz. LESSON_TEMPLATE).

Teknik Yığın Kararları (Technical Stack Decisions)

Durum: HENÜZ KESİNLEŞMEDİ. (Açık soru — bkz. Bölüm 15.)
Ön eğilim: frontend için modern bileşen tabanlı bir framework, backend için içerik servis eden hafif bir katman.
Vite + React şu an yalnızca M0-L01 prototip uygulama yığınıdır; final mimari karar değildir.
Final stack kararı açık kalır ve daha sonra ayrı ADR/DECISIONS turunda ele alınmalıdır.

Mimari Kararlar (Architecture Decisions)

Durum: HENÜZ KESİNLEŞMEDİ.
İçerik (ders/görsel/mülakat) kod'dan ayrı, veri-odaklı (içerik dosyaları/CMS benzeri) tutulacak ilkesi benimsendi ki içerik genişletmesi kolay olsun.

Onaylanmış AI Rol Dağılımı (Approved AI Role Distribution)

Claude (Chat/Desktop): Proje beyni — mimari, müfredat, erişilebilirlik incelemesi, bilişsel yük incelemesi, uzun-form dokümantasyon, bu dosyanın bakımı, kaynak entegrasyon koordinasyonu.
Gemini 3.1 (Antigravity): İkinci görüş araştırması, eksik konu tespiti, görsel/animasyon alternatifleri, teknoloji karşılaştırması, boşluk analizi, kaynak ön taraması.
Codex GPT-5.5: Uygulama (frontend/backend kodu), prototip, refactor, test üretimi, üretim seviyesi bileşen yapısı.

Sağlanan Kaynak Materyaller (Source Materials Provided)

Şu an: kurucu istek (proje brief'i) + Gemini 3.1 boşluk analizi (GAP_ANALYSIS, v0.2 üzerine).
İleride: kullanıcının ekleyeceği kitap/kurs/not kaynakları SOURCE_INGESTION.md akışıyla buraya kaydedilecek.

Uzman Eklemeleri (Expert Additions)

Aralıklı tekrar (spaced repetition) ve aktif hatırlama mekanizması müfredata gömülmesi önerildi.
Her modül sonunda "üretimde ne ters gider?" senaryosu eklenmesi önerildi (Principal seviyesi muhakeme için).
Her kavram için "5 yaşındaki açıklaması" zorunlu alan yapıldı.
v0.2: Müfredata modern Java (21+), virtual threads, DDD, dağıtık dayanıklılık desenleri ve Principal liderlik alanları eklendi.
v0.3 (Gemini'den seçilerek entegre edilen bulgular):

CQRS ve Event Sourcing müfredata eklendi (Kuşak 6).
İleri veritabanı iç yapıları eklendi: B-Tree, LSM Tree, MVCC, izolasyon seviyeleri (Kuşak 4).
OIDC, SAML, RBAC, ABAC güvenlik alanları eklendi (Kuşak 3).
gRPC ve WebSocket API/protokol alternatifleri eklendi (Kuşak 4).
FinOps / bulut maliyet optimizasyonu eklendi (Kuşak 7).
GraalVM / Spring Native opsiyonel ileri konu olarak eklendi (zorunlu ön koşul DEĞİL).
Kuşak 4'ten önce "Sistem Tasarımına Mini Giriş / Ölçeklenme Sezgisi" köprüsü eklendi; tam sistem tasarımı modülü Kuşak 6'da kalmaya devam eder.
M9/M10 sırası değiştirildi: önce JVM İçi Yapısı, sonra Java Memory Model (bilişsel erişilebilirlik için daha güvenli).
STAR metodu davranışsal/liderlik mülakat pratiğine eklendi.
Log analizi ve stack-trace analizi mülakat formatları eklendi.
Sistem tasarımı simülasyonu mülakat formatı eklendi.
Mikro-değerlendirme "Devam Et" öncesi zorunlu hale getirildi.
Yanlış cevap otomatik kurtarma tetiği eklendi.
Kaynak entegrasyon iş akışı (SOURCE_INGESTION.md) tanımlandı.
Çakışma/güncellik tespiti ve referans/atıf takibi kuralları eklendi.

14.1 İçerik Genişletme İlkeleri (Source Expansion Principles) — YENİ
Tam kurallar SOURCE_INGESTION.md'de. Özet:

Her dış kaynak (kitap/makale/kurs) önce tarama, ardından çakışma analizi, sonra eşleme adımlarından geçer.
Mevcut bir konuyu tekrar eden içerik müfredata ham hâliyle eklenmez; varolan derse atıf olarak bağlanır.
Güncelliğini yitirmiş içerik "outdated" etiketiyle işaretlenir; sessizce silinmez.
Her kaynak için Referans (References) alanı zorunludur (başlık, yazar, yıl, sayfa/bölüm).
Kaynak akışında roller: Gemini = ön tarama/boşluk doğrulama, Claude = entegrasyon ve hafıza güncellemesi, Codex = içeriğin platforma görsel/etkileşimli yansıması.


Açık Sorular (Open Questions)

O1: Teknik yığın (stack) ne olacak? (frontend/backend somut seçim)
O2: İçerik nasıl depolanacak? (Markdown dosyaları mı, basit CMS mi?)
O3: İlerleme verisi nerede tutulacak? (yerel mi, hesap tabanlı mı?)
O4: Hedef platform dili Türkçe; arayüz metinleri de tamamen Türkçe mi olacak? (varsayım: evet)
O5: Animasyonlar için teknik yöntem? (CSS/SVG mı, hafif kütüphane mi?)
O6 (YENİ): Mikro-değerlendirme veri modeli nasıl tutulacak? (oturum-bazlı mı, kalıcı mı?)
O7 (YENİ): Soft-check başarısızlığında "Daha basit anlatalım mı?" akışı için kaç kademe basitleştirme uygulanacak?

Reddedilen Fikirler ve Nedeni (Rejected Ideas and Why)

❌ "Öğrenci kendi öğrenme yolunu seçsin" → Karar yükü hedef profile uygun değil.
❌ "Tek seferde tüm müfredatı üret" → Bilişsel yük + bakım riski; aşamalı üretim benimsendi.
❌ "20 yıllık geliştirici olacaksın vaadi" → Gerçek dışı; yerine muhakeme/mülakat hazırlığı hedefi konuldu.
❌ "Tek jenerik görsel şablonu her konuda yeniden kullan" → v0.2'de yasaklandı; her konu özgün metafor alır.
❌ v0.3: "Sistem Tasarımı'nı (M27) tamamen Kuşak 4'e taşı" → Reddedildi. Yerine Kuşak 4 öncesi mini köprü eklendi; tam M27 Kuşak 6'da kalır.
❌ v0.3: "'Devam Et' butonunu yanılgı kontrolü çözülene kadar tamamen kilitle (hard-lock)" → Reddedildi. Yerine soft-check + nazik basitleştirme önerisi.
❌ v0.3: "GraalVM / Spring Native'i temel ön koşul yap" → Reddedildi. Opsiyonel ileri konu olarak işaretlendi.

Mevcut İlerleme (Current Progress)

Biten ve bitmeyen işler karıştırılmaz. Üç ayrı liste tutulur.
17.1 Tamamlananlar (Completed)
Proje hafıza sistemi tasarlandı (v0.1).
7 temel dosya oluşturuldu (v0.1).
7 dosya düzeltildi/güçlendirildi (v0.2).
Düzeltilmiş v0.2 dosyaları Cowork/proje klasörüne taşındı ve okunabilirlik teyit edildi.
Gemini 3.1 boşluk analizi tamamlandı (GAP_ANALYSIS).
Gemini bulguları kontrollü filtreden geçirilerek v0.3'e seçici entegre edildi (12 kabul, 3 değiştirilerek kabul, gerisi açık).
8 dosya v0.3'e güncellendi (7 yamalı + SOURCE_INGESTION.md yeni).
M0-L01 için ilk çalışan Codex prototipi eklendi: dört sekme, sandviç gişesi görsel sahnesi, adım kontrolleri, kod vurgusu, kurtarma yolu, mikro-değerlendirme, soft-check ve M0-L02 placeholder.
M0-L01 patched prototype direction P0 learning experience baseline olarak kabul edildi.
M0-L02 final content candidate integrated into prototype.
M0-L01 → M0-L02 two-lesson prototype baseline accepted; minimal polish patch tamamlandı ve build geçti.
GitHub issue/workflow automation scaffolding created.
Vercel deployment preparation completed; actual deploy pending.
Two-lesson prototype deployed to Vercel for mobile testing.
Initial Vercel build failed due to generated dependency/build output tracking; fixed by removing node_modules/dist from Git tracking and adding/updating .gitignore.
Batch lesson factory workflow scaffolding created.
17.2 Bekleyenler (Pending — sırada, engel yok)
v0.3 dosyaları arası iç tutarlılık ikinci-tur kontrolü.
README'nin SOURCE_INGESTION.md ile güncellenmesi (gerekirse).
M0-L01 P0 baseline'ın hedef öğrenciyle veya temsilî kullanıcıyla deneyim kontrolü.
Mobil görsel sahnenin mobile test checklist ile gerçek cihazlarda test edilmesi.
17.3 Engelli / Açık (Blocked / Open — karar bekliyor)
Teknik yığın kararı (O1) → final mimari/ADR turunu bekliyor; Vite + React yalnızca prototip uygulama yığınıdır.
İçerik depolama yöntemi (O2).
İlerleme verisi konumu (O3).
Animasyon teknik yöntemi (O5) → görsel üretimi bunu bekliyor.
Mikro-değerlendirme veri modeli (O6).
Soft-check kademe sayısı (O7).

Sıradaki Eylemler (Next Actions)

Mobile test checklist ile mobil görsel sahneyi gerçek cihazlarda doğrula.
Batch lesson factory workflow ile siradaki 3 derslik paketi issue tabanli hazirla; kalite review kapisini atlama.
Actual hosting/stack decisions remain open for later ADR; Vercel test deploy final hosting kararı değildir.
Tam müfredat üretme; yeni ders ekleme; ADR/stack kararını ayrı turda ele al.

Bağlam Tazeleme Özeti (Context Refresh Summary)
Öğrenme güçlüğü olan kişiler için, sıfırdan Principal Java Backend mülakat hazırlığına götüren rehberli bir web platformu yapıyoruz. v0.2'de hafıza iskeleti sertleştirildi; v0.3'te Gemini boşluk analizi kontrollü filtreyle entegre edildi: CQRS/Event Sourcing, ileri DB iç yapıları, OIDC/SAML/RBAC/ABAC, gRPC/WebSocket, FinOps, opsiyonel GraalVM, Kuşak 4 öncesi sistem tasarımı köprüsü, M9/M10 sıra düzeltmesi, STAR/log/stack-trace mülakat formatları, soft-check, mikro-değerlendirme, otomatik kurtarma tetiği, ve kaynak entegrasyon iş akışı (SOURCE_INGESTION.md) eklendi. Tam müfredat henüz dökülmedi. Her konu 5 katmanla (benzetme→görsel→üretim örneği→kod→mülakat) ve dört modla (Theory/Visual/Code/Interview, sekmeli) anlatılacak. Claude=beyin, Gemini=boşluk analizi/kaynak ön tarama, Codex=kod. Bir sonraki adım: iç tutarlılık kontrolü + tek bir örnek ders üretimi; Codex prototipine ancak proje hafızası tutarlıysa geçilir.
Son Güncelleyen / Tarih (Last Updated By / Date)

Güncelleyen: Codex GPT-5.5 (Uygulama/Prototip)
Sürüm: v0.3 + batch lesson factory scaffolding note
Tarih: 2026-05-23 (Batch lesson factory workflow scaffolding created)
Not: Her anlamlı işten sonra bu alan güncellenmeli.
