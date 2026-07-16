"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const InstagramIcon = ({ size = 18 }: { size?: number }) => (
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

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
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
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.704 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background effect on scroll
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Progress bar calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Credenciais", href: "#credenciais" },
    { name: "Football Global", href: "#football-global" },
    { name: "Galeria", href: "#galeria" },
    { name: "Serviços", href: "#servicos" },
    { name: "Metodologia", href: "#metodologia" },
    { name: "Resultados", href: "#resultados" },
    { name: "Antes e Depois", href: "#antes-depois" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollProgress}%`,
          height: "3px",
          background: "linear-gradient(90deg, #32FF7E, #3FA9FF)",
          zIndex: 100,
          transition: "width 0.1s ease-out",
          boxShadow: "0 0 10px rgba(50, 255, 126, 0.7)",
        }}
      />

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: isScrolled ? "15px 20px" : "25px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: isScrolled ? "1200px" : "1400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: isScrolled ? "10px 24px" : "0px 0px",
            borderRadius: isScrolled ? "999px" : "0px",
            border: isScrolled ? "1px solid rgba(255, 255, 255, 0.08)" : "1px solid transparent",
            backgroundColor: isScrolled ? "rgba(10, 10, 10, 0.72)" : "transparent",
            backdropFilter: isScrolled ? "blur(20px)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(20px)" : "none",
            boxShadow: isScrolled ? "0 10px 40px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05)" : "none",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textDecoration: "none",
              lineHeight: "0.95",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "1.4rem", fontWeight: 900, letterSpacing: "0.05em", color: "#ffffff", whiteSpace: "nowrap" }}>CARLOS</span>
            <span style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", color: "var(--primary-accent)", textShadow: "0 0 8px rgba(50, 255, 126, 0.4)", whiteSpace: "nowrap" }}>METODOLOGIA KATANA</span>
          </a>

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <ul
              style={{
                display: "none",
                alignItems: "center",
                gap: "6px",
                listStyle: "none",
              }}
              className="desktop-menu"
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "rgba(255, 255, 255, 0.75)",
                      transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                    className="nav-link-hover"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop Social Icons */}
            <div style={{ display: "none", gap: "10px", alignItems: "center" }} className="desktop-menu">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hayashi.performance?igsh=MXgwNnZmNW9tcG8zMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "var(--primary-accent)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "var(--primary-accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <InstagramIcon size={16} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511940369362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  color: "rgba(255, 255, 255, 0.75)",
                  transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  padding: "8px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#25D366";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.borderColor = "#25D366";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "rgba(255, 255, 255, 0.75)";
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.03)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>

            {/* Desktop CTA */}
            <a
              href="https://wa.me/5511940369362"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary desktop-cta"
              style={{
                fontSize: "0.75rem",
                padding: "8px 20px",
                boxShadow: "0 0 10px rgba(50, 255, 126, 0.2)",
                display: "none",
                textDecoration: "none",
              }}
            >
              CONSULTORIA
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#ffffff",
                cursor: "pointer",
                padding: "5px",
                display: "block",
              }}
              className="mobile-toggle"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div
            style={{
              position: "fixed",
              top: "70px",
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(8, 8, 8, 0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "25px",
              padding: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "var(--font-bebas-neue)",
                  letterSpacing: "0.08em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "var(--primary-accent)")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#ffffff")}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/5511940369362"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary"
              style={{
                marginTop: "20px",
                width: "80%",
                maxWidth: "300px",
                textDecoration: "none",
              }}
            >
              CONSULTORIA
            </a>

            {/* Mobile Social Buttons */}
            <div style={{ display: "flex", gap: "16px", marginTop: "15px" }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/hayashi.performance?igsh=MXgwNnZmNW9tcG8zMw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: "#ffffff",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "var(--primary-accent)";
                  e.currentTarget.style.borderColor = "var(--primary-accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <InstagramIcon size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5511940369362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  color: "#ffffff",
                  padding: "10px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = "#25D366";
                  e.currentTarget.style.borderColor = "#25D366";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = "#ffffff";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <WhatsAppIcon size={20} />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Embedded CSS for header hover effects */}
      <style jsx global>{`
        @media (min-width: 1024px) {
          .desktop-menu {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-link-hover {
          text-decoration: none !important;
        }
        .nav-link-hover:hover {
          color: var(--primary-accent) !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
          text-shadow: 0 0 8px rgba(50, 255, 126, 0.2);
        }
      `}</style>
    </>
  );
}
