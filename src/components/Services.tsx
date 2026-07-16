"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Dumbbell, Trophy, Check, ArrowRight } from "lucide-react";

export default function Services() {
  const personalServices = [
    { title: "Hipertrofia & Musculação", desc: "Ganho de massa muscular com periodização científica de sobrecarga." },
    { title: "Emagrecimento Saudável", desc: "Queima de gordura otimizada com foco em definição e preservação de massa magra." },
    { title: "Performance de Alto Rendimento", desc: "Desenvolvimento de força, potência e resistência neuromuscular." },
    { title: "Consultoria Online", desc: "Planilhas exclusivas via app com suporte 24h e ajustes constantes." },
    { title: "Personal Presencial", desc: "Acompanhamento individual de perto para técnica perfeita e intensidade máxima." },
    { title: "Condicionamento Físico", desc: "Foco na saúde cardiovascular, flexibilidade, mobilidade e prevenção de lesões." },
  ];

  const footballServices = [
    { title: "Treino Tático Individual", desc: "Análise individual de posicionamento tático específico por função em campo." },
    { title: "Inteligência de Jogo", desc: "Desenvolvimento de tomada de decisão rápida e leitura dinâmica sob pressão." },
    { title: "Posicionamento Específico", desc: "Treino focado em refinar a postura de corpo e movimentação ideal no setor." },
    { title: "Desenvolvimento Técnico", desc: "Aprimoramento refinado do passe, domínio orientado, finalização e drible." },
    { title: "Mentoria de Atletas", desc: "Desenvolvimento mental, inteligência emocional e resiliência competitiva." },
    { title: "Transição de Carreira", desc: "Direcionamento estratégico nas transições entre categorias de base e profissional." },
    { title: "Preparação Internacional", desc: "Adaptação ao estilo de jogo europeu/americano físico e taticamente exigente." },
    { title: "Futebol Profissional", desc: "Direcionamento metodológico alinhado com clubes da CBF e federações internacionais." },
    { title: "Orientação de Player Trading", desc: "Network e suporte estratégico em parcerias corporativas e agenciamento profissional." },
  ];

  return (
    <section
      id="servicos"
      style={{
        padding: "100px 5%",
        backgroundColor: "#111111", // Secondary background
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
            SERVIÇOS DE ELITE
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Escolha Seu <span className="text-gradient">Programa</span>
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
            Programas altamente individualizados para transformar o seu corpo ou impulsionar a sua carreira no futebol.
          </p>
        </div>

        {/* Columns Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "stretch",
          }}
          className="services-grid"
        >
          {/* COLUMN 1: PERSONAL TRAINING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              backgroundColor: "rgba(23, 23, 23, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.04)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header Image Cover */}
            <div style={{ position: "relative", width: "100%", height: "240px", flexShrink: 0 }}>
              <Image
                src="/images/gym_services.jpg"
                alt="Personal Training Services Cover"
                fill
                style={{ objectFit: "cover", filter: "brightness(0.55)" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(50, 255, 126, 0.4)",
                  }}
                >
                  <Dumbbell size={24} style={{ color: "#000" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", color: "#ffffff", margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                    Personal Training
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-inter)",
                      color: "var(--primary-accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    Alta Performance Fitness
                  </span>
                </div>
              </div>
            </div>

            {/* List */}
            <div style={{ padding: "35px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "35px" }}>
                {personalServices.map((service, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      paddingBottom: "16px",
                      borderBottom: i === personalServices.length - 1 ? "none" : "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(50, 255, 126, 0.08)",
                        border: "1px solid rgba(50, 255, 126, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check
                        size={14}
                        style={{ color: "var(--primary-accent)" }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "4px", textTransform: "none", fontFamily: "var(--font-inter)", fontWeight: 600, letterSpacing: "normal" }}>
                        {service.title}
                      </h4>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.5", margin: 0 }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/5511940369362"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ width: "100%", gap: "8px", textShadow: "none" }}
              >
                QUERO MINHA CONSULTORIA DE PERSONAL
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>

          {/* COLUMN 2: FOOTBALL PERFORMANCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              backgroundColor: "rgba(23, 23, 23, 0.5)",
              border: "1px solid rgba(255, 255, 255, 0.04)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header Image Cover */}
            <div style={{ position: "relative", width: "100%", height: "240px", flexShrink: 0 }}>
              <Image
                src="/images/football_services.jpg"
                alt="Football Performance Services Cover"
                fill
                style={{ objectFit: "cover", filter: "brightness(0.55)" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "var(--secondary-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 20px rgba(63, 169, 255, 0.4)",
                  }}
                >
                  <Trophy size={24} style={{ color: "#000" }} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.8rem", color: "#ffffff", margin: 0, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
                    Football Performance
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-inter)",
                      color: "var(--secondary-accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                    }}
                  >
                    Elite Tactical & Technical Development
                  </span>
                </div>
              </div>
            </div>

            {/* List */}
            <div style={{ padding: "35px 30px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "35px" }}>
                {footballServices.map((service, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      paddingBottom: "16px",
                      borderBottom: i === footballServices.length - 1 ? "none" : "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(63, 169, 255, 0.08)",
                        border: "1px solid rgba(63, 169, 255, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check
                        size={14}
                        style={{ color: "var(--secondary-accent)" }}
                      />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "1.1rem", color: "#ffffff", marginBottom: "4px", textTransform: "none", fontFamily: "var(--font-inter)", fontWeight: 600, letterSpacing: "normal" }}>
                        {service.title}
                      </h4>
                      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.5", margin: 0 }}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#football-global"
                className="btn-secondary"
                style={{
                  width: "100%",
                  gap: "8px",
                  borderColor: "var(--secondary-accent)",
                  color: "var(--secondary-accent)",
                  boxShadow: "0 0 10px rgba(63, 169, 255, 0.1)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(63, 169, 255, 0.05)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(63, 169, 255, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(63, 169, 255, 0.1)";
                }}
              >
                QUERO ENTRAR NO FUTEBOL GLOBAL
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
