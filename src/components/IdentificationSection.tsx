import { Heart, Sparkles, Shield } from "lucide-react";

const reliefCards = [
  {
    icon: Heart,
    text: "O problema não é sua escolha alimentar.",
  },
  {
    icon: Sparkles,
    text: "Anemia não é castigo.",
  },
  {
    icon: Shield,
    text: "Seu corpo merece investigação, não culpa.",
  },
];

const IdentificationSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-6">
            Você sente que ninguém entende?
          </h2>
          <p className="section-subtitle mx-auto text-lg leading-relaxed">
            Muitas vegetarianas vivem com cansaço, queda de cabelo, tonturas ou exames alterados. 
            E quando procuram ajuda, ouvem que a solução é simplesmente "voltar a comer carne".
          </p>
        </div>
        
        {/* Relief Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reliefCards.map((card, index) => (
            <div
              key={index}
              className="card-elevated text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-xl font-medium text-foreground">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
