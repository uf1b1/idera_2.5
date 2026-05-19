import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  HardHat,
  Hammer,
  Wrench,
  Building,
  Users,
  ShieldCheck,
  BadgeDollarSign,
  CalendarCheck,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ООО «Идэра» — Строительство и проектирование в Уфе" },
      {
        name: "description",
        content:
          "ООО «Идэра» — генеральный подряд, строительно-монтажные работы, инженерные системы, реконструкция и ремонт зданий.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Building,
    title: "Генеральный подряд",
    text: "Полный цикл управления строительством от котлована до сдачи в эксплуатацию.",
  },
  {
    icon: Hammer,
    title: "Строительно-монтажные работы",
    text: "Возведение монолитных и кирпичных конструкций, монтаж кровли и фасадов.",
  },
  {
    icon: Wrench,
    title: "Инженерные системы",
    text: "Проектирование и прокладка внутренних и наружных коммуникаций.",
  },
  {
    icon: HardHat,
    title: "Реконструкция и ремонт",
    text: "Обновление, усиление и модернизация существующих зданий и сооружений.",
  },
];

const advantages = [
  {
    icon: Users,
    title: "Квалифицированные кадры",
    text: "Опыт инженеров и строителей нашей команды составляет более 10 лет.",
  },
  {
    icon: ShieldCheck,
    title: "Строгий контроль качества",
    text: "Собственный технадзор на каждом этапе выполнения работ.",
  },
  {
    icon: BadgeDollarSign,
    title: "Прозрачное ценообразование",
    text: "Фиксированная смета и полное отсутствие скрытых расходов.",
  },
  {
    icon: CalendarCheck,
    title: "Соблюдение сроков",
    text: "Четкий календарный план и сдача всех объектов строго вовремя.",
  },
];

function HomePage() {
  // Handle hash scroll after navigation
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/40" />
        <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-36 lg:px-8 lg:py-44">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Строительная компания
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Высококачественное строительство{" "}
              <span className="text-primary">для вашего будущего</span>
            </h1>
            <p className="mt-6 text-lg text-white/85">
              Возводим современные жилые комплексы и коммерческие объекты
              с гарантией качества, надёжности и точным соблюдением сроков.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:brightness-95"
              >
                Наши услуги
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                О компании
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                О нас
              </p>
              <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
                Команда профессионалов в сфере строительства
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                ООО «Идэра» — это команда профессионалов в сфере строительства
                и проектирования. Мы реализуем проекты любой сложности,
                от возведения современных жилых комплексов до коммерческих
                объектов. Наша цель — создавать долговечные, безопасные
                и эстетичные здания, строго соблюдая технологии и графики работ.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-xl bg-primary/30 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                alt="Строительный процесс"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24 bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Что предоставляем
            </p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
              Полный спектр строительных услуг
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary hover:shadow-xl"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground transition group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Наши преимущества
            </p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">
              Почему клиенты выбирают нас
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                  <a.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{a.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {a.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
