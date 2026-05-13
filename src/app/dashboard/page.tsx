import Link from "next/link";
import { MessageSquare, TrendingUp, AlertTriangle, Star, ArrowRight, BarChart3 } from "lucide-react";

const stats = [
  { label: "Toplam Yorum", value: "147", change: "+12 bu hafta", icon: MessageSquare, color: "text-blue-600 bg-blue-100" },
  { label: "Ortalama Puan", value: "4.2", change: "+0.3 bu ay", icon: Star, color: "text-yellow-600 bg-yellow-100" },
  { label: "Yanıt Oranı", value: "%94", change: "%8 artış", icon: TrendingUp, color: "text-green-600 bg-green-100" },
  { label: "Yanıtlanmayan", value: "9", change: "Acil aksiyon", icon: AlertTriangle, color: "text-red-600 bg-red-100" },
];

const recentReviews = [
  { name: "Ayşe Demir", rating: 2, comment: "Servis çok yavaştı, 40 dakika bekledik.", time: "2 saat önce", sentiment: "negative" },
  { name: "Mehmet Yılmaz", rating: 5, comment: "Harika bir akşam yemeğiydi!", time: "5 saat önce", sentiment: "positive" },
  { name: "Zeynep Kaya", rating: 4, comment: "Yemekler lezzetli, ortam samimi.", time: "1 gün önce", sentiment: "positive" },
  { name: "Ali Öztürk", rating: 1, comment: "Rezervasyonuma rağmen 30 dk bekletildim.", time: "1 gün önce", sentiment: "negative" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-heading font-bold text-repliq-navy">Dashboard</h1>
        <p className="text-gray-500 mt-1">İşletmenizin itibarına genel bakış</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl p-5 border card-hover">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.color}`}><Icon className="w-5 h-5" /></div>
              <p className="text-2xl font-bold text-repliq-navy mt-3">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className={`text-xs mt-1 ${stat.change.includes("Acil") ? "text-red-500" : "text-green-600"}`}>{stat.change}</p>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-repliq-navy">Son Yorumlar</h2>
            <Link href="/dashboard/reviews" className="text-sm text-repliq-green hover:text-green-700 flex items-center gap-1">Tümünü Gör <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="space-y-4">
            {recentReviews.map((review, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${review.sentiment === "positive" ? "bg-green-500" : "bg-red-500"}`}>{review.name[0]}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">{review.name}</p>
                    <div className="flex text-yellow-500 text-xs">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{review.comment}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">{review.time}</span>
                    <span className="text-xs font-medium text-repliq-green">AI Yanıt Hazır →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6">
            <h2 className="font-semibold text-repliq-navy mb-4">Duygu Analizi</h2>
            <div className="space-y-4">
              {[
                { label: "Pozitif", pct: 72, color: "bg-green-500" },
                { label: "Nötr", pct: 15, color: "bg-yellow-500" },
                { label: "Negatif", pct: 13, color: "bg-red-500" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-gray-500">%{item.pct}</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <p className="text-xs text-gray-500">🔥 En çok bahsedilen:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Servis hızı", "Lezzet", "Ortam", "Fiyat"].map((topic) => (
                  <span key={topic} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">{topic}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-repliq-navy rounded-xl p-6 text-white">
            <h2 className="font-semibold mb-2">Haftalık Rapor</h2>
            <p className="text-white/70 text-sm">Bu haftanın özetini email'ine gönderiyoruz.</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-white/60">Gelen yorum</span><span className="font-medium">24</span></div>
              <div className="flex justify-between"><span className="text-white/60">Yanıtlanan</span><span className="font-medium">22</span></div>
              <div className="flex justify-between"><span className="text-white/60">Puan değişimi</span><span className="font-medium text-green-400">+0.2</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
