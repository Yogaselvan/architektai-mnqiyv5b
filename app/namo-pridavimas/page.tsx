import { Button, Card, CardBody, Input, Textarea, Divider, Chip } from "@heroui/react";
import { useState } from "react";

export default function NamoPridavimas() {
  const [formData, setFormData] = useState({
    vardas: "",
    elpastas: "",
    telefonas: "",
    zinute: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Chip color="primary" variant="flat" className="mb-4">
                Populiariausia paslauga
              </Chip>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Namo pridavimo paslaugos
              </h1>
              <p className="text-xl text-default-500 leading-relaxed mb-8">
                Profesionaliai parengiame namo pridavimo projektus ir deriname juos su esama statinio architektūra. Mūsų patirtis užtikrina sklandų procesą nuo pradinių eskizų iki galutinio projekto įgyvendinimo.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button color="primary" size="lg" className="font-semibold">
                  Gauti pasiulyma
                </Button>
                <Button color="default" variant="bordered" size="lg">
                  Peržiureti darbus
                </Button>
              </div>
            </div>
            <div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-vksycsyf04gplwilb4dp7-m6LrzxJp5Lt10O17.png" 
                alt="Namo pridavimo projektas" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kas yra namo pridavimas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Kas yra namo pridavimas?
            </h2>
            <p className="text-xl text-default-500 max-w-2xl mx-auto">
              Namo pridavimas – tai esamo gyvenamojo namo plotas padidinamas prijungiant naujus plotus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-content2">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Gyvenamojo pleto didinimas</h3>
                <p className="text-default-500 leading-relaxed">
                  Pridedant papildomus kambarius, virtuvę ar svetainę, Jūsų namai tampa erdvesni ir patogesni šeimos poreikiams.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-content2">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Teisiniai reikalavimai</h3>
                <p className="text-default-500 leading-relaxed">
                  Parengiame visą reikalingą dokumentaciją ir suderiname projektą su vietos savivaldybes specialistais.
                </p>
              </CardBody>
            </Card>
            
            <Card className="bg-content2">
              <CardBody className="p-8">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Kokybiški sprendimai</h3>
                <p className="text-default-500 leading-relaxed">
                  Naudojame tik aukštos kokybes medžiagas ir laikomes šiuolaikinių statybos standartu.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Procesas */}
      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Kaip vyksta procesas?
              </h2>
              <p className="text-xl text-default-500 mb-10">
                Nuo pirmo susitikimo iki projekto įgyvendinimo – lydime Jus kiekviename žingsnyje
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Konsultacija</h4>
                    <p className="text-default-500">Susitikime aptariame Jūsų poreikius, pageidavimus ir biudžetą.</p>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Projektavimas</h4>
                    <p className="text-default-500">Parengiame architektūros eskizus ir suderiname galutinį variantą.</p>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Derinimas</h4>
                    <p className="text-default-500">Paruošiame dokumentaciją ir pateikiame savivaldybei derinti.</p>
                  </div>
                </div>
                
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Statyba</h4>
                    <p className="text-default-500">Prižiūrime statybos darbus ir užtikriname kokybę kiekviename etape.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=303,fit=crop/YZ9Wyx0bjvt63wZg/img-bj10d5297sgvhgrytbtcq-mnl50yvwpGF4xk5y.png" 
                alt="Namo pridavimo procesas" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kontaktu forma */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: "Cormorant Garamond, serif" }}>
                Kreipkitės į mus
              </h2>
              <p className="text-xl text-default-500 mb-8">
                Užpildykite formą ir mes susisieksime su Jumis per 24 valandas. Nemokama konsultacija!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-content2 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-foreground">Dirbame visoje Lietuvoje</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-content2 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-foreground">Atsakome per 24 valandas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-content2 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-foreground">Nemokama pirminė konsultacija</span>
                </div>
              </div>
            </div>
            
            <Card className="bg-content2">
              <CardBody className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    type="text"
                    label="Vardas"
                    placeholder="Įveskite savo vardą"
                    variant="bordered"
                    value={formData.vardas}
                    onChange={(e) => setFormData({...formData, vardas: e.target.value})}
                    className="w-full"
                  />
                  <Input
                    type="email"
                    label="El. paštas"
                    placeholder="jusu@email.lt"
                    variant="bordered"
                    value={formData.elpastas}
                    onChange={(e) => setFormData({...formData, elpastas: e.target.value})}
                    className="w-full"
                  />
                  <Input
                    type="tel"
                    label="Telefono numeris"
                    placeholder="+370XXXXXXXX"
                    variant="bordered"
                    value={formData.telefonas}
                    onChange={(e) => setFormData({...formData, telefonas: e.target.value})}
                    className="w-full"
                  />
                  <Textarea
                    label="Žinutė"
                    placeholder="Aprašykite savo projektą..."
                    variant="bordered"
                    minRows={4}
                    value={formData.zinute}
                    onChange={(e) => setFormData({...formData, zinute: e.target.value})}
                    className="w-full"
                  />
                  <Button type="submit" color="primary" size="lg" className="w-full font-semibold">
                    Siųsti užklausą
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* Rekomendacijos */}
      <section className="py-20 bg-content1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4" style={{ fontFamily: "Cormorant Garamond, serif" }}>
              Kodėl rinktis Architektai?
            </h2>
            <p className="text-xl text-default-500">
              Daugiau nei 10 metų patirties namo pridavimo srityje
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-content2 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-foreground">Sėkmingai įgyvendintų projektų</div>
            </div>
            <div className="bg-content2 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-foreground">Metų patirties</div>
            </div>
            <div className="bg-content2 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground">Patenkintų klientų</div>
            </div>
            <div className="bg-content2 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-primary mb-2">5 metų</div>
              <div className="text-foreground">Garantinis laikotarpis</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}