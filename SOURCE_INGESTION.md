SOURCE_INGESTION.md
Sürüm: v0.3
Kaynak Entegrasyon İş Akışı (Source Ingestion Workflow)
Bu dosya, kullanıcının ileride ekleyeceği kitap, kurs, makale, ders notu, blog yazısı gibi dış kaynakların projeye nasıl entegre edileceğini tanımlar. Tek doğruluk kaynağı yine PROJECT_CONTEXT.md'dir; bu dosya o ana belgenin uygulama kuralıdır.

Amaç ve İlkeler

Hiçbir dış kaynak süzgeçsiz, ham hâliyle müfredata girmez.
Hiçbir kaynak silinmez/küçümsenmez; uygun değilse "uygulanabilir değil — gerekçe" olarak kaydedilir.
Çakışan içerik çoğaltılmaz; mevcut derse atıf olarak bağlanır.
Güncelliğini yitirmiş içerik sessizce silinmez; "outdated" etiketiyle işaretlenir ve yerine geçen güncel sürüm linklenir.
Tüm kaynaklar izlenebilirdir: başlık, yazar, yıl, sayfa/bölüm/zaman damgası kaydedilir.

Roller (AI Rol Dağılımı — Kaynak Akışında)

Gemini 3.1 (Ön Tarama Rolü)
Kaynağın içerdiği konuları çıkarır.
Hangi modüllere/derslere temas ettiğini önerir.
Çakışma adaylarını listeler (mevcut müfredatla örtüşme).
Boşluk ekleme adayı varsa işaretler (yeni konu adayı).
Claude (Beyin / Entegrasyon Rolü)
Gemini taramasını süzgeçten geçirir (kontrollü filtre, bkz. DECISIONS D16).
Çakışmaları nasıl çözeceğine karar verir (atıf mı, birleştirme mi, yan-not mu).
PROJECT_CONTEXT.md §13–14 ve §17'yi günceller.
Gerekirse CURRICULUM_BLUEPRINT.md'ye yeni modül/alt-tanımlayıcı önerir; ders üretmez.
Referans alanını standartlaştırır.
Codex GPT-5.5 (Uygulama Rolü)
Onaylanmış içerik LESSON_TEMPLATE'e işlendikten sonra arayüze yansıtır (sekmeli mod, alıntı bloğu, referans bölümü vb.).
Kaynak akışında içerik kararı vermez.

Adım Adım İş Akışı (Pipeline)

Adım 1 — Toplama
Kullanıcı kaynağı (dosya/link/not) Cowork'e ekler. Kaynak için ön-tanıtım kartı doldurur: başlık, yazar, yıl, format, dil, kapsam.
Adım 2 — Ön Tarama (Gemini)
Gemini kaynağı yüzeysel tarar; konu çıkarımı + modül önerisi + çakışma adayı + yeni konu adayı listesi üretir.
Çıktı yapısı:

"Tespit edilen konular": [...]
"İlgili mevcut modüller": [M__, M__]
"Çakışma adayları": [Modül-Ders eşleşmesi, neden çakışıyor]
"Yeni konu adayları": [konu adı, gerekçe, önerilen modül]
"Güncellik notları": [eski/yeni sürüm farkı varsa]

Adım 3 — Çakışma Analizi (Claude)
Her çakışma adayı için karar:
(a) Atıf bağla: Mevcut ders korunur; kaynak referans olarak bağlanır.
(b) Genişlet: Mevcut ders aynı kalır ama kaynaktaki ek detay yeni bir "Derinleştirme" bölümüne işlenir.
(c) Birleştir: İki içerik tek derse birleştirilir (özen ve gerekçe kaydıyla).
(d) Reddet: Hedef profile uygun değil; gerekçe yazılır, kaynak kaydı tutulur (silinmez).
Adım 4 — Boşluk Doğrulama (Claude)
Yeni konu adayları için:
PROJECT_CONTEXT §1–3 ilkelerine uygun mu?
M0–M37 omurgasını bozar mı?
Hedef öğrenci profili için aşırı yük yaratır mı?
Onaylanırsa CURRICULUM_BLUEPRINT'e M__+a/+b gibi alt-tanımlayıcı ile eklenir; onaylanmazsa "Reddedilen Fikirler" listesine gerekçeyle yazılır.
Adım 5 — Güncellik Etiketleme
Kaynak eski bir sürümse:
"Outdated" etiketi konur.
Eski içerik silinmez; "tarihçe" bölümünde tutulur.
Güncel sürüm referansı (varsa) işlenir.
Adım 6 — Standart Referans Alanı
Her kaynak entry'si için zorunlu alanlar:
Başlık
Yazar(lar)
Yıl
Sürüm (varsa)
Sayfa/bölüm/zaman damgası (alıntılanan kısım için)
Link (varsa)
Erişim tarihi (link ise)
Lisans/erişim notu (paylaşılabilir mi?)
Adım 7 — Hafıza Güncellemesi
PROJECT_CONTEXT.md §13 (Sağlanan Kaynak Materyaller) ve §14 (Uzman Eklemeleri) güncellenir.
DECISIONS.md'ye kararlar işlenir (özellikle bir konu kabul/red verildiyse).
CURRICULUM_BLUEPRINT.md gerekiyorsa minimal şekilde yamanır (tam ders yok, yalnızca üst düzey).
Adım 8 — Ders-Hazır İçeriğe Dönüşüm (İleride)
Onaylanmış kaynak içerik LESSON_TEMPLATE alanlarına eşlenmek üzere bekletilir:
Hangi alanlara katkı sağladığı önceden işaretlenir (örn. "M17+a Theory Mode için kaynak; M17+a Üretim Örneği için anekdot").
İçerik üretimi başladığında bu eşleme kullanılır.

Çakışma/Duplikasyon Tespit Kuralları

Aynı kavramı (ör. "MVCC") iki farklı derse iki kez yazma yasak.
Aynı görsel metafor farklı konular için aynen tekrarlanmaz (bkz. VISUAL_ANIMATION_SYSTEM kural 0/2).
Çakışma tespiti için anahtar sözcük + bağlam karşılaştırması yapılır (kavram + bağlam aynıysa çakışma sayılır; aynı kelime farklı bağlamdaysa değildir).
Şüpheli durumlarda Claude karar verir, gerekçeyle kaydeder.

Outdated/Eski İçerik Bayrakları

"Outdated" etiketi: konu hâlâ öğretici ama önerilmez (örn. eski Java sürümü).
"Deprecated" etiketi: artık önerilmiyor; mülakat soruluyorsa farkındalık için tutulur.
"Replaced-by" referansı: yerine geçen modern konuya link.
Silme yasak — etiketleme zorunludur. Geçmiş izi kaybedilmez.

Uzman Ekleme İşaretleme

Bir kaynaktan gelen ekleme, PROJECT_CONTEXT §14 (Uzman Eklemeleri) listesine "kaynak: [Referans]" notuyla işlenir.
Eklemenin hangi modül/ders alt-alanına ait olduğu açıkça belirtilir.
Sonradan başka bir kaynak aynı konuya değinirse, önceki ekleme satırı genişletilir; ikinci kayıt açılmaz.

Bitti Tanımı (Definition of Done — Kaynak Akışı)
Bir kaynak entegrasyonu "bitti" sayılır eğer:

Ön-tanıtım kartı dolduysa,
Gemini taraması yapıldıysa,
Çakışma analizi sonuçlandıysa (atıf/genişlet/birleştir/reddet kararı verildiyse),
Yeni konu adayları PROJECT_CONTEXT ilkelerine göre değerlendirildiyse,
Güncellik etiketleri konduysa,
Standart referans alanı dolduysa,
PROJECT_CONTEXT.md ve gerekirse DECISIONS.md/CURRICULUM_BLUEPRINT.md güncellendiyse,
Kaynak silinmediyse (uygun değilse de gerekçeyle saklandıysa).

Sıradaki Adım Komutu (Source Ingestion İlk Çağrıldığında)

"Önce PROJECT_CONTEXT.md, AI_HANDOFF.md ve SOURCE_INGESTION.md (v0.3) oku. Sen Gemini (kaynak ön tarama rolü)'sin. Verilen kaynağı yüzeysel tara: §3 Adım 2'nin çıktı yapısına göre konu/modül/çakışma/yeni konu/güncellik listesini madde madde üret. Tam ders metni yazma; sadece tarama çıktısı ver. Bitince Claude'a devret."
