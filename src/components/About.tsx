"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const timelineItems = [
    {
      title: "Formação",
      description: "Educação Física & Ciências do Esporte",
    },
    {
      title: "Especialização",
      description: "Preparação Física de Alto Rendimento",
    },
    {
      title: "Licença CBF",
      description: "Certificação Profissional de Treinador",
    },
    {
      title: "Internacional",
      description: "Metodologia de Desenvolvimento Global",
    },
  ];

  return (
    <section
      id="sobre"
      style={{
        padding: "100px 5%",
        backgroundColor: "#080808",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light glow effects */}
      <div className="glow-spot-green" style={{ top: "30%", left: "-15%" }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "60px",
          alignItems: "center",
          position: "relative",
          zIndex: 10,
        }}
        className="about-grid"
      >
        {/* Left Side: Coach Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        >
          {/* Framer style glowing border box */}
          <div
            style={{
              position: "absolute",
              top: "-15px",
              left: "-15px",
              right: "15px",
              bottom: "15px",
              border: "1px solid rgba(50, 255, 126, 0.15)",
              borderRadius: "16px",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <div
            style={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              aspectRatio: "2/3",
              boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <Image
              src="/images/foto carlos .jpeg"
              alt="Carlos - Metodologia Katana Coach Portrait"
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              style={{
                objectFit: "cover",
                transition: "transform 0.5s ease",
              }}
              className="coach-img-hover"
            />
          </div>

          {/* Experience Badge */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "-10px",
              backgroundColor: "rgba(23, 23, 23, 0.85)",
              border: "1px solid rgba(50, 255, 126, 0.3)",
              backdropFilter: "blur(12px)",
              padding: "12px 20px",
              borderRadius: "8px",
              zIndex: 10,
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
              textAlign: "center",
            }}
          >
            <h4
              style={{
                fontSize: "1.8rem",
                color: "var(--primary-accent)",
                lineHeight: "1",
                marginBottom: "2px",
                textShadow: "0 0 10px rgba(50, 255, 126, 0.3)",
              }}
            >
              10+
            </h4>
            <p
              style={{
                fontSize: "0.6rem",
                fontFamily: "var(--font-inter)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#CFCFCF",
                fontWeight: 600,
              }}
            >
              Anos de Excelência
            </p>
          </div>
        </motion.div>

        {/* Right Side: Storytelling & Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: "0.85rem",
              fontFamily: "var(--font-bebas-neue)",
              color: "var(--primary-accent)",
              letterSpacing: "0.15em",
              marginBottom: "12px",
            }}
          >
            — SOBRE MIM
          </span>

          {/* Headline */}
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1",
              marginBottom: "24px",
              color: "#ffffff",
            }}
          >
            Mais do que um treinador.
            <br />
            <span className="text-gradient" style={{ textShadow: "0 0 30px rgba(50,255,126,0.15)" }}>
              Uma filosofia de vida.
            </span>
          </h2>

          {/* Story Paragraphs */}
          <div
            style={{
              fontFamily: "var(--font-inter)",
              color: "#CFCFCF",
              fontSize: "1rem",
              lineHeight: "1.7",
              marginBottom: "35px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <p>
              Minha atuação une a prática do futebol profissional com a ciência da preparação física de elite.
              Ao longo da minha trajetória, entendi que a alta performance exige mais do que repetições mecânicas:
              ela demanda leitura de jogo, consistência mental e inteligência tática individual.
            </p>
            <p>
              Através de especializações e da vivência direta no gramado, desenvolvi uma metodologia voltada para 
              atletas e pessoas comprometidas com o alto nível. Integro o trabalho de força, potência e aceleração 
              física ao refinamento do posicionamento tático e tomada de decisão rápida.
            </p>
            <p>
              A preparação vai muito além das planilhas de treino. Ofereço um acompanhamento estruturado que engloba 
              rotina de recuperação, feedbacks de evolução e análise estratégica. O objetivo é lapidar cada detalhe 
              para que você alcance o máximo do seu potencial físico e de jogo.
            </p>
          </div>

          {/* Timeline */}
          <div className="timeline-container" style={{ width: "100%" }}>
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  position: "relative",
                  marginBottom: index === timelineItems.length - 1 ? 0 : "24px",
                }}
              >
                <div className="timeline-dot" />
                <h4
                  style={{
                    fontSize: "1.2rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "4px",
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1.1fr 1.3fr !important;
            gap: 80px !important;
          }
        }
        .coach-img-hover:hover {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
}
