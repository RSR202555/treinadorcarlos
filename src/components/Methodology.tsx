"use client";

import { motion } from "framer-motion";
import { Search, Compass, ShieldAlert, Cpu, BarChart3, Star } from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      num: "01",
      title: "Avaliação",
      desc: "Análise inicial detalhada de composição corporal, testes físicos e triagem tática de futebol.",
      icon: <Search size={22} />,
    },
    {
      num: "02",
      title: "Planejamento",
      desc: "Criação de programa personalizado e cronograma de metas alinhado aos objetivos esportivos.",
      icon: <Compass size={22} />,
    },
    {
      num: "03",
      title: "Treinamento",
      desc: "Execução prática de planilhas de musculação e treinos de campo focados em intensidade técnica.",
      icon: <ShieldAlert size={22} />,
    },
    {
      num: "04",
      title: "Monitoramento",
      desc: "Acompanhamento diário da carga de treino, fadiga muscular, sono e bem-estar geral.",
      icon: <Cpu size={22} />,
    },
    {
      num: "05",
      title: "Análise de Desempenho",
      desc: "Uso de dados quantitativos e análise de vídeos para refinar detalhes de técnica e tática.",
      icon: <BarChart3 size={22} />,
    },
    {
      num: "06",
      title: "Resultados",
      desc: "Alcance da melhor forma física da vida ou transição de mercado internacional bem-sucedida.",
      icon: <Star size={22} />,
    },
  ];

  return (
    <section
      id="metodologia"
      style={{
        padding: "100px 5%",
        backgroundColor: "#080808", // Background
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span
            style={{
              fontSize: "0.85rem",
              fontFamily: "var(--font-bebas-neue)",
              color: "var(--primary-accent)",
              letterSpacing: "0.15em",
              display: "block",
              marginBottom: "12px",
            }}
          >
            MÉTODO DE RESULTADOS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            A Jornada de <span className="text-gradient">Alta Performance</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            Passo a passo planejado e monitorado cientificamente para garantir a sua evolução constante.
          </p>
        </div>

        {/* Timeline Line */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
          }}
          className="timeline-layout"
        >
          {/* Vertical progress line for mobile / desktop layout */}
          <div
            className="timeline-progress-bar"
            style={{
              position: "absolute",
              top: "20px",
              bottom: "20px",
              left: "25px",
              width: "2px",
              background: "linear-gradient(to bottom, var(--primary-accent), var(--secondary-accent))",
              zIndex: 1,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                gap: "25px",
                alignItems: "flex-start",
                paddingLeft: "10px",
              }}
              className="timeline-node"
            >
              {/* Step circle node */}
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#080808",
                  border: `2px solid ${index % 2 === 0 ? "var(--primary-accent)" : "var(--secondary-accent)"}`,
                  boxShadow: `0 0 10px ${index % 2 === 0 ? "rgba(50, 255, 126, 0.2)" : "rgba(63, 169, 255, 0.2)"}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-bebas-neue)",
                  color: index % 2 === 0 ? "var(--primary-accent)" : "var(--secondary-accent)",
                  fontWeight: "bold",
                  flexShrink: 0,
                  marginTop: "4px",
                }}
              >
                {step.num}
              </div>

              {/* Card info */}
              <div
                className="glass-card"
                style={{
                  flexGrow: 1,
                  padding: "24px 30px",
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                  background: "rgba(23, 23, 23, 0.5)",
                }}
              >
                {/* Icon wrapper */}
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: index % 2 === 0 ? "var(--primary-accent)" : "var(--secondary-accent)",
                    flexShrink: 0,
                  }}
                >
                  {step.icon}
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      color: "#ffffff",
                      marginBottom: "6px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.9rem",
                      lineHeight: "1.6",
                      color: "rgba(255, 255, 255, 0.65)",
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .timeline-layout {
            grid-template-columns: repeat(6, 1fr) !important;
            gap: 20px !important;
          }
          .timeline-progress-bar {
            top: 20px !important;
            bottom: auto !important;
            left: 20px !important;
            right: 20px !important;
            width: auto !important;
            height: 2px !important;
            background: linear-gradient(to right, var(--primary-accent), var(--secondary-accent)) !important;
          }
          .timeline-node {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding-left: 0 !important;
            gap: 20px !important;
          }
          .timeline-node .glass-card {
            flex-direction: column !important;
            align-items: center !important;
            padding: 20px 15px !important;
            min-height: 220px !important;
          }
          .timeline-node .glass-card h4 {
            font-size: 1.15rem !important;
          }
          .timeline-node .glass-card p {
            font-size: 0.8rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>
    </section>
  );
}
