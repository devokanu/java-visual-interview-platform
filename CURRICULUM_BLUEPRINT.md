CURRICULUM_BLUEPRINT.md
Sürüm: v0.3
Müfredat Taslağı — Yalnızca Üst Düzey
Bu dosya tam ders dökümü içermez. Sadece modül grupları, ön koşul mantığı ve sonradan genişletilecek alanlar tanımlanır. v0.3'te Gemini boşluk analizinden kontrollü filtreyle seçilen alanlar entegre edildi (yeni modüller alt-tanımlayıcılarla işaretlendi; M0–M37 ana numaralandırması korundu).
A. Modül Grupları (High-Level Module Groups)
Her modül bir öncekine yaslanır. Numara = önerilen sıra. Yeni v0.3 eklemeleri "(YENİ v0.3)" etiketiyle veya alt-tanımlayıcı (örn. M16+a) ile gösterilir.
Kuşak 0 — Temeller / Kurtarma Bölgesi
M0 — Bilgisayar ve Program Nedir? Program, bellek (memory: bilgisayarın geçici hafızası), girdi/çıktı en sade haliyle.
M1 — Java Dili Temelleri. Söz dizimi (syntax: dilin yazım kuralları), değişkenler, tipler, koşullar, döngüler.
Kuşak 1 — Nesneye Dayalı Düşünme
M2 — OOP Temelleri. Sınıf/nesne (class/object), kapsülleme, kalıtım, çok biçimlilik — gerçek hayat benzetmeleriyle.
M3 — SOLID ve Temiz Kod. İyi tasarım sezgisi.
M4 — Collections, Generics, Streams. Liste/harita/küme; tip güvenliği; veri akışı (stream: veri üzerinden akan işlem zinciri).
Kuşak 2 — Modern Java ve Çalışma Zamanı Gerçekleri
M5 — İstisnalar, I/O, Serileştirme. Hata yönetimi; dosya/veri okuma-yazma.
M6 — Modern Java Özellikleri (Java 21+). Records (sade veri taşıyıcı sınıf), sealed types (kalıtımı sınırlama), pattern matching (kalıba göre eşleştirme), switch expressions, text blocks. Neden: güncel mülakatlar modern dili bekler.
M7 — Concurrency / Çoklu İş Parçacığı. Thread (iş parçacığı), thread pool (işçi thread havuzu), kilitler, eşzamanlı koleksiyonlar, backpressure (aşırı yükü yavaşlatma).
M8 — Virtual Threads ve Structured Concurrency. Virtual thread (sanal iş parçacığı: çok hafif, milyonlarca açılabilen thread); structured concurrency (ilişkili görevleri tek bir kapsamda yönetip birlikte iptal/bekleme). İlgili yerlerde M7 üstüne kurulur.
M9 — JVM İçi Yapısı. (DEĞİŞTİ v0.3: önceki M10 buraya alındı.) Çöp toplama (garbage collection: kullanılmayan belleği temizleme), sınıf yükleme, JIT (çalışırken kod hızlandırma), bellek bölümleri (heap/stack/metaspace).
M10 — Java Memory Model (JMM). (DEĞİŞTİ v0.3: önceki M9 buraya alındı.) Bellek modeli: thread'lerin belleği nasıl gördüğü, volatile, happens-before (bir işlemin diğerinden önce görünmesi garantisi), görünürlük/sıralama sorunları. Önce M9 (fiziksel/çalışma zamanı yapısı) anlaşılmış olur.
M11 — JVM Profilleme ve Üretim Teşhisi. Profiling (darboğaz ölçme), heap dump (bellek anlık görüntüsü), thread dump, GC log analizi, üretimde "neden yavaş/neden çöktü" teşhisi.
Kuşak 3 — Üretim İskeleti (Spring)
M12 — Build Araçları ve Ekosistem. Maven/Gradle, bağımlılık yönetimi.
M13 — Spring Core / Spring Boot. Dependency Injection (bağımlılık enjeksiyonu: nesneleri dışarıdan verme), IoC, bean yaşam döngüsü.
M14 — Web Katmanı / REST + OpenAPI. HTTP, controller'lar, doğrulama; OpenAPI (API'nin makine-okur sözleşmesi/dokümantasyonu).
M15 — Veri Katmanı. JDBC, JPA/Hibernate, transaction (işlem: ya hep ya hiç bütünlüğü), connection pool (bağlantı havuzu).
M16 — Spring Security + OAuth2 / JWT. Kimlik doğrulama/yetkilendirme; OAuth2 (yetki devri protokolü); JWT (imzalı, taşınabilir kimlik bileti).
M16+a — Kurumsal Kimlik ve Erişim (YENİ v0.3). OIDC (OpenID Connect: OAuth2 üstüne kimlik katmanı), SAML (kurumsal SSO için XML tabanlı kimlik protokolü), RBAC (Role-Based Access Control: role göre erişim), ABAC (Attribute-Based Access Control: özniteliklere göre erişim). M16'nın hemen ardından gelir; M16 ön koşuldur.
Kuşak 3.5 — Sistem Tasarımına Mini Giriş / Ölçeklenme Sezgisi (YENİ v0.3 KÖPRÜ)
M16+b — Sistem Tasarımına Mini Giriş. Tek sunucudan birkaç sunucuya geçiş sezgisi; "yatay ölçeklenme nedir, neden gerekir", yük dengeleyici (load balancer) tek cümlelik tanım, önbellek (cache) tek cümlelik tanım, kuyruk (queue) tek cümlelik tanım. AMAÇ: Kuşak 4'teki Kafka/Redis/dağıtık veri konularına zemin oluşturmak. TAM sistem tasarımı DEĞİL — yalnızca sezgi. Tam M27 yerinde durur (Kuşak 6).
Kuşak 4 — Veriyle Ölçeklenmek
M17 — Veritabanları. SQL, indeksleme, normalizasyon, NoSQL temelleri.
M17+a — İleri Veritabanı İç Yapıları (YENİ v0.3). B-Tree (sıralı indeks ağacı: SQL veritabanlarında yaygın), LSM Tree (Log-Structured Merge-Tree: yazma ağırlıklı NoSQL'lerde yaygın), MVCC (Multi-Version Concurrency Control: aynı satırın birden çok sürümünü tutarak okur-yazar çakışmasını azaltma), izolasyon seviyeleri (read uncommitted/committed, repeatable read, serializable; dirty read, non-repeatable read, phantom read). M17 ön koşuldur.
M18 — Caching. Yerel/dağıtık önbellek, Redis, cache invalidation (önbellek tazeleme/geçersiz kılma).
M19 — Mesajlaşma ve Event-Driven Architecture. Kuyruklar, Kafka, idempotency (tekrarda sonucu bozmama); event-driven (olay-güdümlü mimari: bileşenler olaylarla haberleşir).
M20 — Dağıtık Veri Tutarlılığı Desenleri. Outbox pattern (veritabanı + mesajı güvenle birlikte yayma), Saga pattern (birden çok servise yayılan işlemi adım adım, telafiyle yürütme).
M20+a — CQRS ve Event Sourcing (YENİ v0.3). CQRS (Command Query Responsibility Segregation: okuma ve yazma modelini ayırma); Event Sourcing (durumu son hâl olarak değil, durum değişim olaylarının tarihçesi olarak saklama). Ne zaman uygundur, bedeli ne; Outbox/Saga ile ilişkisi. M19 ve M20 ön koşuldur.
M21 — API Olgunluğu. Versiyonlama, sayfalama (pagination), idempotent uçlar, hata sözleşmeleri.
M21+a — Protokol Alternatifleri (YENİ v0.3). gRPC (HTTP/2 + protocol buffers üstünde tip-güvenli, ikili RPC), WebSocket (uzun ömürlü çift yönlü bağlantı). REST ile karşılaştırma; ne zaman hangisi. M14 ve M21 ön koşuldur.
Kuşak 5 — Güven, Test ve Görünürlük
M22 — Test. Birim/entegrasyon testi, mock (taklit nesne), test piramidi, TDD.
M23 — Testcontainers ve Contract Testing. Testcontainers (testte gerçek bağımlılıkları —DB, Kafka— tek kullanımlık konteynerde çalıştırma); contract testing (sözleşme testi: servisler arası arayüzün bozulmadığını doğrulama).
M24 — Gözlemlenebilirlik (Observability Stack). Log (kayıt), metrik, monitoring; üç ayak: loglar + metrikler + izler.
M25 — Distributed Tracing. Dağıtık izleme: bir isteğin birçok servis arasındaki yolculuğunu uçtan uca takip etme (trace/span).
M26 — Performans ve Profilleme (Uygulama Seviyesi). Darboğaz bulma, ölçme (M11 ile bağlantılı).
Kuşak 6 — Dağıtık Sistemler ve Dayanıklılık
M27 — Sistem Tasarımı Temelleri (TAM). Ölçeklenme, yük dengeleme, CAP teoremi, tutarlılık modelleri. (NOT v0.3: Bu modül Kuşak 6'da KALIR. Erken köprü M16+b'dir; tam içerik buradadır.)
M28 — Dağıtık Sistemler / Mikroservisler. Servis keşfi, konsensüs temelleri.
M29 — Resilience Patterns (Dayanıklılık Desenleri). Circuit breaker (devre kesici: arızalı servisi koruma), retry (yeniden deneme), timeout, bulkhead (bölmeleme), rate limiting (hız sınırlama).
M30 — API Gateway ve Edge Concerns. API gateway (tüm isteklerin geçtiği giriş kapısı); edge: kimlik, hız sınırı, yönlendirme, TLS sonlandırma.
M31 — Bulut, Konteyner, Dağıtım. Docker, Kubernetes, CI/CD.
M31+a — Cloud-Native Optimizasyon (OPSİYONEL, YENİ v0.3). GraalVM (Java'yı yerel ikiliye derleyen sanal makine), Spring Native (Spring uygulamalarını yerel ikili olarak başlatma); soğuk başlatma (cold-start), bellek ayak izi, serverless senaryoları. NOT: Bu modül opsiyoneldir; ana yol ön koşul zincirinde DEĞİLDİR. Öğrenci bu adımı atlayabilir.
Kuşak 7 — Mimari ve Principal Seviyesi Muhakeme
M32 — Modular Monolith ve Domain-Driven Design (DDD). Modular monolith (tek dağıtım, içeride net modüller); DDD (alan-güdümlü tasarım: yazılımı iş alanının diline ve sınırlarına göre kurma — bounded context, aggregate).
M33 — Mimari Kararlar: ADR ve Trade-off Muhakemesi. ADR (Architecture Decision Record: bir mimari kararı, gerekçesini ve sonuçlarını yazılı kaydetme); her kararın bedelini görme.
M33+a — FinOps ve Bulut Maliyet Optimizasyonu (YENİ v0.3). FinOps (mali operasyonlar: mühendislik kararlarının bulut maliyetine etkisini görünür kılma ve yönetme); maliyet bilinci, sağ-boyutlandırma (right-sizing), depolama/ağ/işlem maliyet ödünleşimi, mimari kararların finansal bedelini savunma. Principal seviyesi liderlik kapsamında M33 ve M37 ile ilişkilidir.
M34 — Release Stratejileri ve Feature Flags. Feature flag (özelliği kodu değiştirmeden açıp kapama anahtarı); blue-green, canary, rolling deployment.
M35 — Incident Response (Olay Müdahalesi). Üretim arızasında teşhis-müdahale-iletişim; postmortem (suçlamasız kök-neden analizi); on-call temelleri.
M36 — Legacy Modernization (Eski Sistem Modernizasyonu). Strangler fig (eskiyi parça parça yenisiyle sarıp değiştirme), kademeli göç, riskli değişiklikleri güvenle yönetme.
M37 — Principal Liderlik ve Teknik Karar Verme. Teknik yön belirleme, ekip hizalama, anlaşmazlık çözme, etki ile liderlik (otoriteyle değil), mentorluk, kararları yazıyla savunma. (Principal mülakatın davranışsal/liderlik ekseni; STAR metodu burada da kullanılır — bkz. INTERVIEW_SYSTEM §3.)
B. Ön Koşul Mantığı (Prerequisite Logic)
Her modül bir öncekinin bitti tanımını karşılamadan açılmaz.
Doğrusal omurga: M0 → M1 → … → M37; ek modüller (M16+a, M16+b, M17+a, M20+a, M21+a, M31+a, M33+a) ana sıraya değil, ait oldukları modülün hemen ardından gelir.
Bağımlılık örnekleri: M8 ⟵ M7; M10 ⟵ M9 (v0.3'te düzeltildi); M11 ⟵ M9; M16+a ⟵ M16; M17+a ⟵ M17; M20+a ⟵ M19+M20; M21+a ⟵ M14+M21; M25 ⟵ M24; M26 ⟵ M11; M27 ⟵ M16+b (köprü) + M19/M20 sezgisi.
Opsiyonel: M31+a ana ön koşul zincirinde DEĞİLDİR; "Opsiyonel" etiketiyle gösterilir, atlanabilir.
Prerequisite Rescue (Ön Koşul Kurtarma): Bir derste öğrenci takılırsa, sistem hangi önceki kavramın eksik olduğunu tespit eder, ilgili mini-derse yönlendirir, sonra otomatik geri getirir.
Otomatik Tetik (YENİ v0.3): Mikro-değerlendirmede yanlış cevap → kurtarma akışı kendiliğinden devreye girer; öğrencinin "Anlamadım" butonuna basması beklenmez.
C. Sonradan Genişletilecekler (To Be Expanded Later)
Her modülün tam ders listesi (henüz yok — kasıtlı).
Her ders için LESSON_TEMPLATE doldurulması.
Modül sonu "üretimde ne ters gider?" senaryoları.
Kaynak-tabanlı içerik genişletmesi (kullanıcı kaynak verince) — SOURCE_INGESTION.md akışıyla.
Mülakat soru bankasının modüllere eşlenmesi (bkz. INTERVIEW_SYSTEM.md).
Aralıklı tekrar zamanlaması ve "Hızlı Hatırlatma Kartları".
M8/M10/M20+a gibi ileri konuların giriş seviyesi köprü dersleri (öğrenme güçlüğü için ekstra basamak).
M16+b'nin tek bir sezgisel ders olarak somutlaştırılması (önce taslak, sonra dolu hâl).
D. Henüz Yapılmayacaklar (Explicit Non-Goals For Now)
Tek tek ders metinleri yazmak.
Her kod örneğini üretmek.
Animasyonları kodlamak.
Tam müfredatı bu turda dökmek.
Bunlar tutarlılık kontrolü ve stack kararından sonra başlar.
