AI_HANDOFF.md
Sürüm: v0.3
AI'lar Arası Devir-Teslim Protokolü
Bu dosya Claude, Gemini ve Codex arasında geçiş yaparken kullanılır. Çalışmaya başlayan AI önce PROJECT_CONTEXT.md'yi, sonra bu dosyayı okur.

Tamamlananlar (What Has Been Completed)

Proje hafıza ve devir-teslim sistemi tasarlandı (v0.1).
7 temel dosya oluşturuldu (v0.1).
v0.2 düzeltmeleri yapıldı: DECISIONS tablo formatı + Date/Owner; PROJECT_CONTEXT progress Completed/Pending/Blocked olarak ayrıldı; CURRICULUM Principal seviyesi alanlarla güçlendirildi; VISUAL pazarlık edilemez kurallarla sertleştirildi; LESSON_TEMPLATE dört mod + kurtarma/yanılgı/ön koşul/üretim-debug/trade-off alanlarıyla genişletildi.
v0.2 dosyaları proje klasörüne taşındı ve okunabilirlik teyit edildi.
Gemini 3.1 boşluk analizi yapıldı (GAP_ANALYSIS).
v0.3 kontrollü entegrasyon turu tamamlandı: 12 Gemini önerisi olduğu gibi kabul edildi, 3 öneri değiştirilerek kabul edildi (System Design tamamen taşıma yerine erken köprü; "Devam Et" hard-lock yerine soft-check; GraalVM zorunlu yerine opsiyonel).
8 dosya v0.3'e güncellendi: PROJECT_CONTEXT, AI_HANDOFF, DECISIONS, CURRICULUM_BLUEPRINT, LESSON_TEMPLATE, VISUAL_ANIMATION_SYSTEM, INTERVIEW_SYSTEM ve yeni SOURCE_INGESTION.md.
Müfredat hâlâ üst düzey (tam ders yok).
Codex, M0-L01 için ilk çalışan Vite + React prototipini ekledi: dört sekme, sandviç gişesi görsel sahnesi, adım kontrolleri, kod satırı senkronu, "Bunu anlamadım" kurtarma butonu, mikro-değerlendirme, soft-check retry ve "M0-L02 henüz üretilmedi" placeholder.
M0-L01 prototype cognitive-load patch applied.
M0-L01 patched prototype direction accepted as the P0 learning experience baseline. Vite + React remains prototype-only, not the final architecture decision.
M0-L02 final content candidate integrated into prototype.
Minimal polish patch completed; build passed; M0-L01 → M0-L02 flow works; M0-L02 → M0-L03 placeholder works.
M0-L01 → M0-L02 two-lesson prototype baseline accepted. Mobile visual stage still needs real-device testing.
GitHub issue/workflow automation scaffolding created.

Kullanıcı Tarafından Onaylananlar (What Was Approved by the User)

AI rol dağılımı (Claude=beyin, Gemini=boşluk analizi/kaynak ön tarama, Codex=kod).
Platform dili: Türkçe; teknik terimler İngilizce kalabilir + basit Türkçe açıklama.
Hedef: Principal Java Backend mülakat hazırlığı (gerçek-dışı vaat yok).
Öğrenci adım adım yönlendirilir; karar yükü verilmez.
Her konu: benzetme + görsel + üretim örneği + kod + mülakat pratiği.
v0.2 düzeltme listesi.
v0.3 entegrasyon kararları (12 kabul + 3 değiştir + ekleme listesi) — bu devir-teslim turunun talimatı.
M0-L01 patched prototype direction is accepted as the P0 learning experience baseline.
M0-L01 → M0-L02 two-lesson prototype baseline accepted.

Değiştirilmemesi Gerekenler (What Should Not Be Changed)

Pazarlık edilemez öğrenme ilkeleri (PROJECT_CONTEXT §3).
AI rol dağılımı.
Tek doğruluk kaynağı kuralı (çelişkide PROJECT_CONTEXT geçerli).
"Tam müfredatı şimdi dökme" yasağı — aşamalı üretim.
Beş katmanlı ders anlatım modeli + dört mod (Theory/Visual/Code/Interview).
Görsel pazarlık edilemez kuralları (jenerik şablon yasağı vb.).
v0.3: "Devam Et" hard-lock yasağı — yalnızca soft-check.
v0.3: M27 Sistem Tasarımı Kuşak 6'da kalır; Kuşak 4 öncesi yalnızca köprü vardır, tam modül değil.
v0.3: GraalVM / Spring Native temel ön koşul değildir.

Mevcut Görev (Current Task)
GitHub issue/workflow automation scaffolding created. Issue templates, reusable prompts, checklists and AI workflows are now available for repeatable lesson/prototype work.
Sıradaki önerilen adım: Vercel deployment hazırlığı ve mobile test checklist doğrulaması. Mobil görsel sahne hâlâ gerçek cihaz testi gerektirir.
Not: Vite + React şu an yalnızca prototip uygulama yığınıdır; final stack kararı açık kalır ve daha sonra ayrı ADR/DECISIONS turunda ele alınmalıdır.
Gerekli Girdi Dosyaları (Required Input Files)

PROJECT_CONTEXT.md (v0.3)
CURRICULUM_BLUEPRINT.md (v0.3)
LESSON_TEMPLATE.md (v0.3)
VISUAL_ANIMATION_SYSTEM.md (v0.3)
INTERVIEW_SYSTEM.md (v0.3)
DECISIONS.md (v0.3)
SOURCE_INGESTION.md (v0.3 — YENİ)
GAP_ANALYSIS (Gemini çıktısı, referans olarak — entegre edilmemiş öneriler için açık kalır)

Beklenen Çıktı (Expected Output)

Şimdi: Vercel deployment hazırlığı için küçük, güvenli bir tur planla.
Sonra: mobile test checklist ile mobil görsel sahneyi gerçek cihazlarda doğrula.
Yapılmayacak: Yeni ders eklemek, tam müfredat üretmek, ADR başlatmak veya final stack kararıymış gibi Vite + React'i kalıcılaştırmak.

Kısıtlar (Constraints)

Dil: Türkçe (teknik terimler İngilizce + basit açıklama).
Bilişsel yük düşük tutulur; tek seferde tek fikir.
Karar yükü öğrenciye verilmez.
Tam müfredat / tam ders henüz dökülmez.
Hiçbir AI yalnızca sohbet hafızasına güvenmez.
v0.3: Hard-lock yasağı; soft-check + nazik basitleştirme zorunlu.
v0.3: Modül-grubu metaforu "başlangıç noktası"dır — her konu yine kendi özgün metaforunu alır (jenerik şablon yasağı sürer).

Riskler (Risks)

R1: Bilişsel yük gözden kaçarsa içerik hedef kitle için ağır olur.
R2: AI'lar dosyaları güncellemezse hafıza tutarsızlaşır.
R3: Stack erken/yanlış seçilirse içerik-kod ayrımı bozulur.
R4: "20 yıllık geliştirici" tonu içeriğe sızarsa gerçek-dışı vaat oluşur.
R5: Animasyonlar dikkat dağıtırsa erişilebilirlik hedefi zedelenir.
R6: Gemini önerilerinin tamamı süzgeçsiz kabul edilirse hedef profilden sapma olur (bu yüzden seçici entegrasyon yapıldı).
R7: Modül-grubu metaforları yanlış anlaşılırsa jenerik şablonculuğa kayma riski doğar — kural metni VISUAL'de netleştirildi.
R8: SOURCE_INGESTION akışı uygulanmazsa kaynak eklemeleri çakışma ve hafıza bozulmasına yol açar.

Sıradaki Adım Komutu (Next Step Prompt)

Bu tur Claude'a yöneliktir (kendisi veya bir sonraki Claude oturumu):
"Önce PROJECT_CONTEXT.md ve AI_HANDOFF.md (v0.3) oku. v0.3 dosyalarının iç tutarlılığını bağımsız olarak kontrol et: PROJECT_CONTEXT.md'deki ilkeler, DECISIONS.md'deki kararlar, CURRICULUM_BLUEPRINT.md'deki sıralama, LESSON_TEMPLATE.md'deki alanlar ve INTERVIEW_SYSTEM.md/VISUAL_ANIMATION_SYSTEM.md/SOURCE_INGESTION.md kuralları birbirine çelişmiyor mu? Çelişki varsa PROJECT_CONTEXT geçerlidir; diğerlerini ona göre yama. Çelişki yoksa bunu açıkça beyan et ve yalnızca M0 veya M1'den TEK bir örnek dersi LESSON_TEMPLATE'e göre üretmeye HAZIR olduğunu söyle. Tam müfredat üretme. Codex'e şimdi devretme."
Sonraki tur (Codex'e devir koşulu sağlandığında):
"Önce v0.3 dosyalarını oku. Sen Codex (uygulama rolü)'sun. PROJECT_CONTEXT §10–11 ve DECISIONS.md doğrultusunda yığın kararı için seçenekli kısa prototip önerisi sun; LESSON_TEMPLATE'i sekmeli mod yapısıyla render eden minimal bir ders sayfası prototipi tasla. Tam ders metni yazma; içerik yer tutucu kullan."

Bitti Tanımı (Definition of Done)
Bir iş "bitti" sayılır eğer:

Çıktı bu dosyadaki kısıtlara uyuyorsa,
PROJECT_CONTEXT.md güncellendiyse,
Bu AI_HANDOFF.md bir sonraki adım için yeniden yazıldıysa,
Hedef kitleye uygun (bilişsel yük + dil) olduğu kontrol edildiyse,
Kararlar DECISIONS.md'ye işlendiyse,
Kaynak entegrasyonu içeriyorsa SOURCE_INGESTION.md akışına uyulmuşsa,
v0.3'te ek: Hard-lock değil soft-check kullanılmışsa; modül-grubu metaforu kullanıldıysa konu-bazlı özgün metafora da yer verilmişse; Gemini önerileri kontrollü filtreden geçirildiyse.
