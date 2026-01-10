import { Check } from "lucide-react";

const audiences = [
  "Vegetarianas ou veganas preocupadas com a saúde",
  "Pessoas com cansaço, queda de cabelo ou anemia",
  "Quem deseja prevenir problemas sanguíneos",
  "Quem busca um atendimento médico respeitoso",
];

const AudienceSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="section-title mb-6">
                Este atendimento é para você?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
                Se você se identifica com alguma dessas situações, a consulta pode ser o primeiro passo 
                para cuidar da sua saúde com respeito.
              </p>
              
              <ul className="space-y-4">
                {audiences.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Visual Card */}
            <div className="card-elevated lg:p-10">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🌿</span>
                </div>
                <blockquote className="font-display text-xl md:text-2xl font-medium text-foreground italic leading-relaxed">
                  "Cuidar da sua saúde não exige abandonar quem você é."
                </blockquote>
                <p className="text-muted-foreground mt-4 font-body">
                  — Dra. Marina Steffli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
