export const clinicInfo = {
  name: "Melis Çakan Diş Kliniği",
  shortName: "Dr. Melis Çakan",
  address: "Dr. Kamil Sk. Süleyman Baş İş Merkezi K:1, Adapazarı / Sakarya",
  phone: "(0264) 279 44 04",
  phoneHref: "tel:+902642794404",
  email: "drmeliscakan@gmail.com",
  mapsQuery: "Dr. Kamil Sk. Süleyman Baş İş Merkezi Adapazarı Sakarya",
  // TODO: WhatsApp için işletmeye ait mobil numara sağlanınca eklenecek.
  // Mevcut telefon numarası sabit hat olduğu için WhatsApp'ta kullanılamıyor.
  whatsappNumber: "",
  // TODO: Doğrulanmış sosyal medya hesapları eklenene kadar footer'da gösterilmiyor.
  socials: [] as { label: string; href: string }[],
};

export const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/galeri", label: "Galeri" },
  { href: "/referanslar", label: "Hasta Deneyimleri" },
  { href: "/sss", label: "S.S.S" },
  { href: "/iletisim", label: "İletişim" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "dolgu-tedavisi",
    title: "Dolgu Tedavisi",
    short: "Çürük nedeniyle zarar gören dişlerin fonksiyon ve görünümünü yeniden kazandırıyoruz.",
    description:
      "Dolgu, çürük nedeniyle zarar görmüş bir dişe normal fonksiyonunu ve görünümünü kazandırmanın bir yöntemidir. Dolgu yaparken önce çürümüş diş dokusu uzaklaştırılır, etkilenen alan temizlenir ve boşluk dolgu malzemesi ile doldurulur. Amalgam, kompozit ve cam iyomer dolgu çeşitleri arasındadır.",
    icon: "syringe",
  },
  {
    slug: "kozmetik-dis-hekimligi",
    title: "Kozmetik Diş Hekimliği",
    short: "Kişiye özel, doğal görünümlü ve estetik gülüşler tasarlıyoruz.",
    description:
      "Kozmetik diş hekimliğinde yapılan dişlerin muntazam ve güzel olmasının yanında, kişiye özgü; hastanın yüzüne, ten rengine ve göz rengine en uygun, doğal dişten ayrılmayan ama son derece çekici, ışıl ışıl, ince ve şeffaf, son teknoloji materyallerden üretilen dişler uygulanır.",
    icon: "sparkles",
  },
  {
    slug: "dis-implanti",
    title: "Diş İmplantı",
    short: "Titanyum implantlarla eksik dişlerinize ömür boyu kalıcı bir çözüm.",
    description:
      "İmplant, çene kemiğine yerleştirilen ve protezlere destek için yapılan yapay diş kökleridir. Eksik dişlerin yerine uygulanan, doğru bakım ve düzenli kontrollerle uzun yıllar kullanılabilecek şekilde tasarlanan, çoğunlukla titanyumdan yapılan vidalardır.",
    icon: "tooth",
  },
  {
    slug: "agiz-cerrahisi",
    title: "Ağız Cerrahisi",
    short: "Ağız, çene ve yüz bölgesindeki cerrahi tedavi ihtiyaçlarında uzman yaklaşım.",
    description:
      "Ağız, çene ve yüz bölgelerindeki yumuşak ve sert dokuların konjenital ve kazanılmış hastalıkları ile enfeksiyöz, travmatik ve her türlü patolojik nedenlerin yol açtığı estetik, fonksiyonel ve fonetik sorunların medikal ve cerrahi tedavisini gerçekleştiriyoruz.",
    icon: "activity",
  },
  {
    slug: "kanal-tedavisi",
    title: "Kanal Tedavisi",
    short: "Hasar görmüş veya iltihaplanmış dişleri ağrısız yöntemlerle kurtarıyoruz.",
    description:
      "Kanal tedavisi, oldukça fazla hasar görmüş ya da iltihaplanmış bir dişi onarmak ve kurtarmak için yapılan bir tedavidir. Tedavi; dişin hasar görmüş bölümünün çıkarılması, temizlenmesi, dezenfekte edilmesi ve tekrar doldurularak kapatılmasını içerir.",
    icon: "heart-pulse",
  },
  {
    slug: "periodontoloji-tedavisi",
    title: "Periodontoloji Tedavisi",
    short: "Diş eti ve destek dokuların sağlığını erken teşhisle koruyoruz.",
    description:
      "Periodontal hastalıklar, diş eti ve dişleri destekleyen dokuları etkileyen iltihabi hastalıklardır. Erişkinlerde diş kayıplarının %70'inden periodontal hastalıklar sorumludur. Bu hastalıklar erken dönemde teşhis edildiklerinde kolay ve başarılı şekilde tedavi edilebilir.",
    icon: "shield-plus",
  },
  {
    slug: "dis-teli-uygulamasi",
    title: "Diş Teli Uygulaması",
    short: "Boşluk, çarpıklık ve kapanış bozukluklarında ortodontik çözümler.",
    description:
      "Dişler arasındaki boşlukları gidermek, birbirini iten dişleri düzeltmek, kırık dişleri onarmak, ısırma bozukluklarını gidermek ve üst üste binen dişleri düzenlemek için diş teli uygulamaları planlıyoruz.",
    icon: "align-center",
  },
  {
    slug: "bleaching-dis-beyazlatma",
    title: "Bleaching (Diş Beyazlatma)",
    short: "Klinik ortamında güvenilir, hızlı ve etkili beyazlatma.",
    description:
      "Bleaching yöntemi ile diş beyazlatma, klinik ortamında diş hekimi tarafından uygulanan bir diş beyazlatma yöntemidir. Günümüzde gelişen teknolojilerle birlikte başarı oranı yükselen ve güvenilir bir diş beyazlatma yöntemi olarak öne çıkmaktadır.",
    icon: "sun",
  },
  {
    slug: "zirkonyum-dis-kaplamasi",
    title: "Zirkonyum Diş Kaplaması",
    short: "Işık geçirgenliği yüksek, tamamen doğal görünümlü kaplamalar.",
    description:
      "Zirkonyum diş, klasik porselen köprü ve protezlerin alt yapısı olan gri metalin yerine kullanılan beyaz bir alaşımdır. Işık geçirgenliği özelliği sayesinde doğal dişlerin görüntüsü tam olarak yakalanır.",
    icon: "gem",
  },
  {
    slug: "porselen-dis-tedavisi",
    title: "Porselen Diş Tedavisi",
    short: "Estetik ve fonksiyonu bir arada sunan porselen uygulamalar.",
    description:
      "Porselen diş uygulaması; sağlıklı olmayan veya estetik görünüme sahip olmayan, temel görevini yerine getiremeyen dişlerin porselenle kaplanarak yenilenmesidir. Uygulama, porselen yaprak (laminate) ve tam kaplama olmak üzere iki şekilde yapılabilir.",
    icon: "crown",
  },
];

export const faqs = [
  {
    q: "Dişler nasıl beyazlar?",
    a: "Diş beyazlatma, dişlerin yüzeyindeki gözenekli mine yapısında oluşan renkli organik ve inorganik maddelerin diş beyazlatma jelleri (karbamid peroksit) ile giderilmesi işlemidir.",
  },
  {
    q: "Beyazlatma dişlerime zarar verir mi?",
    a: "Diş hekimi kontrolünde ve doğru protokolle uygulanan beyazlatma işleminin dişlere zarar vermesi beklenmez. Bununla birlikte her hastanın diş yapısı farklıdır; kendinize uygun olup olmadığını muayene sırasında birlikte değerlendiriyoruz.",
  },
  {
    q: "Ultrasonik temizleyiciler dişe zarar verir mi?",
    a: "Yanlış kullanım sonrasında dişte mikron düzeyinde çiziklere sebep olabilir. Bu da parlatma ve florür uygulaması yapılmazsa dişlerin kısa sürede tekrar renklenmesine yol açar. Bu yüzden diş hekimliği eğitimi almamış kişilere yaptırılan tedaviler çoğu zaman istenen sonucu vermez.",
  },
  {
    q: "İmplant nedir? Herkese yapılabilir mi?",
    a: "Doğal dişler çürük, diş eti hastalığı veya kaza gibi nedenlerle kaybedilebilir. İmplant tedavisiyle bu boşluklara kişinin kendine aitmiş gibi yeni diş yapılabilir. Çene gelişimini tamamlamış ve genel sağlık durumu iyi olan hemen her hastada uygulanabilir; 35 yıldır %98'e varan başarı oranıyla uygulanmaktadır.",
  },
  {
    q: "Tedavi sırasında acı çeker miyim? Tedavi ne kadar sürer?",
    a: "İmplant operasyonu sırasında ve sonrasında hissedilen ağrı seviyesi, diş çekimindeki ağrıyla eşdeğerdir; hasta açısından konforlu bir operasyondur. Bir implantın yerleştirilme süresi ortalama 20-30 dakikadır.",
  },
  {
    q: "İmplant tedavisinin avantajları nelerdir?",
    a: "En önemli avantajı komşu doğal dişlere zarar verilmemesidir. Ayrıca kemik erimesini engeller, protezin kendi dişiniz gibi hissedilmesini sağlar ve genellikle kısa süren basit bir operasyonla tamamlanır.",
  },
  {
    q: "Kanal tedavisi ağrılı bir işlem midir?",
    a: "Kök kanal tedavisi öncesinde bölgeye anestezi uygulanır, bu sayede işlem sırasında ağrı hissi büyük ölçüde önlenir. İşlem sonrasında birkaç gün süren hafif bir hassasiyet olağandır.",
  },
  {
    q: "Diş enfeksiyonlarında antibiyotik kullanımı gerekli midir?",
    a: "Normal şartlarda kanal tedavisi sırasında antibiyotik kullanımına gerek yoktur. Ancak ileri enfeksiyon varlığında ya da aşırı hassasiyet durumunda antibiyotik verilebilir.",
  },
  {
    q: "20 yaş dişleri hangi durumlarda ve ne zaman çekilmelidir?",
    a: "20 yaş dişleri çenede yer darlığı sebebiyle tam veya yarı gömülü kalabilir; bu durum diş etinde şişlik, kızarıklık ve ağrıya (perikoronitis) yol açabilir. Bu tabloda çekim önerilir.",
  },
];

export const testimonials = [
  {
    quote:
      "Ben normalde Amerika'da yaşıyorum, orada ticaretle uğraşıyorum. Belirli dönemlerde Türkiye'ye geliyorum. İnternet üzerinden araştırma yaptığımda Melis Hanım'a ulaştım. Amerika'daki doktorlarla yaptığım görüşmelerdeki tedavi süreci ve ücretle Melis Hanım'ın çıkardığı tedavi planı bana çok uygun ve tatmin ediciydi. Yapılan implantlar ve sinüs lifting sonrası aldığım kararın ne kadar doğru olduğunu görmek beni ayrıca mutlu etti.",
    name: "Erdal Kara",
    role: "İhracat Uzmanı",
  },
  {
    quote:
      "Ben çok küçük yaşlardan beri okula gider gibi diş doktoruna giden biriyim. Dişlerim fazlasıyla birbirinden bağımsız, kafalarına göre hareket ediyordu. Uzun doktor arayışlarım üzerine Melis Hanım'la tanıştık ve bütün sorunları ortadan kaldırdı. Şiddetle tavsiye ediyorum, inatçı dişlerin dostu.",
    name: "Esra Gün",
    role: "Memur",
  },
  {
    quote:
      "Dişlerimin çarpıklığı çok fazlaydı ve düzeltilmesi zor gibi duruyordu ama sağlıktan estetiğe kadar her şeyi ince ayrıntısına kadar düşünen Melis Hanım sayesinde harika bir gülüşe sahip oldum. Kendini güvenilir bir diş hekimine emanet etmek isteyen herkese tavsiye ediyorum.",
    name: "Nazlı Bağcan",
    role: "Grafiker",
  },
];

export const aboutContent = {
  intro:
    "Ağız ve diş sağlığı alanında tüm tedavi, cerrahi, koruyucu ve düzeltici hekimlik uygulamaları ile kozmetik diş hekimliği (estetik botoks ve dermal dolgu) alanlarında uzman ekibimizle hizmet veriyoruz. Hizmetlerimiz, Melis Çakan tarafından 2003 yılında kurulan muayenehanede başlamıştır. 2011 yılında aynı bina içinde yapılan değişikliklerle klinik altyapısı kurulmuş ve üç hasta koltuğu ile daha geniş ölçekli hizmet verilmeye başlanmıştır.",
  mission:
    "Doğru teşhis ve verimli klinik planlamalar ile hastalarımıza en uygun tedavi yöntemini belirlemek ve uygulamaktır. Modern ve ağrısız yöntemlerle herkesin en güzel gülüşlere ulaşmasını sağlamak.",
  vision:
    "“Sağlık ağızda başlar” mottosuyla yürüttüğümüz sağlık hizmetinde inancımız, her hastanın kendini ifade eden sağlıklı bir gülüşü hak ettiğidir.",
  doctor: {
    name: "Dr. Melis Çakan",
    title: "Diş Hekimi",
    bio: "İstanbul doğumludur. 1998 yılında İstanbul Üniversitesi Çapa Diş Hekimliği Fakültesi'nden mezun olmuştur. Mezuniyetini takip eden 2 yıl Çapa Diş Hekimliği Fakültesi Endodonti Anabilim Dalı'nda doktora derslerine katılmıştır. 2011-2012 yıllarında ortodontik hareketler ve fonksiyonel çene ortopedisi konulu eğitim kurslarını, 2013 yılında implant uygulamaları ve ileri cerrahi seminerlerini tamamlamıştır. 2014 yılında botoks ve dermal uygulamalar (kozmetik diş hekimliği) eğitimlerini tamamlayarak hizmet alanını genişletmiştir.",
    education: [
      "İstanbul Üniversitesi Diş Hekimliği Fakültesi (1998)",
      "İÜ Çapa Diş Hekimliği Fakültesi, Endodonti Anabilim Dalı — doktora dersleri",
    ],
    experience: "2003 yılından bu yana Sakarya'da mesleğini icra etmektedir.",
    languages: ["Türkçe", "İngilizce"],
    // TODO: Mesleki üyelik ve sertifika bilgileri doğrulanınca eklenecek.
  },
};

export const timeline = [
  {
    year: "2003",
    title: "Muayenehanenin kuruluşu",
    description: "Dr. Melis Çakan, Sakarya'da kendi muayenehanesini açtı.",
  },
  {
    year: "2011",
    title: "Klinik altyapısının genişlemesi",
    description:
      "Aynı bina içinde yapılan değişikliklerle klinik altyapısı kuruldu, üç hasta koltuğuyla hizmet kapasitesi artırıldı.",
  },
  {
    year: "Günümüz",
    title: "Modern ve kapsamlı klinik hizmetleri",
    description:
      "Kozmetik diş hekimliğinden implant ve kanal tedavisine geniş bir tedavi yelpazesiyle hizmet vermeye devam ediyoruz.",
  },
];

export const clinicValues = [
  {
    title: "Kişiye özel yaklaşım",
    description: "Her hastanın ihtiyacına göre şekillenen, birlikte karar verilen tedavi planları.",
  },
  {
    title: "Doğal sonuçlara odaklanma",
    description: "Estetik çalışmalarda abartıdan uzak, yüz hatlarınızla uyumlu sonuçlar hedefleniyor.",
  },
  {
    title: "Uzun vadeli ağız sağlığı",
    description: "Tek seferlik işlemden çok, düzenli kontrol ve koruyucu yaklaşımla kalıcı sonuç.",
  },
];

// Yalnızca doğrulanmış, gerçek verilere dayanan istatistikler.
export const stats = [
  { label: "Yıllık Deneyim", value: "20+" },
  { label: "Tedavi Alanı", value: "10+" },
  { label: "Hasta Koltuğu", value: "3" },
];
