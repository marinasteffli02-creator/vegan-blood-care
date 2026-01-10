import doctorImage from "@/assets/doctor-marina.jpg";
import { GraduationCap, Heart, Stethoscope } from "lucide-react";

const credentials = [
  {
    icon: GraduationCap,
    title: "Especialização em Hematologia",
    description: "Foco em investigação e tratamento de anemias",
  },
  {
    icon: Heart,
    title: "Vegetariana",
    description: "Compreensão pessoal do estilo de vida",
  },
  {
    icon: Stethoscope,
    title: "Experiência clínica",
    description: "Prevenção e tratamento individualizados",
  },
];

const DoctorSection = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={doctorImage}
                alt="Dra. Marina Steffli, médica hematologista"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/50 rounded-full blur-3xl" />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="text-sm font-medium text-primary uppercase tracking-wide mb-4 font-body">
              Sua médica
            </div>
            <h2 className="section-title mb-6">
              Sou a Dra. Marina Steffli, médica hematologista e vegetariana.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              Entendo as preocupações de quem escolhe uma alimentação sem carne porque também vivo isso. 
              Minha especialização em hematologia me permite oferecer uma investigação completa e um 
              acompanhamento baseado em ciência, não em preconceitos.
            </p>
            
            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
