VISUAL_ANIMATION_SYSTEM.md
Sürüm: v0.3
Konuya Özel Görsel ve Animasyon Sistemi
Bu dosya, görsellerin ve animasyonların nasıl olması gerektiğini tanımlar. Amaç: soyut kavramı gözle görülür kılmak, dikkati dağıtmamak.

Pazarlık Edilemez Kurallar (Non-Negotiable Rules)
Bu kurallar değiştirilemez:

Jenerik şablon yasak. Aynı görsel şablonu farklı konularda yeniden kullanmak yasaktır.
Her konunun özgün metaforu vardır. Her konu kendine özel bir görsel metafor alır (bespoke).
Modül-grubu metaforu yalnızca başlangıç noktasıdır (YENİ v0.3). Bir modül grubu için önerilen ortak metafor (örn. Concurrency için "Restoran"), o modül grubundaki HER bireysel konu için yine kendi özgün, somut metaforunu üretmek zorundadır. Modül-grubu metaforu konu metaforunun YERİNE GEÇMEZ; konu metaforu için zemin olarak kullanılır.
Kod ↔ görsel senkronu. Kod gösterildiğinde görsel anlatım kodla senkronize olur (hangi satır → hangi görsel hareket).
Dört mod sekmeli/akordeon yapıda. Her ders Theory / Visual / Code / Interview modlarını içerebilir; aynı anda tek mod görünür (bkz. LESSON_TEMPLATE).
Animasyon adım-temelli, öğrenci-kontrollü ve kavrama-özgü olur. Otomatik akan, kontrolsüz, genel-amaçlı animasyon yasak.
Görsel sahne ana öğretim alanıdır, dekoratif içerik değil. Görsel, dersin merkezindedir; metni süslemek için değildir.

Temel Felsefe

Her soyut kavramın bir somut görsel karşılığı vardır. Görselsiz soyut anlatım yasak.
Görsel açıklamayı taşır, süs değildir.
Öğrenme güçlüğü olan kullanıcı için: yavaş, tek odaklı, tekrar edilebilir.

Animasyon Altın Kuralları

Tek seferde tek hareket. Aynı anda birden çok şey hareket etmez.
Adım-temelli ve duraklatılabilir. Öğrenci her adımı kendi tıklayarak ilerletir; oto-hız yok.
Tekrar oynatılabilir. "Tekrar izle" her zaman var.
Anlatımla senkron. Hareket, o an anlatılan cümle/kod satırıyla eşleşir.
Dikkat dağıtıcı yok. Parıltı, ani renk, ses-otomatik-oynatma yok.
Durduğunda da anlamlı. Animasyon donsa bile her statik kare tek başına öğretici olmalı.

Görsel Dil (Tutarlı Sembol Sözlüğü)
Tüm platformda aynı kavram = aynı sembol/renk. (Not: bu, kural #1 ile çelişmez — temel ortak semboller tutarlıdır; konu metaforu özgündür.) Başlangıç sözlüğü:

Veri/nesne → kutu.
Thread (iş parçacığı) → koşan figür / şerit.
Kuyruk/queue → sıraya dizilmiş kutular.
Bekleme/kilit → kapalı kapı/asma kilit.
Hata → kırmızı kesik çizgi.
Bellek → raf/dolap.
Sözlük genişletilir; AI'lar yeni temel sembol uydurmaz, sözlüğe ekler. Ama her konu kendi özgün sahnesini bu sembollerle kurar.

Modül-Grubu Metaforları — Başlangıç Noktaları (YENİ v0.3)
Aşağıdaki Gemini önerileri yalnızca modül grubu için bir GİRİŞ metaforudur; her bireysel konu yine kendi özgün metaforuyla anlatılır. Bu liste jenerik şablon listesi DEĞİLDİR; bir başlangıç noktasıdır.

Temeller & OOP → Mutfak ve Aşçı (Tarif = Class, yemek = Object). Her konu yine kendi sahnesini kurar (örn. polymorphism için farklı aşçılar aynı tarifi farklı yorumlar değil; konuya özgü olarak farklı uygulanır).
Concurrency & JVM → Restoran Yönetimi (Thread = Garson, Lock = Tek fırın). 2-3 garsondan fazla gösterilmez; konuya özgü sahne korunur.
Spring & Web → Lojistik Merkezi (Controller = Sipariş gişesi, IoC/DI = Vardiya Şefi).
Data & Messaging → Kargo Bantları (Kafka = Dev kargo bandı; önce tek partition).
Dağıtık Sistemler → Otoyol Sistemi (Circuit Breaker = Kaza yönlendirmesi; en fazla 3 servis/şehir gösterilir).
Veritabanı İç Yapıları (M17+a) → Kütüphane/Arşiv Sistemi (önerilen başlangıç; B-Tree = sıralı raf indeksi, LSM = günlük defter + dolap birleştirmesi).
Virtual Threads (M8) → Taşıyıcı kamyonlar (OS thread) ve kargolar (virtual thread): platform thread bloke olmaz, kargolar binip iner.
Kural: Bir konuya geçildiğinde grup metaforu tek başına yetmez; o konu için "Hangi soyut fikir görselleşiyor? Bu konuya özgü metafor ne?" soruları yine doldurulur (bkz. §5).

Her Kavram İçin Görsel Karar Şablonu
Her görsel için doldurulur:

Hangi soyut fikir görselleşiyor?
Bu konuya özgü metafor ne? (jenerik değil — modül-grubu metaforu varsa onun üstüne kurulur.)
Hangi gerçek hayat benzetmesine bağlı? (LESSON_TEMPLATE Theory Mode ile aynı benzetme.)
Animasyon mı, statik mi? (Süreç/zaman varsa animasyon; yapı varsa statik diyagram.)
Adım sırası: 1→2→3, her adım öğrenci tıklamasıyla.
Kod senkron haritası: Code Mode'daki hangi satır hangi görsel adıma denk?
Durdurulabilir kareler: her adımda anlamlı duruş.
Modül-grubu metaforuna bağlı mı? Evet ise nasıl bağlanıyor, nerede ondan ayrılıyor?

Erişilebilirlik (Accessibility) Kuralları

Yüksek kontrast, renk-körlüğüne dayanıklı palet (renge tek başına anlam yükleme; şekil/etiket de ekle).
Her görselin metin alternatifi (alt text) ve kısa yazılı açıklaması olur.
Hareket hassasiyeti olanlar için "animasyonları azalt" seçeneği.
Büyük tıklama alanları, sade düzen.

Teknik Yöntem (Açık Soru)

Yöntem (CSS/SVG animasyon mı, hafif kütüphane mi) henüz kararlaştırılmadı → PROJECT_CONTEXT.md §15 (O5).
İlke: hafif, bağımlılığı az, içerik-odaklı, adım-temelli kontrolü destekleyen. Karar Codex prototip aşamasında, sonra DECISIONS.md'ye.

Gemini'den Beklenen (Sonraki Turlar)

Her modül grubu için konuya özgü önerilen görsel/animasyon yaklaşımı (boşluk analizi çıktısı — v0.3'te başlangıç metaforları alındı).
Mevcut sembol sözlüğüne alternatifler ve eksikler.
Özellikle ileri konular (virtual threads, JMM, distributed tracing, saga/outbox, CQRS/Event Sourcing, B-Tree/LSM, gRPC/WebSocket) için özgün metafor önerileri — modül-grubu metaforunun YERİNE değil, ÜSTÜNE.
