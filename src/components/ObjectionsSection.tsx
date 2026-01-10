import { Check } from "lucide-react";

const objections = [
  {
    myth: "Anemia é falta de carne",
    truth: "Anemia tem múltiplas causas — deficiência de ferro, vitamina B12, ácido fólico, doenças crônicas, e outras condições que precisam ser investigadas corretamente. Comer carne não é a única solução.",
  },
  {
    myth: "Se eu não comer carne, vou ficar doente",
    truth: "Uma alimentação vegetariana bem planejada pode ser compatível com saúde sanguínea. O segredo está no acompanhamento adequado e na investigação personalizada.",
  },
  {
    myth: "Os médicos sempre me julgam por ser vegetariana",
    truth: "Aqui, sua escolha alimentar é respeitada. O atendimento é individualizado, baseado em evidências e sem julgamentos sobre seu estilo de vida.",
  },
];

const ObjectionsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-4">
            Vamos falar sobre alguns mitos
          </h2>
          <p className="section-subtitle mx-auto">
            Entenda por que essas crenças comuns não contam a história completa.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {objections.map((item, index) => (
            <div
              key={index}
              className="card-elevated overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Myth */}
                <div className="md:w-1/3 flex-shrink-0">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2 font-body">
                    Mito
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground">
                    "{item.myth}"
                  </p>
                </div>
                
                {/* Truth */}
                <div className="md:w-2/3 md:border-l md:border-border md:pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary uppercase tracking-wide font-body">
                      A verdade
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {item.truth}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectionsSection;
