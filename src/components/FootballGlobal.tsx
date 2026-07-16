"use client";

import { motion } from "framer-motion";
import { BookOpen, UserCheck, ShieldAlert, Globe, Compass, Target } from "lucide-react";

export default function FootballGlobal() {
  const pillars = [
    {
      icon: <BookOpen size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Inteligência Tática",
      description: "Análise avançada de jogo e desenvolvimento de visão tática para competições internacionais.",
    },
    {
      icon: <UserCheck size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Transição de Carreira",
      description: "Preparação completa para atletas que buscam oportunidades no futebol internacional.",
    },
    {
      icon: <Target size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Desenvolvimento Profissional",
      description: "Programa estruturado de evolução técnica, física e mental para o alto rendimento.",
    },
    {
      icon: <Globe size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Visão Internacional",
      description: "Network global e conhecimento dos mercados de futebol na Europa, EUA e Ásia.",
    },
    {
      icon: <Compass size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Metodologia Tática Moderna",
      description: "Sistemas de jogo contemporâneos e análise de desempenho com ferramentas avançadas.",
    },
    {
      icon: <ShieldAlert size={24} style={{ color: "var(--primary-accent)" }} />,
      title: "Player Trading",
      description: "Orientação especializada em negociações e transferências para o mercado internacional.",
    },
  ];

  // Map Animation Coordinates
  // viewBox="0 0 1000 500"
  const nodes = [
    { name: "BRASIL", x: 350, y: 380, accent: "green" },
    { name: "EUA", x: 280, y: 200, accent: "blue" },
    { name: "EUROPA", x: 550, y: 150, accent: "blue" },
    { name: "ÁSIA", x: 800, y: 220, accent: "blue" },
  ];

  const routes = [
    // Brazil to USA
    { from: nodes[0], to: nodes[1], control: "290, 300" },
    // Brazil to Europe
    { from: nodes[0], to: nodes[2], control: "430, 240" },
    // Brazil to Asia
    { from: nodes[0], to: nodes[3], control: "600, 260" },
  ];

  return (
    <section
      id="football-global"
      style={{
        padding: "100px 5%",
        backgroundColor: "#080808", // Dark theme background
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow Elements */}
      <div className="glow-spot-green" style={{ top: "10%", right: "5%" }} />
      <div className="glow-spot-blue" style={{ bottom: "20%", left: "5%" }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
            PROGRAMA EXCLUSIVO
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 4rem)",
              lineHeight: "1",
              marginBottom: "16px",
            }}
          >
            Football <span className="text-gradient">Global</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "700px",
              margin: "0 auto",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            Uma metodologia revolucionária que prepara atletas para o mercado internacional do futebol. Conectando
            talentos brasileiros às melhores oportunidades do mundo.
          </p>
        </div>

        {/* Dynamic World Map SVG */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "900px",
            height: "auto",
            aspectRatio: "2/1",
            margin: "0 auto 60px auto",
            backgroundColor: "rgba(17, 17, 17, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.03)",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Subtle Grid Pattern Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              pointerEvents: "none",
            }}
          />

          <svg viewBox="0 0 1000 500" width="100%" height="100%" style={{ display: "block" }}>
            {/* Soft background map contours represented minimally as low opacity dots/lines */}
            {/* Dotted Minimal World Map representation */}
            <g opacity="0.08" fill="#ffffff">
              {/* North America dots */}
              <circle cx="150" cy="120" r="1.5" /><circle cx="170" cy="130" r="1.5" /><circle cx="190" cy="110" r="1.5" />
              <circle cx="210" cy="140" r="1.5" /><circle cx="230" cy="130" r="1.5" /><circle cx="250" cy="160" r="1.5" />
              <circle cx="270" cy="180" r="1.5" /><circle cx="290" cy="170" r="1.5" /><circle cx="310" cy="190" r="1.5" />
              {/* South America dots */}
              <circle cx="320" cy="300" r="1.5" /><circle cx="330" cy="320" r="1.5" /><circle cx="340" cy="350" r="1.5" />
              <circle cx="350" cy="380" r="1.5" /><circle cx="360" cy="400" r="1.5" /><circle cx="370" cy="430" r="1.5" />
              <circle cx="380" cy="410" r="1.5" /><circle cx="390" cy="390" r="1.5" /><circle cx="350" cy="330" r="1.5" />
              {/* Africa dots */}
              <circle cx="480" cy="250" r="1.5" /><circle cx="500" cy="270" r="1.5" /><circle cx="520" cy="290" r="1.5" />
              <circle cx="540" cy="310" r="1.5" /><circle cx="550" cy="340" r="1.5" /><circle cx="570" cy="330" r="1.5" />
              {/* Europe dots */}
              <circle cx="500" cy="110" r="1.5" /><circle cx="520" cy="120" r="1.5" /><circle cx="540" cy="100" r="1.5" />
              <circle cx="550" cy="130" r="1.5" /><circle cx="570" cy="120" r="1.5" /><circle cx="590" cy="140" r="1.5" />
              {/* Asia dots */}
              <circle cx="680" cy="120" r="1.5" /><circle cx="710" cy="140" r="1.5" /><circle cx="740" cy="130" r="1.5" />
              <circle cx="770" cy="160" r="1.5" /><circle cx="800" cy="180" r="1.5" /><circle cx="830" cy="170" r="1.5" />
              <circle cx="860" cy="190" r="1.5" /><circle cx="890" cy="210" r="1.5" /><circle cx="920" cy="230" r="1.5" />
              <circle cx="730" cy="200" r="1.5" /><circle cx="760" cy="220" r="1.5" /><circle cx="790" cy="250" r="1.5" />
            </g>

            {/* Glowing Connection Routes */}
            {routes.map((route, i) => (
              <g key={i}>
                {/* Static base line */}
                <path
                  d={`M ${route.from.x} ${route.from.y} Q ${route.control} ${route.to.x} ${route.to.y}`}
                  fill="none"
                  stroke={route.to.accent === "green" ? "rgba(50, 255, 126, 0.15)" : "rgba(63, 169, 255, 0.15)"}
                  strokeWidth="2"
                />
                {/* Animated dash line */}
                <path
                  d={`M ${route.from.x} ${route.from.y} Q ${route.control} ${route.to.x} ${route.to.y}`}
                  fill="none"
                  stroke={route.to.name === "BRASIL" ? "var(--primary-accent)" : "url(#routeGradient)"}
                  strokeWidth="2"
                  className="animated-route"
                />
              </g>
            ))}

            {/* Map Gradients */}
            <defs>
              <linearGradient id="routeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--primary-accent)" />
                <stop offset="100%" stopColor="var(--secondary-accent)" />
              </linearGradient>
            </defs>

            {/* Glowing Map Hub Nodes */}
            {nodes.map((node, i) => (
              <g key={i}>
                {/* Glow ring */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="6"
                  fill="none"
                  stroke={node.accent === "green" ? "var(--primary-accent)" : "var(--secondary-accent)"}
                  strokeWidth="2"
                  className={node.accent === "green" ? "pulse-glow" : "pulse-glow-blue"}
                />
                {/* Center dot */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={node.accent === "green" ? "var(--primary-accent)" : "var(--secondary-accent)"}
                />
                {/* Hub Label */}
                <text
                  x={node.x}
                  y={node.y + 24}
                  fill="#ffffff"
                  fontFamily="var(--font-bebas-neue)"
                  fontSize="12"
                  letterSpacing="0.1em"
                  textAnchor="middle"
                  opacity="0.85"
                >
                  {node.name}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* Pillars / Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card"
              style={{
                padding: "30px",
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
              }}
            >
              {/* Icon Container */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(50, 255, 126, 0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(50, 255, 126, 0.1)",
                  flexShrink: 0,
                }}
              >
                {pillar.icon}
              </div>

              {/* Text info */}
              <div>
                <h4
                  style={{
                    fontSize: "1.25rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "8px",
                  }}
                >
                  {pillar.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.88rem",
                    lineHeight: "1.6",
                    color: "rgba(255, 255, 255, 0.65)",
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
