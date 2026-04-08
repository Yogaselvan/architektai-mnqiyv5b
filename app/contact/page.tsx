import { Button, Input, Textarea, Card, CardBody, Divider, Chip } from "@heroui/react";
import { Link as NextLink } from "next/link";

export default function Susisiekite() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-6">
              Susisiekite su mumis
            </h1>
            <p className="text-lg text-default-500 leading-relaxed">
              Turite klausimų apie mūsų architektūros paslaugas? Norite aptarti būsimą projektą? 
              Užpildykite formą ir mes susisieksime su jumis artimiausiu metu.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-content2">
              <CardBody className="p-8">
                <h2 className="text-2xl font-serif text-foreground mb-2">
                  Parašykite mums
                </h2>
                <p className="text-default-500 mb-8">
                  Užpildykite žemiau pateiktą formą ir mes atsakysime į jūsų klausimus.
                </p>
                <form className="space-y-6">
                  <Input 
                    type="text"
                    label="Vardas"
                    variant="bordered"
                    className="w-full"
                    placeholder="Įveskite savo vardą"
                  />
                  <Input 
                    type="email"
                    label="El. paštas"
                    variant="bordered"
                    className="w-full"
                    placeholder="jūsų@pastas.lt"
                  />
                  <Input 
                    type="tel"
                    label="Telefonas"
                    variant="bordered"
                    className="w-full"
                    placeholder="+370 6XX XXXXX"
                  />
                  <Textarea 
                    label="Žinutė"
                    variant="bordered"
                    minRows={4}
                    className="w-full"
                    placeholder="Aprašykite savo projektą arba užduokite klausimą..."
                  />
                  <Button color="primary" size="lg" type="submit" className="w-full font-medium">
                    Siųsti
                  </Button>
                </form>
              </CardBody>
            </Card>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-2">
                  Kontaktinė informacija
                </h2>
                <p className="text-default-500 mb-8">
                  Mes visada pasirengę padėti įgyvendinti jūsų architektūros vizijas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">El. paštas</h3>
                      <p className="text-default-500">info@architektai.lt</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Telefonas</h3>
                      <p className="text-default-500">+370 600 00000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-content2 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-foreground font-medium mb-1">Adresas</h3>
                      <p className="text-default-500">Vilnius, Lietuva</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-content2 rounded-2xl">
                <h3 className="text-xl font-serif text-foreground mb-4">
                  Sekite naujienas
                </h3>
                <p className="text-default-500 mb-6">
                  Sužinokite daugiau apie mūsų projektus ir paslaugas socialiniuose tinkluose.
                </p>
                <div className="flex gap-3">
                  <Chip variant="flat" className="bg-content1 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    Instagram
                  </Chip>
                  <Chip variant="flat" className="bg-content1 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    Facebook
                  </Chip>
                  <Chip variant="flat" className="bg-content1 cursor-pointer hover:bg-primary hover:text-white transition-colors">
                    LinkedIn
                  </Chip>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Kodėl rinktis mus?
            </h2>
            <p className="text-default-500">
              Architektai komanda siūlo inovatyvius sprendimus ir profesionalų požiūrį į kiekvieną projektą.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-content2">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Kūrybiški sprendimai
                </h3>
                <p className="text-default-500 text-sm leading-relaxed">
                  Kiekvienas projektas unikalus – mes kuriame sprendimus, kurie atspindi jūsų viziją ir poreikius.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content2">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Kokybės garantija
                </h3>
                <p className="text-default-500 text-sm leading-relaxed">
                  Dirbame su geriausiais medžiagų tiekėjais ir laikomės aukščiausių kokybės standartų.
                </p>
              </CardBody>
            </Card>

            <Card className="bg-content2">
              <CardBody className="p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  Laiku įgyvendinta
                </h3>
                <p className="text-default-500 text-sm leading-relaxed">
                  Gerbiame jūsų laiką – mūsų projektai visada įgyvendinami sutartais terminais.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}