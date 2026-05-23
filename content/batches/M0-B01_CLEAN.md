# M0-B01 Patched Lesson Batch

## M0-L03 — Bilgisayar Komutları Nasıl Çalıştırır?

### 1. Üst Bilgi

- **Ders Kodu:** M0-L03
- **Ait Olduğu Modül:** M0 — Bilgisayar ve Program Nedir?
- **Ön Koşullar:** M0-L01, M0-L02
- **Tahmini Süre:** 12-15 dk (kendi hızında, isterse daha uzun)
- **Tek Cümlelik Hedef:** "Bu dersin sonunda öğrenci bir bilgisayarın komutları adım adım nasıl çalıştırdığını aydınlatmalı komut panosu sahnesiyle anlayabilecek; 'işaretçi' fikrini, sıralı yürütmenin neden önemli olduğunu ve bu sezginin ileride CPU, JVM bytecode yürütme ve hata ayıklamaya nasıl bağlandığını sezebilecek."
- **Kaynak Referansı:** Yok.

### 2. Ön Koşul Kontrolü

Tek hafif kontrol: M0-L02'deki "program = sıralı kart destesi" sezgisi yerinde mi?

**Kontrol:** "Robot kartı okur ve yapar; sonra sıradakine geçer. Bu cümle sana tanıdık geliyor mu?"

- **Evet / Sanırım evet** → Devam.
- **Hatırlamıyorum** → Otomatik mini-hatırlatma: "Program, sıralı komutlar listesidir." Devam.

Bu kontrol seni durdurmaz.

### 3. Kanca — Gerçek Hayat Sahnesi

Eski tip bir fabrika kontrol odasında durduğunu hayal et. Karşında dikey bir pano var. Panonun üstünde dikey sırada yan yana satırlar duruyor; her satırın solunda küçük bir ampul, sağında ise tek bir komut etiketi yazılı: "1. Lambayı yak", "2. Motoru çalıştır", "3. Lambayı söndür".

Panonun yanında küçük, hareketli bir **işaretçi** var — küçük bir ok. Ok, en üstteki satırın yanında durmuş. "Başlat" düğmesine basıyorsun.

Ok birinci satırın yanına geliyor; o satırın ampulü yanıyor; ilgili eylem çalışıyor; ampul sönüyor; ok bir aşağı kayıyor. Aynısı ikinci satır için. Sonra üçüncüsü. Sonunda ok pano dışına çıkıyor; program durdu.

Hiçbir an iki ampul birlikte yanmıyor. Her seferinde tek satır aktif. Bu sahneyi aklında tut.

### 4. 5 Yaşına Açıklama

Bilgisayarın içinde küçük bir ok var. Ok komutların yazdığı satırların yanında gezer. Hangi satırın yanına gelirse, o satırın işini yapar. Sonra bir aşağı kayar. Hiçbir zaman aynı anda iki satır yapmaz.

(Görsel: solda çocuk operatör, ortada dikey komut panosu, sağda yapılan basit eylem.)

> **Not:** Bu sade kapı yalnızca giriştir. Aynı fikir ileride CPU'nun program counter'ı, JVM'in bytecode yürütmesi, control flow ve üretim sistemlerinde hata ayıklamayla derinleşecek.

### 5. THEORY MODE (Teori Modu) — SEKME 1

#### Bu dersin kalıcı benzetmesi: **Aydınlatmalı Komut Panosu**

Sandviç gişesi (L01) bilgi akışını, komut kartlı robot (L02) komutun yapısını anlatıyordu. Bu ders **komutların tek tek nasıl yürütüldüğünü** anlatıyor; metaforu birebir tekrar etmiyor.

#### Benzetme → Gerçek Kavram Eşleme Tablosu

| Aydınlatmalı pano sahnesi | Bilgisayar dünyasındaki karşılığı |
|---|---|
| Dikey komut satırları | **Program** — sıralı talimat listesi |
| Her satırdaki etiket | **Instruction / komut** — tek bir net iş |
| Hareketli işaretçi (ok) | **Program counter / işlemci işaretçisi** — şu an hangi komut çalışıyor |
| Yanan ampul | **Fetch + execute** — komutu alma + uygulama |
| Okun bir aşağı kayması | **Sıralı ilerleme** |
| Okun bir üst satıra atlaması | **Control flow / akış kontrolü** (ileride detay) |

#### Adım Adım Teknik Açıklama

**Bilgisayar komutları nasıl çalıştırır?**
Çok kısa bir döngüyle: **al → uygula → ilerle.** İşaretçi bir komutu **alır** (fetch), o komutu **uygular** (execute), sonra **bir sonraki komuta ilerler** (advance). Bu üçlü döngü bilgisayarın kalp atışıdır.

**Tek seferde tek komut.**
Klasik bir programda işaretçi aynı anda yalnızca tek satırı işaret eder. İki ampul aynı anda yanmaz. Sonraki komut, öncekinin bitmesini bekler. (M7'de aynı anda birden çok işaretçi olabilir mi diye soracağız — bu eşzamanlılık konusu.)

**Sıra neden bu kadar önemli?**
İşaretçi yukarıdan aşağıya hareket eder. Bir satır, kendinden önce gelen satırların yaptıklarına yaslanabilir. M0-L02'de gördük: sıra değişirse sonuç değişir. Bu ders o sıranın **nasıl** yürütüldüğünü gösteriyor.

**Akış her zaman düz mü ilerler?**
Hayır. Bazı komutlar işaretçiye "şuna atla" der. Örneğin: "Eğer X doğruysa 7. satıra atla." Buna **control flow / akış kontrolü** denir. M1'de `if`/`while` ile öğreneceğiz. Bugün sadece "ok atlayabilir" sezgisini taşı.

**Java kodum panodaki satırlar değil — JVM ne yapıyor?**
Yazdığın Java kodu önce **JVM** tarafından küçük adımlara (bytecode) çevrilir. Sonra JVM bu adımları aynı "al → uygula → ilerle" döngüsüyle işler. Yani senin gördüğün satırlar değil, JVM'in iç komutları çalışır. M9'da bunu derinleştireceğiz.

#### M0-L02 ile Köprü

Robot kartı okuyup yapıyordu; ama "okuyan parça" görünmüyordu. Bu ders o görünmeyen parçayı (işaretçi) ortaya çıkarır. Robot artık bir oyuncak değil, **kontrollü bir motor** olarak görülebiliyor.

#### Derinleşme Yolu (Depth Ladder)

- **M1 — Control flow.** `if`/`while`/`for` — okun nasıl ileri-geri zıpladığı.
- **M7 — Concurrency.** Aynı program üstünde birden çok işaretçi (thread) olabilir mi?
- **M9 — JVM iç yapısı.** Bytecode, JIT (çalışırken kod hızlandırma), gerçek CPU komutlarına çevrim.
- **M10 — Java Memory Model.** Birden çok işaretçi varken sıranın görünürlüğü.
- **M11 — Üretim teşhisi.** "Hangi satırda takıldık?" sorusu thread dump ile cevaplanır.
- **M24-M25 — Gözlemlenebilirlik.** Hangi istek hangi yolda hangi adımı yürüttü (trace).

Bu zincirin en alt basamağı: **işaretçi var, tek tek ilerliyor, atlayabiliyor.**

### 6. VISUAL MODE (Görsel Modu) — SEKME 2

#### Bu derse özgün metafor: **Aydınlatmalı Komut Panosu Sahnesi**

Sandviç gişesi ve komut kartlı robot birebir tekrar edilmez. Bu derse özgün öğretim alanı.

#### Visual Stage Layout (Codex Prototip Spesifikasyonu)

```text
+-------------------------------------------------------------+
|                                                             |
|  [SOL BÖLGE]      [ORTA BÖLGE]        [SAĞ BÖLGE]           |
|  Operatör çocuk   Dikey komut         Komutun karşılığı     |
|  (Başlat tuşunda) panosu + hareketli  olan basit eylem      |
|                   işaretçi (ok)       (lamba, motor vs.)    |
|                                            +-----------------+
|                                            | YAN AÇIKLAMA   |
|                                            | PANELİ         |
|                                            +-----------------+
|                                                             |
+-------------------------------------------------------------+
|        [ALT BÖLGE — ADIM KONTROLLERİ]                       |
|  ◀ Geri    ▶ Sonraki Adım    🔁 Tekrar İzle                |
+-------------------------------------------------------------+
```

**Bölge tanımları (Codex için bağlayıcı):**

- **Sol bölge — Operatör:** Sabit çocuk figürü, parmağı "Başlat" tuşunda. Programı başlatan rolü.
- **Orta bölge — Komut panosu:** Üç ya da dört satır, her satırın solunda küçük bir ampul, sağında komut etiketi. Solda dikey çubuk üzerinde hareketli bir **ok** (işaretçi). Aktif satırın ampulü yanar, ok tam o satırın yanındadır.
- **Sağ bölge — Eylem:** Komuta karşılık gelen basit sahne: bir lamba, bir motor, bir kapı. Sadece aktif satırın eylemi görünür.
- **Yan açıklama paneli:** Aktif kavram + tek cümle.
- **Alt bölge — Adım kontrolleri.**

#### Animasyon — Adım Adım, Öğrenci Kontrollü

- **Adım 1:** Ok pano dışında bekliyor; tüm ampuller sönük. Operatör "Başlat"a basıyor. **Yan panel:** "program başlıyor."
- **Adım 2 — Fetch:** Ok 1. satırın yanına kayıyor; ampul yanıyor. **Yan panel:** "fetch — komut alındı."
- **Adım 3 — Execute:** Sağda lamba yanıyor. **Yan panel:** "execute — komut uygulandı."
- **Adım 4 — Advance:** Ampul sönüyor; ok bir aşağı kayıyor. **Yan panel:** "advance — bir sonraki komut."
- **Adım 5:** 2. satır yanıyor; sağda motor dönüyor. **Yan panel:** "ikinci komut çalışıyor."
- **Adım 6:** 3. satır yanıyor; lamba sönüyor. **Yan panel:** "üçüncü komut."
- **Adım 7 — Bitiş:** Ok pano dışına çıkıyor. **Yan panel:** "program bitti."
- **Adım 8 — Atlama (control flow tohumu):** Yeni bir kısa sahne. Pano 4 satır. 3. satır yerine ok 1. satıra geri zıplıyor. **Yan panel:** "ok her zaman aşağı gitmek zorunda değil; bazı komutlar 'atla' diyebilir."

Her adımda **"Tekrar İzle"** vardır. Donmuş tek bir kare bile öğreticidir (örn. "Ok 2. satırda, ampul yanıyor — şu an o komut uygulanıyor").

#### Görsel Sembol Sözlüğü (yeni)

- **Hareketli ok / işaretçi** = program counter (yeni; sembol sözlüğüne eklenir).
- **Yanan ampul** = aktif komut.
- **Sönük ampul** = beklemekte ya da bitmiş komut.

### 7. CODE MODE (Kod Modu) — SEKME 3

> **Bilişsel yük notu:** Bu derste `public`, `static`, `void` gibi kelimeleri öğrenmeyeceğiz. Şimdilik onları tarif defterindeki resmi damgalar gibi düşün. İleride tek tek öğreneceğiz.

Şimdi panodaki üç satırı basit bir Java kodu olarak görelim. Amaç ezberlemek değil; **işaretçi fikrini** kodda hissetmek.

```java
public class KomutPanosu {

    public static void main(String[] args) {
        System.out.println("1. Lambayi yak");
        System.out.println("2. Motoru calistir");
        System.out.println("3. Lambayi söndür");
    }
}
```

#### Her satır ne diyor?

- **`main(String[] args)`** — İşaretçi programa burada giriyor. Pano başlıyor.
- **`System.out.println("1. Lambayi yak");`** — İşaretçi bu satıra geliyor → satır yürütülüyor (ekrana yazılıyor) → işaretçi bir aşağı kayıyor.
- **`System.out.println("2. Motoru calistir");`** — Aynısı.
- **`System.out.println("3. Lambayi söndür");`** — Aynısı.
- **`main` sonu** — İşaretçi pano dışına çıkıyor; program bitiyor.

Her `println` panoda bir satırdır. İşaretçi yukarıdan aşağıya **tek tek** ilerler.

#### İlerleyen Yol Notu

Senin gözünle üç satır vardı. JVM gözüyle bu üç satır onlarca küçük adıma (bytecode) çevrilir; her küçük adım yine aynı "al → uygula → ilerle" döngüsünde işlenir. Bugün bunu öğrenmiyoruz; ama M9'da JVM perdesini aralayacağız.

#### Görsel ↔ Kod Senkron Haritası

| Aktif kod satırı | Aktif sahne adımı | Yan panel cümlesi |
|---|---|---|
| `main(...)` başı | Adım 1 | "program başlıyor" |
| `println("1. ...")` | Adım 2-3 | "1. komut çalışıyor" |
| `println("2. ...")` | Adım 5 | "2. komut çalışıyor" |
| `println("3. ...")` | Adım 6 | "3. komut çalışıyor" |
| `main(...)` sonu | Adım 7 | "program bitti" |

### 8. Üretim Örneği

Trendyol'da "Sepete Ekle" butonuna bastığında backend program devreye girer. İşaretçi sıralı adımlardan geçer: girdiyi doğrula → ürünü bul → sepete ekle → cevabı dön.

Şimdi gerçek bir Principal sorusu: **bu adımlar üretimde her zaman düz mü çalışır?** Hayır. Üretimde işaretçi:

- **Atlama yapabilir:** "Eğer ürün stokta yoksa diğer adımları atla, 'stokta yok' cevabı dön."
- **Bekleyebilir:** "Veritabanı cevap verene kadar bu satırda dur." (M15 transaction; M11 dump.)
- **Tekrarlayabilir:** "Hata aldıysan 3 kez yeniden dene." (M29 resilience: retry.)

#### Yürütme yanlış kontrol edilirse ne olur?

**Senaryo 1 — İşaretçi sonsuz döngüde:**
Bir satır kendine atlıyor (örn. while(true) gibi); sistem bir çıkış adımı çalıştıramıyor. Sunucu yavaşlar; çare yeniden başlatma ya da koruma mekanizması (timeout, circuit breaker — M29).

**Senaryo 2 — İşaretçi beklenenden hızlı geçiyor:**
Bir adım veritabanı cevabını beklemeden ilerliyor; sonraki adım eksik veriyle çalışıyor. Sistem tutarsız sonuç döndürür; düzeltme adımı gerekli olur.

**Senaryo 3 — Birden çok işaretçi karışıyor:**
Eşzamanlı isteklerde her isteğin kendi işaretçisi var. Eğer ortak bir kutuya bakıyorlarsa sırayla bakma kuralları gerekir (M10 JMM; M7 concurrency).

Bir Java Backend Engineer için "işaretçi şu an nerede ve neye bakıyor?" sorusu üretim teşhisinin temelidir.

### 9. Üretimde Hata Ayıklama Bakışı

Principal şu soruyu sorar: **"İşaretçi nerede takıldı?"**

Belirtiler:
- **Sessiz takılma:** Yanıt gelmiyor → işaretçi bir satırda bekliyor (genellikle ağ / veritabanı).
- **CPU %100:** İşaretçi dar bir döngüde dönüyor.
- **Tutarsız sonuç:** İşaretçi beklenmedik dal aldı (control flow bug).

Nereye bakılır? **Thread dump** (hangi işaretçi nerede), **stack trace** (hangi satıra kadar gelmiş), **log** (hangi adımları geçmiş). Bugün sadece kelimeleri tohum olarak bil. M11'de detay.

### 10. Senior / Principal Trade-off

#### Trade-off 1 — Düz akış mı, dallı akış mı?

- **Düz akış (sadece sıralı):** Anlaması kolay; her zaman aynı yolu izler. Ama esnek değil.
- **Dallı akış (if/while/return):** Esnek; ama "okun şimdi nereye atladığını" izlemek zor olabilir.

Sezgi: **Olabildiğince düz yaz; dallanmayı niye gerekirse oraya koy.** Karmaşık iç içe dallanma okunabilirliği bozar.

#### Trade-off 2 — Tek işaretçi mi, birden çok işaretçi mi?

- **Tek işaretçi (senkron):** Sade ve öngörülebilir. Ama yavaş bekleme noktalarında tüm program durur.
- **Birden çok işaretçi (concurrent):** Hızlı; aynı anda farklı işler yapabilir. Bedel: ortak belleğe bakarken görünürlük/sıra sorunları (M7-M10).

Principal sezgi: Önce sade tut; performans gerçekten gerekliyse eşzamanlılığa ölçerek geç.

#### Trade-off 3 — JVM'e güven, kontrolü ne kadar bırak?

- **JVM'e tam güven:** GC, JIT, bellek yönetimi otomatik. Programcı sade kalır.
- **Düşük seviye kontrol:** Bazı durumlarda (yüksek performans, native) JVM dışına çıkmak gerekir; bedel: karmaşıklık.

Çoğu üretim sisteminde JVM'e güvenmek doğru karardır; istisnalar ölçümle gerekçelenir.

### 11. Yanılgı Kontrolü

**Çoğu kişi şunu sanır:** "Bilgisayar tüm komutları aynı anda görür."

**Aslında:** Bilgisayar komutları sırayla, tek tek yürütür. Aynı anda yürüyormuş gibi gözüken şey, aslında işaretçinin çok hızlı ilerlemesidir.

#### Hızlı Doğru/Yanlış

> "Bir Java programında satırlar aynı anda yürür."

- (a) Doğru
- (b) Yanlış

**Doğru cevap: (b) Yanlış.** Klasik bir programda satırlar sırayla, tek tek çalışır. Aynı anda yürütme ancak çok thread'lı (concurrent) tasarımlarda olur — orada bile her thread'in kendi işaretçisi vardır.

### 12. Senaryo Tabanlı Alıştırma

**Durum:** Bir program 5 satırdır. 3. satır şöyle der: "Eğer hata varsa, 5. satıra atla." Hata var.

**Soru:** İşaretçi sırasıyla hangi satırları yürütür?

- (a) 1, 2, 3, 4, 5
- (b) 1, 2, 3, 5
- (c) Yalnızca 3 ve 5

**Doğru cevap: (b).** 1 ve 2 düz; 3 atlama kararı verir; 4 atlanır; 5 çalışır.

### 13. INTERVIEW MODE (Mülakat Modu) — SEKME 4

#### Köprü Sorusu

**Soru:** "Bir bilgisayar komutları nasıl çalıştırır? Sıralı yürütme ile control flow arasındaki fark nedir?"

#### İyi Cevap İskeleti

- Tanım ver: "Bilgisayar 'al → uygula → ilerle' döngüsünü tekrarlar; bir işaretçi her seferinde tek komutu yürütür."
- Sıra ve control flow farkını ver: "Sıralı yürütme işaretçinin yukarıdan aşağıya düz ilerlemesidir. Control flow ise işaretçinin koşullara göre atlaması ya da geri dönmesidir (if, while, return)."
- Üretim köprüsü kur: "Üretimde aynı döngü çalışır; ama her zaman beklenen dalı yürütmez. Bu yüzden 'hangi satırda takıldı?' sorusunu thread dump ve stack trace ile sorarız."
- JVM köprüsü: "Java'da yazdığımız satırlar JVM tarafından bytecode'a çevrilir; aslında işaretçi bytecode üzerinde gezer. Bu detay M9'da gelir."

#### Kötü vs İyi Cevap

- **Kötü:** "Bilgisayar kodu okur ve çalıştırır."
  - Zayıf: "Nasıl?" sorusunu cevaplamıyor.
- **İyi:** "Bilgisayar her komutu sırayla yürütür: al → uygula → ilerle. Bu döngünün merkezinde bir işaretçi (program counter) vardır. İşaretçi normalde aşağı kayar; ama control flow komutları (if, while, return) onu farklı satırlara yönlendirebilir. Java'da satırlar önce JVM bytecode'una çevrilir; işaretçi gerçekte bytecode üzerinde gezer. Üretim teşhisinde 'işaretçi şu an nerede?' sorusu thread dump ile cevaplanır."

#### Sık Yapılan Hata

"Hepsi aynı anda çalışır" ya da "İşaretçi yok, kod kendi başına akar" diye düşünmek. **Düzeltme:** Tek tek yürür; ve bunu yöneten görünmez bir işaretçi vardır.

#### Follow-up Soruları

**Follow-up 1:** "Üretimde bir backend servisi 'cevap vermiyor' diyor. İşaretçinin nerede olduğunu nasıl bulursun?"

**Follow-up 2:** "Java kodun JVM tarafından bytecode'a çevriliyor; bu çevrim performans için sana ne sağlar, ne tür risk getirir?" (M9 tohumu.)

#### 5-Yaş Köprüsü

"Pano sahnesini hatırla: küçük ok satırların yanında geziyor, ne zaman bir satıra denk gelse o satırın işi yapılıyor. Hep aşağı gider; ama bazı satırlar 'şuraya atla' der."

### 14. "Anlamadım" Kurtarma Yolu

- **Kademe 1:** "Bilgisayarın içinde küçük bir ok var. Komutların yanında gezer; o an yanındaki satırı yürütür."
- **Kademe 2:** Farklı benzetme: bir tarif kitabını okuyan birisi parmağıyla satırı takip eder; parmak sıradaki satıra geçer.
- **Kademe 3:** Ön koşul kontrolü: "Program = sıralı kart destesi" sezgisi yerinde mi? Değilse → M0-L02 mini hatırlatma + buraya geri.
- **Kademe 4:** En küçük parçaya in: "Sadece şu cümleye bak: *Bilgisayar her seferinde tek bir komut çalıştırır.* Başka hiçbir şey önemli değil."

Hard-lock yok.

### 15. Mini Özet + Aralıklı Tekrar Kancası

- Bilgisayar **al → uygula → ilerle** döngüsünü tekrarlar.
- Yürütmeyi yöneten görünmez bir **işaretçi (program counter)** vardır.
- İşaretçi düz aşağı gidebilir ya da **control flow** ile farklı satırlara atlayabilir.

#### Derinleşme Köprüsü

> Bu ders basit başladı, ama "işaretçi var ve tek tek ilerliyor" sezgisi ileride control flow (M1), concurrency (M7-M8), JVM bytecode ve JIT (M9), Java Memory Model (M10), üretim teşhisi (M11) ve dağıtık trace (M25) muhakemesinin temel taşıdır.

#### Aralıklı Tekrar

Bu fikir M1 (`if`/`while`), M7 (thread), M9 (bytecode/JIT), M10 (JMM), M11 (thread dump) ve M25 (distributed tracing) derslerinde tekrar genişleyecek.

### 16. Mikro-Değerlendirme

**Soru:** Bir bilgisayar komutları nasıl yürütür?

- (a) Hepsini aynı anda görür ve birlikte çalıştırır.
- (b) Bir işaretçi her seferinde tek komutu yürütür; sonra ilerler. Bazen koşula göre başka satıra atlayabilir.
- (c) Yalnızca son komutu çalıştırır.

**Doğru cevap:** (b).

- Doğru → "Devam Et" yumuşak şekilde belirir.
- Yanlış → §17 Soft-Check tetiklenir. **Hard-lock yok.**

### 17. Soft-Check ve Otomatik Kurtarma Tetiği

- **Adım 1:** "Hep birlikte tekrar bakalım, daha basit anlatalım mı?"
- **Adım 2:** Tek cümle özet + en sade görsel kare: "Küçük ok satırların yanında geziyor; her durduğu satır o an çalışıyor."
- **Adım 3:** Mikro-değerlendirme farklı sözcüklerle: "Aynı anda kaç komut çalışır?"
- **Adım 4:** Hâlâ yanlışsa → M0-L02 mini hatırlatması + buraya geri.

"Devam Et" sertçe bloklanmaz.

### 18. Sıradaki Adım — TEK BUTON

**Devam Et** → M0-L04 (Kod, Veri ve Bellek Arasındaki İlk Bağ).

Takılırsan: **"Bir önceki kavramı tekrar et"** bağlantısı seni dersin başına yumuşak biçimde geri taşır.

### 19. Alt Bilgi / Editör Kontrol Listesi

- Bilişsel yük kontrolü yapıldı mı? — **E**.
- Dört mod sekmeli/akordeon yapıda mı? — **E**.
- Tüm zorunlu alanlar dolu mu? — **E**.
- Depth Ladder 5 basamağı görünür mü? — **E**.
- "Derinleşme Yolu" Theory Mode'da var mı? — **E**.
- Production Example yumuşak dilde 3 senaryo veriyor mu? — **E**.
- Senior/Principal trade-off (düz/dallı + tek/çok işaretçi + JVM güven) güçlü mü? — **E**.
- Interview Mode iki follow-up içeriyor mu? — **E**.
- Bu derse özgün metafor (aydınlatmalı komut panosu) önceki derslerden farklı mı? — **E**.
- Hard-lock yok, yalnızca soft-check — **E**.
- Jenerik şablon yasağı korundu — **E**.
- M0-L02 birebir tekrar edilmedi; köprü kuruldu — **E**.

---

## M0-L04 — Kod, Veri ve Bellek Arasındaki İlk Bağ

### 1. Üst Bilgi

- **Ders Kodu:** M0-L04
- **Ait Olduğu Modül:** M0 — Bilgisayar ve Program Nedir?
- **Ön Koşullar:** M0-L01, M0-L02, M0-L03
- **Tahmini Süre:** 12-15 dk
- **Tek Cümlelik Hedef:** "Bu dersin sonunda öğrenci kod (komutlar), veri (değerler) ve bellek (saklama yeri) arasındaki ilk bağı etiketli saklama kutuları sahnesiyle anlayabilecek; bir değişkenin neden hem kodun yazdığı hem belleğin tuttuğu bir şey olduğunu, ve bu sezginin ileride stack/heap, object state ve hata ayıklamada değişken inceleme ile nasıl derinleştiğini sezebilecek."
- **Kaynak Referansı:** Yok.

### 2. Ön Koşul Kontrolü

**Kontrol:** "M0-L03'te işaretçi komutları tek tek yürüttü. Bu cümle sana tanıdık geliyor mu?"

- **Evet** → Devam.
- **Hatırlamıyorum** → Otomatik mini-hatırlatma: "İşaretçi 'al → uygula → ilerle' yapar." Devam.

### 3. Kanca — Gerçek Hayat Sahnesi

Anaokulundaki çocukların kullandığı duvar dolaplarını düşün. Her dolapta etiket var: "Ali", "Ayşe", "Mehmet". Her dolapta tek bir şey duruyor.

Şimdi öğretmenin elinde bir kart (kod) var; kartta yazıyor: "Ali'nin dolabına sarı top koy, sonra Ayşe'nin dolabından kitap al, sonra Ali'nin dolabını oku ve sınıfa söyle."

Kart **kod**. Dolaplardaki içerikler **veri**. Dolapların kendisi **bellek**. Kart okundukça dolaplara dokunuluyor; her dokunuş ya veri yazıyor ya veri okuyor.

Bu sahneyi aklında tut.

### 4. 5 Yaşına Açıklama

Kodda yazan komutlar etiketli dolaplara bakar. Kod onlara bir şey koyar ya da içlerinden bir şey alır. Dolaplara konan şeylere veri diyoruz. Dolapların hepsine birden bellek diyoruz.

(Görsel: solda öğretmen elinde kart, ortada etiketli dolaplar, sağda dolaptan okunan içeriği gösteren küçük ekran.)

> **Not:** Bu sade kapı yalnızca giriştir. Aynı fikir ileride stack/heap ayrımı, object state, garbage collection, ve hata ayıklamada değişken inceleme ile derinleşir.

### 5. THEORY MODE (Teori Modu) — SEKME 1

#### Bu dersin kalıcı benzetmesi: **Etiketli Saklama Kutuları**

Önceki derslerin metaforları (sandviç gişesi, robot+kartlar, komut panosu) birebir tekrar edilmiyor. Bu metafor **kod, veri ve belleğin birlikteliğini** anlatmak için bu derse aittir.

#### Benzetme → Gerçek Kavram Eşleme Tablosu

| Dolap sahnesi | Bilgisayar dünyasındaki karşılığı |
|---|---|
| Öğretmenin elindeki kart | **Kod / komutlar** (M0-L02, M0-L03 ile köprü) |
| Etiketli dolap | **Değişken (variable):** isimli bir veri tutucu |
| Dolabın etiketi | **Değişken adı** — örn. `isim`, `yas` |
| Dolaptaki içerik | **Değer / data** — örn. "Ahmet", 30 |
| Tüm dolaplar topluluğu | **Bellek (memory)** — programın anlık hafızası |
| Dolabı açıp bakmak | **Read / okuma** |
| İçindekini değiştirmek | **Write / yazma** |

#### Adım Adım Teknik Açıklama

**Kod nedir?**
**Kod**, bilgisayara verilen komutların yazılı hâlidir (M0-L02). Kart üzerindeki talimatlar gibi.

**Veri (data) nedir?**
**Veri**, programın üzerinde çalıştığı bilgilerdir: bir kullanıcının yaşı, bir ürünün fiyatı, bir mesajın metni. Dolaplara konan şeyler.

**Bellek (memory) nedir?**
**Bellek**, verinin tutulduğu yerdir. Programın "şu an aklında olan" şeyler. Tüm dolaplar topluluğu.

**Değişken (variable) nedir?**
**Değişken**, bellekte tek bir veri tutan, isimli bir yerdir. Kod değişkenlere isimle bakar; bellek değişkenleri fiziksel olarak saklar; veri değişkenin içinde durur. Üç kavram bir araya gelince **değişken** kelimesi belirir.

**Üçünün bağı nedir?**
Kod ne yapacağını söyler. Veri üzerinde ne yapacağını söyler. Bellek nerede saklayacağını sağlar. Değişken bu üçünün buluşma noktasıdır.

**Tip (type) nedir?**
Her dolap belirli bir tür şey kabul eder. Bir dolap "yaş" için sadece **sayı**, başka bir dolap "isim" için sadece **yazı** kabul eder. Bu, kazaları önlemek içindir. M1'de tipleri detaylı göreceğiz.

#### M0-L02 ve M0-L03 ile Köprü

- M0-L02'de komutların **sırasını** öğrendik.
- M0-L03'te o komutları **yürüten işaretçi**yi gördük.
- Bu derste işaretçinin yürütürken sürekli **dolapları okuyup yazdığını** ekliyoruz. Resim genişliyor.

#### Derinleşme Yolu (Depth Ladder)

- **M1 — Java tipleri.** Hangi dolap hangi türü kabul eder.
- **M2 — Nesneler.** Bir dolap, içinde birden çok dolap olan büyük bir kutu olabilir (object state).
- **M4 — Koleksiyonlar.** Bir dolapta birden çok şey: list, map, set.
- **M9 — JVM iç yapısı.** Bellek aslında iki bölge: **stack** (kısa ömürlü, hızlı dolaplar) ve **heap** (uzun ömürlü, paylaşılan dolaplar).
- **M10 — Java Memory Model.** Aynı dolaba birden çok işaretçi bakarken görünürlük.
- **M11 — Üretim teşhisi.** "Hangi dolapta ne var?" debugger ile bakılır; heap dump ile bellek anlık görüntüsü.
- **M15 — Veri katmanı.** Belleğin kalıcı kuzeni: veritabanı.

### 6. VISUAL MODE (Görsel Modu) — SEKME 2

#### Bu derse özgün metafor: **Etiketli Saklama Kutuları Sahnesi**

#### Visual Stage Layout (Codex Prototip Spesifikasyonu)

```text
+-------------------------------------------------------------+
|                                                             |
|  [SOL BÖLGE]      [ORTA BÖLGE]        [SAĞ BÖLGE]           |
|  Öğretmen /       Raflar üzerinde     Küçük çıktı ekranı    |
|  programcı        etiketli dolaplar   (okunan değer         |
|  elinde kart      dizisi              burada görünür)       |
|  (kod)                                                      |
|                                            +-----------------+
|                                            | YAN AÇIKLAMA   |
|                                            | PANELİ         |
|                                            +-----------------+
|                                                             |
+-------------------------------------------------------------+
|        [ALT BÖLGE — ADIM KONTROLLERİ]                       |
|  ◀ Geri    ▶ Sonraki Adım    🔁 Tekrar İzle                |
+-------------------------------------------------------------+
```

**Bölge tanımları:**

- **Sol bölge — Programcı / öğretmen:** Sabit figür, elinde komut kartı (kod). Aktif komut sarı vurgu alır.
- **Orta bölge — Dolaplar:** İki ya da üç etiketli dolap. Her dolap başlangıçta boş; etiketler önce eklenir, sonra içerikler. Aktif dolap sarı kenarla vurgulanır.
- **Sağ bölge — Çıktı ekranı:** Bir dolap okunduğunda içeriği burada görünür.
- **Yan açıklama paneli:** Aktif kavram + tek cümle.
- **Alt bölge — Adım kontrolleri.**

#### Animasyon — Adım Adım

- **Adım 1:** Programcı kartında "Aç: isim" komutu var. Birinci dolaba "isim" etiketi yapışıyor. **Yan panel:** "değişken adı — kutunun etiketi."
- **Adım 2:** Kartta "Koy: Ahmet". İlk dolaba "Ahmet" kartı giriyor. **Yan panel:** "veri — kutunun içeriği."
- **Adım 3:** Kart sıradaki komut: "Aç: yas / Koy: 30". İkinci dolap kuruluyor. **Yan panel:** "ikinci değişken."
- **Adım 4 — Okuma:** Kartta "Oku: isim". İlk dolap açılıyor; sağdaki ekranda "Ahmet" beliriyor. **Yan panel:** "read — okuma."
- **Adım 5 — Okuma:** "Oku: yas" → ekran "30". **Yan panel:** "ikinci okuma."
- **Adım 6 — Yazma:** Kartta "Değiştir: isim → Ayşe". Eski "Ahmet" kartı çıkıyor (çöp sepetine), yeni "Ayşe" kartı giriyor. **Yan panel:** "write — değer değişti."
- **Adım 7:** Tekrar "Oku: isim" → ekran artık "Ayşe". **Yan panel:** "aynı kutu, yeni değer."
- **Adım 8 — Bağ vurgusu (özet karesi):** Sol = kod, orta = dolaplar (bellek), içlerinde kartlar (veri). Üstte üç etiket yanıyor: **KOD → BELLEK → VERİ**. **Yan panel:** "üçü birlikte = değişken."

Her adımda **"Tekrar İzle"** vardır.

#### Görsel Sembol Sözlüğü (yeni semboller)

- **Etiketli dolap** = değişken.
- **Etiket** = değişken adı.
- **İçerik kartı** = değer / veri.
- **Çöp sepeti** = eski değerin gitmesi (ileride GC için kullanılacak).

### 7. CODE MODE (Kod Modu) — SEKME 3

> **Bilişsel yük notu:** Bu derste `public`, `static`, `void` gibi kelimeleri öğrenmeyeceğiz. Resmi damgalar gibi düşün; ileride teker teker.

Sahneyi şimdi basit Java kodunda görelim. Kod (komutlar) dolapları (belleği) açıp veri yazıyor ve okuyor.

```java
public class BellekOrnegi {

    public static void main(String[] args) {
        String isim = "Ahmet";
        int yas = 30;

        System.out.println(isim);
        System.out.println(yas);

        isim = "Ayşe";
        System.out.println(isim);
    }
}
```

#### Her satır ne diyor?

- **`String isim = "Ahmet";`** — "Adı `isim` olan bir dolap aç. İçine `Ahmet` koy." (`String` = yazı türünde içerik.)
- **`int yas = 30;`** — "Adı `yas` olan bir dolap aç. İçine `30` koy." (`int` = tamsayı.)
- **`System.out.println(isim);`** — "`isim` dolabını aç, içindekini ekrana yaz." Çıktı: `Ahmet`.
- **`System.out.println(yas);`** — Aynı şey `yas` için. Çıktı: `30`.
- **`isim = "Ayşe";`** — "`isim` dolabının içindeki kartı değiştir; yeni içerik `Ayşe`." Eski değer çöpe.
- **`System.out.println(isim);`** — Yeniden okuma. Çıktı artık `Ayşe`.

Üç kelime burada birlikte: **kod** (satırlar), **bellek** (dolaplar), **veri** (içerikler). Değişken = üçünün birleştiği yer.

#### İlerleyen Yol Notu

Bu kodu çalıştırdığında JVM `int yas` için **stack**'te küçük bir yer, `String isim = "Ahmet"` için **heap**'te bir yer ayırır; `isim` değişkeni heap'teki yere bir referans (adres) tutar. Bugün bunu bilmen gerekmiyor; ama M9'da bu ayrımı açacağız.

#### Görsel ↔ Kod Senkron Haritası

| Aktif kod satırı | Aktif sahne adımı | Yan panel cümlesi |
|---|---|---|
| `String isim = "Ahmet";` | Adım 1-2 | "dolap açıldı, veri kondu" |
| `int yas = 30;` | Adım 3 | "ikinci dolap" |
| `println(isim);` | Adım 4 | "okuma" |
| `println(yas);` | Adım 5 | "ikinci okuma" |
| `isim = "Ayşe";` | Adım 6 | "yazma — değer değişti" |
| `println(isim);` (son) | Adım 7 | "yeni değer okundu" |

### 8. Üretim Örneği

Trendyol'da kullanıcı login olduktan sonra backend program o oturum boyunca pek çok dolap kullanır:

- `kullaniciId` dolabında: senin numaran.
- `sepet` dolabında: sepetindeki ürünler listesi.
- `sonGoruntulenenUrun` dolabında: az önce baktığın ürün.

Kodun her satırı bu dolapları açar, içlerine bakar ya da değişiklik yapar. Kod, bellek ve veri sürekli birlikte çalışır.

#### Veri/bellek bağı yanlış kurulursa ne olur?

**Senaryo 1 — Yanlış dolap adından okumak:**
Kod `kullaniciId` yerine `kullanicidId` (tipografik hata) yazıyor. Eski dilde dolap bulunamıyor; sistem bir hata mesajı veriyor. M1'de bu hatanın derleme zamanında nasıl yakalandığını göreceğiz.

**Senaryo 2 — Eski veriyle çalışmak (stale data):**
Kod bir dolaptaki veriyi okudu; veritabanı arada güncellendi; kod hâlâ eski kopyayla çalışıyor. Sonuç tutarsız olabilir; sistem ya tazeleme ya doğrulama adımı çalıştırır.

**Senaryo 3 — Dolap unutmak (memory leak):**
Kod yeni dolaplar açıyor ama eskileri kapatmıyor. Üretimde bellek dolar; sunucu yavaşlar veya yeniden başlatılır. M11'de detay.

Bir Principal mühendis için **"kodun şu an hangi dolaba dokunuyor ve içinde ne var?"** sorusu hata ayıklamanın merkezindedir.

### 9. Üretimde Hata Ayıklama Bakışı

Principal şu soruyu sorar: **"Değişkende beklediğim değer mi var?"**

Belirtiler:
- **Yanlış sonuç:** Bir dolapta beklenenden farklı değer var.
- **NullPointerException:** Dolap boş; ama kod içindeki şeyi okumaya çalıştı. (M5.)
- **Bellek dolması:** Çok sayıda dolap açık kaldı.

Nereye bakılır? **Debugger** (değişkenleri canlı inceleme), **heap dump** (bellek anlık görüntüsü), **log** (değer değişikliği kayıtları). M11'de detay.

### 10. Senior / Principal Trade-off

#### Trade-off 1 — Dolap sayısı

- **Az dolap:** Kısa kod. Ama bir dolap çok iş yapıyorsa "burada ne var?" sorusu zorlaşır.
- **Çok dolap:** Okunaklı; ama kod uzar.

Sezgi: Bir dolap **tek bir niyet** taşımalı. Karışık dolap = ileride bug.

#### Trade-off 2 — Dolabın ömrü

- **Uzun ömürlü dolap (global, class-level):** Her yerden erişilir; ama kim ne zaman değiştirir izlemek zor.
- **Kısa ömürlü dolap (lokal, method içi):** Sadece o kısımda yaşar; izi sürmesi kolay; ama paylaşılamaz.

Principal sezgisi: **Kapsamı mümkün olduğunca dar tut.** Geniş kapsam, gizli bağımlılık demektir.

#### Trade-off 3 — Veriyi belleğe mi alma, kalıcı kayıttan mı okuma?

- **Belleğe önceden al (cache):** Hızlı; ama veri eskiyebilir.
- **Her seferinde kaynaktan oku:** Güncel; ama yavaş.

Bu trade-off M18 (caching) ile büyür.

### 11. Yanılgı Kontrolü

**Çoğu kişi şunu sanır:** "Kod ve veri ayrı dünyalardır."

**Aslında:** Kod sürekli veriyle çalışır. Kod bellekteki dolaplara bakmadan hiçbir anlamlı iş yapamaz. Üçü birbirine bağlıdır.

#### Hızlı Doğru/Yanlış

> "Bir değişken, kodda yazılı bir kelimedir; bellekle ilgisi yoktur."

- (a) Doğru
- (b) Yanlış

**Doğru cevap: (b) Yanlış.** Değişken kodda yazılır ama bellekte yaşar. İkisi ayrı düşünülmez.

### 12. Senaryo Tabanlı Alıştırma

**Durum:** Kod şöyle:
```java
int sayac = 0;
sayac = sayac + 1;
sayac = sayac + 1;
System.out.println(sayac);
```

**Soru:** Ekranda ne görünür?

- (a) `0`
- (b) `1`
- (c) `2`

**Doğru cevap: (c) `2`.** İlk satırda dolaba 0 kondu. İkinci satır: oku + 1 ekle + yaz = 1. Üçüncü satır: oku + 1 ekle + yaz = 2. Dördüncü satır okur ve yazar.

### 13. INTERVIEW MODE (Mülakat Modu) — SEKME 4

#### Köprü Sorusu

**Soru:** "Kod, veri ve bellek birbiriyle nasıl ilişkilidir? Değişken bu üçünün neresine düşer?"

#### İyi Cevap İskeleti

- Tanımları ver: "Kod komutların yazılı hâli; veri programın üzerinde çalıştığı bilgi; bellek verinin tutulduğu yer."
- Değişkeni konumlandır: "Değişken üçünün birleştiği noktadır — kod ona isimle bakar, bellek onu fiziksel olarak tutar, içinde veri durur."
- Üretim köprüsü kur: "Üretimde 'değişkende ne var?' sorusu debugger ve heap dump ile cevaplanır. Bellek yönetimi (leaks, stale data) bu üçlünün doğru kurulmamasından çıkar."
- JVM köprüsü: "Java'da bazı değişkenler stack'te, bazıları heap'te durur; bu ayrım performans ve ömür açısından önemlidir (M9)."

#### Kötü vs İyi Cevap

- **Kötü:** "Değişken bir kod kelimesidir."
  - Zayıf: Belleği ve veriyi atlıyor.
- **İyi:** "Kod, veri ve bellek bir üçgendir. Kod komutlarla veriye nasıl davranılacağını söyler; veri programın hammaddesidir; bellek verinin yaşadığı yerdir. Değişken bu üçünün buluştuğu noktadır — koda göre isimli, belleğe göre adresli, içinde veri taşıyan bir yer. Java'da stack ve heap olarak iki bölge vardır; performans ve nesne ömrü buna göre değişir."

#### Sık Yapılan Hata

Değişkeni yalnızca "kod tarafı" olarak görmek. **Düzeltme:** Değişken bellekte fiziksel olarak yer kaplar; kod ona isimle ulaşır.

#### Follow-up Soruları

**Follow-up 1:** "Java'da bir değişken stack'te mi heap'te mi olur, neye göre belirlenir?" (M9 tohumu.)

**Follow-up 2:** "Üretimde 'değişkendeki değer beklenen değil' problemini nasıl teşhis edersin?"

#### 5-Yaş Köprüsü

"Etiketli dolaplar. Kart (kod) der ki 'şu dolaba şunu koy ya da şu dolabı oku'. Dolap = değişken, dolapların hepsi = bellek, içindeki şey = veri."

### 14. "Anlamadım" Kurtarma Yolu

- **Kademe 1:** "Değişken = etiketli bir dolap. Kod dolaplara bakar."
- **Kademe 2:** Farklı benzetme: posta kutuları. Her ev numarasında bir kutu var; içine bir tek mektup koyabilirsin; kod ev numarasıyla kutuyu bulur.
- **Kademe 3:** Ön koşul kontrolü: "Program ve komut yürütme aklında mı?" Değilse → M0-L02/L03 mini-hatırlatma + buraya geri.
- **Kademe 4:** En küçük parçaya in: "Sadece şu cümleye bak: *Bir değişken, bellekte isimli bir kutudur.*"

Hard-lock yok.

### 15. Mini Özet + Aralıklı Tekrar Kancası

- **Kod**, komutların yazılı hâlidir; **veri** programın işlediği bilgidir; **bellek** verinin tutulduğu yerdir.
- **Değişken**, üçünün birleşim noktasıdır: isimli, bellekte yaşayan, içinde veri tutan bir yer.
- Üretimde "değişkende ne var?" sorusu hata ayıklamanın temel sorusudur.

#### Derinleşme Köprüsü

> Bu ders basit başladı, ama "kod-veri-bellek üçgeni" sezgisi ileride Java tipleri (M1), nesneler (M2), koleksiyonlar (M4), JVM stack/heap (M9), Java Memory Model (M10), üretim teşhisi (M11), caching (M18) ve veri katmanı (M15) muhakemesinin temel taşıdır.

#### Aralıklı Tekrar

Bu fikir M1, M2, M4, M9, M10, M11, M15 ve M18 derslerinde tekrar genişleyecek.

### 16. Mikro-Değerlendirme

**Soru:** Bir değişkeni en doğru hangi cümle anlatır?

- (a) Bilgisayarın hafızası.
- (b) Kodda yer alan, bellekte fiziksel olarak yer kaplayan, içinde tek bir veri tutan isimli bir yer.
- (c) Yalnızca kodda bir satır; bellekle ilgisi yoktur.

**Doğru cevap:** (b).

- Doğru → "Devam Et."
- Yanlış → §17 Soft-Check tetiklenir. **Hard-lock yok.**

### 17. Soft-Check ve Otomatik Kurtarma Tetiği

- **Adım 1:** "Hep birlikte tekrar bakalım, daha basit anlatalım mı?"
- **Adım 2:** Tek cümle özet + en sade görsel kare: "Değişken, bellekte isimli bir dolaptır; içinde tek bir değer durur."
- **Adım 3:** Mikro-değerlendirme farklı sözcüklerle: "Bir bilgiyi adıyla bellekten almak için ne kullanılır?"
- **Adım 4:** Hâlâ yanlışsa → M0-L02 mini hatırlatması + buraya geri.

### 18. Sıradaki Adım — TEK BUTON

**Devam Et** → M0-L05 (Hata Nedir? Bilgisayar Neden Beklenmeyen Şey Yapar?).

Takılırsan: **"Bir önceki kavramı tekrar et"**.

### 19. Alt Bilgi / Editör Kontrol Listesi

- Bilişsel yük kontrolü yapıldı mı? — **E**.
- Dört mod sekmeli/akordeon yapıda mı? — **E**.
- Tüm zorunlu alanlar dolu mu? — **E**.
- Depth Ladder 5 basamağı görünür mü? — **E**.
- "Derinleşme Yolu" Theory Mode'da var mı? — **E**.
- Production Example yumuşak dilde 3 senaryo veriyor mu? — **E**.
- Senior/Principal trade-off (dolap sayısı + ömür + cache) güçlü mü? — **E**.
- Interview Mode iki follow-up içeriyor mu? — **E**.
- Bu derse özgün metafor (etiketli dolaplar) önceki derslerden farklı mı? — **E**. M0-L03'te kullanılmadı; ilk kez burada kullanıldı.
- Hard-lock yok, yalnızca soft-check — **E**.
- Jenerik şablon yasağı korundu — **E**.

---

## M0-L05 — Hata Nedir? Bilgisayar Neden Beklenmeyen Şey Yapar?

### 1. Üst Bilgi

- **Ders Kodu:** M0-L05
- **Ait Olduğu Modül:** M0 — Bilgisayar ve Program Nedir?
- **Ön Koşullar:** M0-L01, M0-L02, M0-L03, M0-L04
- **Tahmini Süre:** 12-15 dk
- **Tek Cümlelik Hedef:** "Bu dersin sonunda öğrenci 'hata'yı utanılacak bir başarısızlık olarak değil, **incelenebilir bir sinyal** olarak görebilecek; üç temel hata türünü (syntax, runtime, logic) tarif kartı sahnesiyle ayırt edebilecek; ve bu sezginin ileride stack trace, log, debugging ve üretim olay yönetimine nasıl bağlandığını sezebilecek."
- **Kaynak Referansı:** Yok.

### 2. Ön Koşul Kontrolü

**Kontrol:** "M0-L02'de programın sıralı komutlar olduğunu, M0-L03'te işaretçinin bunları tek tek yürüttüğünü, M0-L04'te kodun bellekteki değişkenlere baktığını gördük. Bu çerçeve aklında mı?"

- **Evet / Genel olarak** → Devam.
- **Hatırlamıyorum** → Otomatik mini-hatırlatma: "Kod komutları sırayla yürütür; değişkenler bellekte yaşar." Devam.

### 3. Kanca — Gerçek Hayat Sahnesi

Bir aşçı atölyesinde duruyorsun. Aşçının önünde küçük bir tarif kartı: "1. 200 ml su koy. 2. Yarım çay kaşığı tuz ekle. 3. ___ derecede pişir."

Aşçı duruyor. Üçüncü satırda derece kısmı eksik. Aşçı parmağıyla satıra dokunuyor, sonra panoya bir yapışkan not yapıştırıyor: "Adım 3 — derece eksik. Açıklığa ihtiyaç var." Mutfak duruyor. Alarm değil, panik değil; sadece bir not.

Tarif gönderen kişi notu görüyor; yeni bir tarif kartı yolluyor: "3. 200°C'de pişir." Aşçı devam ediyor.

Bu derste aynı şeyi öğreneceğiz: **hata, durup notu okumamız gereken bir sinyaldir.** Suçlama değil, soruşturma davetidir.

### 4. 5 Yaşına Açıklama

Bilgisayar bir şeyi yapamayınca durur ve bir not bırakır. Notta ne olduğu yazar. Bu kötü bir şey değil; bilgisayarın bize "burada bir şey eksik veya yanlış" demesidir. Biz nota bakıp düzeltiriz.

(Görsel: solda aşçı durmuş, ortada tarif kartında eksik satır + panoya yapışan not, sağda mutfak sessizce bekliyor.)

> **Not:** Bu sade kapı yalnızca giriştir. Aynı fikir ileride stack trace, log analizi, debugging, üretim incident yönetimi ve postmortem disiplinine derinleşecek.

### 5. THEORY MODE (Teori Modu) — SEKME 1

#### Bu dersin kalıcı benzetmesi: **Eksik Adımlı Tarif Kartı + Yapışkan Not Panosu**

Önceki derslerin metaforları (sandviç gişesi, robot+kartlar, komut panosu, etiketli dolaplar) birebir tekrar edilmiyor. Bu derse özgün ve nazik bir öğretim alanı.

#### Benzetme → Gerçek Kavram Eşleme Tablosu

| Tarif kartı sahnesi | Bilgisayar dünyasındaki karşılığı |
|---|---|
| Tarif kartı | **Kod** |
| Aşçı | **İşaretçi / yürütücü** (M0-L03 ile köprü) |
| Yapışkan not panosu | **Log** (kayıt defteri) |
| Eksik / okunamayan satır | **Syntax error** — derleyici bunu okuyamadı |
| Çalışırken malzeme bitmesi | **Runtime error** — yürütme sırasında çıkan hata |
| Tarif tamam ama yanlış yemek | **Logic error** — kod çalışıyor ama beklenen sonuç değil |
| Aşçının nota bakıp düzeltmesi | **Debugging / hata ayıklama** |
| Mutfağın sessizce durması | **Sistem güvenli durma** — kontrolsüz devam yok |

#### Adım Adım Teknik Açıklama

**Hata nedir?**
Bir **hata (error)**, programın beklediği yoldan sapmasıdır. Bilgisayar bunu fark ettiğinde durur ve **bir not bırakır**. Not, ne olduğunu anlatır. Hata = sinyal; düşmanlık değil.

**Hata türleri (üçü temel):**

1. **Syntax error (söz dizimi hatası):** Kod yanlış yazılmış, derleyici onu okuyamıyor bile. Tıpkı tarif kartında okunaksız bir satır olması gibi. Aşçı (program) hiç başlayamıyor.
2. **Runtime error (çalışma zamanı hatası):** Kod doğru yazılmış, çalışmaya başlamış; ama bir noktada beklenmedik bir durum çıkmış (örn. sıfıra bölme, eksik veri). Aşçı pişirirken malzemenin bittiğini fark ediyor.
3. **Logic error (mantık hatası):** Kod hatasız çalışıyor; ama sonuç yanlış. Aşçı tarifte yazanı yaptı ama tarif yanlıştı; tuzlu olacakken şekerli çıktı. **En sinsi hata türüdür** — bilgisayar şikâyet etmez.

**Stack trace nedir?**
Bir runtime error olduğunda Java sana bir **not zinciri** verir: "Şu satırda durdum; ondan önce şu method'u çağırmıştım; ondan önce şu method'u çağırmıştım..." Bu zincire **stack trace** denir. Aşçının "şu adımı yapıyordum, onu yapmadan önce şu adımı yapmıştım" diye yazdığı notlar gibi. Bugün detayını öğrenmiyoruz; sadece kelimeyi tohum olarak bil.

**Log nedir?**
**Log**, programın çalışırken yaptığı işlerin yazılı kaydıdır. Mutfak panosundaki yapışkan notlar gibi: "Şu zamanda şu yapıldı." Hata çıktığında log'a bakarız.

**Debugging nedir?**
**Debugging**, hatanın nereden geldiğini araştırma sanatıdır. Aşçı not panosuna bakar, geri sarar, hipotez kurar, doğrular. Suçlama yok; soruşturma var.

**Neden hata utanılacak bir şey değil?**
Çünkü kodu yazan kişi de bilgisayar da kusursuz değildir. Hata her yerde olur. Önemli olan **nasıl tepki verdiğindir.** Panik yok; sakin soruşturma var.

#### M0-L01 - L04 ile Köprü

- L01'de backend istek alıp cevap verirdi. Hata = beklenen cevap yerine bir sinyal döner.
- L02'de program sıralı komutlar yürütürdü. Hata = bir komut planlandığı gibi gitmez.
- L03'te işaretçi tek tek ilerlerdi. Hata = işaretçi beklenen satıra varamaz; durur.
- L04'te kod değişkenlere bakardı. Hata = beklenen değer dolapta yoktur veya yanlıştır.

Bu ders tüm bunları bağlayan **"sapma" kavramını** ekler.

#### Derinleşme Yolu (Depth Ladder)

- **M1 — Söz dizimi.** Syntax error'ı derleyici yakalar.
- **M5 — İstisnalar.** Runtime error'ları yakalayıp tepki vermek (`try`/`catch`).
- **M11 — Üretim teşhisi.** Heap dump, thread dump, stack trace analizi.
- **M22 — Test.** Hataları üretime gitmeden yakalama disiplini.
- **M24 — Gözlemlenebilirlik.** Log/metric/trace, hata sinyalinin endüstriyel altyapısı.
- **M25 — Distributed tracing.** Hatanın hangi servisten geldiğini takip etme.
- **M35 — Incident response.** Üretim hatasında sakin müdahale; postmortem disiplini.

### 6. VISUAL MODE (Görsel Modu) — SEKME 2

#### Bu derse özgün metafor: **Tarif Kartı + Yapışkan Not Panosu Sahnesi**

#### Visual Stage Layout (Codex Prototip Spesifikasyonu)

```text
+-------------------------------------------------------------+
|                                                             |
|  [SOL BÖLGE]      [ORTA BÖLGE]              [SAĞ BÖLGE]     |
|  Aşçı /           Tarif kartı + yan         Mutfak          |
|  yürütücü         tarafa yapışkan not       (ocak,          |
|                   panosu                    tencere)        |
|                                            +-----------------+
|                                            | YAN AÇIKLAMA   |
|                                            | PANELİ         |
|                                            +-----------------+
|                                                             |
+-------------------------------------------------------------+
|        [ALT BÖLGE — ADIM KONTROLLERİ]                       |
|  ◀ Geri    ▶ Sonraki Adım    🔁 Tekrar İzle                |
+-------------------------------------------------------------+
```

**Bölge tanımları (Codex için bağlayıcı):**

- **Sol bölge — Aşçı:** Sabit figür, başında profesyonel sakinlik. Şapkası temiz, postürü dik. (Bu detay önemlidir: aşçı paniklemiyor.)
- **Orta bölge — Tarif kartı + Not panosu:** Kart yukarıda, satırlar numaralı. Sağında küçük yapışkan not panosu. Her hata durumunda kart üstünde sarı bir vurgu çıkar; ona karşılık panoya bir yapışkan not yapışır.
- **Sağ bölge — Mutfak:** Ocak, tencere, malzeme rafı. Hata olduğunda mutfak sessizce durur; alarm zili **YANMAZ** (nazik ton).
- **Yan açıklama paneli:** Aktif kavram + tek cümle.
- **Alt bölge — Adım kontrolleri.**

#### Animasyon — Üç Hata Türü, Üç Mini Sahne

**Sahne A — Syntax error:**
- **Adım 1:** Aşçı tarif kartını alıyor. 3. satır okunamayacak şekilde yazılmış: "2OOX derece pişir" (rakam ve harf karışmış).
- **Adım 2:** Aşçı duruyor; mutfak hiç başlamıyor. **Yan panel:** "syntax error — kart okunamadı."
- **Adım 3:** Aşçı panoya not yapıştırıyor: "Satır 3 okunamadı: '2OOX' nedir?"
- **Adım 4:** Düzeltilmiş kart geliyor. Aşçı devam ediyor.

**Sahne B — Runtime error:**
- **Adım 5:** Aşçı 2. satırı yapıyor: "Tuz ekle." Tuzluğa bakıyor; **tuzluk boş**.
- **Adım 6:** Mutfak duruyor. **Yan panel:** "runtime error — yürütme sırasında eksik kaynak."
- **Adım 7:** Aşçı notu yapıştırıyor: "Satır 2'de tuz bulunamadı."

**Sahne C — Logic error:**
- **Adım 8:** Aşçı tüm tarifi sorunsuz yapıyor; mutfak pürüzsüz çalışıyor.
- **Adım 9:** Sonunda yemeği tatıyor; tarif "tuzlu çorba" demişti ama sonuç **tatlı** çıkmış (tarif baştan yanlıştı).
- **Adım 10:** Aşçı duruyor. **Yan panel:** "logic error — kod çalıştı ama sonuç beklenenle uyuşmuyor."
- **Adım 11:** Not: "Tarifin sonu kontrol edilmeli; tat beklenen değil."

**Sahne D — Özet karesi:**
- Üç sahne küçültülmüş hâlde yan yana. Üstte üç etiket: **SYNTAX / RUNTIME / LOGIC.** **Yan panel:** "üç temel hata türü."

Her adımda **"Tekrar İzle"** vardır. Sahneler arası yumuşak geçiş; mutfak kapanmaz, sadece durur.

#### Görsel Sembol Sözlüğü (yeni)

- **Yapışkan not** = log kaydı.
- **Sarı vurgu satırı** = hatanın bulunduğu kod konumu.
- **Mutfak durması (alarm değil)** = nazik sistem koruması.
- **Tat testi** = logic error tespiti (beklenen sonuçla karşılaştırma).

### 7. CODE MODE (Kod Modu) — SEKME 3

> **Bilişsel yük notu:** Bu derste `public`, `static`, `void` gibi kelimeleri öğrenmeyeceğiz. Resmi damgalar gibi düşün.

Şimdi üç hata türünü basit bir Java örneği üzerinden görelim. Ana kod doğru çalışan bir programdır; ama içinde nazik notlarla üç hata türünün **nerede çıkabileceğini** işaretliyoruz.

```java
public class TarifProgrami {

    public static void main(String[] args) {
        // Doğru yazılmış satırlar — sorunsuz çalışır.
        int suMiktari = 100;
        int tuzMiktari = 5;

        int oran = suMiktari / tuzMiktari;
        System.out.println("Su/Tuz orani: " + oran);
    }
}
```

#### Bu koda üç hata nasıl girer?

- **Syntax error örneği:** `int suMiktari = 100` satırında sondaki noktalı virgülü unutursak (`int suMiktari = 100`) derleyici durur ve "satır sonunda `;` bekleniyor" der. Aşçı kartı okuyamadı; mutfak hiç başlamadı.

- **Runtime error örneği:** Eğer `tuzMiktari = 0` olsaydı, `suMiktari / tuzMiktari` çalışma anında **ArithmeticException** üretirdi (sıfıra bölme). Kod doğru yazılmış, derlenmiş, çalışmaya başlamış; ama yürütme sırasında imkânsız bir iş istenmiş. Aşçı tuzluğu boş buldu.

- **Logic error örneği:** Eğer `int oran = tuzMiktari / suMiktari;` yazsaydık (sırayı yanlışlıkla ters yazdık), kod hatasız çalışır; ama anlamca "tuz/su oranı" hesaplar. Çıktı `0` olur (tamsayı bölmesinde). Hiç şikâyet eden olmaz; sonuç sessizce yanlıştır.

#### Üç hata türünü ayırt etmek neden önemli?

Çünkü her birinin yakalama yöntemi farklı:

- **Syntax:** Derleyici / IDE yakalar; kod çalışmadan önce.
- **Runtime:** Çalışırken patlar; `try`/`catch` ile yakalanabilir (M5).
- **Logic:** Sadece **test** veya gözlemle fark edilir (M22).

#### İlerleyen Yol Notu

Bir hata oluştuğunda Java sana bir **stack trace** verir; bu satır satır "şuradaydım, ondan önce buradaydım" not zinciridir. Bu zinciri okumak Principal seviyesi bir beceridir; M5 ve M11'de detaylı göreceğiz.

#### Görsel ↔ Kod Senkron Haritası

| Aktif kod durumu | Aktif sahne | Yan panel cümlesi |
|---|---|---|
| Eksik `;` | Sahne A (syntax) | "kart okunamadı" |
| `0`a bölme | Sahne B (runtime) | "malzeme eksik" |
| Ters çevrilmiş bölme | Sahne C (logic) | "tat yanlış" |
| Tüm hatalar | Sahne D özet | "üç tür birden" |

### 8. Üretim Örneği

Trendyol'un bir backend servisi gece yarısı garip davranmaya başlıyor. Üç farklı senaryo, üç farklı hata türü:

**Senaryo 1 — Syntax error (üretime ulaşmadan):**
Bir geliştirici kodda noktalı virgül unutmuş. Test sürecinde derleyici bunu yakalıyor; kod hiç üretime çıkmıyor. Olay küçük; düzeltme kolay.

**Senaryo 2 — Runtime error (üretimde):**
Servis çalışıyor; bir sayfa açıldığında "NullPointerException" patlatıyor. Backend log'a bir stack trace yazıyor. Ekip log'a bakıyor, hangi satırda hangi değişkenin boş kaldığını görüyor. Sistem ya hatayı yakalayıp nazik bir cevap dönüyor ya da kullanıcıya genel "bir sorun oldu" diyor. Geliştirici düzeltir, deploy eder.

**Senaryo 3 — Logic error (en sinsi):**
Servis hiç hata vermiyor; ama indirim kuponu yanlış hesaplanıyor — %10 yerine %1 uyguluyor. Müşteri "kupon çalışmıyor" diye soruyor. Hiçbir log'da hata yok çünkü kod kendi açısından "çalıştı". Bu hatayı bulmak için **gerçek sonucu beklenenle karşılaştırmak** gerekir — yani test ve gözlem (M22, M24).

Bir Principal mühendis için **"hangi tür hata, hangi araçla yakalanır?"** sorusu strateji meselesidir.

### 9. Üretimde Hata Ayıklama Bakışı

Principal şu soruyu sorar: **"Hata mı, semptom mu?"**

- **Hata:** Bir log satırı, bir stack trace, bir kullanıcı şikâyeti. Bu görünür yüzeydir.
- **Kök neden (root cause):** O hatanın gerçek sebebi. Genellikle birkaç adım geride.

Aşçı sahnesini hatırla: tuzluk boş çıktı (runtime). Ama gerçek soru: **tuzluğu kim doldurmayı unuttu?** Cevap belki dünden geliyor.

Üretim ekibi hatayı şöyle inceler:

1. Stack trace'i oku — nerede patladı?
2. Log'a bak — patlamadan hemen önce ne oluyordu?
3. Metrik'lere bak — ne kadar sıktır?
4. Trace'i takip et — bu istek hangi servislerden geçti?
5. Hipotez kur, doğrula, düzelt.

Asla "kim suçlu?" diye başlanmaz; her zaman "nasıl önleriz?" diye bitirilir. Bu kültüre **blameless postmortem** denir (M35).

### 10. Senior / Principal Trade-off

#### Trade-off 1 — Hatayı yakalamak mı, geçmesine izin vermek mi?

- **Her hatayı yakala:** Program asla çökmez; ama hata gizlenir, kök neden uzayıp gider.
- **Yalnızca beklenen hataları yakala:** Beklenmedik hata Java'nın varsayılan tepkisiyle (stack trace) görünür; teşhis kolay olur.

Sezgi: **Geniş `catch (Exception e)` blokları genellikle bug saklar.** Sadece bilinçli yakaladığını yakala.

#### Trade-off 2 — Ne kadar log yazılmalı?

- **Az log:** Sade ama teşhis zor.
- **Çok log:** Her şey yazılı; ama log dosyası şişer, gerçek bilgi kaybolur, depolama maliyeti artar.

Üretim sistemleri seviyelerle çalışır: `info` (rutin), `warn` (dikkat), `error` (hata). Sadece anlamlı olaylar yazılır.

#### Trade-off 3 — Hata kullanıcıya ne kadar gösterilecek?

- **Çıplak teknik stack trace:** Geliştirici için iyi; kullanıcı için kafa karıştırıcı; üstelik güvenlik riski (iç yapıyı sızdırır).
- **Genel "bir hata oluştu":** Kullanıcı için sakin; ama geliştirici teşhis edemiyor.

İyi sistemler: kullanıcıya nazik kısa mesaj + log'a ayrıntılı teknik veri. İki dünya ayrılır.

### 11. Yanılgı Kontrolü

**Çoğu kişi şunu sanır:** "Hata yapmak başarısızlıktır; kötü programcılar hata yapar."

**Aslında:** Her programcı hata yapar; her sistem hata üretir. Hata = sinyal. Kötü programcılığın işareti hata yapmak değil, **hatayı görmezden gelmek veya soruşturmamaktır**.

#### Hızlı Doğru/Yanlış

> "Bir program hiç hata mesajı vermiyorsa kesinlikle doğru çalışıyordur."

- (a) Doğru
- (b) Yanlış

**Doğru cevap: (b) Yanlış.** Logic error'ler sessizdir; program "kendi açısından" çalışır ama sonuç beklenenden farklıdır. Sessizlik doğru çalıştığını kanıtlamaz.

### 12. Senaryo Tabanlı Alıştırma

**Durum:** Bir uygulama "bir hata oluştu" mesajı dahi vermeden, kullanıcıya yanlış toplam fiyat gösteriyor. Sepette 100 TL'lik ürün var ama özet kısmında "10 TL" yazıyor.

**Soru:** Bu büyük olasılıkla hangi tür hatadır?

- (a) Syntax error
- (b) Runtime error
- (c) Logic error

**Doğru cevap: (c) Logic error.** Program çalışıyor; hata mesajı yok; ama sonuç yanlış. Genellikle yanlış hesap formülü veya yanlış değişken kullanımıdır.

### 13. INTERVIEW MODE (Mülakat Modu) — SEKME 4

#### Köprü Sorusu

**Soru:** "Bir hata gördüğünde nasıl tepki verirsin? Üç temel hata türünü ayırt edip hangi araçla yakalanacağını söyle."

#### İyi Cevap İskeleti

- Tepki ile başla: "Hata bir sinyaldir, suçlama davetiyesi değil. Önce sakin soruşturma."
- Üç türü say:
  - **Syntax** — derleyici/IDE'de yakalanır; üretime gitmemeli.
  - **Runtime** — çalışırken patlar; stack trace + log ile teşhis edilir, `try`/`catch` ile yakalanır.
  - **Logic** — sessizdir; test ve gözlem ile yakalanır.
- Araç bağı kur: "Syntax → derleyici/IDE; Runtime → stack trace + log; Logic → test + metrik/trace."
- Kültür bağı: "Üretimde blameless postmortem; kim suçlu değil, nasıl önleriz."
- Principal köprü: "Hatayı bastırmak değil görünür kılmak; geniş `catch` bloklarından kaçınmak; log seviyelerini bilinçli kullanmak."

#### Kötü vs İyi Cevap

- **Kötü:** "Hata olunca düzeltirim."
  - Zayıf: "Nasıl?", "Tür ayrımı?" yok; muhakeme yok.
- **İyi:** "Hata bir sinyaldir. Önce hangi türde olduğunu ayırt ederim: syntax derleme zamanında, runtime çalışma anında stack trace + log'da, logic ise yalnızca beklenen sonuçla karşılaştırarak görünür. Hangi araçla yakalanacağı türe göre değişir: syntax'ı derleyici/IDE, runtime'ı stack trace + log'lar, logic'i test + metrikler. Üretimde hata kişisel suç değildir; blameless postmortem ile 'nasıl önleriz' sorusunu cevaplarız. Bu yüzden hatayı yakalamak değil saklamak — örneğin geniş `catch (Exception e)` blokları — daha büyük zarar verir."

#### Sık Yapılan Hata

"Hata = başarısızlık" tonunda konuşmak. **Düzeltme:** Hata = soruşturulması gereken sinyal; bastırılması değil görünür kılınması gereken bir bilgi.

#### Follow-up Soruları

**Follow-up 1:** "Bir runtime exception'ı `try`/`catch` ile yakalayıp 'işe yaramaz olarak yutmak' ne tür bir hatayı saklar? Bunun üretim sonuçları ne olabilir?" (M5 + M11 köprüsü.)

**Follow-up 2:** "Bir üretim olayında (incident) ilk 10 dakikada ne yaparsın?" (M35 incident response tohumu.)

#### 5-Yaş Köprüsü

"Aşçı tarif kartını okuyamadığında, ya da tuzluk boş çıktığında, ya da yemeğin tadı yanlış olduğunda — üçü de hata. Aşçı paniklemiyor; not bırakıyor ve neyin yanlış olduğunu yazıyor."

### 14. "Anlamadım" Kurtarma Yolu

- **Kademe 1:** "Hata = sinyal. Bilgisayar duruyor ve not bırakıyor."
- **Kademe 2:** Farklı benzetme: Otomobilin gösterge panelindeki uyarı ışığı. Işık 'bozuldun' demez; 'bir şeye bak' der.
- **Kademe 3:** Ön koşul kontrolü: "Kod, bellek, işaretçi sezgileri yerinde mi?" Değilse → M0-L02/L03/L04 mini-hatırlatma + buraya geri.
- **Kademe 4:** En küçük parçaya in: "Sadece şu cümleye bak: *Hata olduğunda bilgisayar bir not bırakır. Not, soruşturma davetiyesidir.*"

Hard-lock yok.

### 15. Mini Özet + Aralıklı Tekrar Kancası

- Hata, kötü bir şey değil; programın beklediği yoldan saptığını söyleyen bir **sinyaldir**.
- Üç temel tür: **syntax** (kart okunamadı), **runtime** (malzeme eksik), **logic** (tat yanlış).
- Üretimde hata sakin soruşturmayla incelenir; suçlama değil, blameless postmortem.

#### Derinleşme Köprüsü

> Bu ders basit başladı, ama "hata = sinyal" sezgisi ileride istisnalar (M5), üretim teşhisi (M11), test stratejisi (M22), gözlemlenebilirlik (M24), distributed tracing (M25) ve incident response (M35) muhakemesinin temel taşıdır.

#### Aralıklı Tekrar

Bu fikir M1 (söz dizimi), M5 (exceptions), M11 (debugging), M22 (test), M24 (logs/metrik), M25 (trace) ve M35 (incident) derslerinde tekrar genişleyecek.

### 16. Mikro-Değerlendirme

**Soru:** Bir program hiç hata mesajı vermiyor ama yanlış sonuç üretiyor. Bu büyük olasılıkla hangi tür hatadır?

- (a) Syntax error
- (b) Runtime error
- (c) Logic error

**Doğru cevap:** (c).

- Doğru → "Devam Et" yumuşak şekilde belirir.
- Yanlış → §17 Soft-Check tetiklenir. **Hard-lock yok.**

### 17. Soft-Check ve Otomatik Kurtarma Tetiği

- **Adım 1:** "Hep birlikte tekrar bakalım, daha basit anlatalım mı?"
- **Adım 2:** Tek cümle özet + en sade görsel kare: "Üç tür var. Kart okunamadı (syntax), malzeme eksik (runtime), tat yanlış (logic). Bu üçüncüsü en sinsi olandır çünkü program hiç şikâyet etmez."
- **Adım 3:** Mikro-değerlendirme farklı sözcüklerle: "Program hata vermiyor ama kullanıcı yanlış sonuç görüyorsa, hata hangi türdür?"
- **Adım 4:** Hâlâ yanlışsa → Sahne C (logic error) mini-hatırlatması + buraya geri.

"Devam Et" sertçe bloklanmaz. Yanlış cevap utandırma sebebi değil; aşçı bile not bırakıyor.

### 18. Sıradaki Adım — TEK BUTON

**Devam Et** → M1-L01 (Java Dili Temellerine giriş — bu turda üretilmedi; ayrı bir batch'te hazırlanacak).

Takılırsan: **"Önceki kavramı tekrar et"** seni bu dersin başına yumuşak biçimde geri taşır.

> M0 modülü bu ders ile tamamlanmaktadır. Buradan sonra Java diline geçiyoruz; ama dört temel sezgi (program/komut, yürütme, kod-veri-bellek, hata = sinyal) her zaman yanında olacak.

### 19. Alt Bilgi / Editör Kontrol Listesi

- Bilişsel yük kontrolü yapıldı mı? — **E**. Üç hata türü ayrı sahnelerde verildi; aşırı yük önlendi.
- Dört mod sekmeli/akordeon yapıda mı? — **E**.
- Tüm zorunlu alanlar dolu mu? — **E**.
- Depth Ladder 5 basamağı görünür mü? — **E**.
- "Derinleşme Yolu" Theory Mode'da var mı? — **E**.
- Production Example yumuşak dilde 3 senaryo veriyor mu? — **E**.
- Senior/Principal trade-off (catch + log seviyesi + kullanıcıya gösterim) güçlü mü? — **E**.
- Interview Mode iki follow-up içeriyor mu? — **E**.
- Bu derse özgün metafor (tarif kartı + yapışkan not panosu) önceki derslerden farklı mı? — **E**.
- Bu ders M0 genel özeti / capstone'a dönüştürülmedi; hata kavramına odaklandı — **E**.
- Hata utandırma değil; sakin soruşturma çerçevesinde sunuldu — **E**.
- Hard-lock yok, yalnızca soft-check — **E**.
- Jenerik şablon yasağı korundu — **E**.