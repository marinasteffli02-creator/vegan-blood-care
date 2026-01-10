import { Search, FlaskConical, Salad, Globe } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Avaliação individualizada",
    description: "Análise completa do seu caso, considerando seu histórico e estilo de vida.",
  },
  {
    icon: FlaskConical,
    title: "Investigação adequada",
    description: "Não é só ferro — investigamos todas as possíveis causas da anemia.",
  },
  {
    icon: Salad,
    title: "Orientação adaptada",
    description: "Recomendações práticas compatíveis com a alimentação vegetariana.",
  },
  {
    icon: Globe,
    title: "Consulta online",
    description: "Atendimento de qualquer lugar do Brasil, com conforto e privacidade.",
  },
];

const ConsultationSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-4">
            O que a consulta oferece
          </h2>
          <p className="section-subtitle mx-auto">
            Um atendimento pensado para suas necessidades específicas.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-elevated text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-body">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
