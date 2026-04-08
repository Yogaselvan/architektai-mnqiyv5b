import { Button, Card, CardBody, CardHeader, Input, Textarea, Divider, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function Konsultacijos() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-content1 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip className="mb-4 bg-content2 text-primary" variant="flat" size="sm">
                Architektų konsultacijos
              </Chip>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Profesionalios architektūros konsultacijos
              </h1>
              <p className="text-lg text-default-500 mb-8 leading-relaxed">
                Teikiame architektūrines konsultacijas Kaune bei visoje Lietuvoje. Mūsų patyrę architektai padės realizuoti jūsų vizijas ir priims geriausius sprendimus jūsų būsto ar projekto klausimais.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as={Link} href="#kontaktai" color="primary" variant="shadow" size="lg">
                  Užsakyti konsultaciją
                </Button>
                <Button as={Link} href="#kainos" variant="bordered" color="primary" size="lg">
                  Peržiūrėti kainas
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-cx1ahxe3lncldqf13wbsl-YKbN7wElv1h9Xgbj.png"
                alt="Architektūros konsultacija"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-content2 p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold text-primary mb-1">15+</p>
                <p className="text-default-500 text-sm">Metų patirtis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Konsultacijų paslaugos
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Siūlome įvairaus tipo architektūrines konsultacijas, pritaikytas jūsų individualiems poreikiams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-content1 hover:bg-content2 transition-colors duration-300">
              <CardHeader className="pb-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Buhalterinės konsultacijos</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-500 mb-4">
                  Konsultuojame statybų, projektavimo ir kitais su architektūra susijusiais buhalterinės apskaitos klausimais. Padėsime tvarkyti dokumentaciją.
                </p>
                <ul className="space-y-2 text-default-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    PVM apskaita
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Sąnaudų analizė
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Finansinės ataskaitos
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-content1 hover:bg-content2 transition-colors duration-300">
              <CardHeader className="pb-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Statybos konsultacijos</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-500 mb-4">
                  Teikiame išsamias konsultacijas statybų proceso metu. Patarsime dėl medžiagų pasirinkimo, statybos eigų ir kokybės kontrolės.
                </p>
                <ul className="space-y-2 text-default-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Medžiagų parinkimas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Techninė priežiūra
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Kokybės vertinimas
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-content1 hover:bg-content2 transition-colors duration-300">
              <CardHeader className="pb-0">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">Projektavimo konsultacijos</h3>
              </CardHeader>
              <CardBody>
                <p className="text-default-500 mb-4">
                  Konsultuojame architektūros ir projektavimo klausimais. Padėsime parengti projektinius sprendinius ir derinti dokumentaciją.
                </p>
                <ul className="space-y-2 text-default-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Brėžinių peržiūra
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Sprendinių derinimas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Normų aiškinimas
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section id="kainos" className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Konsultacijų kainos
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto">
              Pasirinkite jums tinkamiausią konsultacijos tipą ir planą
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="bg-background">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Viena konsultacija</h3>
                    <p className="text-default-500">Trukmė iki 2 valandų</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">150 €</span>
                  <span className="text-default-500 ml-2">/ vienas susitikimas</span>
                </div>
                <Divider className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Asmeninė architekto konsultacija
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Namedimas vietoje arba nuotoliniu būdu
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Raštiška išvada su rekomendacijomis
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Konsultacijos įrašas
                  </li>
                </ul>
                <Button as={Link} href="#kontaktai" color="primary" variant="shadow" size="lg" className="w-full mt-6">
                  Užsakyti
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-background">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-4 w-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">Projekto priežiūra</h3>
                    <p className="text-default-500">Ilgalaikis bendradarbiavimas</p>
                  </div>
                </div>
              </CardHeader>
              <CardBody>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">Pagal susitarimą</span>
                </div>
                <Divider className="my-4" />
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Nuolatinė architekto priežiūra
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Projekto dokumentacijos peržiūra
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Statybų eigos kontrolė
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Operatyvios konsultacijos telefonu
                  </li>
                </ul>
                <Button as={Link} href="#kontaktai" variant="bordered" color="primary" size="lg" className="w-full mt-6">
                  Susisiekti dėl kainos
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png"
                alt="Architekto darbas"
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Kodėl rinktis Architektai?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Gilios žinios</h4>
                    <p className="text-default-500">Mūsų architektai turi daugiau nei 15 metų patirtį architektūros ir statybų srityse.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Lankstumas</h4>
                    <p className="text-default-500">Teikiame konsultacijas Kaune ir visoje Lietuvoje – tiek vietoje, tiek nuotoliniu būdu.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1"> Kokybės garantija</h4>
                    <p className="text-default-500">Teikiame kokybiškas paslaugas ir užtikriname geriausius sprendimus kiekvienam klientui.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kontaktai" className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Užsakyti konsultaciją
              </h2>
              <p className="text-default-500 text-lg mb-8">
                Užpildykite formą ir mes susisieksime su jumis artimiausiu metu aptarti jūsų poreikių ir suderinti konsultacijos laiką.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Darbo laikas</p>
                    <p className="text-default-500">I-V: 8:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Veiklos teritorija</p>
                    <p className="text-default-500">Kaunas ir visa Lietuva</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-background">
              <CardBody className="p-8">
                <form className="space-y-6">
                  <Input
                    label="Vardas ir pavardė"
                    type="text"
                    variant="bordered"
                    className="w-full"
                    placeholder="Įveskite savo vardą"
                  />
                  <Input
                    label="El. paštas"
                    type="email"
                    variant="bordered"
                    className="w-full"
                    placeholder="jums@pastas.lt"
                  />
                  <Input
                    label="Telefono numeris"
                    type="tel"
                    variant="bordered"
                    className="w-full"
                    placeholder="+370 6XX XXX XX"
                  />
                  <Textarea
                    label="Konsultacijos tema"
                    variant="bordered"
                    minRows={4}
                    className="w-full"
                    placeholder="Aprašykite, kuo galime jums padėti..."
                  />
                  <Button type="submit" color="primary" variant="shadow" size="lg" className="w-full">
                    Siųsti užklausą
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-content1 rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Paruošti pradėti projektą?
              </h2>
              <p className="text-default-500 text-lg mb-8">
                Susisiekite su mumis jau šiandien ir pradėkite kelionę link svajonių erdvės sukūrimo kartu su Architektai komanda.
              </p>
              <Button as={Link} href="#kontaktai" color="primary" variant="shadow" size="lg">
                Susisiekti dabar
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}