import { Divider, Link } from "@heroui/react";

export function SiteFooter() {
  return (
    <footer className="bg-content1 border-t border-divider mt-0">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=226,fit=crop,q=95/YZ9Wyx0bjvt63wZg/364196773_854821369552145_8061232822857158430_n-removebg-preview-mjEPOV09ryS2k7r4.png" alt="Architektai" className="h-10 w-auto mb-4 object-contain" onError={(e: any) => { e.target.style.display = 'none'; }} />
            <h3 className="text-lg font-bold text-foreground mb-3">Architektai</h3>
            
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">Navigacija</h4>
            <Link href="/" className="text-default-500 hover:text-foreground text-sm block mb-2">Pradžia</Link>
            <Link href="/konsultacijos" className="text-default-500 hover:text-foreground text-sm block mb-2">Architekto konsultacijos</Link>
            <Link href="/teritoriju-planavimas" className="text-default-500 hover:text-foreground text-sm block mb-2">Teritorijų planavimas</Link>
            <Link href="/statiniu-projektavimas" className="text-default-500 hover:text-foreground text-sm block mb-2">Statinių projektavimas</Link>
            <Link href="/namo-pridavimas" className="text-default-500 hover:text-foreground text-sm block mb-2">Namo pridavimas</Link>
            <Link href="/contact" className="text-default-500 hover:text-foreground text-sm block mb-2">Kontaktai</Link>
          </div>
          <div />
        </div>
        <Divider className="my-8" />
        <p className="text-center text-xs text-default-400">&copy; 2026 Architektai. All rights reserved.</p>
      </div>
    </footer>
  );
}
