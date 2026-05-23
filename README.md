# Java Interview Platform Project Memory

Sürüm: v0.3.1 çalışma durumu

Bu klasör, öğrenme güçlüğü yaşayan kullanıcılar için tasarlanan rehberli Java Backend mülakat hazırlık platformunun proje hafızasını içerir.

## Okuma Sırası

Her AI çalışmaya başlamadan önce dosyaları şu sırayla okumalıdır:

1. PROJECT_CONTEXT.md
2. AI_HANDOFF.md
3. DECISIONS.md
4. CURRICULUM_BLUEPRINT.md
5. LESSON_TEMPLATE.md
6. VISUAL_ANIMATION_SYSTEM.md
7. INTERVIEW_SYSTEM.md
8. SOURCE_INGESTION.md

## Temel Kural

PROJECT_CONTEXT.md tek doğruluk kaynağıdır. Diğer dosyalarla çelişki varsa PROJECT_CONTEXT.md geçerli kabul edilir ve çelişen dosya yamalanır.

## AI Rolleri

- Claude: proje beyni, müfredat, dokümantasyon, erişilebilirlik ve context hafızası.
- Gemini: boşluk analizi, kaynak ön taraması, alternatif görsel/animasyon önerileri.
- Codex GPT-5.5: prototip, kod, test, refactor, uygulama mimarisi.

## Mevcut Durum

v0.3 ile Gemini gap analysis kontrollü şekilde entegre edildi. v0.3.1 yönünde D30 progressive depth kararı geçerlidir: bilişsel erişilebilirlik içerik sığlaştırma değil, kademeli derinlik tasarımıdır.

M0-L01 P0 öğrenme deneyimi baseline'ı kabul edildi. M0-L02 final content candidate kabul edildi ve M0-L01 → M0-L02 two-lesson prototype baseline accepted. GitHub issue/workflow automation scaffolding oluşturuldu.

Two-lesson prototype Vercel'e mobil test için deploy edildi. İlk Vercel build, generated dependency/build output tracking nedeniyle başarısız oldu; node_modules/dist Git tracking'den çıkarılıp .gitignore eklenerek/güncellenerek düzeltildi.

Tam müfredat hâlâ üretilmedi. Vite + React mevcut prototip uygulama yığınıdır; final mimari karar değildir.

## Sıradaki Adım

1. `checklists/mobile_test_checklist.md` ile gerçek mobil cihaz testi çalıştır.
2. Sonra stack, hosting, content storage, progress tracking ve animation tekniği için ADR/architecture tartışmasını başlat.

## Vercel Test Deploy Durumu

İki dersli prototip Vercel'e mobil test amacıyla yayınlandı. Bu yalnızca prototipi paylaşılabilir hale getirmek içindir; Vercel final hosting kararı değildir ve Vite + React final mimari karar değildir.

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

Deploy sonrası gerçek telefonda şu akış kontrol edilmelidir: M0-L01 → M0-L02 → M0-L03 placeholder. Mobil test için `checklists/mobile_test_checklist.md` kullanılmalıdır.

## AI Workflow Automation

Tekrarlanabilir AI çalışma akışı için şu iskeletler eklendi:

- `.github/ISSUE_TEMPLATE/`: lesson content, review, prototype integration, QA, memory update ve architecture decision issue formları.
- `prompts/`: Claude ve Codex için yeniden kullanılabilir görev promptları.
- `checklists/`: lesson, visual animation, prototype, accessibility, depth ladder ve mobile test kontrol listeleri.
- `workflows/`: lesson production, prototype integration ve AI handoff adımları.

Batch Lesson Factory iskeleti de eklendi: 3 derslik paketler için `.github/ISSUE_TEMPLATE/lesson_batch.yml`, `prompts/08-11`, `checklists/batch_lesson_quality_checklist.md` ve `workflows/BATCH_LESSON_FACTORY_WORKFLOW.md` kullanılır. Batch akışı kalite kapısını atlamaz; D30 progressive depth korunur.

Not: Bu iskeletler Vite + React'i final mimari kararı yapmaz; mevcut stack hâlâ prototip uygulama yığınıdır.
