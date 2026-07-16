"use client";

import { motion } from "framer-motion";
import { Layers, Award, CheckCircle2, Users, BookOpen, Globe } from "lucide-react";

export default function Authority() {
  const credentials = [
    {
      icon: <Layers size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "Licença CBF",
      description: "Certificação oficial da Confederação Brasileira de Futebol para treinamento profissional de atletas.",
    },
    {
      icon: <Award size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "CREF Ativo",
      description: "Registro profissional no Conselho Regional de Educação Física, garantindo credibilidade e ética.",
    },
    {
      icon: <CheckCircle2 size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "Certificações Internacionais",
      description: "Formações em metodologias de treinamento reconhecidas internacionalmente para desenvolvimento de atletas.",
    },
    {
      icon: <Users size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "Clubes Profissionais",
      description: "Experiência em categorias de base e profissional de clubes, com vivência em diferentes metodologias de trabalho.",
    },
    {
      icon: <BookOpen size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "Formação Acadêmica",
      description: "Bacharelado em Educação Física com especialização em Fisiologia do Exercício e Treinamento Esportivo.",
    },
    {
      icon: <Globe size={32} style={{ color: "var(--primary-accent)" }} />,
      title: "Experiência Internacional",
      description: "Vivência e estudos em centros de treinamento internacionais, trazendo metodologias globais para o Brasil.",
    },
  ];

  // Container variants for staggered animations
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="credenciais"
      style={{
        padding: "100px 5%",
        backgroundColor: "#111111", // Secondary Background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div className="glow-spot-blue" style={{ bottom: "-10%", right: "10%" }} />

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
            CREDENCIAIS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Formação de <span className="text-gradient">Elite</span>
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
            Certificações e experiências que comprovam um compromisso inabalável com a excelência profissional.
          </p>
        </div>

        {/* Credentials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-card"
              style={{
                padding: "35px 30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(50, 255, 126, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(50, 255, 126, 0.15)",
                  boxShadow: "0 0 15px rgba(50, 255, 126, 0.05)",
                }}
              >
                {cred.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "10px",
                  }}
                >
                  {cred.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                    color: "rgba(255, 255, 255, 0.65)",
                  }}
                >
                  {cred.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
