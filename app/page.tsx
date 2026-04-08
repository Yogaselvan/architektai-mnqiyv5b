import { Button, Card, CardBody, Chip, Divider } from "@heroui/react";
import { ChevronRight } from "lucide-react";

export default function ModerniArchitekturaPradzia() {
  return (
    <div className="bg-background min-h-screen">
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0" 
          style={{backgroundImage: "url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/YZ9Wyx0bjvt63wZg/dizainas-be-pavadinimo-42-Yyv2eW77k0uw110b.png')", backgroundSize: 'cover', backgroundPosition: 'center'}}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <Chip className="bg-primary/20 text-primary mb-6" variant="flat">
              Moderni architektūra nuo 2010 metų
            </Chip>
            <h1 className="font-cormorant-garamond text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              Kurkime ateities<br />
              <span className="text-primary">erdves</span>
            </h1>
            <p className="font-dm-sans text-xl md:text-2xl text-default-500 mb-10 max-w-xl">
              Profesionalūs architektūros sprendimai gyvenamiesiems ir komerciniams projektams
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                color="primary" 
                size="lg" 
                radius="full"
                endContent={<ChevronRight className="w-5 h-5" />}
              >
                Pradėti projektą
              </Button>
              <Button 
                variant="bordered" 
                size="lg" 
                radius="full"
                className="text-foreground border-default-500"
              >
                Peržiūrėti darbus
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant-garamond text-4xl md:text-5xl font-bold text-foreground mb-6">
                Apie <span className="text-primary">Architektai</span>
              </h2>
              <p className="font-dm-sans text-lg text-default-500 mb-6 leading-relaxed">
                MB Moderni architektūra – tai profesionali architektų komanda, teikianti pilną architektūros paslaugų spektrą. Nuo pradinės idėjos iki projekto įgyvendinimo kiekviename etape užtikriname aukščiausią kokybę ir dėmesį detaliųms.
              </p>
              <p className="font-dm-sans text-lg text-default-500 mb-8 leading-relaxed">
                Mūsų tikslas – kurti funkcionalius, estetiškus ir tvariai orientuotus statinius, kurie džiugina klientus ir papildo aplinką.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="font-cormorant-garamond text-4xl font-bold text-primary">150+</p>
                  <p className="font-dm-sans text-sm text-default-500">Įgyvendintų projektų</p>
                </div>
                <div className="text-center">
                  <p className="font-cormorant-garamond text-4xl font-bold text-primary">14</p>
                  <p className="font-dm-sans text-sm text-default-500">Metų patirtis</p>
                </div>
                <div className="text-center">
                  <p className="font-cormorant-garamond text-4xl font-bold text-primary">98%</p>
                  <p className="font-dm-sans text-sm text-default-500">Patenkintų klientų</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-vksycsyf04gplwilb4dp7-m6LrzxJp5Lt10O17.png" 
                alt="Architektūros projektas" 
                className="w-full h-64 object-cover rounded-xl"
                loading="lazy"
              />
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-bj10d5297sgvhgrytbtcq-mnl50yvwpGF4xk5y.png" 
                alt="Modernus interjeras" 
                className="w-full h-64 object-cover rounded-xl mt-8"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant-garamond text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mūsų paslaugos
            </h2>
            <p className="font-dm-sans text-lg text-default-500 max-w-2xl mx-auto">
              Teikiame platų architektūros paslaugų spektrą – nuo koncepcinio projektavimo iki statybos priežiūros
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Gyvenamųjų namų projektavimas
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Kurkime svajonių namus kartu – nuo individualių projektų iki vientisos statybos priežiūros
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Komercinė architektūra
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Biurai, prekybos centrai ir kiti komerciniai statiniai – efektyvūs ir estetiški sprendimai verslui
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Interjero projektavimas
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Funkcionalūs ir stilingi interjero sprendimai, atitinkantys kliento poreikius ir gyvenimo būdą
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Statybos techninė priežiūra
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Užtikriname, kad statybos procesas vyktų pagal projektą ir atitiktų aukščiausius kokybės standartus
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Teritorijų planavimas
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Urbanistiniai sprendimai ir aplinkos projektavimas darniai įsiliejantys į esamą kraštovaizdį
                </p>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-cormorant-garamond text-2xl font-bold text-foreground mb-3">
                  Koncepcinis projektavimas
                </h3>
                <p className="font-dm-sans text-default-500 leading-relaxed">
                  Idėjų vizualizavimas ir preliminarūs sprendimai prieš pradedant detalias projektavimo fazes
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant-garamond text-4xl md:text-5xl font-bold text-foreground mb-4">
              Įgyvendinti projektai
            </h2>
            <p className="font-dm-sans text-lg text-default-500 max-w-2xl mx-auto">
              Kiekvienas mūsų projektas – tai unikalus iššūkis, kurį sprendžiame kūrybiškai ir atsakingai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-cx1ahxe3lncldqf13wbsl-YKbN7wElv1h9Xgbj.png" 
              alt="Projektas 1" 
              className="w-full h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-dlyv8uafat7se6cx1ezb7-dWx0qaBDEQhz7Dej.png" 
              alt="Projektas 2" 
              className="w-full h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-gry3fk0nfivgry9lqk4fi-Yyv2aQZL3rUa6ZJg.png" 
              alt="Projektas 3" 
              className="w-full h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-thz83zqpkjpyr9uxyslf0-dWx0qaygrWC8JWaV.png" 
              alt="Projektas 4" 
              className="w-full h-72 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-wh7nnsjdrs4yjtuurq70d-mP4NGv2xR0cDbV7e.png" 
              alt="Projektas 5" 
              className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <img 
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-567jjnpd2htgmeyemikxf-YBgyJ5ZQ8zTNxjRo.png" 
              alt="Projektas 6" 
              className="w-full h-64 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
          <div className="text-center mt-12">
            <Button 
              variant="bordered" 
              size="lg" 
              radius="full"
              className="text-foreground border-default-500"
              endContent={<ChevronRight className="w-5 h-5" />}
            >
              Visi projektai
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cormorant-garamond text-4xl md:text-5xl font-bold text-foreground mb-4">
              Klientų atsiliepimai
            </h2>
            <p className="font-dm-sans text-lg text-default-500 max-w-2xl mx-auto">
              Ką apie mus sako mūsų klientai
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-dm-sans text-default-500 mb-6 leading-relaxed italic">
                  "Nuostabi patirtis dirbant su Architektai komanda. Mūsų namai virto svajone – kiekviena detalė apgalvota ir kokybiškai įgyvendinta."
                </p>
                <Divider className="my-4 bg-default-200" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-cormorant-garamond text-xl font-bold text-primary">AM</span>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-foreground">Ana Marija</p>
                    <p className="font-dm-sans text-sm text-default-500">Gyvenamasis namas, Vilnius</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-dm-sans text-default-500 mb-6 leading-relaxed italic">
                  "Profesionalus požiūris ir dėmesys detalėms. Mūsų biuras tapo vieta, kurioje norisi dirbti. Rekomenduoju!"
                </p>
                <Divider className="my-4 bg-default-200" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-cormorant-garamond text-xl font-bold text-primary">JK</span>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-foreground">Julius Kazlauskas</p>
                    <p className="font-dm-sans text-sm text-default-500">Įmonės biuras, Kaunas</p>
                  </div>
                </div>
              </CardBody>
            </Card>
            <Card className="bg-content2 border border-default-200">
              <CardBody className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-primary" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-dm-sans text-default-500 mb-6 leading-relaxed italic">
                  "Įmonės restorano interjeras viršijo mūsų lūkesčius. Unikalus dizainas ir puiki kokybė. Ačiū komandai!"
                </p>
                <Divider className="my-4 bg-default-200" />
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-cormorant-garamond text-xl font-bold text-primary">EP</span>
                  </div>
                  <div>
                    <p className="font-dm-sans font-semibold text-foreground">Eglė Petraitė</p>
                    <p className="font-dm-sans text-sm text-default-500">Restoranas, Klaipėda</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-primary/20 via-content2 to-primary/20 rounded-3xl p-12 md:p-16 border border-default-200">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-cormorant-garamond text-4xl md:text-5xl font-bold text-foreground mb-6">
                Turite projektą?<br />Pradėkime pokalbį
              </h2>
              <p className="font-dm-sans text-lg text-default-500 mb-10 max-w-xl mx-auto">
                Susisiekite su mumis nemokamai konsultacijai. Aptarsime jūsų idėjas ir ieškosime geriausio sprendimo jūsų būsimam projektui.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  color="primary" 
                  size="lg" 
                  radius="full"
                  endContent={<ChevronRight className="w-5 h-5" />}
                >
                  Užsakyti konsultaciją
                </Button>
                <Button 
                  variant="bordered" 
                  size="lg" 
                  radius="full"
                  className="text-foreground border-foreground"
                >
                  Sužinoti daugiau
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-default-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-cormorant-garamond text-3xl font-bold text-foreground mb-2">150+</p>
              <p className="font-dm-sans text-sm text-default-500">Projektų</p>
            </div>
            <div>
              <p className="font-cormorant-garamond text-3xl font-bold text-foreground mb-2">14</p>
              <p className="font-dm-sans text-sm text-default-500">Metų patirtis</p>
            </div>
            <div>
              <p className="font-cormorant-garamond text-3xl font-bold text-foreground mb-2">25</p>
              <p className="font-dm-sans text-sm text-default-500">Darbuotojų</p>
            </div>
            <div>
              <p className="font-cormorant-garamond text-3xl font-bold text-foreground mb-2">10</p>
              <p className="font-dm-sans text-sm text-default-500">Apdovanojimų</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}