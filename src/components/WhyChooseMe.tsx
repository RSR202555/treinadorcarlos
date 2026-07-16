"use client";

import { motion } from "framer-motion";
import { Brain, Star, Smartphone, HelpCircle, Eye, ShieldAlert, Award, Compass } from "lucide-react";

export default function WhyChooseMe() {
  const points = [
    {
      icon: <Brain size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Treinamento Científico",
      desc: "Periodização estruturada com base nas últimas pesquisas em fisiologia e biomecânica do esporte.",
    },
    {
      icon: <Star size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Metodologia de Futebol de Elite",
      desc: "Metodologia de ponta idêntica à utilizada em academias e clubes de primeira linha do futebol mundial.",
    },
    {
      icon: <Smartphone size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Programas Individualizados",
      desc: "Cada treino e cardápio de recuperação é feito sob medida para seu biotipo, rotina e metas.",
    },
    {
      icon: <HelpCircle size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Suporte Próximo Contínuo",
      desc: "Suporte direto via WhatsApp, análises semanais de evolução e readequação de rotina em tempo real.",
    },
    {
      icon: <Eye size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Visão Internacional",
      desc: "Preparação direta voltada para adaptação rápida ao futebol dos EUA, Europa e Ásia.",
    },
    {
      icon: <ShieldAlert size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Licenciado pela CBF",
      desc: "Profissional certificado pela Confederação Brasileira de Futebol, atestando ética e excelência técnica.",
    },
    {
      icon: <Award size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Experiência Profissional",
      desc: "Anos de bagagem prática em categorias de base e times de futebol profissional de alto rendimento.",
    },
    {
      icon: <Compass size={28} style={{ color: "var(--primary-accent)" }} />,
      title: "Conceitos Táticos Modernos",
      desc: "Ensino e aplicação das dinâmicas táticas contemporâneas mais eficientes do futebol moderno.",
    },
  ];

  return (
    <section
      id="por-que-eu"
      style={{
        padding: "100px 5%",
        backgroundColor: "#080808", // Main background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div className="glow-spot-green" style={{ top: "30%", left: "-15%" }} />

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
            DIFERENCIAIS DE ELITE
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Por Que Treinar <span className="text-gradient">Comigo?</span>
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
            A combinação exata de formação acadêmica de ponta, vivência profissional prática e suporte premium.
          </p>
        </div>

        {/* Diff Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card"
              style={{
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "18px",
                background: "rgba(23, 23, 23, 0.4)",
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(50, 255, 126, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(50, 255, 126, 0.12)",
                }}
              >
                {point.icon}
              </div>

              <div>
                <h4
                  style={{
                    fontSize: "1.25rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                  }}
                >
                  {point.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                    color: "rgba(255, 255, 255, 0.6)",
                  }}
                >
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
