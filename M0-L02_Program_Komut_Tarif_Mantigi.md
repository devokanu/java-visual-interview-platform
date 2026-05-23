Ders: M0-L02 — Program Nedir? Komut ve Tarif Mantığı (Final İçerik Adayı)

1. Üst Bilgi (Lesson Header)

Ders Kodu: M0-L02
Ait Olduğu Modül: M0 — Bilgisayar ve Program Nedir?
Ön Koşullar: M0-L01 (Bilgisayar, Program ve Backend Nedir?)
Tahmini Süre: 12-15 dk (kendi hızında, isterse daha uzun)
Tek Cümlelik Hedef: "Bu dersin sonunda öğrenci 'program' kavramını sihir değil sıralı ve açık komutlar olarak anlayabilecek; bir bilgisayarın kendi başına 'anlamadığını', yalnızca yazılanı sırayla uyguladığını kendi cümleleriyle açıklayabilecek; ve bu temel fikrin ileride hangi derin konulara bağlanacağını sezebilecek."
Kaynak Referansı: Yok (bu derste dış kaynak kullanılmadı).


2. Ön Koşul Kontrolü (Prerequisite Check)
Tek hafif kontrol: M0-L01'deki temel sahne aklında mı?
Kontrol: "M0-L01'de bir sandviç gişesi sahnesi öğrendik. Şu cümle sana tanıdık geliyor mu? 'Sen istek atarsın, arka taraftaki bilgisayar cevap üretir.'"

Cevap Evet / Sanırım evet → Derse devam.
Cevap Hatırlamıyorum / Emin değilim → Otomatik mini-hatırlatma: "Sen ön taraftasın; backend arka taraftaki kuralları uygulayan kısımdır." Tek cümle yeter, sonra devam ederiz.

Bu kontrol seni durdurmaz.

3. Kanca — Gerçek Hayat Sahnesi (Hook)
Bir çocuğun var. Elinde küçük bir oyuncak robot. Robotun arkasında bir yarıkta küçük kartlar var. Sen kartların üstüne basit komutlar yazıyorsun:

"Bir adım ileri yürü. Sağa dön. Otur."

Kartları sırasıyla robotun yarığına koyuyorsun. Robot kartları okuyor. Birinci komutu yapıyor. İkinci komutu yapıyor. Üçüncü komutu yapıyor. Bitince duruyor.
Robot ne çok zeki ne de aptal. Yalnızca senin yazdığını yapar. Hiçbir şey "kendiliğinden" olmaz.
Bu sahneyi aklında tut. Bu dersin tamamını bu küçük robotun üstüne kuracağız. (M0-L01'deki sandviç gişesi sahnesi hâlâ duruyor; bu derste onu birebir tekrar etmiyoruz, yalnızca arada hatırlatacağız.)

4. 5 Yaşına Açıklama (Explain Like I'm 5) — ZORUNLU
Bilgisayar küçük bir robot gibidir. Sen ne yazarsan onu yapar. Yanlış yazarsan yanlış yapar. Kendi başına anlamaz. Düşünmüş gibi durur ama aslında sadece kartlarda yazanı okur.
(Görsel: Solda küçük bir çocuk kartlara yazıyor. Sağda robot kartı okuyup yapıyor. Robotun başının üstünde düşünce baloncuğu YOK — sadece okuduğu kart var.)

Not: Bu sade açıklama "her şey bu kadardır" demek değildir. Bu yalnızca kapıdır. Aynı kavram bu ders boyunca yavaş yavaş derinleşecek; ders sonunda ileride hangi büyük konulara bağlandığını da göstereceğiz.


5. THEORY MODE (Teori Modu) — SEKME 1
Bu dersin kalıcı benzetmesi: Komut Kartlı Robot
Bu metafor sadece bu derse aittir. M0-L01'deki sandviç gişesinden farklı, çünkü bu derste bilginin akışını değil komutun yapısını anlatıyoruz.
Benzetme → Gerçek Kavram Eşleme Tablosu
Komut Kartlı Robot sahnesiBilgisayar dünyasındaki karşılığıSen, kart yazan kişiProgramcı / developer — komutları yazan kişiÜstüne yazdığın her bir kartKomut (instruction): bilgisayara verilen tek bir net işSıralı kart destesiProgram: sırayla uygulanan komutlar listesiRobot, kartı okuyup yapan oyuncakBilgisayar / computer: komutları sırayla uygulayan makineRobotun "düşünmeden" yapmasıDeterminizm: aynı komutu verirsen aynı sonucu üretir — sihir yok
Adım Adım Teknik Açıklama
Her cümleyi yavaşça oku. Acelen yok.
Program nedir?
Bir program, bilgisayara "şunu yap, sonra şunu yap, sonra şunu yap" diyen sıralı komutlar listesidir. Robotun yarığına koyduğun kart destesi gibidir. Tek bir kâğıt değil; sıralı bir deste.
Komut nedir?
Bir komut, bilgisayara verilen tek bir net iş'tir. "Bir adım ileri yürü" tek bir komuttur. "Önce yürü sonra dön sonra otur" üç komuttur.
Sıra neden önemli?
Robotun komutları sırayla okuduğunu unutma. "Otur. Sağa dön. İleri yürü." dersen robot önce oturur, oturduğu yerden sağa döner ve ilerlemeye çalışır — bu garip görünür. Aynı kelimeler, farklı sırayla, farklı sonuç verir. Bilgisayar yazdığın sırayı izler.
Açıklık neden önemli?
"Çay yap" dersen robot ne yapacağını bilemez (çayı nereden alacak, suyu nasıl ısıtacak?). "Su ısıt → bardağa çay poşeti koy → suyu dök → bekle" dersen robot her adımı uygulayabilir. Bilgisayar belirsiz komutu kabul etmez.
"Bilgisayar düşünür mü?"
Hayır. Robot zekiymiş gibi durabilir ama yalnızca kartı okur ve yapar. Bilgisayar düşünmez; uygular. Bazı programlar çok karmaşık olabilir; ama bilgisayar yine de yazılmış kuralları ve komutları çalıştırır.
M0-L01 ile Köprü (kısa hatırlatma)
M0-L01'deki sandviç gişesinin arka tarafındaki mutfak vardı, hatırla. O mutfak da aslında bir program tarafından çalıştırılıyor: "İstek geldi mi? → Sandviç türünü oku → Tarifteki adımları sırayla uygula → Cevap döndür." Yani backend = bir veya daha çok programdır. Bu derste o programın içine bakıyoruz.
Derinleşme Yolu (Depth Ladder)
Bu ders basit görünür, ama gerçek bir Principal mühendisin günlük muhakemesi tam buradan başlar. "Program = sıralı komutlar" fikri, ileride şu büyük konuların hepsine tek tek dönüşür:

Instruction order — komut sırası. Bu ders bunu açıkça öğretti. M1'de Java söz diziminde, M7'de eşzamanlılıkta ("aynı anda birden çok deste") yeniden karşına gelecek.
Control flow — akış kontrolü. Robot her zaman 1→2→3 sırasını izlemez; bazen "eğer X ise A, değilse B" diyebilmesi gerekir. M1'de if/while ile bunu öğreneceğiz.
Memory — bellek. Robotun bir önceki kartı "hatırlaması" gerekir. Bilgisayarda da değerler bellek denilen yere yazılır. M9'da JVM bellek bölümleri, M10'da Java Memory Model'i derinleştireceğiz.
JVM execution — Java kodunun çalışma zamanı. Yazdığın Java kodu doğrudan robota gitmez; önce JVM (Java Virtual Machine — Java'nın "okuyucu" makinesi) tarafından çevrilir ve uygulanır. M9'da bu sahnenin perdesini aralayacağız.
Debugging — hata ayıklama. Robot beklenmedik bir şey yaparsa "hangi kartta ne oldu?" diye sormak gerekir. M11 (profilleme), M24 (gözlemlenebilirlik), M25 (distributed tracing) bunu Principal seviyesinde ele alır.
Architecture reasoning — sistem davranışı tasarlama. Tek robot değil, yüzlerce robot birbirine bağlıyken kart destelerini nasıl planlarsın? M27 (sistem tasarımı), M32 (DDD/modular monolith), M33 (ADR ve trade-off muhakemesi) bunu çözer.

Yani bugün öğrendiğin "program = kart destesi" fikri, ilerideki derinlik merdiveninin en alt basamağıdır. Üstüne yıllar boyu çıkacaksın. Bu yüzden sade ama sağlam olması önemlidir.

6. VISUAL MODE (Görsel Modu) — SEKME 2
Bu derse özgün metafor: Komut Kartlı Robot Sahnesi
Bu sahne yalnızca bu derse aittir. Sandviç gişesini birebir tekrar etmez. Görsel; metni süslemek için değil, ana öğretim alanı olarak duracaktır.
Visual Stage Layout (Codex Prototip Spesifikasyonu)
+-------------------------------------------------------------+
|                                                             |
|  [SOL BÖLGE]      [ORTA BÖLGE]        [SAĞ BÖLGE]           |
|  Talimat veren    Komut listesi /     Komutu uygulayan      |
|  kişi (çocuk      tarif kartı /       basit robot           |
|  programcı)       kart destesi                              |
|                                            +-----------------+
|                                            | YAN AÇIKLAMA   |
|                                            | PANELİ         |
|                                            | (aktif kavram  |
|                                            |  + 1 cümle)    |
|                                            +-----------------+
|                                                             |
+-------------------------------------------------------------+
|        [ALT BÖLGE — ADIM KONTROLLERİ]                       |
|  ◀ Geri    ⏸ Duraklat / ▶ Sonraki Adım    🔁 Tekrar İzle   |
+-------------------------------------------------------------+
Bölge tanımları (Codex için bağlayıcı):

Sol bölge — Talimat veren kişi: Sabit çocuk figürü. Elinde kalem, önünde kart bloku. Konuşma değil, yazma eylemi vurgulanır (programcılık konuşmak değil, yazmaktır).
Orta bölge — Komut listesi / Tarif kartı: Üst üste dizili 3-4 kart. Her kartta tek bir komut yazılıdır. Aktif olan kart hafifçe öne çıkarılır (sarı kenar vurgusu).
Sağ bölge — Robot: Basit, sevimli bir robot. Yarıkta okuduğu kartı yansıtan küçük bir ekran. Robotun başında düşünce balonu yoktur — bu önemli; "düşünmez, uygular" mesajını korur.
Yan açıklama paneli: Sadece aktif kavram adı + tek cümle. Aşırı yük yok.
Alt bölge — Adım kontrolleri: Geri, Sonraki Adım, Tekrar İzle. Otomatik akış yok.

Animasyon — Adım Adım, Öğrenci Kontrollü
Her adım öğrencinin "Sonraki Adım" tuşuyla ilerler.

Adım 1 — Sol bölge aktif. Çocuk kartlara üç komut yazıyor: 1) "İleri yürü" — 2) "Sağa dön" — 3) "Otur". Yan panel: "komut — bilgisayara verilen tek net iş."
Adım 2 — Sol → Orta geçiş. Kartlar sırasıyla ortadaki destenin üstüne yerleşir. Yan panel: "program — sıralı komutlar listesi."
Adım 3 — Orta bölgede vurgu. İlk kart ("İleri yürü") sarı çerçeveyle öne çıkar; aynı kart sağdaki robotun ekranına yansır. Yan panel: "robot ilk kartı okuyor."
Adım 4 — Sağ bölgede aksiyon. Robot bir adım ileri gider. Yan panel: "komut uygulandı."
Adım 5 — Orta + Sağ. İkinci kart aktif olur; robot sağa döner. Yan panel: "ikinci komut uygulandı."
Adım 6 — Orta + Sağ. Üçüncü kart aktif olur; robot oturur. Yan panel: "üçüncü komut uygulandı."
Adım 7 — Kartlar bitti. Deste boş, robot duruyor. Yan panel: "program bitti."
Adım 8 — Karşı örnek (kısa). Aynı üç kart farklı sırayla diziliyor: "Otur → Sağa dön → İleri yürü." Robot sırayla yapıyor; sonuç tuhaf görünüyor. Yan panel: "sıra değişti, sonuç değişti."

Her adımda "Tekrar İzle" butonu vardır. Donsa bile her kare tek başına öğreticidir.
Görsel Sembol Sözlüğü (tutarlı)

Kart = tek komut (yeni sembol; sözlüğe eklenir).
Deste = program (yeni sembol; sözlüğe eklenir).
Robot = komutları yürüten bilgisayar (yeni sembol; sözlüğe eklenir).
Sarı çerçeve = aktif satır / aktif komut (genel platform vurgusu).


7. CODE MODE (Kod Modu) — SEKME 3

Bilişsel yük notu: Bu derste public, static, void gibi kelimeleri öğrenmeyeceğiz. Şimdilik onları tarif defterindeki resmi damgalar gibi düşün. İleride tek tek öğreneceğiz.

Şimdi yukarıdaki sahneyi çok basit bir Java kodunda göreceğiz. Amaç kodun her harfini ezberlemek değil; kartların sıralı şekilde uygulandığını koda dönüşmüş hâliyle görmek.
javapublic class RobotProgrami {

    public static void main(String[] args) {
        System.out.println("İleri yürü");
        System.out.println("Sağa dön");
        System.out.println("Otur");
    }
}
Her satır ne diyor?

public class RobotProgrami { ... } — "Bu, robotun programının yazılı olduğu sayfanın başlığıdır." (Sınıfı şimdilik 'kart destesinin kapağı' olarak hayal et.)
main(String[] args) — "Robot ilk olarak buradan okumaya başlar." Programın başlangıç noktasıdır.
System.out.println("İleri yürü"); — Birinci kart. Robota "İleri yürü" komutunu verir.
System.out.println("Sağa dön"); — İkinci kart. Robota "Sağa dön" komutunu verir.
System.out.println("Otur"); — Üçüncü kart. Robota "Otur" komutunu verir.

Üç satır = üç komut. Yukarıdan aşağıya sırayla çalışır. Sırayı değiştirirsen sonuç değişir.
İlerleyen Yol Notu (Derinleşme Tohumu)
Bu kodu yazdığında robot doğrudan onu okumuyor. Arada bir çevirici var. Java kodunu önce JVM (Java Virtual Machine — kodu okuyup uygulayan görünmez bir okuyucu) anlamlı küçük adımlara çevirir; sonra o adımlar gerçek robotun (CPU = bilgisayarın işlemcisi) anladığı dile dönüşür. Bugün bunu öğrenmiyoruz; ama her println satırının arkasında bu çeviri zinciri var. M9'da bu perdeyi aralayacağız.
Görsel ↔ Kod Senkron Haritası
Kodu okurken sahne de adım adım ilerler. Aktif kod satırı sarı vurgu alır; aynı anda sahnede ilgili adım çalışır.
Aktif kod satırıAktif sahne adımıAktif yan panel cümlesimain(...) başlangıcıAdım 1–2 (kartlar yazılıyor ve diziliyor)"program — komutlar sıraya konuyor"println("İleri yürü");Adım 3–4"robot ilk komutu uyguluyor"println("Sağa dön");Adım 5"ikinci komut"println("Otur");Adım 6"üçüncü komut"main(...) sonuAdım 7"program bitti"
Yani kod, az önce izlediğin sahnenin yazılı hâlidir. Sadece harflerle.

8. Üretim Örneği (Production Example) — ZORUNLU
Trendyol uygulamasında bir butona basıyorsun: "Sepete Ekle."
Görünmeyen tarafta, o buton bir programı tetikler. Program kartları şuna benzer:

"Ürün hâlâ stokta mı, kontrol et."
"Müşterinin sepetini bul."
"Bu ürünü sepete koy."
"Yeni sepet sayısını telefona dön."

Dört kart. Sırayla. Her biri tek bir net iş.
Sıra bozulursa gerçekte ne olur? — Üç gerçek senaryo
Bu örnekler korkutmak için değildir; sıranın neden gerçekten önemli olduğunu Principal seviyesinde göstermek içindir. Hepsinde sistem çare üretebilir; ama bu çareyi en başta yazmamak için adımların doğru sırada olması gerekir.
Senaryo 1 — Önce ödeme alıp sonra stok kontrolü:
Bir backend programı yanlışlıkla şu sırada yazılmış olsun: 1) Önce ödemeyi al. 2) Sonra ürünün stokta olup olmadığını kontrol et. Eğer stok kalmadıysa, sistemin bir iade veya telafi işlemi yapması gerekir. Bu da kayıtların temiz tutulmasını zorlaştırır. Doğru sıra: önce stok kontrolü, sonra ödeme.
Senaryo 2 — Önce cevap dönüp sonra veriyi kaydetmeye çalışmak:
Program 1) Kullanıcıya "siparişin alındı" cevabı dönüyor, 2) Sonra siparişi veritabanına yazmaya çalışıyor. İkinci adımda bir sorun olursa onay verilmiş ama kayıt yapılmamış olur. Sistem daha sonra eksik kaydı fark edip düzeltme adımı çalıştırmak zorunda kalır. Doğru sıra: önce güvenli kayıt, sonra kullanıcıya onay.
Senaryo 3 — Hata durumunda yarım kalmış işlem:
Program 1) Bir hesaptan tutar düşüyor, 2) Karşı hesaba aynı tutarı ekliyor. İkinci adım sırasında bir bağlantı kopukluğu olursa ilk adım uygulanmış, ikincisi olmamış olur. Bu durumda veri tutarsız hale gelebilir ve sistemin bir düzeltme adımı çalıştırması gerekir. Bu yüzden Principal mühendisler "ya hep ya hiç" (transaction — işlem) ilkesi üzerine düşünür. M15'te bunu detaylı göreceğiz.
Sonuç: Gerçek bir backend'de sıra yalnızca "tuhaf görünüm" üretmez; sistemin sonradan telafi, iade veya düzeltme adımları çalıştırmasına neden olur. Bu yüzden bir Java Backend Engineer için "komut sırası" göründüğü kadar masum bir konu değildir.

9. Üretimde Hata Ayıklama Bakışı (Production Debugging Perspective)
Bir Principal şu soruyu sorar: "Bu kartlardan biri yanlış olursa nasıl anlarız?"
İki temel belirti:

Yanlış sonuç: "Sepete Ekle" basıldı ama sepet boş kaldı — bir kart atlanmış veya yanlış yazılmış olabilir.
Hiç sonuç yok: Buton bastın, bir şey olmadı — program bir kartta takıldı.

Programın hangi kartta takıldığını anlamak için M0-L01'de bahsettiğimiz log (kayıt defteri) kullanılır. Şimdilik sadece şunu bil: bilgisayar her kartı uygularken sessizce küçük bir not bırakır. Detayını sonraki modüllerde göreceğiz.

10. Senior / Principal Trade-off Bölümü (Trade-off Section)
İki ayrı trade-off var. İkisini birden taşımak Principal sezgisini büyütür.
Trade-off 1 — Komutun ne kadar detaylı olacağı

Çok kısa komut: "Çay yap." Hızlı yazılır ama belirsiz. Robot ne yapacağını bilemez.
Çok detaylı komut: "Su ısıt → bardak al → çay poşeti koy → 95 derecede suyu dök → 3 dakika bekle." Açık ve güvenli ama uzun.

Sezgi: Sade iş → birkaç net komut. Önemli/karmaşık iş → adımları detaylı yaz.
Trade-off 2 — Komutları tek dosyada mı, parçalara bölerek mi yazmak?
Şimdi gerçek mühendislik kararına dokunalım. Programını üç şekilde yazabilirsin:

A — Hepsi tek dosyada (tek deste):
Bütün komutlar üst üste, alt alta. Yazması en hızlı yol. Küçük bir program için iyi.
Avantaj: Bakması kolay, tek yerde her şey görünür. Hızlı başlangıç.
Bedel: Program büyüdükçe dosya 500, 1000, 5000 satıra şişer. Okunamaz hâle gelir. Bir hata aramak için her şeyi taramak gerekir. Ekipte iki kişi aynı dosyaya yazınca çakışırlar.
B — Konulara göre parçalara bölmek (birden çok deste):
"Ödeme komutları burada, stok komutları orada, kullanıcı komutları başka yerde." Her parça kendi başına anlamlı.
Avantaj: Okunabilir, test edilebilir, hata izole edilir, ekipte herkes kendi parçasında çalışır. Bakım kolaylaşır.
Bedel: Başlangıçta düşünce gücü ve karar gerektirir. "Hangi şeyi nereye koyalım?" sorusu zaman alır. Aşırı bölme yapılırsa tersine karmaşa olur (ufak iş için 30 dosya).
C — Aşırı parçalama:
Her tek komut için ayrı dosya. Teoride "çok modüler" görünür.
Bedel: Bağlantı patlamış, okuyan kişi 30 dosya arasında kaybolur. Daha fazla parça her zaman daha iyi değildir.

Principal Kararı
"Duruma göre değişir" burada şu somut hâli alır:

Küçük araç / prototip → Tek dosya yeter (A).
Büyüyen üretim sistemi → Konulara göre bölünmüş yapı (B). Modüllerin sınırı net, parça başına bir sorumluluk.
Aşırı parçalama (C) → genellikle kaçınılır; ancak ekip büyüklüğü ve domain karmaşıklığı zorunlu kılıyorsa düşünülür.

Kıstaslar:

Okunabilirlik: Yeni biri 10 dakikada anlayabiliyor mu?
Test edilebilirlik: Bir parçayı diğerinden ayırıp test edebiliyor muyum?
Bakım: 6 ay sonra geri döndüğümde bunu hâlâ anlayacak mıyım?
Hata bulma: Bir bug çıktığında onu hızlı izole edebiliyor muyum?
Ekip çalışması: İki kişi aynı dosyaya yazınca sürekli çakışıyor muyuz?

Bu fikir M3 (SOLID & Temiz Kod), M32 (Modular Monolith) ve M33 (ADR) derslerinde çok daha geniş ele alınacak. Bugün sadece tohum.

11. Yanılgı Kontrolü (Misconception Check)
Çoğu kişi şunu sanır: "Bilgisayar akıllıdır; ne istediğimizi anlar."
Aslında: Bilgisayar düşünmez. Yalnızca yazılı komutları sırayla uygular. Aynı program her seferinde aynı sırayla çalışır. "Anlamış" gibi görünür çünkü komutlar onu doğru sonuca götürür — ama anlamaz, uygular.
Hızlı Doğru/Yanlış

"Bilgisayar bir komutu kendi başına yorumlayıp düzeltebilir."


(a) Doğru
(b) Yanlış

Doğru cevap: (b) Yanlış. Bilgisayar verilen komutu uygular. Yanlışsa yanlış uygular. Düzeltmesi için sen yeni bir komut yazmalısın.
Yanlış cevap verdiysen sorun yok; bu yanılgı çok yaygındır. Tam olarak bu yüzden dersi yazdık.

12. Senaryo Tabanlı Alıştırma (Scenario-Based Practice)
Durum: Robotuna "çay yap" işini öğretmek istiyorsun. Hangisi daha iyi bir program?

(a) Tek kart: "Çay yap."
(b) Dört kart: "1) Suyu ısıt. 2) Bardağa çay poşeti koy. 3) Sıcak suyu dök. 4) 3 dakika bekle."
(c) Yalnızca: "Suyu ısıt." (Diğer adımlar yok.)

Doğru cevap: (b). Açık, sıralı ve eksiksiz. (a) çok belirsiz, robot ne yapacağını bilemez. (c) eksik, çay tam olmaz.
(Yanlış cevap verirsen yumuşak mesaj: "Birlikte tekrar bakalım. Robotumuz düşünmez, sadece sırayla okur ve yapar. Az kart eksik bırakırsa iş yarım kalır.")

13. INTERVIEW MODE (Mülakat Modu) — SEKME 4 — ZORUNLU
Köprü Sorusu (Bridge Question — Principal yoluna kapı açar)
Soru: "Program nedir ve neden bilgisayar kendi kendine anlamaz?"
Bu mülakat odasında ilk dakikada sorulan, "temel sezgin var mı?" sorusudur. Gerçek Principal seviyesindeki ağır sorulardan değildir — ama o yola çıkan ilk basamaktır.
İyi Cevap İskeleti (madde madde — ezber değil, düşünce sırası)

Önce tanımla: "Program, bilgisayara sırayla verilen net komutlar listesidir."
Sonra somutlaştır: "Robotun yarığına koyduğun kart destesi gibi düşünülebilir; her kart tek bir iş."
Niye "anlamaz" sorusuna gel: "Bilgisayar düşünmez. Yalnızca yazılı kart sırasını uygular. Belirsiz komutu yorumlayamaz, eksik komutu tamamlayamaz."
Sonuca bağla: "Bu yüzden programcının görevi açık, sıralı ve eksiksiz komutlar yazmaktır."

Kötü Cevap vs İyi Cevap

Kötü cevap: "Program kodun ta kendisidir, bilgisayar onu çalıştırır."

Neden zayıf: Soruyu yanıtlamıyor; tanımı tanımla değiştiriyor. "Neden anlamaz?" kısmına dokunmuyor.


İyi cevap: "Program, bilgisayara verilen sıralı ve açık komutlar listesidir. Bilgisayar düşünmez; yalnızca yazılı komut sırasını uygular. Komut belirsizse veya eksikse yorumlayamaz, çünkü 'anlamak' bilgisayarın yaptığı bir şey değildir. Programcının işi tam burada başlar: niyeti açık komutlara çevirmek."

Neden iyi: Tanım veriyor, ardından "anlamaz" kısmını gerekçelendiriyor, programcının rolüne bağlıyor.



Sık Yapılan Hata
Öğrenci "bilgisayar düşünür ama hızlı düşünür" gibi bir cümle kurmaya meyleder. Düzeltme: "Hızlı uygular" diye değiştir. Düşünme yok, uygulama hızı var.
Follow-up Soruları
Follow-up 1: "Peki karmaşık programlar (örn. yapay zekâ uygulamaları) nasıl 'anlıyor gibi' görünüyor?"
(Bu soruya şimdi cevap vermeni beklemiyoruz. Bugün sadece şunu bil: programlar çok karmaşık olabilir ama temelde yine yazılmış kuralları ve komutları uygularlar.)
Follow-up 2 (production reasoning köprüsü): "Bir programın adımları yanlış sırada çalışırsa production ortamında ne olabilir?"
İyi cevap iskeleti:

Tek bir somut örnek ver: "Önce ödeme alınıp sonra stok kontrolü yapılırsa, sistem sonradan iade veya telafi işlemi yapmak zorunda kalır."
Risk türüne işaret et: "Yanlış sıra; veri tutarsızlığına, yarım kalmış işlemlere veya kullanıcıya verilen onayın gerçek kayıtla uyuşmamasına yol açabilir."
Çözüm yönünü göster: "Bu yüzden Principal seviyede 'ya hep ya hiç' düşüncesi, idempotency (aynı işlem tekrarlanırsa sonucu bozmaz) ve doğru sıralama tartışılır."
Zihniyetle bağla: "Yani 'komut sırası' burada estetik değil; sistemin güvenilirliği meselesidir."

5-Yaş Köprüsü (tıkanırsan):
"Çay yapma kartlarını düşün. Önce poşeti bardağa koy, sonra sıcak suyu dök. Sıra değişirse çay olmaz."

14. "Anlamadım" Kurtarma Yolu (I Did Not Understand — Rescue Path)
Her zaman görünür buton: "Bunu anlamadım." Sırayla şunlar olur:

Kademe 1: Tek cümle özet + tek görsel kare: "Program = sıralı kartlar; bilgisayar = kartları okuyup yapan robot."
Kademe 2: Farklı bir benzetme: çamaşır makinesi programı. Bir butona basarsın; makine sırayla şunları yapar: su al → ısıt → döndür → boşalt → sık. Sen "akıllı düşünüyor" sanırsın; aslında üretici makineye o sırayı önceden yazmıştır.
Kademe 3: Eksik ön koşul kontrolü. M0-L01'deki "request → server → response" sahnesi yeterince oturmuş mu? Değilse → mini-hatırlatma + buraya geri.
Kademe 4 (hâlâ takılmışsa): En küçük parçaya in. "Sadece şu cümleye bak: Bilgisayar düşünmez, uygular." Başka hiçbir şey önemli değil. Sonra adım adım yeniden başla.

Hiçbir kademede engellenmezsin. "Devam Et" her zaman duruyor; sistem sana yalnızca en uygun basamağı önerir.

15. Mini Özet (Recap) + Aralıklı Tekrar Kancası
Üç maddelik özet:

Program, bilgisayara verilen sıralı ve açık komutlar listesidir. Robotun kart destesi gibi.
Bilgisayar düşünmez; yalnızca komutları sırayla uygular. Aynı sıra → aynı sonuç.
Programcı'nın işi, niyeti açık ve sıralı komutlara çevirmektir. Belirsiz komut = yanlış sonuç.

Derinleşme Köprüsü

Bu ders basit başladı ama ileride Java'nın nasıl çalıştığını, JVM'in kodu nasıl yürüttüğünü, hataların nasıl bulunduğunu ve büyük sistemlerde program adımlarının nasıl tasarlandığını anlamanın temel taşıdır.

Yani şu an aklında bir "kart destesi" var; ilerleyen modüllerde bu deste yavaş yavaş derinleşecek — control flow, bellek, JVM execution, debugging ve mimari muhakemeye dönüşecek. Acelesi yok; basamağa bastığını bil yeter.
Aralıklı Tekrar Kancası
Bu fikir M1'de Java syntax öğrenirken, M6'da modern Java özelliklerinde, M7'de eşzamanlılıkta ("aynı anda birden çok kart destesi"), M9'da JVM iç yapısında, M11'de hata teşhisinde, M27'de sistem tasarımında ve M33'te mimari kararlarda yine karşına gelecek.

16. Mikro-Değerlendirme (Micro-Assessment) — ZORUNLU
"Devam Et" görünmeden önce tek kısa kontrol. Sınav değil; nereden devam edeceğimizi anlamamıza yardım eder.
Soru: Aşağıdaki cümlelerden hangisi doğrudur?

(a) Bilgisayar verilen komutu kendi başına düzeltebilir.
(b) Bilgisayar komutları yazıldığı sırayla uygular ve kendi başına anlam çıkarmaz.
(c) Bilgisayar tek bir komut alır; sıra önemli değildir.

Doğru cevap: (b).

Doğru cevap → "Devam Et" yumuşak şekilde belirir.
Yanlış cevap → §17'deki Soft-Check tetiklenir. "Devam Et" sertçe kilitlenmez.

Skor agresif şekilde gösterilmez.

17. Soft-Check ve Otomatik Kurtarma Tetiği
Yanlış cevap verirsen şu nazik akış otomatik devreye girer:

Adım 1: Mesaj — "Hep birlikte tekrar bakalım, daha basit anlatalım mı?" Hiçbir suçlayıcı ifade yok.
Adım 2: Tek cümle özet + en sade görsel kare: "Robot düşünmez; kartı okur ve yapar. Sırayla."
Adım 3: Mikro-değerlendirme farklı sözcüklerle yeniden sorulur: "Robotun yarığına koyduğun kartları nasıl uygular?"
Adım 4 (hâlâ yanlışsa): Otomatik prerequisite rescue — M0-L01'in mini-hatırlatmasına yönlendirme + buraya geri.

Hiçbir adımda "Devam Et" sertçe bloklanmaz.

18. Sıradaki Adım (Next Step) — TEK BUTON
Önünde tek buton görünür: Devam Et.
Basınca seni M0 modülünün bir sonraki dersine götürür. (Bu turda M0-L02'den sonraki ders üretilmedi; ayrı bir turda hazırlanacak.)
Takıldığını hissediyorsan: "Bir önceki kavramı tekrar et" bağlantısı seni dersin başına yumuşak biçimde geri taşır. Seçenek bombardımanı yok.

19. Alt Bilgi — Editör Kontrol Listesi (Öğrenciye Görünmez)

Bilişsel yük kontrolü yapıldı mı? — E. Sade kapı korundu; derinlik adımları "tohum" olarak işaretlendi; dil yumuşatıldı.
Dört mod sekmeli yapı korundu mu? — E.
Tüm zorunlu alanlar dolu mu? (5-yaş, üretim örneği, mülakat, mikro-değerlendirme) — E.
Yeni alanlar dolu mu? (ön koşul, yanılgı, üretim-debug, trade-off, "anlamadım" yolu, soft-check tetiği) — E.
Derinlik merdiveni 5 basamağı görünür mü? (5-yaş / beginner / junior / senior / principal) — E.
Theory Mode'da "Derinleşme Yolu" bölümü var mı? — E.
Production Example'da sıra-bağımlı 3 senaryo var mı? — E. Dil yumuşatıldı (telafi/iade/düzeltme adımı vurgusu); production gerçekliği korundu.
Trade-off bölümünde tek dosya vs parçalama trade-off'u var mı? — E.
Interview Mode'da iki follow-up var mı? — E. (AI follow-up'ı da sadeleştirildi.)
Mini Özet'te derinleşme köprü cümlesi var mı? — E.
AI hakkında abartılı cümle var mı? — H. Sadeleştirildi: "Bazı programlar çok karmaşık olabilir; ama bilgisayar yine de yazılmış kuralları ve komutları çalıştırır."
Stresli üretim dili (öfke, kayıp para vb.) var mı? — H. Yumuşatıldı; sistem-merkezli ifadelere çevrildi (iade, telafi, düzeltme adımı, tutarsızlık).
Hard-lock kullanılmadığı teyit edildi mi? — E.
Jenerik şablon yasağı korundu mu? — E.


Bu ders, M0-L02 final içerik adayı olarak yumuşak dil ve derinlik dengesiyle yamalandı.