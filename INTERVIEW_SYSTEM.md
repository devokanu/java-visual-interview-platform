INTERVIEW_SYSTEM.md
Sürüm: v0.3
Mülakat Pratiği Sistemi
Bu dosya mülakat pratiğinin yapısını tanımlar. Amaç: öğrenciyi soru ezberletmek değil, Principal seviyesi cevap muhakemesi kazandırmak.

İki Mod

Öğrenme Modu (gömülü): Her dersin Interview Mode alanında 1 mülakat sorusu (LESSON_TEMPLATE §11).
Mock Interview Modu (deneme mülakatı): Birden çok soruyu birbirine bağlayan, gerçek mülakat akışını taklit eden ayrı bölüm.

Soru Seviyeleri

Seviye 1 — Tanım: "X nedir?" (kavramı kendi cümleleriyle açıklatır.)
Seviye 2 — Uygulama: "X'i ne zaman/neden kullanırsın?"
Seviye 3 — Ödünleşim (Trade-off): "X yerine Y ne zaman? Bedeli ne?"
Seviye 4 — Sistem Tasarımı: "Şu sistemi tasarla; X'i nereye koyarsın?"
Seviye 5 — Davranışsal/Liderlik: "Bir tasarım kararında ekiple anlaşmazlığı nasıl çözdün?" (Principal soft skills.)

Davranışsal/Liderlik Çerçevesi: STAR Metodu (YENİ v0.3)
Seviye 5 sorularında öğrenciye öğretilen yapı:

S — Situation (Durum): Olay neydi, bağlam neydi? (1-2 cümle)
T — Task (Görev): Senin görevin/sorumluluğun neydi? (1 cümle)
A — Action (Eylem): Tam olarak ne yaptın? "Biz" değil "ben" diliyle, adım adım.
R — Result (Sonuç): Sonuç neydi, ölçülebilir/somut?
STAR İlkeleri:
Hikâye ön plana çıkar, hipotetik değildir.
Eylem adımı en uzun bölümdür; sonuç sayı/somut etkiyle desteklenir.
Principal seviyesinde: etkiyle liderlik (otoriteyle değil) ve çatışma çözümü vurgulanır.
Sık hata: "biz" diliyle eylem belirsiz kalır; düzeltme: "ben şunu yaptım, takım şunu yaptı" ayrımı.

Her Mülakat Sorusu İçin Standart Yapı

Soru.
İyi Cevap İskeleti: maddelerle, ne söylenmeli (ezber metin değil, düşünce sırası).
Sık Yapılan Hata: öğrencinin tipik yanlışı.
Düzeltme: hatayı nasıl iyi cevaba çevirir.
Takip Soruları (Follow-up): mülakatçının muhtemel "peki ya..." sorusu.
5-Yaş Köprüsü: öğrenci tıkanırsa onu kavrama geri bağlayan en sade hatırlatma.

Cevap Çerçevesi (Öğrenciye Öğretilen Yöntem)
Karmaşık sorularda öğrenci şu iskeleti kullanır:

Netleştir: Soruyu/gereksinimi kısaca tekrarla.
Çerçevele: Hangi kavram/ödünleşim devrede?
Çöz: Yaklaşımı adım adım.
Ödünleşim: Alternatif + neden bunu seçtim.
Üretim gerçeği: Gerçekte ne ters gidebilir, nasıl önlerim/teşhis ederim.
Davranışsal sorularda STAR (bkz. §3) kullanılır.

Pratik Formatları (YENİ v0.3)
Mülakat pratiği yalnızca soru-cevap değildir. Aşağıdaki dört format da kullanılır:

6.1 Klasik Soru-Cevap Formatı (mevcut). §2 seviyelerine göre.
6.2 Log Analizi Formatı (YENİ v0.3)
Öğrenciye gerçekçi bir log parçası (kayıt çıktısı) verilir. Görev:
Log'ta dikkat çeken anormalliği bulmak.
Hangi servisin/komponentin şüpheli olduğunu söylemek.
Olası kök nedeni (root cause) hipotezlemek.
Bir sonraki teşhis adımını önermek (hangi metriğe/trace'e bakacağını).
İyi Cevap İskeleti: zaman çizelgesi → korelasyon → hipotez → doğrulama planı. Principal sezgisi: "log tek başına gerçeği söylemez; metrik + trace ile çapraz doğrula".
6.3 Stack Trace Debugging Formatı (YENİ v0.3)
Öğrenciye Java stack trace'i (hata yığını) verilir. Görev:
İstisnayı tanımak (sınıf, mesaj).
"Caused by" zincirini doğru okumak (en içteki neden ne?).
Hangi katmanda (web/servis/repo) kırıldığını göstermek.
Üretim ortamında bunu yeniden üretmek için ne gerekir, demek.
İyi Cevap İskeleti: en içteki nedenden başla → çağrı zincirini geri sar → kod yolunu tahmin et → değişken/durum hipotezi → doğrulama planı.
6.4 Sistem Tasarımı Simülasyonu Formatı (YENİ v0.3)
Öğrenciye bir kullanıcı senaryosu verilir (örn. "1M kullanıcılı kısa-link servisi tasarla"). Görev:
Bileşenleri adım adım yerleştirmek (interaktif sürükle-bırak veya kademeli ortaya çıkarma).
Her bileşen için: ne, neden, alternatifi, bedeli.
Ölçeklenme aşamalarını anlatmak (önce naif, sonra büyütme).
Hata senaryolarını tartışmak (ne kırılır, dayanıklılık nasıl?).
İyi Cevap İskeleti: gereksinim netleştir → trafik tahmini → naif çözüm → darboğaz → genişletme → ödünleşim.

Mock Interview Akışı

Sistem soruları otomatik seçer (öğrenci seçmez — karar yükü yok).
Tamamlanan modüllere göre seviye kademeli artar (M37'ye yaklaştıkça liderlik/sistem tasarımı ağırlığı artar).
Mock akışında dört format karışık çıkar: 1 kavram sorusu + 1 trade-off + 1 log/stack-trace + 1 sistem tasarımı + 1 STAR davranışsal (kademe açıldıkça).
Sonunda nazik, yapıcı geri bildirim: güçlü yönler + 1-2 gelişim alanı (utandırmadan).

Soru Bankası — Modüllere Eşleme (Sonradan Doldurulacak)

Her modül → ilgili sorular (henüz boş; CURRICULUM_BLUEPRINT §C ile genişletilecek).
Principal seviyesi sistem tasarımı + davranışsal/liderlik soruları ayrı havuz (M27–M37 ile beslenir).
Log analizi / stack-trace pratiği için ayrı havuz (M11, M24, M25, M26 modüllerinden beslenir).
Sistem Tasarımı Simülasyonu havuzu M16+b köprüsünden başlar, M27 sonrası ağırlaşır.
STAR havuzu M37 ve genel Principal liderlik konularını kapsar.

Değerlendirme İlkesi

Doğru/yanlış'tan çok muhakeme kalitesi ölçülür.
Ödünleşim farkındalığı ve "üretimde ne kırılır / nasıl teşhis ederim" düşüncesi en yüksek puanı alır — çünkü Principal seviyesini ayıran budur.
STAR cevaplarda: somut sonuç + bireysel eylem netliği yüksek puan alır; "biz" yanılgısı nazikçe düzeltilir.
Log/stack-trace cevaplarda: gözlemden hipotez kurma ve doğrulama planı puanlanır, sadece "şuradadır" demek yeterli değildir.
Sistem tasarımı simülasyonunda: ödünleşimleri sözlü/yazılı savunma puanlanır.
