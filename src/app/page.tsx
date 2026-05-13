import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-repliq-navy flex items-center justify-center">
                <span className="text-white font-bold text-sm">R</span>
              </div>
              <span className="font-heading font-bold text-xl text-repliq-navy">RepliQ</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#features" className="text-sm text-gray-600 hover:text-repliq-navy hidden sm:block">Özellikler</Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-repliq-navy hidden sm:block">Fiyatlandırma</Link>
              <Link href="#faq" className="text-sm text-gray-600 hover:text-repliq-navy hidden sm:block">SSS</Link>
             <a href="https://clerk.com" className="px-4 py-2 ...">Giriş Yap</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm">
                <span className="w-2 h-2 rounded-full bg-repliq-green animate-pulse" />
                Yapay Zeka Destekli İtibar Yönetimi
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Her Google Yorumuna <span className="text-repliq-green">60 Saniyede</span> Profesyonel Yanıt
              </h1>
              <p className="text-lg sm:text-xl text-white/70 max-w-lg">
                AI, işletmenizin sesini öğrenip müşterilerinize sizin adınıza yanıt yazıyor. Sentiment analizi ile ne dediklerini anlıyor, haftalık raporla performansınızı ölçüyorsunuz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="px-8 py-4 text-lg font-semibold text-white bg-repliq-green rounded-xl hover:bg-green-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      14 Gün Ücretsiz Dene
                    </button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Link href="/dashboard" className="px-8 py-4 text-lg font-semibold text-white bg-repliq-green rounded-xl hover:bg-green-700 transition-all text-center">
                    Dashboard'a Git
                  </Link>
                </SignedIn>
              </div>
              <div className="flex items-center gap-6 text-white/60 text-sm">
                <span>✓ Kart gerekmez</span>
                <span>✓ 5 dk kurulum</span>
                <span>✓ Anında iptal</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "%97", label: "müşteri yorum okur" },
              { value: "%63", label: "işletme yanıt vermez" },
              { value: "%35", label: "daha fazla müşteri" },
              { value: "5sn", label: "AI yanıt süresi" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-bold text-repliq-navy">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-repliq-navy">Kötü bir yorum gördüğünde ne hissediyorsun?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "😰", title: "Ne yazacağını bilememek", desc: "Yanlış bir şey yazarsan durumu daha da kötüleştirmekten korkarsın." },
              { icon: "⏰", title: "Zaman yetmemesi", desc: "Haftada 4 saatini yorum yanıtlamaya harcıyorsun." },
              { icon: "📉", title: "Müşteri kaybı", desc: "Yanıtlanmamış her kötü yorum, bir müşterinin rakibine gitmesi demek." },
            ].map((problem, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 card-hover border">
                <span className="text-4xl">{problem.icon}</span>
                <h3 className="text-xl font-semibold text-repliq-navy mt-4">{problem.title}</h3>
                <p className="text-gray-500 mt-2">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white" id="demo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-repliq-navy">RepliQ 3 Adımda Nasıl Çalışır?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Google Hesabını Bağla", desc: "1 tıkla Google işletme profiline bağlan." },
              { step: "02", title: "AI Sesini Öğrensin", desc: "3 soruyla AI işletmenin tonunu öğrenir." },
              { step: "03", title: "Onayla ve Yayınla", desc: "Her yorum için AI yanıt hazır. 1 tıkla onayla." },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="w-12 h-12 rounded-xl bg-repliq-navy text-white flex items-center justify-center font-bold text-lg">{step.step}</div>
                <h3 className="text-xl font-semibold text-repliq-navy mt-4">{step.title}</h3>
                <p className="text-gray-500 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-repliq-navy">Sadece Yanıt Değil, İçgörü de Satıyoruz</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🤖", title: "AI Yanıt Oluşturma", desc: "Her yoruma markanızın sesinde yanıtlar." },
              { icon: "📊", title: "Sentiment Analizi", desc: "Müşterileriniz ne hissediyor? Görün." },
              { icon: "📋", title: "Haftalık Rapor", desc: "Email'inize özet rapor. Trendler, öneriler." },
              { icon: "🏷️", title: "Konu Etiketleme", desc: "AI otomatik konu etiketlemesi." },
              { icon: "👁️", title: "Rakip İzleme", desc: "Rakiplerinizin yorumlarını takip edin." },
              { icon: "🔔", title: "Anında Bildirim", desc: "Yeni yorum geldiğinde anında haberdar olun." },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 card-hover border">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="font-semibold text-repliq-navy mt-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-repliq-navy">Her İşletmeye Uygun Plan</h2>
            <p className="mt-4 text-gray-600">14 gün ücretsiz deneyin. Kart gerekmez.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$29", items: ["1 lokasyon", "100 AI yanıt/ay", "Yarı otomatik", "Temel sentiment", "Email bildirim"], popular: false },
              { name: "Pro", price: "$79", items: ["3 lokasyon", "Sınırsız AI yanıt", "Tam otomasyon", "Detaylı sentiment", "Rakip izleme", "Tripadvisor+Yelp"], popular: true },
              { name: "Agency", price: "$199", items: ["Sınırsız lokasyon", "White-label panel", "API erişimi", "Özel destek", "Tüm platformlar"], popular: false },
            ].map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-8 border ${plan.popular ? "border-2 border-repliq-green shadow-xl" : "card-hover"}`}>
                {plan.popular && <div className="text-center -mt-10 mb-4"><span className="bg-repliq-green text-white text-xs font-semibold px-4 py-1 rounded-full">En Popüler</span></div>}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="text-4xl font-bold text-repliq-navy mt-4">{plan.price}<span className="text-lg font-normal text-gray-500">/ay</span></p>
                <ul className="mt-6 space-y-3">
                  {plan.items.map((f, j) => <li key={j} className="flex items-center gap-2 text-sm"><span className="text-repliq-green">✓</span>{f}</li>)}
                </ul>
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className={`w-full mt-8 px-6 py-3 text-sm font-medium rounded-xl transition-all ${plan.popular ? "text-white bg-repliq-green hover:bg-green-700" : "text-repliq-navy border-2 border-repliq-navy hover:bg-repliq-navy hover:text-white"}`}>
                      Ücretsiz Dene
                    </button>
                  </SignInButton>
                </SignedOut>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-repliq-navy">Sık Sorulan Sorular</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Google hesabım güvende mi?", a: "Evet. OAuth 2.0 ile bağlanıyoruz, şifrenizi hiçbir zaman görmüyoruz." },
              { q: "AI yanıtlar gerçekten benim sesimde mi?", a: "Evet. Kurulumda 3-5 soru sorarak işletmenizin tonunu öğreniyor." },
              { q: "Deneme bittikten sonra kart bilgisi girmek zorunda mıyım?", a: "14 gün boyunca hiçbir kart bilgisi istemiyoruz." },
              { q: "Mevcut yorumlara da yanıt verebilir miyim?", a: "Evet. Kaydolduğunuzda geçmiş yanıtsız yorumlarınıza da AI ile yanıt verebiliyorsunuz." },
              { q: "İptal etmek zor mu?", a: "Hayır. Ayarlardan 1 tıkla, ceza yok." },
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-xl p-4 cursor-pointer">
                <summary className="font-medium text-repliq-navy">{faq.q} <span className="float-right text-gray-400">▼</span></summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="benefit-gradient py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">Haftada 5 Saatini Geri Kazanmaya Hazır mısın?</h2>
          <p className="mt-4 text-white/80">14 gün ücretsiz. Kart gerekmez.</p>
          <div className="mt-8">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-10 py-4 text-lg font-semibold text-repliq-navy bg-white rounded-xl hover:bg-gray-100 transition-all shadow-xl">14 Gün Ücretsiz Başlat</button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard" className="inline-block px-10 py-4 text-lg font-semibold text-repliq-navy bg-white rounded-xl hover:bg-gray-100 transition-all shadow-xl">Dashboard'a Git</Link>
            </SignedIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-repliq-green flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-heading font-bold text-lg">RepliQ</span>
          </div>
          <p className="text-gray-400 text-sm">© 2026 RepliQ. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
