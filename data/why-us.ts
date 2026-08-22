export type WhyUsIcon =
  | "graduationCap"
  | "clipboardCheck"
  | "target"
  | "messagesSquare"
  | "library"
  | "mapPin";

export type WhyUsItem = {
  title: string;
  description: string;
  icon: WhyUsIcon;
};

export const whyUsItems: WhyUsItem[] = [
  {
    title: "Öğrenci Odaklı Eğitim",
    description:
      "Her öğrencinin öğrenme hızı farklıdır. Çalışmalar öğrencinin bulunduğu seviyeye göre planlanır.",
    icon: "graduationCap",
  },
  {
    title: "Düzenli Takip",
    description:
      "Akademik gelişim tek seferlik değil, süreç boyunca düzenli olarak takip edilir.",
    icon: "clipboardCheck",
  },
  {
    title: "Hedef Odaklı Çalışma",
    description:
      "Öğrencinin hedefi belirlenir ve çalışma planı bu hedefe göre şekillendirilir.",
    icon: "target",
  },
  {
    title: "Güçlü İletişim",
    description:
      "Öğrenci, öğretmen ve veli arasındaki iletişim sürecin en önemli parçası olarak görülür.",
    icon: "messagesSquare",
  },
  {
    title: "Verimli Öğrenme Ortamı",
    description:
      "Öğrencilerin dikkatlerini dağıtmadan derslerine odaklanabilecekleri düzenli bir çalışma ortamı sunulur.",
    icon: "library",
  },
  {
    title: "Merkezi Konum",
    description:
      "Akdeniz / Mersin merkezinde, ulaşımı kolay bir noktada hizmet verilir.",
    icon: "mapPin",
  },
];

export const processSteps = [
  {
    title: "Tanışma",
    description: "Öğrenciyi ve beklentileri tanımak için ilk görüşme yapılır.",
  },
  {
    title: "Hedef Belirleme",
    description: "Öğrencinin ulaşmak istediği nokta birlikte netleştirilir.",
  },
  {
    title: "Planlama",
    description: "Hedefe uygun, gerçekçi bir çalışma planı hazırlanır.",
  },
  {
    title: "Eğitim",
    description: "Planlanan program derslerle ve çalışmalarla uygulanır.",
  },
  {
    title: "Takip",
    description: "İlerleme düzenli aralıklarla değerlendirilir.",
  },
  {
    title: "Gelişim",
    description: "Sonuçlara göre plan güncellenir ve eksikler kapatılır.",
  },
];
