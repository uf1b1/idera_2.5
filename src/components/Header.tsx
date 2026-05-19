import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Building2 } from "lucide-react";

const sections = [
  { id: "about", label: "О нас" },
  { id: "services", label: "Что предоставляем" },
  { id: "advantages", label: "Наши преимущества" },
] as const;

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const onContacts = location.pathname === "/contacts";

  const handleSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onContacts) {
      navigate({ to: "/", hash: id }).then(() => {
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">
            ООО <span className="text-primary">«Идэра»</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={(e) => handleSection(e, s.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <Link
            to="/contacts"
            className={`ml-2 rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              onContacts
                ? "bg-primary text-primary-foreground"
                : "bg-white/10 text-white hover:bg-primary hover:text-primary-foreground"
            }`}
          >
            Контакты
          </Link>
        </nav>
        <div className="md:hidden">
          <Link
            to="/contacts"
            className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
          >
            Контакты
          </Link>
        </div>
      </div>
      {/* mobile nav */}
      <nav className="flex gap-1 overflow-x-auto border-t border-white/10 px-4 py-2 md:hidden">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`/#${s.id}`}
            onClick={(e) => handleSection(e, s.id)}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10"
          >
            {s.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
