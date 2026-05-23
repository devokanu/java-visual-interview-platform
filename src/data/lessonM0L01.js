export const lesson = {
  id: "m0-l01",
  code: "M0-L01",
  module: "M0 - Bilgisayar ve Program Nedir?",
  title: "Bilgisayar, Program ve Backend Nedir?",
  duration: "12-15 dk",
  visualType: "sandwich",
  codeFileName: "SandvicGisesi.java",
  goal:
    "Bu dersin sonunda program, server, backend, request ve response kelimelerini sandviç gişesi sahnesiyle eşleştirebileceksin.",
  steps: [
    {
      concept: "request",
      sentence: "İstediğin şeyi söylüyorsun.",
      stageLabel: "Çocuk camekana yaklaşıyor ve sipariş söylüyor.",
      bubble: "Bir peynirli sandviç lütfen.",
      codeLines: [9],
    },
    {
      concept: "request yolu",
      sentence: "İstek arka tarafa gidiyor.",
      stageLabel: "Konuşma balonu camekandan mutfağa doğru ilerliyor.",
      bubble: "peynirli",
      codeLines: [9],
    },
    {
      concept: "server / backend",
      sentence: "Arka taraf kuralları uyguluyor ve sandviçi hazırlıyor.",
      stageLabel: "Perde aralanıyor; mutfak tezgahında sandviç hazırlanıyor.",
      bubble: "sipariş alındı",
      codeLines: [4],
    },
    {
      concept: "response",
      sentence: "Cevap hazır.",
      stageLabel: "Hazır sandviç tezgaha konuyor.",
      bubble: "hazır",
      codeLines: [5],
    },
    {
      concept: "response yolu",
      sentence: "Cevap kullanıcıya dönüyor.",
      stageLabel: "Sandviç sağdan sola, müşteriye doğru geliyor.",
      bubble: "sandviç geliyor",
      codeLines: [9],
    },
    {
      concept: "tam akış",
      sentence: "İstek gitti, cevap döndü.",
      stageLabel: "Client, request, server ve response etiketleri birlikte görünür.",
      bubble: "akış tamam",
      codeLines: [10],
    },
  ],
  codeLines: [
    "public class SandvicGisesi {",
    "",
    "    // Bu, mutfaktaki tek bir tarif.",
    "    public static String siparisAl(String sandvicTuru) {",
    "        return \"İşte \" + sandvicTuru + \" sandviçin hazır.\";",
    "    }",
    "",
    "    public static void main(String[] args) {",
    "        String cevap = siparisAl(\"peynirli\");",
    "        System.out.println(cevap);",
    "    }",
    "}",
  ],
  codeNote:
    "Bu derste public, static, void gibi kelimeleri öğrenmeyeceğiz. Şimdilik onları tarif defterindeki resmi damgalar gibi düşün. İleride tek tek öğreneceğiz.",
  rescue: {
    buttonLabel: "Bunu anlamadım",
    ariaLabel: "Daha basit açıklama göster",
    messages: [
      "Sen ön taraftasın. Server arka tarafta senin istediğin şeyi yapıp geri getirir.",
      "Kütüphanede kitap istersin. Kütüphaneci rafa gider ve kitabı getirir. Bu da aynı fikirdir.",
      "Şimdilik sadece request kelimesine bakalım: request, bir şey istemektir.",
    ],
  },
  assessment: {
    title: "Mini kontrol",
    intro: "Devam etmeden önce tek küçük kontrol.",
    question:
      "Telefondan bir uygulamaya istek attığında, arka tarafta cevap üreten bilgisayara ne ad veriyoruz?",
    options: [
      ["frontend", "Frontend"],
      ["server", "Server"],
      ["telefon", "Telefon"],
    ],
    correctValue: "server",
    success:
      "Evet. Server, arka tarafta cevabı üreten bilgisayardır.",
    softCheckTitle: "Hep birlikte tekrar bakalım, daha basit anlatalım mı?",
    softCheckExplanation:
      "Server, arka tarafta sürekli açık duran, isteklere cevap üreten bilgisayardır.",
    retryQuestion:
      "Arka tarafta açık tezgah gibi duran bilgisayara ne diyoruz?",
    retryOptions: [
      ["server", "Server"],
      ["frontend", "Frontend"],
      ["telefon", "Telefon"],
    ],
    secondWrongReminder:
      "Hiç sorun yok. Server, arka tarafta isteğe cevap üreten bilgisayardır. İstersen devam edebilir ya da tekrar izleyebilirsin.",
  },
  nextStep: {
    type: "lesson",
    targetLessonId: "m0-l02",
  },
  tabs: [
    {
      id: "theory",
      label: "Theory",
      heading: "Sandviç gişesi fikri",
      paragraphs: [
        "Ön tarafta sen varsın. Bir şey istersin. Arka tarafta görünmeyen bir mutfak bunu hazırlar ve sana geri verir.",
        "Frontend, gördüğün ön taraftır. Backend, görmediğin ama işi yapan arka taraftır.",
      ],
      pairs: [
        ["Sen", "client"],
        ["Bir peynirli sandviç lütfen", "request"],
        ["Mutfak", "server / backend"],
        ["Gelen sandviç", "response"],
      ],
    },
    {
      id: "visual",
      label: "Visual",
      heading: "Sahneyi adım adım izle",
      paragraphs: [
        "Bu sahne otomatik akmaz. Her adımı sen başlatırsın.",
        "Her kare tek başına bir fikri gösterir: önce istek, sonra arka taraf, sonra cevap.",
      ],
    },
    {
      id: "code",
      label: "Code",
      heading: "Aynı sahnenin Java hali",
      paragraphs: [
        "Bu derste public, static ve void kelimelerini öğrenmek zorunda değilsin.",
        "Şimdilik sadece şunu gör: sipariş vermek bir method çağrısı gibi; return ise cevabın geri dönmesi gibi.",
      ],
    },
    {
      id: "interview",
      label: "Interview",
      heading: "Kısa mülakat provası",
      paragraphs: [
        "Soru: Bir Java Backend Engineer ne yapar? Kendi cümlelerinle, kısa ve sade anlat.",
        "İyi cevap sırası: önce isteği anlat, sonra görünmeyen arka tarafı anlat, sonra Java Backend Engineer'ın bu arka tarafı kurduğunu söyle.",
      ],
      prompt:
        "Bir Java Backend Engineer, kullanıcının görmediği taraftaki sistemi kurar. İstekleri alır, kuralları uygular ve cevabı geri döner. Java bu işi yaparken kullandığı dildir.",
    },
  ],
};
