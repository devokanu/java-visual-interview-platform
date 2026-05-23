export const lessonM0L02 = {
  id: "m0-l02",
  code: "M0-L02",
  module: "M0 - Bilgisayar ve Program Nedir?",
  title: "Program Nedir? Komut ve Tarif Mantığı",
  duration: "12-15 dk",
  visualType: "robot",
  codeFileName: "RobotProgrami.java",
  goal:
    "Bu dersin sonunda programı sihir değil, sırayla uygulanan açık komutlar listesi olarak görebileceksin.",
  bridgeText:
    "Önce isteğin nereye gittiğini gördük. Şimdi bilgisayarın verilen işi nasıl adım adım yaptığını göreceğiz.",
  steps: [
    {
      concept: "komut",
      sentence: "Bilgisayara verilen tek net iştir.",
      stageLabel: "Çocuk üç komut kartı yazıyor.",
      activeCard: 0,
      robotScreen: "kart bekliyor",
      robotPose: "idle",
      codeLines: [2],
    },
    {
      concept: "program",
      sentence: "Sıralı komutlar listesidir.",
      stageLabel: "Kartlar ortadaki program destesine diziliyor.",
      activeCard: 0,
      robotScreen: "program hazır",
      robotPose: "idle",
      codeLines: [2],
    },
    {
      concept: "ilk kart",
      sentence: "Robot ilk komutu okuyor.",
      stageLabel: "İlk kart vurgulanıyor ve robotun ekranına yansıyor.",
      activeCard: 0,
      robotScreen: "İleri yürü",
      robotPose: "reading",
      codeLines: [3],
    },
    {
      concept: "uygulama",
      sentence: "Komut okundu ve yapıldı.",
      stageLabel: "Robot ileri yürü komutunu uygular.",
      activeCard: 0,
      robotScreen: "İleri yürü",
      robotPose: "forward",
      codeLines: [3],
    },
    {
      concept: "ikinci komut",
      sentence: "Sıradaki kart uygulanır.",
      stageLabel: "İkinci kart aktif olur ve robot sağa döner.",
      activeCard: 1,
      robotScreen: "Sağa dön",
      robotPose: "turn",
      codeLines: [4],
    },
    {
      concept: "üçüncü komut",
      sentence: "Robot üçüncü kartı da uygular.",
      stageLabel: "Üçüncü kart aktif olur ve robot oturur.",
      activeCard: 2,
      robotScreen: "Otur",
      robotPose: "sit",
      codeLines: [5],
    },
    {
      concept: "program bitti",
      sentence: "Kartlar bittiğinde robot durur.",
      stageLabel: "Deste tamamlanır ve robot bekler.",
      activeCard: null,
      robotScreen: "bitti",
      robotPose: "done",
      codeLines: [6],
    },
    {
      concept: "sıra önemlidir",
      sentence: "Aynı komutlar farklı sırada farklı sonuç verir.",
      stageLabel: "Aynı kartlar farklı sırayla dizilir ve sonuç değişir.",
      activeCard: "contrast",
      robotScreen: "sıra değişti",
      robotPose: "contrast",
      codeLines: [3, 4, 5],
    },
  ],
  commandCards: ["İleri yürü", "Sağa dön", "Otur"],
  contrastCards: ["Otur", "Sağa dön", "İleri yürü"],
  codeLines: [
    "public class RobotProgrami {",
    "    public static void main(String[] args) {",
    "        System.out.println(\"İleri yürü\");",
    "        System.out.println(\"Sağa dön\");",
    "        System.out.println(\"Otur\");",
    "    }",
    "}",
  ],
  codeNote:
    "Bu derste public, static, void gibi kelimeleri öğrenmeyeceğiz. Şimdilik onları tarif defterindeki resmi damgalar gibi düşün. İleride tek tek öğreneceğiz.",
  rescue: {
    buttonLabel: "Bunu anlamadım",
    ariaLabel: "Daha basit açıklama göster",
    messages: [
      "Program, sıralı kartlardır. Bilgisayar kartları okuyup yapan robot gibidir.",
      "Çamaşır makinesi de bir program izler: su al, ısıt, döndür, boşalt.",
      "Şimdilik sadece şu cümle önemli: Bilgisayar düşünmez, uygular.",
    ],
  },
  assessment: {
    title: "Mini kontrol",
    intro: "Devam etmeden önce tek küçük kontrol.",
    question: "Aşağıdaki cümlelerden hangisi doğrudur?",
    options: [
      ["fixes", "Bilgisayar verilen komutu kendi başına düzeltebilir."],
      [
        "ordered",
        "Bilgisayar komutları yazıldığı sırayla uygular ve kendi başına anlam çıkarmaz.",
      ],
      ["single", "Bilgisayar tek bir komut alır; sıra önemli değildir."],
    ],
    correctValue: "ordered",
    success:
      "Evet. Bilgisayar komutları yazıldığı sırayla uygular.",
    softCheckTitle: "Hep birlikte tekrar bakalım, daha basit anlatalım mı?",
    softCheckExplanation:
      "Robot düşünmez; kartı okur ve yapar. Sırayla.",
    retryQuestion:
      "Robotun yarığına koyduğun kartları nasıl uygular?",
    retryOptions: [
      ["ordered", "Sırayla okur ve uygular."],
      ["guess", "Eksik yerleri kendi tahmin eder."],
      ["random", "Rastgele bir kart seçer."],
    ],
    secondWrongReminder:
      "Hiç sorun yok. Bilgisayar komutları sırayla uygular ve kendi başına anlam çıkarmaz. İstersen devam edebilir ya da tekrar izleyebilirsin.",
  },
  nextStep: {
    type: "lesson",
    targetLessonId: "m0-l03",
  },
  tabs: [
    {
      id: "theory",
      label: "Theory",
      heading: "Komut kartlı robot fikri",
      paragraphs: [
        "Bir program, bilgisayara verilen sıralı ve açık komutlar listesidir.",
        "Bilgisayar düşünmez; yazılan komutları sırayla uygular. Belirsiz veya eksik komutu kendi başına tamamlamaz.",
      ],
      pairs: [
        ["Kart yazan kişi", "programcı / developer"],
        ["Tek kart", "komut"],
        ["Sıralı kart destesi", "program"],
        ["Kartı okuyup yapan robot", "bilgisayar"],
      ],
      depthLadder: [
        "control flow",
        "memory",
        "JVM execution",
        "debugging",
        "architecture reasoning",
      ],
    },
    {
      id: "visual",
      label: "Visual",
      heading: "Kartları sırayla izle",
      paragraphs: [
        "Bu sahne otomatik akmaz. Her adımı sen başlatırsın.",
        "Robotun düşünce balonu yoktur; sadece kartı okur ve uygular.",
      ],
    },
    {
      id: "code",
      label: "Code",
      heading: "Aynı kart destesinin Java hali",
      paragraphs: [
        "Üç println satırı, üç komut gibi düşünebilirsin.",
        "Kod yukarıdan aşağıya sırayla çalışır. Sırayı değiştirirsen sonuç değişir.",
      ],
    },
    {
      id: "interview",
      label: "Interview",
      heading: "Kısa mülakat provası",
      paragraphs: [
        "Soru: Program nedir ve neden bilgisayar kendi kendine anlamaz?",
        "İyi cevap sırası: programı tanımla, kart destesine bağla, bilgisayarın düşünmeyip uyguladığını söyle.",
      ],
      prompt:
        "Program, bilgisayara verilen sıralı ve açık komutlar listesidir. Bilgisayar düşünmez; yalnızca yazılı komut sırasını uygular. Programcının işi niyeti açık komutlara çevirmektir.",
    },
  ],
};
