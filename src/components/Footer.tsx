"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageSquare, Mail, ArrowUp } from "lucide-react";

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* FINAL CTA SECTION */}
      <section
        id="consultoria"
        style={{
          padding: "100px 5%",
          backgroundColor: "#080808", // Main background
          position: "relative",
          overflow: "hidden",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="glow-spot-green" style={{ top: "10%", left: "-10%" }} />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 10,
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "50px",
            alignItems: "center",
          }}
          className="cta-grid"
        >
          {/* Left Side: Copy and Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span
              style={{
                fontSize: "0.85rem",
                fontFamily: "var(--font-bebas-neue)",
                color: "var(--primary-accent)",
                letterSpacing: "0.15em",
                display: "block",
                marginBottom: "16px",
              }}
            >
              DECISÃO DE ELITE
            </span>
            <h2
              style={{
                fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                lineHeight: "1",
                marginBottom: "24px",
                textTransform: "uppercase",
              }}
            >
              Sua evolução começa com a decisão de{" "}
              <span className="text-gradient" style={{ textShadow: "0 0 35px rgba(50, 255, 126, 0.2)" }}>
                agir hoje.
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                color: "#CFCFCF",
                marginBottom: "40px",
                maxWidth: "600px",
              }}
            >
              Não adie a conquista da sua melhor versão física ou o desenvolvimento tático necessário para jogar no
              mercado internacional. Toque abaixo e fale comigo agora mesmo.
            </p>

            {/* Social Buttons CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <a
                href="https://wa.me/5511940369362"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ gap: "10px", backgroundColor: "#25D366", boxShadow: "0 0 15px rgba(37, 211, 102, 0.3)" }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "#20ba5a";
                  e.currentTarget.style.boxShadow = "0 0 25px rgba(37, 211, 102, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "#25D366";
                  e.currentTarget.style.boxShadow = "0 0 15px rgba(37, 211, 102, 0.3)";
                }}
              >
                <MessageSquare size={20} fill="#000" />
                CONVERSAR NO WHATSAPP
              </a>
              <a
                href="https://www.instagram.com/hayashi.performance?igsh=MXgwNnZmNW9tcG8zMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ gap: "10px" }}
              >
                <InstagramIcon size={20} />
                SEGUIR NO INSTAGRAM
              </a>
            </div>
          </motion.div>

          {/* Right Side: Rounded Square Blend Coach Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "380px",
              margin: "0 auto",
              aspectRatio: "1",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/carlos 2.jpeg"
              alt="Carlos - Metodologia Katana Coach Portrait CTA"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center bottom",
                transform: "scale(1.15)",
                transformOrigin: "28% 78%",
              }}
            />
            {/* Dark gradient overlay at the bottom */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "100px",
                background: "linear-gradient(to top, #080808 0%, transparent 100%)",
                opacity: 0.8,
                pointerEvents: "none",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER SECTION */}
      <footer
        style={{
          padding: "60px 5% 40px 5%",
          backgroundColor: "#111111", // Secondary background
          borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {/* Top Row: Logo & Social Links */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="footer-top-row"
          >
            {/* Logo */}
            <a
              href="#"
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                letterSpacing: "0.05em",
                fontFamily: "var(--font-bebas-neue)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <span style={{ color: "#ffffff" }}>CARLOS</span>
              <span style={{ color: "var(--primary-accent)" }}> - METODOLOGIA KATANA</span>
            </a>

            {/* Social Icons List */}
            <div style={{ display: "flex", gap: "20px" }}>
              <a
                href="https://www.instagram.com/hayashi.performance?igsh=MXgwNnZmNW9tcG8zMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
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
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://wa.me/5511940369362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
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
                <MessageSquare size={20} />
              </a>
              <a
                href="https://facebook.com/carlossilvacoach"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
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
                <FacebookIcon size={20} />
              </a>
              <a
                href="mailto:contato@carlossilva.com"
                aria-label="Email"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
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
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Bottom Row: Copy & Terms & Scroll to top */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "30px",
              display: "flex",
              flexDirection: "column-reverse",
              gap: "20px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            className="footer-bottom-row"
          >
            {/* copyright */}
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)", textAlign: "center" }}>
              &copy; {new Date().getFullYear()} Carlos - Metodologia Katana. Todos os direitos reservados.
            </p>

            {/* Legal Links */}
            <div style={{ display: "flex", gap: "24px" }}>
              <a
                href="#politica-de-privacidade"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)", transition: "color 0.2s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary-accent)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                Política de Privacidade
              </a>
              <a
                href="#termos-de-uso"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)", transition: "color 0.2s ease" }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary-accent)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                Termos de Uso
              </a>
            </div>

            {/* Scroll to top button */}
            <button
              onClick={handleScrollToTop}
              aria-label="Voltar ao topo"
              style={{
                background: "none",
                border: "none",
                color: "rgba(255, 255, 255, 0.4)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.75rem",
                fontFamily: "var(--font-inter)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                transition: "color 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary-accent)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.4)")}
            >
              VOLTAR AO TOPO
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </footer>

      {/* STICKY WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/5511940369362"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato Rápido WhatsApp"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          backgroundColor: "#25D366",
          color: "#ffffff",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          zIndex: 99,
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(1.1) translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(37, 211, 102, 0.6)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(37, 211, 102, 0.4)";
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          style={{ display: "block" }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.638 2.019 14.17 1 11.536 1c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.475 3.39 1.374 4.869l-.997 3.64 3.734-.977zm11.37-5.594c-.31-.154-1.829-.903-2.11-.1-.28.1-.55.28-.68.43-.13.15-.26.15-.57 0-.31-.154-1.3-.48-2.48-1.53-.918-.82-1.538-1.83-1.72-2.13-.18-.3-.02-.47.13-.62.14-.13.31-.31.47-.47.15-.15.2-.26.3-.43.1-.17.05-.33-.02-.48-.07-.15-.68-1.64-.93-2.24-.25-.6-.53-.52-.68-.53-.15-.01-.33-.01-.51-.01-.18 0-.48.07-.73.34-.26.27-.99.97-.99 2.37 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.06 4.85 4.29.68.29 1.21.47 1.62.6.69.22 1.32.19 1.81.12.55-.08 1.83-.75 2.09-1.48.26-.73.26-1.36.18-1.48-.08-.12-.28-.2-.59-.35z" />
        </svg>
      </a>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .cta-grid {
            grid-template-columns: 1.3fr 0.9fr !important;
            gap: 80px !important;
          }
          .footer-top-row {
            flex-direction: row !important;
          }
          .footer-bottom-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </>
  );
}
