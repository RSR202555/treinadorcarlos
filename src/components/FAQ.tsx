"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Como funciona a consultoria online?",
      a: "A consultoria online funciona através de um aplicativo exclusivo. Após uma avaliação detalhada (feita online ou por vídeo), eu monto seu planejamento de treinos personalizado. Você terá vídeos explicativos de cada exercício, canal direto de suporte diário comigo para dúvidas, correção de execução por vídeo e feedbacks semanais de ajuste.",
    },
    {
      q: "Você trabalha com iniciantes?",
      a: "Sim, com certeza! O treinamento é 100% individualizado. Se você está começando hoje, a metodologia foca no aprendizado dos padrões básicos de movimento, ganho de mobilidade, fortalecimento articular e melhora gradativa do fôlego, garantindo evolução segura e sem lesões.",
    },
    {
      q: "Posso treinar à distância?",
      a: "Sim. Toda a estrutura do Programa de Personal Training Online e de Football Performance Tático é projetada para ser feita de qualquer lugar do mundo. Você pode treinar na academia do seu condomínio, em uma academia local, em campos públicos ou até mesmo em casa com o mínimo de equipamento.",
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Nas primeiras 4 semanas de treino consistente, você já sente melhora significativa no nível de energia, sono, disposição e força física. Mudanças estéticas marcantes e consolidadas (hipertrofia/emagrecimento) ou evolução tática refinada são bem nítidas entre 8 a 12 semanas de adesão ao plano.",
    },
    {
      q: "Como funciona o Programa Futebol Global?",
      a: "É uma mentoria técnica e tática completa voltada para atletas que querem atuar fora do Brasil. Analisamos vídeos dos seus jogos reais para corrigir posicionamento, ensinamos o estilo de jogo e as exigências físicas das principais ligas internacionais (Europa, EUA e Ásia) e oferecemos orientação estratégica sobre o mercado de transferências e network.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      style={{
        padding: "100px 5%",
        backgroundColor: "#111111", // Secondary background
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
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
            DÚVIDAS FREQUENTES
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            Tire suas dúvidas rápidas sobre o funcionamento dos programas de treino e mentoria internacional.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card"
                style={{
                  background: "rgba(23, 23, 23, 0.4)",
                  overflow: "hidden",
                  transition: "border-color 0.3s ease",
                  borderColor: isOpen ? "rgba(50, 255, 126, 0.3)" : "rgba(255, 255, 255, 0.05)",
                }}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    padding: "24px 30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "none",
                    border: "none",
                    color: "#ffffff",
                    textAlign: "left",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      letterSpacing: "0.01em",
                      color: isOpen ? "var(--primary-accent)" : "#ffffff",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      color: isOpen ? "var(--primary-accent)" : "#ffffff",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Answer Content Animated */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <div
                        style={{
                          padding: "0 30px 24px 30px",
                          fontFamily: "var(--font-inter)",
                          fontSize: "0.92rem",
                          lineHeight: "1.7",
                          color: "rgba(255, 255, 255, 0.7)",
                          borderTop: "1px solid rgba(255, 255, 255, 0.03)",
                          paddingTop: "16px",
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
