import { Card, CardBody, Button, Chip, Divider } from "@heroui/react";
import Link from "next/link";

export default function Statiniuprojektavimas() {
  return (
    <main className="bg-background min-h-screen">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <Chip color="primary" variant="flat" size="sm" className="mb-4">
              Paslaugos
            </Chip>
            <h1 className="font-cormorant text-5xl md:text-6xl font-bold text-foreground mb-6">
              Statinių projektavimas
            </h1>
            <p className="text-default-500 text-lg max-w-2xl mb-8">
              Kokybiškas statinių projektavimas visoje Lietuvoje. Kiekvienas projektas - tai derinys 
              estetikos, funkcionalumo ir techninių sprendimų, užtikrinančių statinio ilgaamžiškumą 
              ir saugą.
            </p>
            <Button
              as={Link}
              href="/kontaktai"
              color="primary"
              variant="shadow"
              size="lg"
            >
              Gauti konsultaciją
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-wh7nnsjdrs4yjtuurq70d-mP4NGv2xR0cDbV7e.png"
              alt="Statinių projektavimo pavyzdys"
              className="w-full h-72 object-cover rounded-2xl"
              loading="lazy"
            />
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-567jjnpd2htgmeyemikxf-YBgyJ5ZQ8zTNxjRo.png"
              alt="Architektūros sprendimai"
              className="w-full h-72 object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-content2">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-cormorant text-4xl font-bold text-foreground mb-12 text-center">
            Projektavimo paslaugos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gyvenamųjų namų projektavimas
                </h3>
                <p className="text-default-500">
                  Individualių gyvenamųjų namų nuo koncepcijos iki visiškai paruoštų 
                  dokumentų statybai. Atsižvelgiame į jūsų poreikius ir norus.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Komercinių objektų projektavimas
                </h3>
                <p className="text-default-500">
                  Prekybos centrai, biurai, restoranai ir kiti komerciniai statiniai 
                  su optimaliais erdvės sprendimais ir statybos ekonomija.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Techninių projektų rengimas
                </h3>
                <p className="text-default-500">
                  Visi reikalingi techniniai dokumentai, brėžiniai ir specifikacijos 
                  statybos leidimams gauti ir statybos procesui vykdyti.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Interjero projektavimas
                </h3>
                <p className="text-default-500">
                  Funkcionalūs ir estetiški interjero sprendimai, derinant 
                  statinio architektūrą su vidaus erdvių dizainu.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Teritorijų planavimas
                </h3>
                <p className="text-default-500">
                  Detalieji planai, urbanistiniai sprendimai ir aplinkos 
                  sutvarkymo projektai su darnaus vystymosi principais.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content1">
              <CardBody className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Statinio ekspertizė
                </h3>
                <p className="text-default-500">
                  Esamų statinių būklės vertinimas, defektų nustatymas 
                  ir rekomendacijos dėl būtinų remonto ar stiprinimo darbų.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant text-4xl font-bold text-foreground mb-6">
                Kodėl rinktis mus?
              </h2>
              <p className="text-default-500 text-lg mb-8">
                Architektai komanda sukaupė dešimtmečio patirtį statinių projektavimo srityje. 
                Kiekvienas mūsų projektas - tai unikalus sprendimas, derinantis kliento 
                vizijas su techninėmis galimybėmis ir teisės aktų reikalavimais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Patirtis ir profesionalumas</h4>
                    <p className="text-default-500 text-sm">Mūsų komandą sudaro sertifikuoti architektai ir inžinieriai su ilgamete praktika.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Individualus požiūris</h4>
                    <p className="text-default-500 text-sm">Kiekvienas projektas kuriamas atsižvelgiant į kliento poreikius ir norus.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Laiku įgyvendinti projektai</h4>
                    <p className="text-default-500 text-sm">Laikomės susitarimo terminų ir nuolat bendraujame su užsakovu.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Šiuolaikiški sprendimai</h4>
                    <p className="text-default-500 text-sm">Naudojame pažangias projektavimo programas ir BIM technologijas.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-content2 rounded-3xl p-8 lg:p-12">
              <h3 className="font-cormorant text-3xl font-bold text-foreground mb-6">
                Statinių projektavimo procesas
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-foreground font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Konsultacija</h4>
                    <p className="text-default-500 text-sm">Susipažįstame su jūsų poreikiais ir pageidavimais.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-foreground font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Idėjos parengimas</h4>
                    <p className="text-default-500 text-sm">Rengiame pirminius eskizus ir variantus.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-foreground font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Projektavimas</h4>
                    <p className="text-default-500 text-sm">Rengiame techninę dokumentaciją ir brėžinius.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-foreground font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Derinimas</h4>
                    <p className="text-default-500 text-sm">Projektą suderiname su visomis instancijomis.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-foreground font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="text-foreground font-semibold mb-1">Pridavimas</h4>
                    <p className="text-default-500 text-sm">Paruošiame dokumentus statybos leidimui gauti.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-content2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-cormorant text-4xl font-bold text-foreground mb-4">
              Dažniausiai užduodami klausimai
            </h2>
            <p className="text-default-500 max-w-2xl mx-auto">
              Atsakymai į svarbiausius klausimus apie statinių projektavimo paslaugas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="bg-content1">
              <CardBody className="p-6">
                <h4 className="text-foreground font-semibold mb-2">
                  Kiek laiko užtrunka statinio projektavimas?
                </h4>
                <p className="text-default-500 text-sm">
                  Projektavimo terminai priklauso nuo statinio sudėtingumo ir dydžio. 
                  Paprastas gyvenamasis namas - 2-4 mėnesiai, sudėtingesni objektai - 
                  iki 6-12 mėnesių.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content1">
              <CardBody className="p-6">
                <h4 className="text-foreground font-semibold mb-2">
                  Kokius dokumentus reikia pradėjus projektavimą?
                </h4>
                <p className="text-default-500 text-sm">
                  Reikalingas žemės sklypo planas, kadastriniai matavimai, 
                  topografinė nuotrauka ir pradinės sąlygos. Mes padėsime surinkti 
                  visus reikalingus dokumentus.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content1">
              <CardBody className="p-6">
                <h4 className="text-foreground font-semibold mb-2">
                  Ar teikiate paslaugas už Lietuvos ribų?
                </h4>
                <p className="text-default-500 text-sm">
                  Taip, teikiame statinių projektavimo paslaugas visoje Lietuvoje. 
                  Esame įgyvendinę projektus įvairiuose šalies regionuose.
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content1">
              <CardBody className="p-6">
                <h4 className="text-foreground font-semibold mb-2">
                  Kokios statinio projektavimo kainos?
                </h4>
                <p className="text-default-500 text-sm">
                  Kaina priklauso nuo statinio tipo, ploto ir sudėtingumo. 
                  Siūlome nemokamą konsultaciją, kurios metu įvertinsime jūsų 
                  poreikius ir pateiksime preliminarų biudžetą.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 lg:p-16 text-center">
            <h2 className="font-cormorant text-4xl md:text-5xl font-bold text-foreground mb-6">
              Turite klausimų?
            </h2>
            <p className="text-default-500 text-lg max-w-2xl mx-auto mb-8">
              Susisiekite su mumis dėl nemokamos konsultacijos. Mūsų specialistai 
              padės jums įgyvendinti jūsų viziją.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="/kontaktai"
                color="primary"
                variant="shadow"
                size="lg"
              >
                Susisiekti dabar
              </Button>
              <Button
                as={Link}
                href="/paslaugos"
                color="default"
                variant="bordered"
                size="lg"
              >
                Visos paslaugos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}