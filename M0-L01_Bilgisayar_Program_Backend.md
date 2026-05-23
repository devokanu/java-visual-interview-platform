Ders: M0-L01 — Bilgisayar, Program ve Backend Nedir?

1. Üst Bilgi (Lesson Header)

Ders Kodu: M0-L01
Ait Olduğu Modül: M0 — Bilgisayar ve Program Nedir?
Ön Koşullar: Yok. Bu, müfredattaki ilk derstir; sıfırdan başlar.
Tahmini Süre: 12-15 dk (kendi hızında, isterse daha uzun)
Tek Cümlelik Hedef: "Bu dersin sonunda öğrenci 'program', 'server', 'backend', 'request' ve 'response' kelimelerini sandviç gişesi sahnesiyle eşleştirerek anlayabilecek; Java Backend Engineer'ın ne yaptığını kendi cümleleriyle, korkmadan tek paragrafla anlatabilecek."
Kaynak Referansı: Yok (bu derste dış kaynak kullanılmadı).


2. Ön Koşul Kontrolü (Prerequisite Check)
Bu ders müfredatın ilk basamağıdır; teknik bir ön koşul yoktur. Yine de tek bir hafif kontrol yapılır — bu kontrol "geçemeyeceğin bir kapı" değildir; sadece nereden başlayacağımızı anlamak içindir:
Kontrol: "Hiç telefondan bir uygulamaya istek gönderip cevap aldın mı? Örnek: 'Hava nasıl?' diye baktın, sana cevap geldi."

Cevap Evet veya Sanırım evet → Derse devam.
Cevap Bilmiyorum / Emin değilim → Sorun yok. Bu dersin amacı tam olarak budur; birlikte bakacağız. Devam.

Bu kontrol seni durdurmaz. Yalnızca neyi bildiğini gösterir.

3. Kanca — Gerçek Hayat Sahnesi (Hook)
Bir sandviç gişesinin önünde durduğunu düşün.
Camekanın ön tarafında sen varsın. Görevliye bakıyorsun ve "Bir peynirli sandviç lütfen" diyorsun.
Görevli seni dinler. Sonra arka tarafa geçer. Arkada bir mutfak vardır: ekmek, peynir, dilimleyici, bir tezgâh. Sen orayı görmezsin.
Birkaç dakika sonra görevli geri gelir. Elinde peynirli sandviçin vardır. Sana verir.
İşte tüm hikâye bu. Hiçbir teknik kelime yok. Bu sahneyi aklında tut — bütün dersi bu sahnenin üstüne kuracağız.

4. 5 Yaşına Açıklama (Explain Like I'm 5) — ZORUNLU
Bir gişede sen istek söylersin. Arka tarafta birisi onu yapar. Sonra sana getirir.
Bilgisayarda da aynısı olur: Telefonun gişenin önündeki sensin. Backend, gişenin arkasındaki mutfaktır.
(Görsel: solda gülümseyen bir çocuk, ortada camekan, sağda perde arkasında bir aşçı. Bir ok soldan sağa "istek", bir ok sağdan sola "sandviç".)

5. THEORY MODE (Teori Modu) — SEKME 1
Bu dersin kalıcı benzetmesi: Sandviç Gişesi
Bu benzetmeyi ders boyunca aynı tutacağız. Tutarlılık aklında kalmasını kolaylaştırır.
Benzetme → Gerçek Kavram Eşleme Tablosu
Sandviç Gişesi sahnesiBilgisayar dünyasındaki karşılığıSen, camekanın önündeki müşteriİstemci (client) — sen telefondaki uygulamayı kullanan kişisin"Bir peynirli sandviç lütfen" cümlenRequest (istek: bir şey sormak veya istemek)Görevlinin sana getirdiği sandviçResponse (cevap: istediğin şeyin geri dönüşü)Arka tarafta sandviç yapan mutfakServer (sunucu: arka tarafta sürekli açık duran, isteklere cevap üreten bilgisayar)Mutfağın iç düzeni, kuralları, tarifi uygulayan eliBackend (arka taraf: müşterinin görmediği kısım)Camekanın ön tarafı, vitrinFrontend (ön taraf: müşterinin görüp dokunduğu kısım)
Adım Adım Teknik Açıklama
Her cümleyi yavaşça oku. Acelen yok.
Program nedir?
Bir program, bilgisayara "şunu şöyle yap" diyen bir tarif kâğıdıdır. Sandviç tarifi gibidir: "Ekmeği al. Peyniri koy. Üstüne kapat." Bilgisayar tarifi sırasıyla okur ve uygular.
Server (sunucu) nedir?
Bir server, gece gündüz açık duran, "kimse bir şey istedi mi?" diye sürekli bekleyen bir bilgisayardır. Sandviç gişesinin mutfağı gibidir — kepenkler indirilmez, görevli orada durur.
Backend nedir?
Backend, kullanıcının görmediği arka taraftır: istekleri alır, kuralları uygular, gerekirse veriye bakar ve cevap üretir. Bu kadar. Sandviç gişesinin mutfağı tam olarak budur: önden gelen siparişi alır, tarifi uygular, gerekirse dolaba bakıp peyniri çıkarır, sonra sandvici hazırlayıp uzatır.
Frontend nedir?
Frontend, "ön taraf" demektir. Senin gördüğün ekran, butonlar, yazılardır. Camekanın ön yüzü gibidir.
Request / Response nedir?
Sen "bir peynirli sandviç" dediğinde bir request atmış olursun (bir istek). Görevli sana sandviç getirdiğinde sana bir response dönmüş olur (bir cevap). Bilgisayarlar da tam böyle konuşur: istek atılır, cevap döner.
Peki Java Backend Engineer ne yapar?
Java Backend Engineer, sandviç gişesinin arka tarafındaki mutfağı kuran ve düzenleyen kişidir. Java, mutfakta kullanılan ortak dildir. Engineer:

Mutfağın nasıl çalışacağını planlar.
Sandviç tariflerini Java diliyle yazar.
Bir şey ters giderse (örn. peynir bitti) ne olacağına karar verir.

Yani bir Java Backend Engineer, görünmeyen yerin görünmez ustasıdır.

6. VISUAL MODE (Görsel Modu) — SEKME 2
Bu derse özgün metafor: Sandviç Gişesi Sahnesi
Bu jenerik bir diyagram değildir. Bu sahne sadece bu derse aittir. Görsel; metni süslemek için değil, ana öğretim alanı olarak duracaktır.
Visual Stage Layout (Codex Prototip Spesifikasyonu)
Sayfanın merkezindeki görsel sahne aşağıdaki sabit yerleşime sahip olmalıdır. Bu yerleşim ileride Codex tarafından bire bir kodlanacak; bu yüzden bölgeler açıkça tanımlanmıştır.
+-------------------------------------------------------------+
|                                                             |
|  [SOL BÖLGE]      [ORTA BÖLGE]        [SAĞ BÖLGE]           |
|  Öğrenci /        Camekan /            Gizli mutfak /       |
|  Müşteri /        Cam / İstek          Backend / Server     |
|  Client figürü    Yolu                 (perdenin arkası)    |
|                                                             |
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

Sol bölge — Learner / Customer / Client: Sabit, gülümseyen çocuk figürü. Konuşma balonu bu bölgeden çıkar.
Orta bölge — Counter / Glass / Request Path: Uzun bir tezgâh, camekan, üstte "GİŞE" yazısı. İstek ve cevap görsel olarak bu bölgeden geçer (sol→sağ ve sağ→sol).
Sağ bölge — Hidden Kitchen / Backend / Server: Perdeyle ayrılmış mutfak alanı. Perde başlangıçta yarı kapalıdır; "backend bilerek görünmez" hissi kalır. Ekmek, peynir, dilimleyici, küçük bir kural defteri.
Yan açıklama paneli: Sahneye bitişik, dar bir panel. Her adımda yalnızca aktif kavramın adı + tek cümle gösterilir. Aşırı yük yok.
Alt bölge — Adım kontrolleri: Öğrencinin sahneyi kendi kontrol etmesini sağlayan butonlar: Geri, Sonraki Adım, Tekrar İzle. Otomatik akış yoktur — sahne öğrenci tıklamadan ilerlemez.

Animasyon — Adım Adım, Öğrenci Kontrollü
Her adım öğrencinin "Sonraki Adım" tuşuyla ilerler. Otomatik akış yok.

Adım 1 — Sol bölge aktif. Çocuk camekana yaklaşır. Üstünde konuşma balonu belirir: "Bir peynirli sandviç lütfen." Yan panel: "request — istediğin şeyi söylüyorsun."
Adım 2 — Sol → Orta geçiş. Konuşma balonu camekana doğru sağa akar. Yan panel: "İstek arka tarafa gidiyor."
Adım 3 — Sağ bölge aktif. Perde aralanır, mutfakta küçük ışıklar yanar: ekmek alınır, peynir dilimlenir, üst kapatılır. Yan panel: "server / backend çalışıyor — kuralları uyguluyor, gerekirse veriye bakıyor."
Adım 4 — Sağ bölgede sonuç. Hazır sandviç tezgâha konur. Yan panel: "response — cevap hazır."
Adım 5 — Sağ → Sol geçiş. Sandviç perdeden çıkıp soldaki çocuğa uzanır. Yan panel: "Cevap kullanıcıya dönüyor."
Adım 6 — Özet karesi. Tüm sahne tek karede. Üstte dört etiket sırayla yanar: client → request → server (backend) → response. Yan panel: "Tüm akış: istek gitti, cevap döndü."

Her adımda "Tekrar İzle" butonu vardır. Her kare tek başına anlamlıdır — biri animasyonu durdursa bile o kare bir şey öğretir.
Görsel ↔ Kod Senkron Haritası (sahne ile kod birlikte)
Code Mode açıkken aktif kod satırı görselde sarı bir vurguyla öne çıkar; aynı anda sahnede ilgili adım aktif olur. Codex bu eşlemeyi birebir uygular:
Aktif kod satırıAktif sahne adımıAktif yan panel cümlesisiparisAl("peynirli") çağrısıAdım 1–2"request — istek atılıyor"Method gövdesine girişAdım 3"backend çalışıyor"return ...Adım 4"response — cevap hazır"String cevap = ...Adım 5"cevap kullanıcıya dönüyor"System.out.println(cevap);Adım 6"tüm akış tamamlandı"
Görsel Sembol Sözlüğü (platform geneliyle tutarlı)

İstek = konuşma balonu (sağa doğru oklu).
Cevap = kâğıt paketinde gelen nesne.
Server = perdenin arkasındaki ışıklı tezgâh.

(Sembol sözlüğü VISUAL_ANIMATION_SYSTEM.md kuralına göre platform genelinde tutarlı kalır.)

7. CODE MODE (Kod Modu) — SEKME 3

Bilişsel yük notu: Bu derste public, static, void gibi kelimeleri öğrenmeyeceğiz. Şimdilik onları tarif defterindeki resmi damgalar gibi düşün. İleride tek tek öğreneceğiz.

Şimdi bu sahneyi çok basit bir Java kodunda göreceğiz. Korkma: amaç kodun her satırını ezberlemek değil; sahnenin koda nasıl döndüğünü hissetmek.
javapublic class SandvicGisesi {

    // Bu, mutfaktaki tek bir tarif.
    // Müşteri ne istedi diye sorar, sandviç hazırlar, geri verir.
    public static String siparisAl(String sandvicTuru) {
        return "İşte " + sandvicTuru + " sandviçin hazır.";
    }

    // Programın başladığı yer. Burada müşteri sipariş veriyormuş gibi
    // mutfağa "peynirli" diye seslenir, cevabı ekrana yazar.
    public static void main(String[] args) {
        String cevap = siparisAl("peynirli");
        System.out.println(cevap);
    }
}
Her satır ne diyor?

public class SandvicGisesi { ... } — "Bu, sandviç gişesinin tarif defteridir." (Sınıf = bir grup tarifin bir araya geldiği defter.)
siparisAl(String sandvicTuru) — "Bir sipariş alma tarifi var. Sen bana sandviç türünü söyle; ben sana yazılı cevap dönerim."
return "İşte " + sandvicTuru + " sandviçin hazır."; — "Sandvici hazırladım, işte cevap." Bu satır response üretir.
main(String[] args) — "Program buradan başlar." (Java'da her programın bir başlangıç noktası vardır.)
String cevap = siparisAl("peynirli"); — "Mutfağa 'peynirli' diye sipariş veriyorum; cevabı bir kâğıda yazıyorum." Bu satır request atar.
System.out.println(cevap); — "Cevabı ekrana yazdır." Yani müşteriye uzatılan sandviç budur.

Görsel ↔ Kod Senkron — Çalışma Anında
Kodun her satırı, ekranın yanındaki sahnede bir adıma eşlenir. Sen "Sonraki Adım" tuşuna bastıkça hem kodda aktif satır vurgulanır hem sahnede ilgili adım çalışır. İkisi her zaman birlikte hareket eder.
Görsel adımıKod satırıAdım 1 — Çocuk "peynirli" diyorsiparisAl("peynirli") çağrısıAdım 2 — İstek perdeye gidiyorsiparisAl methoduna girişAdım 3 — Mutfak çalışıyorMethod gövdesi: string birleştirmeAdım 4 — Sandviç hazırreturn ... satırıAdım 5 — Sandviç çocuğa uzanıyorString cevap = ... ve sonra println(cevap)
Yani kod, az önce izlediğin sahnenin yazılı hâlidir. Aynı şey, sadece harflerle.

8. Üretim Örneği (Production Example) — ZORUNLU
Sen Trendyol'dan bir kitap sipariş etmek istiyorsun.

Telefonundaki Trendyol uygulaması = client / frontend. Sen onu görüyorsun.
"Sepete Ekle" butonuna bastığın an = bir request atılır.
Bu istek internetten geçer, Trendyol'un sunucularına ulaşır.
Trendyol'un sunucuları = server. İçindeki kodlar, kurallar = backend.
Backend kontrol eder: "Bu kitap stokta var mı?"
Cevap üretilir ve telefonuna geri döner = response.
Telefonunda sepet ikonunun yanında "1" görünür.

Sen sadece "Sepete Ekle" yazısını görürsün. Bütün bu işin görünmeyen kısmı backend'dir. Bir Java Backend Engineer'ın yaptığı iş tam burası: o görünmeyen kısmın doğru çalışmasını sağlamak.

9. Üretimde Hata Ayıklama Bakışı (Production Debugging Perspective)
Bir Principal şu basit soruyu sorar: "Bu sistem bozulursa nasıl bozulur?"
Sandviç gişesi sahnesinde üç temel bozulma vardır:

Cevap hiç gelmez — mutfak kapanmıştır.
Cevap çok geç gelir — mutfak yavaşlamıştır.
Yanlış cevap gelir — sipariş yanlış anlaşılmıştır.

İleride bu belirtileri tanımak için log (kayıt defteri), metrik (sayaçlar) ve trace (izler) adlı araçlar öğreneceğiz. Şimdilik sadece bu kelimelerin var olduğunu bil; detayını sonraki modüllerde göreceğiz.

10. Senior / Principal Trade-off Bölümü (Trade-off Section)
Sandviç gişesinde tek bir görevliyle mi çalışırsın, beş görevliyle mi?

Tek görevli: Ucuz, sade, yönetmesi kolay. Ama sıra uzar, müşteriler beklemekten yorulur.
Beş görevli: Çabuk hizmet, mutlu müşteri. Ama maaş yüksek, koordinasyon zor.

Bilgisayarda da aynı: backend'i tek bir sunucu mu çalıştırsın, beş sunucu mu? Her seçimin bir bedeli var.
"Duruma göre değişir" burada şu anlama gelir:

Müşteri sayısı azsa → tek görevli yeter.
Akşam yemek vakti gibi yoğun saatlerde → beş görevli mantıklı, ama beşi koordine etmek için bir şef gerekir.

Bu bilgi şu an için sezgisel kalsın. İleri modüllerde (M27'de) tekrar karşına gelecek, çok daha geniş şekilde.

11. Yanılgı Kontrolü (Misconception Check)
Çoğu kişi şunu sanır: "Backend, bilgisayarın içindeki tek bir programdır."
Aslında: Backend tek bir program değildir. Backend, kullanıcının görmediği arka tarafın tamamıdır: istekleri alır, kuralları uygular, gerekirse veriye bakar ve cevap üretir.
Hızlı Doğru/Yanlış

"Frontend ile backend aynı şeydir."


(a) Doğru
(b) Yanlış

Doğru cevap: (b) Yanlış. Frontend senin gördüğün yer; backend senin görmediğin yer. Aynı değildirler ama birbirleriyle konuşurlar — tıpkı camekanın ön ve arka tarafı gibi.
Yanlış cevap verdiysen sorun yok. Bu, dersin amacının tam olarak bu farkı öğretmek olduğunu hatırlatır.

12. Senaryo Tabanlı Alıştırma (Scenario-Based Practice)
Durum: Bir hava durumu uygulamasını açtın. Şehir adını yazıp "Göster" tuşuna bastın. Birkaç saniye sonra hava bilgisi ekranında belirdi.
Soru: Bu süreçte "request" nedir, "response" nedir?

(a) Hava bilgisinin ekranda görünmesi request; senin "Göster"e basman response.
(b) Senin "Göster"e basman request; hava bilgisinin gelmesi response.
(c) İkisi de aynı şey, fark yok.

Doğru cevap: (b). Sen bir şey istedin (request). Uygulamanın arkasındaki server sana bir şey döndü (response).
(Yanlış cevap verirsen yumuşak bir mesaj: "Hep beraber tekrar bakalım. Sandviç sahnesini hatırla: önce sen 'peynirli' dedin; sonra sandviç geldi. İlki istek, ikincisi cevap.")

13. INTERVIEW MODE (Mülakat Modu) — SEKME 4 — ZORUNLU
Köprü Sorusu (Bridge Question — Principal yoluna kapı açar)
Soru: "Bir Java Backend Engineer ne yapar? Kendi cümlelerinle, kısa ve sade anlat."
Bu, gerçek Principal mülakatındaki ağır sorulardan biri değildir; ama o yola çıkan ilk basamaktır. Eğer şu an bunu sade ve kendi cümlelerinle anlatabilirsen, ileride çok daha derin sorulara hazır oluyorsun demektir.
İyi Cevap İskeleti (madde madde — ezber metin değil, düşünce sırası)

Önce sahne kur: "Müşteri telefondaki uygulamadan bir istek atar."
Sonra arka tarafı tanıt: "İsteğe cevap üreten görünmez sistem — yani backend — bu isteği alır, kuralları uygular, gerekirse veriye bakar."
Backend Engineer'ın işini söyle: "Java Backend Engineer bu görünmeyen sistemi kuran ve düzenleyen kişidir."
Bir cümleyle bağla: "Yani arka tarafın sessiz ustasıdır."

Kötü Cevap vs İyi Cevap

Kötü cevap: "Java'da kod yazar."

Neden zayıf: Mesleği değil yalnızca bir aracı söyler. Mülakatçıya hiçbir şey öğretmez.


İyi cevap: "Bir Java Backend Engineer, kullanıcının görmediği taraftaki sistemi kurar. Uygulamanın isteklerini alır, kuralları uygular, gerektiğinde veriye bakar ve cevabı geri döner. Java, bu işi yaparken kullandığı ortak dildir."

Neden iyi: Sahne kuruyor, role bağlıyor, sorumluluğu sade veriyor, dilin (Java) yerini gösteriyor.



Sık Yapılan Hata
Öğrenci "her şeyi" anlatmaya çalışır ve cümleler uzayıp dağılır. Düzeltme: Üç cümleyle başla. Sahne + rol + sorumluluk. Mülakatçı detay isterse zaten sorar.
Follow-up (Takip Sorusu)
"Peki frontend developer ile arasındaki temel fark nedir?"
(Bu soruya henüz cevap vermeni beklemiyoruz — sadece sonraki derslerde tekrar karşına çıkacağını bil.)
5-Yaş Köprüsü (tıkanırsan)
Tıkandığında şunu hatırla: "Backend Engineer, sandviç gişesinin arka tarafındaki mutfağı düzenleyen ve tarifleri yazan kişidir. Java ise mutfakta kullanılan dildir."

14. "Anlamadım" Kurtarma Yolu (I Did Not Understand — Rescue Path)
Bu ders boyunca her zaman görünür bir buton: "Bunu anlamadım." Bastığında utanma; bu en hızlı öğrenme yoludur. Sırayla şunlar olur:

Kademe 1: Tek cümle özet + tek görsel kare. "Sen ön taraftasın, server arka taraftadır; senin istediğin şeyi arka taraf yapıp sana getirir."
Kademe 2: Farklı bir benzetme. Kütüphane sahnesi: "Kütüphaneciye bir kitap adı söylersin, o gidip raflardan getirir. Kütüphaneci backend, sen ön taraftaki kişisin."
Kademe 3: Eksik ön koşul kontrolü. "Belki 'program' kelimesi tam oturmadı?" Eğer evet → mini ön ders: "Program nedir?" sayfasına yönlendirir, sonra otomatik buraya geri getirir.
Kademe 4 (hâlâ takılmışsa): Konuyu en küçük parçaya bölüp en baştan başlamak: "Sadece 'request' kelimesine bakalım. Başka hiçbir şey önemli değil şu an."

Hiçbir kademede engellenmezsin. "Devam Et" butonu hep duruyor. Ama sistem sana en uygun basamağı önerir.

15. Mini Özet (Recap) + Aralıklı Tekrar Kancası
Üç maddelik özet:

Request, senin attığın istek. Response, sana dönen cevap.
Server, isteklere cevap üreten, sürekli açık bilgisayar. Backend, kullanıcının görmediği arka taraftır: istekleri alır, kuralları uygular, gerekirse veriye bakar ve cevap üretir.
Java Backend Engineer, arka tarafın kurallarını ve tariflerini kuran kişidir.

Aralıklı tekrar kancası: Bu üç kavram (request/response/server/backend) M14 (Web Katmanı / REST) dersinde tekrar, çok daha geniş şekilde karşına çıkacak. M16+b (Sistem Tasarımına Mini Giriş) ve M19 (Mesajlaşma) derslerinde de yine bu sahne hatırlatılacak. O zaman bu derse bir an dönmeni rica edeceğiz.

16. Mikro-Değerlendirme (Micro-Assessment) — ZORUNLU
"Devam Et" butonu görünmeden hemen önce çok kısa, tek soruluk bir kontrol var. Bu bir sınav değil; sadece nereden devam edeceğimizi anlamamıza yardım eder.
Soru: Telefondan bir uygulamaya istek attığında, o isteğe arka tarafta cevap üreten bilgisayara ne ad veriyoruz?

(a) Frontend
(b) Server
(c) Telefon

Doğru cevap: (b) Server.

Doğru cevap → "Devam Et" butonu yumuşak şekilde belirir.
Yanlış cevap → §17'deki Soft-Check tetiklenir. "Devam Et" sertçe kilitlenmez.

Skor sana agresif gösterilmez. Bu sadece bir nefes alma noktasıdır.

17. Soft-Check ve Otomatik Kurtarma Tetiği
Yukarıdaki mikro-değerlendirmede yanlış cevap verirsen şu nazik akış otomatik devreye girer:

Adım 1: Mesaj — "Hep birlikte tekrar bakalım, daha basit anlatalım mı?" Hiçbir suçlayıcı ifade yok.
Adım 2: Tek cümle özet + en sade görsel kare: "Server, arka tarafta sürekli açık duran, isteklere cevap üreten bilgisayardır." Görsel: mutfaktaki tezgâhın tek karesi.
Adım 3: Mikro-değerlendirme farklı sözcüklerle yeniden sorulur: "Arka tarafta 'açık tezgâh' gibi duran bilgisayara ne diyoruz?"
Adım 4 (hâlâ yanlışsa): Otomatik prerequisite rescue — "Program nedir?" mini-dersine yönlendirilirsin, sonra buraya geri getirilirsin.

Hiçbir adımda "Devam Et" sertçe bloklanmaz. Sadece nazikçe bir basamak geriden tutulursun.

18. Sıradaki Adım (Next Step) — TEK BUTON
Önünde tek bir buton görünür: Devam Et.
Basınca seni M0-L02'ye götürür. (Bu derste M0-L02 üretilmedi; o ayrı bir turda hazırlanacak.)
Takıldığını hissediyorsan ek bir bağlantı: "Bir önceki kavramı tekrar et" — bu seni dersin başına yumuşak biçimde geri taşır. Seçenek bombardımanı yok; sadece "ileri" ve "tekrar".

19. Alt Bilgi — Editör Kontrol Listesi (Öğrenciye Görünmez)

Bilişsel yük kontrolü yapıldı mı? — E. Tek sahne (sandviç gişesi) ders boyunca tutarlı tutuldu. Tek seferde tek fikir kuralı uygulandı. Backend tanımı sadeleştirildi; log/metrik/trace yalnızca tohum olarak bırakıldı.
Dört mod sekmeli/akordeon yapıda mı? (Theory / Visual / Code / Interview — aynı anda tek sekme) — E.
Tüm zorunlu alanlar dolu mu? (5-yaş, üretim örneği, mülakat, mikro-değerlendirme) — E.
Yeni alanlar dolu mu? (ön koşul kontrolü, yanılgı, üretim-debug, trade-off, "anlamadım" yolu, soft-check tetiği) — E.
Görsel ile kod senkronu kuruldu mu? — E. §6'da Visual Stage Layout ve aktif-satır vurgu kuralı; §7'de kod-sahne tablosu verildi.
Visual Mode Codex prototipine hazır mı? (sol/orta/sağ/alt/yan panel + aktif kod satırı vurgusu) — E.
Dil kuralı uygulandı mı? (terim + basit Türkçe açıklama) — E.
Hard-lock kullanılmadığı teyit edildi mi? (yalnızca soft-check) — E.
Kaynak kullanıldıysa Üst Bilgi'de Referans alanı dolduruldu mu? — Uygulanmaz (bu derste kaynak kullanılmadı).
Jenerik şablon yasağı? — E. Sandviç gişesi metaforu bu derse özgün.


Bu ders, v0.3 proje hafızasına göre yamalandı. Tam müfredat üretimi yapılmadı.