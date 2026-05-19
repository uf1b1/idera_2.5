import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, FileText, Hash } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты — ООО «Идэра»" },
      {
        name: "description",
        content:
          "Контактная информация ООО «Идэра»: телефон, email, ИНН, ОГРН, адрес в Уфе.",
      },
    ],
  }),
  component: ContactsPage,
});

const items = [
  {
    icon: Phone,
    label: "Телефон",
    value: "8 987 144 77 68",
    href: "tel:89871447768",
  },
  {
    icon: Mail,
    label: "Email",
    value: "9871447768@mail.ru",
    href: "mailto:9871447768@mail.ru",
  },
  { icon: FileText, label: "ИНН", value: "0274134687" },
  { icon: Hash, label: "ОГРН", value: "1080274009881" },
];

function ContactsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-charcoal py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Свяжитесь с нами
            </p>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">
              Контакты
            </h1>
            <p className="mt-4 max-w-2xl text-white/75">
              Мы открыты для сотрудничества. Свяжитесь с нами удобным способом —
              ответим на все ваши вопросы.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {items.map((it) => (
                <div
                  key={it.label}
                  className="flex items-start gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-primary hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {it.label}
                    </p>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="mt-1 block text-xl font-bold text-charcoal hover:text-primary"
                      >
                        {it.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-xl font-bold text-charcoal">
                        {it.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-5 rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Адрес
                  </p>
                  <p className="mt-1 text-xl font-bold text-charcoal">
                    450092, Республика Башкортостан, город Уфа, ул. Авроры,
                    д. 7 к. 1а, кв. 63
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
