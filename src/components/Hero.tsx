"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Award, Globe, ArrowRight } from "lucide-react";

// CountUp component for animating stats
function CountUp({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // 60 frames per second
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "120px 5% 60px 5%",
        overflow: "hidden",
        backgroundColor: "#080808",
      }}
    >
      {/* Background Image with Dark Overlays */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/hero_bg.jpg"
          alt="Sports Stadium Lights & Gym Arena"
          fill
          priority
          style={{
            objectFit: "cover",
            opacity: 0.28,
            filter: "brightness(0.65) contrast(1.1)",
          }}
        />
        {/* Glow Spots */}
        <div className="glow-spot-green" style={{ top: "10%", left: "-10%" }} />
        <div className="glow-spot-blue" style={{ bottom: "10%", right: "-10%" }} />

        {/* Dynamic Dark Gradients to blend edges */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "220px",
            background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.7) 50%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "150px",
            background: "linear-gradient(to bottom, #080808 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Floating Particles Overlay */}
      <div
        className="particles-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
          pointerEvents: "none",
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          opacity: 0.3,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            fontSize: "clamp(2rem, 4.2vw, 4.5rem)",
            lineHeight: "1.05",
            fontWeight: 900,
            marginBottom: "24px",
            color: "#ffffff",
          }}
        >
          Transformando Pessoas.
          <br />
          Desenvolvendo Atletas.
          <br />
          <span className="text-gradient" style={{ textShadow: "0 0 40px rgba(50, 255, 126, 0.2)" }}>
            Preparando Campeões.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            fontSize: "clamp(0.72rem, 1.1vw, 0.9rem)",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "#CFCFCF",
            marginBottom: "40px",
            maxWidth: "900px",
            lineHeight: "1.6",
          }}
        >
          Personal Trainer <span style={{ color: "var(--primary-accent)" }}>•</span> Football Coach{" "}
          <span style={{ color: "var(--secondary-accent)" }}>•</span> High Performance Specialist{" "}
          <span style={{ color: "var(--primary-accent)" }}>•</span> International Football Development
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginBottom: "70px",
          }}
        >
          <a
            href="https://wa.me/5511940369362"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ gap: "10px", textDecoration: "none" }}
          >
            Quero Minha Consultoria
            <ArrowRight size={18} />
          </a>
          <a href="#football-global" className="btn-secondary" style={{ textDecoration: "none" }}>
            Conheça o Programa Futebol Global
          </a>
        </motion.div>

        {/* Experience Numbers & Licences Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            alignItems: "center",
          }}
        >
          {/* Stat 1 */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "2.2rem", color: "#ffffff", marginBottom: "4px", display: "flex", justifyContent: "center", alignItems: "baseline" }}>
              <CountUp end={10} suffix="+" />
              <span style={{ color: "var(--primary-accent)", fontSize: "1.5rem" }}>+</span>
            </h3>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
              Anos de Experiência
            </p>
          </div>

          {/* Stat 2 */}
          <div style={{ textAlign: "center" }}>
            <h3 style={{ fontSize: "2.2rem", color: "#ffffff", marginBottom: "4px", display: "flex", justifyContent: "center", alignItems: "baseline" }}>
              <CountUp end={500} suffix="+" />
              <span style={{ color: "var(--primary-accent)", fontSize: "1.5rem" }}>+</span>
            </h3>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
              Alunos Transformados
            </p>
          </div>

          {/* Stat 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={24} style={{ color: "var(--primary-accent)", filter: "drop-shadow(0 0 8px rgba(50,255,126,0.3))" }} />
              <h3 style={{ fontSize: "1.4rem", color: "#ffffff", margin: 0 }}>CBF</h3>
            </div>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
              Licença B
            </p>
          </div>

          {/* Stat 4 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Globe size={24} style={{ color: "var(--secondary-accent)", filter: "drop-shadow(0 0 8px rgba(63,169,255,0.3))" }} />
              <h3 style={{ fontSize: "1.4rem", color: "#ffffff", margin: 0 }}>INT'L</h3>
            </div>
            <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>
              Metodologia Internacional
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
