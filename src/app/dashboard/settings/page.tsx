import { Settings as SettingsIcon, Palette, Bell, Link as LinkIcon } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-heading font-bold text-repliq-navy">Ayarlar</h1>
        <p className="text-gray-500 mt-1 text-sm">İşletme profilinizi ve tercihlerinizi yönetin</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center gap-3 mb-4"><Palette className="w-5 h-5 text-repliq-green" /><h2 className="font-semibold text-repliq-navy">Yanıt Tonu</h2></div>
          {[
            { label: "Profesyonel", desc: "Resmi, saygılı ve kurumsal", selected: true },
            { label: "Samimi", desc: "Sıcak, dostane ve kişisel", selected: false },
            { label: "Enerjik", desc: "Coşkulu, motive edici", selected: false },
          ].map((option) => (
            <label key={option.label} className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer mt-2 ${option.selected ? "border-repliq-green bg-green-50" : "hover:bg-gray-50"}`}>
              <input type="radio" name="tone" defaultChecked={option.selected} className="w-4 h-4 text-repliq-green" />
              <div><p className="font-medium text-sm">{option.label}</p><p className="text-xs text-gray-500">{option.desc}</p></div>
            </label>
          ))}
          <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-repliq-navy rounded-lg hover:bg-repliq-navy/90">Kaydet</button>
        </div>
        <div className="bg-white rounded-xl border p-6">
          <div className="flex items-center gap-3 mb-4"><LinkIcon className="w-5 h-5 text-repliq-green" /><h2 className="font-semibold text-repliq-navy">Bağlı Hesaplar</h2></div>
          {[
            { name: "Google My Business", status: "Bağlı", icon: "🔵" },
            { name: "Tripadvisor", status: "Bağlanmadı", icon: "🟢" },
            { name: "Yelp", status: "Bağlanmadı", icon: "🔴" },
          ].map((account) => (
            <div key={account.name} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 mt-2">
              <div className="flex items-center gap-3">
                <span>{account.icon}</span>
                <div><p className="text-sm font-medium">{account.name}</p><p className={`text-xs ${account.status === "Bağlı" ? "text-green-600" : "text-gray-400"}`}>{account.status}</p></div>
              </div>
              <button className={`text-sm px-3 py-1.5 rounded-lg font-medium ${account.status === "Bağlı" ? "text-red-500 hover:bg-red-50" : "text-repliq-green hover:bg-green-50"}`}>{account.status === "Bağlı" ? "Bağlantıyı Kes" : "Bağla"}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
