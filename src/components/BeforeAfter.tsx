"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
  stats: string[];
  aspectRatio?: string;
}

function BeforeAfterSlider({ beforeImage, afterImage, title, description, stats, aspectRatio }: SliderProps) {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <div
      className="glass-card"
      style={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        background: "rgba(23, 23, 23, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        height: "100%",
      }}
    >
      {/* Slider Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: aspectRatio || "4/5",
          borderRadius: "8px",
          overflow: "hidden",
          userSelect: "none",
          border: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* After Image (Full background) */}
        <Image
          src={afterImage}
          alt={`Depois - ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          style={{ objectFit: "cover" }}
        />
        
        {/* Label: Depois */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            bottom: "12px",
            background: "rgba(8, 8, 8, 0.8)",
            border: "1px solid rgba(50, 255, 126, 0.3)",
            color: "var(--primary-accent)",
            padding: "4px 10px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.05em",
            zIndex: 5,
          }}
        >
          DEPOIS
        </div>

        {/* Before Image Container (Width controlled by sliderPos) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: `${sliderPos}%`,
            overflow: "hidden",
            zIndex: 2,
          }}
        >
          {/* Inner image container scaled back to 100% of grandparent width */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${10000 / Math.max(sliderPos, 1)}%`,
              height: "100%",
            }}
          >
            <Image
              src={beforeImage}
              alt={`Antes - ${title}`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Label: Antes */}
        <div
          style={{
            position: "absolute",
            left: "12px",
            bottom: "12px",
            background: "rgba(8, 8, 8, 0.8)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#ffffff",
            padding: "4px 10px",
            borderRadius: "4px",
            fontSize: "0.75rem",
            fontFamily: "var(--font-bebas-neue)",
            letterSpacing: "0.05em",
            zIndex: 5,
          }}
        >
          ANTES
        </div>

        {/* Slider Handle Line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            width: "2px",
            backgroundColor: "var(--primary-accent)",
            zIndex: 4,
            transform: "translateX(-50%)",
            pointerEvents: "none",
            boxShadow: "0 0 10px var(--primary-accent)",
          }}
        >
          {/* Handle Circle */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "#080808",
              border: "2px solid var(--primary-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(50, 255, 126, 0.5)",
              color: "var(--primary-accent)",
              fontSize: "0.6rem",
              fontWeight: "bold",
            }}
          >
            ◀▶
          </div>
        </div>

        {/* Invisible Range Input covering the container for dragging */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "ew-resize",
            zIndex: 6,
            margin: 0,
          }}
        />
      </div>

      {/* Info details */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h4 style={{ fontSize: "1.3rem", color: "#ffffff", margin: 0 }}>
          {title}
        </h4>
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.9rem",
            color: "rgba(255, 255, 255, 0.6)",
            lineHeight: "1.5",
            margin: 0,
          }}
        >
          {description}
        </p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
          {stats.map((stat, idx) => (
            <span
              key={idx}
              style={{
                background: "rgba(50, 255, 126, 0.08)",
                border: "1px solid rgba(50, 255, 126, 0.15)",
                padding: "4px 10px",
                borderRadius: "4px",
                fontSize: "0.8rem",
                color: "var(--primary-accent)",
                fontFamily: "var(--font-bebas-neue)",
                letterSpacing: "0.05em",
              }}
            >
              {stat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const cases = [
    {
      beforeImage: "/images/antes 1.jpeg",
      afterImage: "/images/depois 1.jpeg",
      title: "Evolução Física 1 - Hipertrofia & Definição",
      description: "Foco em ganho de massa muscular magra e redução drástica do percentual de gordura (BF) com planejamento de treino e dieta integrada.",
      stats: ["12 Semanas", "+6.2kg Massa Magra", "-8% Gordura (BF)"],
      aspectRatio: "3/4",
    },
    {
      beforeImage: "/images/antes 2.jpeg",
      afterImage: "/images/depois 2.jpeg",
      title: "Evolução Física 2 - Recomposição Corporal",
      description: "Combinação de treinamento funcional de alta intensidade e musculação para otimizar a queima de gordura e ganho de força.",
      stats: ["16 Semanas", "-14.5kg Peso Corporal", "-11cm Abdominal"],
      aspectRatio: "9/16",
    },
  ];

  const staticCases = [
    {
      image: "/images/antes e depois.jpeg",
      title: "Resultados de Consultoria Online",
      description: "Transformação completa de definição muscular em curto prazo focada em definição abdominal e membros superiores.",
      stats: ["8 Semanas", "Definição Abdominal"],
    },
    {
      image: "/images/antes e depois 2.jpeg",
      title: "Preparação de Alta Performance",
      description: "Evolução de condicionamento físico geral para ganho de explosão e força explosiva corporal total.",
      stats: ["10 Semanas", "Explosão & Força"],
    },
  ];

  return (
    <section
      id="antes-depois"
      style={{
        padding: "100px 5%",
        backgroundColor: "#080808",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Light glow effects */}
      <div className="glow-spot-green" style={{ top: "10%", left: "-10%" }} />
      <div className="glow-spot-blue" style={{ bottom: "10%", right: "-10%" }} />

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
            TRANSFORMAÇÕES REAIS
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Antes e <span className="text-gradient">Depois</span>
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
            Resultados visíveis e mensuráveis obtidos através de uma metodologia de treinamento científico e acompanhamento individualizado.
          </p>
        </div>

        {/* Interactive Sliders Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "30px",
            marginBottom: "50px",
          }}
          className="sliders-grid"
        >
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <BeforeAfterSlider {...c} />
            </motion.div>
          ))}
        </div>

        {/* Separator / Subtitle for static cases */}
        <div style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}>
          <h3 style={{ fontSize: "1.8rem", color: "#ffffff", marginBottom: "8px" }}>
            Outras Evoluções de Sucesso
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "0.9rem",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Mais alunos e atletas que atingiram seus objetivos através do nosso método exclusivo.
          </p>
        </div>

        {/* Static Cases Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "30px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="static-grid"
        >
          {staticCases.map((sc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                background: "rgba(23, 23, 23, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                height: "100%",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "9/16",
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <Image
                  src={sc.image}
                  alt={sc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <h4 style={{ fontSize: "1.3rem", color: "#ffffff", margin: 0 }}>
                  {sc.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {sc.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "4px" }}>
                  {sc.stats.map((stat, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(50, 255, 126, 0.08)",
                        border: "1px solid rgba(50, 255, 126, 0.15)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        fontSize: "0.8rem",
                        color: "var(--primary-accent)",
                        fontFamily: "var(--font-bebas-neue)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 768px) {
          .sliders-grid, .static-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
