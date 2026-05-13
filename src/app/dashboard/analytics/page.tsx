import { BarChart3, TrendingUp, TrendingDown, Download } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading font-bold text-repliq-navy">Analitik</h1>
          <p className="text-gray-500 mt-1 text-sm">Müşteri duygu durumu ve performans metrikleri</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-repliq-navy rounded-lg hover:bg-repliq-navy/90"><Download className="w-4 h-4" />Rapor İndir</button>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-repliq-navy mb-4">Duygu Trendi (Son 30 Gün)</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-400"><BarChart3 className="w-12 h-12 mx-auto mb-2" /><p className="text-sm">Grafik alanı</p></div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-repliq-navy mb-4">Haftalık Karşılaştırma</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <div className="text-center text-gray-400"><TrendingUp className="w-12 h-12 mx-auto mb-2" /><p className="text-sm">Grafik alanı</p></div>
          </div>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <h2 className="font-semibold text-repliq-navy mb-4">En Çok Bahsedilen Konular</h2>
          <div className="space-y-4">
            {[
              { topic: "Servis hızı", count: 23, trend: "up" },
              { topic: "Yemek lezzeti", count: 18, trend: "up" },
              { topic: "Fiyat", count: 12, trend: "down" },
              { topic: "Ortam", count: 10, trend: "up" },
              { topic: "Temizlik", count: 7, trend: "up" },
            ].map((item) => (
              <div key={item.topic} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{item.topic}</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-repliq-navy rounded-full" style={{ width: `${(item.count / 23) * 100}%` }} />
                  </div>
                  <span className="text-sm text-gray-500 w-6 text-right">{item.count}</span>
                  {item.trend === "up" ? <TrendingUp className="w-4 h-4 text-green-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-repliq-navy to-blue-900 rounded-xl p-6 text-white">
          <h2 className="font-semibold mb-4">AI Öneriler</h2>
          <div className="space-y-4">
            {[
              { icon: "⚡", text: "Servis hızı konusunda artan şikayetler var." },
              { icon: "📈", text: "Yemek lezzeti en güçlü yanınız." },
              { icon: "🎯", text: "Fiyat algısı olumsuz. Menüde fırsat bölümü ekleyin." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 bg-white/10 rounded-lg p-3">
                <span>{item.icon}</span>
                <p className="text-sm text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
