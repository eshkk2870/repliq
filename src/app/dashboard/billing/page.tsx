import { CreditCard, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-repliq-navy">Fatura & Abonelik</h1>
        <p className="text-gray-500 mt-1 text-sm">Planınızı yönetin ve fatura geçmişinizi görün</p>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-repliq-navy">Pro Plan</h2>
              <span className="text-xs px-2 py-0.5 bg-repliq-green text-white rounded-full font-medium">Aktif</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">$79/ay — 3 lokasyon</p>
          </div>
          <Link href="/" className="text-sm text-repliq-green hover:text-green-700 font-medium">Planı Değiştir</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {["Sınırsız AI yanıt", "Tam otomasyon", "Sentiment analizi", "Rakip izleme", "Tripadvisor+Yelp", "Haftalık rapor"].map((f) => (
            <div key={f} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-repliq-green" /><span className="text-gray-600">{f}</span></div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <div className="flex items-center gap-3 mb-4"><CreditCard className="w-5 h-5 text-repliq-green" /><h2 className="font-semibold text-repliq-navy">Ödeme Yöntemi</h2></div>
        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-12 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-bold text-blue-600">VISA</div>
            <div><p className="text-sm font-medium">•••• 4242</p><p className="text-xs text-gray-500">Son kullanma: 12/2027</p></div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border p-6">
        <h2 className="font-semibold text-repliq-navy mb-4">Fatura Geçmişi</h2>
        {[
          { date: "15 May 2026", amount: "$79.00", status: "Ödendi" },
          { date: "15 Nis 2026", amount: "$79.00", status: "Ödendi" },
          { date: "15 Mar 2026", amount: "$79.00", status: "Ödendi" },
        ].map((inv, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b">
            <span className="text-sm text-gray-600">{inv.date}</span>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{inv.amount}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">{inv.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
