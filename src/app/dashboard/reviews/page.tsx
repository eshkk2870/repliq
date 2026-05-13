import { MessageSquare, Star } from "lucide-react";

const reviews = [
  { name: "Ayşe Demir", rating: 2, comment: "Servis çok yavaştı, 40 dakika bekledik.", sentiment: "negative", reply: "Sayın Ayşe Demir, yaşadığınız olumsuz deneyim için içtenlikle özür dileriz. Hizmet kalitemizi artırmak için gerekli adımları attık." },
  { name: "Mehmet Yılmaz", rating: 5, comment: "Harika bir akşam yemeğiydi!", sentiment: "positive", reply: "Sevgili Mehmet Yılmaz, harika yorumunuz için çok teşekkür ederiz!" },
  { name: "Zeynep Kaya", rating: 4, comment: "Yemekler lezzetli, ortam samimi.", sentiment: "positive", reply: "Değerli Zeynep Kaya, güzel yorumunuz için teşekkür ederiz." },
  { name: "Ali Öztürk", rating: 1, comment: "Rezervasyonuma rağmen 30 dk bekletildim.", sentiment: "negative", reply: "Sayın Ali Öztürk, yaşadığınız bu olumsuz deneyim için üzgünüz." },
  { name: "Fatma Şen", rating: 5, comment: "Arkadaşlarımla harika bir akşam geçirdik!", sentiment: "positive", reply: "Sevgili Fatma Şen, harika yorumunuz için teşekkür ederiz!" },
  { name: "Can Yıldız", rating: 3, comment: "Ortam güzel ama menü daha çeşitli olabilir.", sentiment: "neutral", reply: "Değerli Can Yıldız, menümüzü geliştirmek için çalışıyoruz." },
];

export default function ReviewsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-repliq-navy">Yorumlar</h1>
        <p className="text-gray-500 mt-1 text-sm">Tüm yorumları yönetin ve AI yanıtlarını onaylayın</p>
      </div>
      <div className="space-y-4">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-xl border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${review.sentiment === "positive" ? "bg-green-500" : review.sentiment === "negative" ? "bg-red-500" : "bg-yellow-500"}`}>{review.name[0]}</div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{review.name}</p>
                    <div className="flex text-yellow-500 text-xs">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${review.sentiment === "positive" ? "bg-green-100 text-green-700" : review.sentiment === "negative" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{review.sentiment === "positive" ? "Pozitif" : review.sentiment === "negative" ? "Negatif" : "Nötr"}</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">{review.comment}</p>
                <div className="mt-4 bg-gray-50 rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4 text-repliq-green" />
                    <span className="text-xs font-medium text-repliq-green">AI Önerilen Yanıt</span>
                  </div>
                  <p className="text-sm text-gray-700">{review.reply}</p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-repliq-green rounded-lg hover:bg-green-700">✓ Onayla ve Gönder</button>
                    <button className="px-4 py-2 text-sm font-medium text-repliq-navy border border-repliq-navy rounded-lg hover:bg-gray-50">Düzenle</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
