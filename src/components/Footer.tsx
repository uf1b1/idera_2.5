import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold">
              ООО <span className="text-primary">«Идэра»</span>
            </p>
            <p className="mt-1 text-sm text-white/60">
              Строительство и проектирование
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm text-white/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>
              Адрес: 450092, Республика Башкортостан, город Уфа, ул. Авроры,
              д. 7 к. 1а, кв. 63
            </span>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} ООО «Идэра». Все права защищены.
        </div>
      </div>
    </footer>
  );
}
