"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, Award, Globe, Activity, Cpu } from "lucide-react";

export default function Results() {
  const testimonials = [
    {
      name: "Gabriel Santos",
      role: "Atleta Profissional (Europa)",
      text: "O trabalho do Carlos mudou completamente minha visão de jogo e minha preparação física. Em menos de 6 meses, ganhei a potência muscular necessária para competir no futebol europeu e minha compreensão tática em campo deu um salto gigantesco.",
      stars: 5,
      stat: "+15% Potência de Chute",
    },
    {
      name: "Mariana Costa",
      role: "Aluna de Personal Training",
      text: "Comecei com foco em emagrecimento e definição. O Carlos montou um planejamento tão detalhado e científico que perdi 12kg sem passar fome, ganhando massa magra e recuperando totalmente minha autoestima. Recomendo de olhos fechados!",
      stars: 5,
      stat: "-12kg Gordura Corporal",
    },
    {
      name: "Rodrigo Silva",
      role: "Atleta de Base Sub-20",
      text: "A assessoria do Programa Futebol Global foi fundamental para minha transição de carreira. A análise tática individualizada corrigiu meus vícios de posicionamento e me deu a visibilidade que eu precisava no mercado internacional.",
      stars: 5,
      stat: "Transição para o Profissional",
    },
  ];

  const stats = [
    { 
      value: "98%", 
      label: "Taxa de Satisfação", 
      icon: <Award size={26} style={{ color: "var(--primary-accent)", filter: "drop-shadow(0 0 6px rgba(50,255,126,0.3))" }} /> 
    },
    { 
      value: "15+", 
      label: "Atletas no Exterior", 
      icon: <Globe size={26} style={{ color: "var(--secondary-accent)", filter: "drop-shadow(0 0 6px rgba(63,169,255,0.3))" }} /> 
    },
    { 
      value: "+120%", 
      label: "Ganho de Condicionamento", 
      icon: <Activity size={26} style={{ color: "var(--primary-accent)", filter: "drop-shadow(0 0 6px rgba(50,255,126,0.3))" }} /> 
    },
    { 
      value: "100%", 
      label: "Foco Científico", 
      icon: <Cpu size={26} style={{ color: "var(--secondary-accent)", filter: "drop-shadow(0 0 6px rgba(63,169,255,0.3))" }} /> 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="resultados"
      style={{
        padding: "100px 5%",
        backgroundColor: "#111111", // Secondary background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Effects */}
      <div className="glow-spot-blue" style={{ top: "20%", left: "-10%" }} />
      <div className="glow-spot-green" style={{ bottom: "10%", right: "-10%" }} />

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
            RESULTADOS REAIS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Casos de <span className="text-gradient">Sucesso</span>
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
            Conheça as histórias de transformação física e profissional de quem treinou com a metodologia de elite.
          </p>
        </div>

        {/* Dynamic Split Layout: Carousel + Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "stretch",
          }}
          className="results-grid"
        >
          {/* Left Side: Testimonial Carousel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div
              className="glass-card"
              style={{
                padding: "40px 30px",
                position: "relative",
                backgroundColor: "rgba(23, 23, 23, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                minHeight: "340px",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  opacity: 0.08,
                  color: "var(--primary-accent)",
                }}
              >
                <Quote size={80} />
              </div>

              {/* Stars */}
              <div style={{ display: "flex", gap: "4px" }}>
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <Star key={i} size={18} fill="var(--primary-accent)" color="var(--primary-accent)" />
                ))}
              </div>

              {/* Text Animation Container */}
              <div style={{ overflow: "hidden", minHeight: "120px" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "1.1rem",
                        lineHeight: "1.7",
                        color: "#CFCFCF",
                        fontStyle: "italic",
                        marginBottom: "15px",
                      }}
                    >
                      "{testimonials[activeIndex].text}"
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Client Profile Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "20px" }}>
                <div>
                  <h4 style={{ fontSize: "1.25rem", color: "#ffffff", marginBottom: "2px" }}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                    {testimonials[activeIndex].role}
                  </p>
                </div>

                {/* Individual Stat Badge */}
                <div
                  style={{
                    backgroundColor: "rgba(50, 255, 126, 0.08)",
                    border: "1px solid rgba(50, 255, 126, 0.2)",
                    borderRadius: "6px",
                    padding: "6px 12px",
                    color: "var(--primary-accent)",
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {testimonials[activeIndex].stat}
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div style={{ display: "flex", gap: "15px", marginTop: "24px", justifyContent: "flex-end" }}>
              <button
                onClick={handlePrev}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary-accent)";
                  e.currentTarget.style.color = "var(--primary-accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary-accent)";
                  e.currentTarget.style.color = "var(--primary-accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.color = "#ffffff";
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Right Side: Performance Stats Grid (direct child) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              height: "100%",
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "30px 20px",
                  textAlign: "center",
                  background: "rgba(23, 23, 23, 0.4)",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "4px",
                  }}
                >
                  {stat.icon}
                </div>
                <h5
                  style={{
                    fontSize: "2.5rem",
                    color: "var(--primary-accent)",
                    margin: 0,
                    lineHeight: 1,
                    fontFamily: "var(--font-bebas-neue)",
                    textShadow: "0 0 10px rgba(50, 255, 126, 0.2)",
                  }}
                >
                  {stat.value}
                </h5>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .results-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
