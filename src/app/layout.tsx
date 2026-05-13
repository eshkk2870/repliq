import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { LayoutDashboard, MessageSquare, BarChart3, Settings, CreditCard } from "lucide-react";
import { auth } from "@clerk/nextjs";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/reviews", label: "Yorumlar", icon: MessageSquare },
  { href: "/dashboard/analytics", label: "Analitik", icon: BarChart3 },
  { href: "/dashboard/billing", label: "Fatura", icon: CreditCard },
  { href: "/dashboard/settings", label: "Ayarlar", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { userId } = auth();
  if (!userId) redirect("/");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r hidden lg:flex flex-col">
        <div className="p-6 border-b">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-repliq-navy flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="font-heading font-bold text-xl text-repliq-navy">RepliQ</span>
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-repliq-navy transition-all">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <UserButton afterSignOutUrl="/" />
            <p className="text-sm font-medium">Hesabım</p>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-repliq-navy flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="font-heading font-bold text-repliq-navy">RepliQ</span>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
