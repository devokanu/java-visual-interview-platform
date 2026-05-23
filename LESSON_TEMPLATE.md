LESSON_TEMPLATE.md
Sürüm: v0.3
Yeniden Kullanılabilir Ders Şablonu
Her ders bu yapıya birebir uyar. Hem içerik üretenin (Claude), hem kodlayanın (Codex) referansıdır. Sıra değiştirilmez; çünkü sıra bilişsel yükü yönetir: somuttan soyuta.
Dört Mod İlkesi (v0.3 sertleştirildi): Aynı dersin içeriği dört modda sunulur — Theory Mode, Visual Mode, Code Mode, Interview Mode. Tüm modlar AYNI ANDA ALT ALTA gösterilmez. Sekme (tab) veya akordeon (accordion) yapısı kullanılır; tek seferde tek mod görünür. Platform önerilen sırayı vurgular ve "Devam Et" tek butonu akışı taşır.
Üst Bilgi (Lesson Header)
Ders Kodu: (örn. M7-L03)
Ait Olduğu Modül:
Ön Koşullar: (hangi dersler önce bitmeli)
Tahmini Süre: (kısa — örn. 10-15 dk)
Tek Cümlelik Hedef: "Bu dersin sonunda öğrenci ___ yapabilecek."
Kaynak Referansı: (varsa) — başlık, yazar, yıl, sayfa/bölüm (SOURCE_INGESTION.md kuralı).

Ön Koşul Kontrolü (Prerequisite Check)
Derse başlamadan 1-2 hızlı kontrol: gerekli önceki kavram(lar) yerinde mi?

Eksikse → ilgili mini-derse otomatik yönlendir, sonra buraya geri getir (prerequisite rescue).
Tamamsa → derse devam.

Kanca — Gerçek Hayat Sahnesi (Hook)
Konuyu günlük hayattan bir sahneyle aç. Henüz teknik kelime yok.
Örnek (thread pool için): "Her müşteri için yeni garson işe almak yerine hazır bir garson ekibin var; iş gelince boştaki garson alır."
5 Yaşına Açıklama (Explain Like I'm 5) — ZORUNLU
Aynı fikri çocuğun anlayacağı en sade haliyle, 2-3 cümle, tek görselle.
THEORY MODE (Teori Modu) — SEKME 1
Kavramın özü, tanımı, "neden var" sorusu.

Somut Benzetme (Concrete Analogy): Kalıcı, tutarlı bir benzetme seç; ders boyunca aynı benzetmeyi sürdür. Benzetme → gerçek kavram eşleme tablosu.
Adım Adım Teknik Açıklama: Tek seferde tek fikir. Her teknik terim ilk geçişte basit Türkçe açıklamayla. Kısa paragraflar, madde işaretleri.

VISUAL MODE (Görsel Modu) — SEKME 2

VISUAL_ANIMATION_SYSTEM.md kurallarına uyan, bu konuya özgü animasyon spesifikasyonu (kod değil, tarif).
Modül-grubu metaforu varsa başlangıç noktası olarak kullanılır; ama bu ders kendi özgün metaforunu da içerir.
Ne hareket eder, neden, hangi sırayla, ne kadar yavaş; her adımda durdurulabilir anlamlı kare.
Görsel sahne ana öğretim alanıdır, süs değildir.

CODE MODE (Kod Modu) — SEKME 3

Küçük, çalışan, yorum satırlı Java örneği.
Varsa önce "naif/yanlış" hâl, sonra "doğru" hâl.
Görsel ile senkron: kodun her adımı, Visual Mode'daki ilgili görsel adımıyla eşlenir (hangi satır → hangi görsel hareket).
Kod kısa; her satır anlaşılır.

Üretim Örneği (Production Example) — ZORUNLU
Bu kavram gerçek bir sistemde nasıl çıkar? Somut senaryo:
"Ödeme servisinde aynı 'öde' isteği ağ hatası yüzünden iki kez gelirse, idempotency olmazsa müşteri iki kez ücretlendirilir."
Üretimde Hata Ayıklama Bakışı (Production Debugging Perspective)
Bir Principal nasıl bakar:

Bu kavram bozulduğunda hangi belirti görünür? (yavaşlama, hata, tutarsız veri…)
Nereye bakılır? (log, metrik, trace, heap/thread dump…)
Kök neden nasıl daraltılır?

Senior / Principal Trade-off Bölümü (Trade-off Section)

Bu kavramın alternatifi ne? Ne zaman alternatif daha iyi?
Seçimin bedeli ne (performans, karmaşıklık, maliyet, bakım)?
"Duruma göre değişir" derken hangi durumlar? somut koşullarla.

Yanılgı Kontrolü (Misconception Check)
Bu konuda sık yapılan yanlış inanış açıkça yazılır ve çürütülür.

"Çoğu kişi şunu sanır: … Aslında: …"
Kısa bir doğru/yanlış sorusuyla yanılgı yakalanır ve nazikçe düzeltilir.

Senaryo Tabanlı Alıştırma (Scenario-Based Practice)
Küçük durum: "Şu olduğunda ne yaparsın?" Çoktan seçmeli/doldurma. Cevaba anında nazik geri bildirim.
INTERVIEW MODE (Mülakat Modu) — SEKME 4 — ZORUNLU

1 senior/principal seviyesi soru.
"İyi cevap" iskeleti (madde madde — ezber metin değil, düşünce sırası).
Sık yapılan hata + düzeltme.
Olası takip sorusu (follow-up).
(Detay yapı: INTERVIEW_SYSTEM.md.)

"Anlamadım" Kurtarma Yolu (I Did Not Understand — Rescue Path)
Her modda her zaman görünen bir buton: "Bunu anlamadım."
Basınca kademeli kurtarma:

Aynı fikrin daha sade tek-cümlelik hali + en basit görsel.
Farklı bir gerçek hayat benzetmesi.
Hangi ön koşulun eksik olabileceğini kontrol (prerequisite rescue) ve gerekirse ilgili mini-derse yönlendirme.
Hiçbiri yetmezse: konuyu küçük parçalara böl, en küçük parçadan başla.
Amaç: öğrenci asla tıkanıp yalnız kalmaz; sistem onu hep bir adım geriden toparlar.

Mini Özet (Recap) + Aralıklı Tekrar Kancası

3 maddelik özet.
Bu kavram sonra hangi derste tekrar karşına çıkacak (spaced repetition bağlantısı).

Mikro-Değerlendirme (Micro-Assessment) — YENİ v0.3 — ZORUNLU
"Devam Et" butonu görünmeden hemen önce 1 (en fazla 2) çok basit anlama kontrolü:

Soru çok kısa, tek kavramlı; ezber değil sezgi ölçer.
Doğru cevap → "Devam Et" butonu görünür/aktifleşir; akış sürer.
Yanlış cevap → SOFT-CHECK akışı (§15) tetiklenir; "Devam Et" sert biçimde KİLİTLENMEZ.
Amaç: kontrol; ceza değil. Skor öğrenciye agresif gösterilmez.

Soft-Check ve Otomatik Kurtarma Tetiği (Soft-Check & Auto-Rescue Trigger) — YENİ v0.3
Mikro-değerlendirme yanlış cevap aldığında otomatik şu sıra çalışır:

Adım 1: Nazik mesaj — "Hep birlikte tekrar bakalım, daha basit anlatalım mı?"
Adım 2: Aynı fikrin daha sade tek-cümlelik versiyonu + en basit görsel kare gösterilir.
Adım 3: Mikro-değerlendirme yeniden sunulur (farklı sözcüklerle).
Adım 4 (hâlâ yanlışsa): Prerequisite rescue otomatik tetiklenir — eksik ön koşul mini-dersine yönlendirme.
Hiçbir adımda öğrenci utandırılmaz, engellenmiş hissi verilmez, "Devam Et" SERTÇE bloklanmaz; nazik biçimde bir sonraki adıma yönlendirilir. Soft-check kademe sayısı kalibrasyonu açık (bkz. PROJECT_CONTEXT §15 O7).

Sıradaki Adım (Next Step) — TEK BUTON
Seçenek sunulmaz. Tek "Devam Et" butonu sonraki dersi açar. Takılırsa "Bir önceki kavramı tekrar et" kurtarma bağlantısı görünür.

Alt Bilgi (Editör Notları — Öğrenciye Görünmez)
Bilişsel yük kontrolü yapıldı mı? (E/H)
Dört mod sekmeli/akordeon yapıda mı? (Theory / Visual / Code / Interview — aynı anda tek sekme) (E/H)
Tüm zorunlu alanlar dolu mu? (5-yaş, üretim örneği, mülakat, mikro-değerlendirme)
Yeni alanlar dolu mu? (ön koşul kontrolü, yanılgı, üretim-debug, trade-off, "anlamadım" yolu, soft-check tetiği)
Görsel ile kod senkronu kuruldu mu?
Dil kuralı uygulandı mı? (terim + basit Türkçe açıklama)
Hard-lock kullanılmadığı teyit edildi mi? (yalnızca soft-check) (E/H)
Kaynak kullanıldıysa Üst Bilgi'de Referans alanı dolduruldu mu? (E/H)
