"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface GalleryItem {
  src: string;
  title: string;
  category: string;
  description: string;
}

export default function FootballGallery({ images = [] }: { images: GalleryItem[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = images.map((item, idx) => ({
    id: idx,
    ...item,
  }));

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev! - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev! + 1));
    }
  };

  return (
    <section
      id="galeria"
      style={{
        padding: "100px 5%",
        backgroundColor: "var(--background-secondary)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.03)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
      }}
    >
      {/* Background Glow */}
      <div className="glow-spot-blue" style={{ top: "15%", left: "-5%" }} />
      <div className="glow-spot-green" style={{ bottom: "10%", right: "-5%" }} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Title Section */}
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
            VIVÊNCIA DE CAMPO
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Trabalho com <span className="text-gradient">Futebol</span>
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
            Registros reais do cotidiano de preparação de atletas de elite, treinos no gramado, desenvolvimento tático e competições internacionais.
          </p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          <AnimatePresence mode="popLayout">
            {galleryItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={item.id}
                onClick={() => setLightboxIndex(item.id)}
                style={{
                  position: "relative",
                  aspectRatio: "4/3",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                }}
                className="gallery-item-card"
              >
                {/* Next Image Container */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="gallery-image"
                />

                {/* Hover overlay description */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "linear-gradient(to top, rgba(8, 8, 8, 0.95) 0%, rgba(8, 8, 8, 0.4) 60%, transparent 100%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "24px",
                    opacity: 0,
                    transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="gallery-overlay"
                >
                  <div
                    style={{
                      transform: "translateY(15px)",
                      transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                    className="gallery-text-container"
                  >
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontFamily: "var(--font-bebas-neue)",
                        color: "var(--primary-accent)",
                        letterSpacing: "0.15em",
                        backgroundColor: "rgba(50, 255, 126, 0.1)",
                        border: "1px solid rgba(50, 255, 126, 0.2)",
                        padding: "3px 8px",
                        borderRadius: "4px",
                        display: "inline-block",
                        marginBottom: "10px",
                      }}
                    >
                      {item.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        color: "#ffffff",
                        letterSpacing: "0.03em",
                        marginBottom: "6px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "0.78rem",
                        color: "rgba(255, 255, 255, 0.65)",
                        lineHeight: "1.4",
                        margin: 0,
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Zoom Icon indicator */}
                  <div
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                    }}
                  >
                    <Maximize2 size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(5, 5, 5, 0.95)",
              backdropFilter: "blur(12px)",
              zIndex: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "40px 20px",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              style={{
                position: "absolute",
                top: "24px",
                right: "24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#ffffff",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 110,
                transition: "all 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "var(--primary-accent)";
                e.currentTarget.style.color = "var(--primary-accent)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "#ffffff";
              }}
            >
              <X size={22} />
            </button>

            {/* Lightbox Image Stage */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "960px",
                aspectRatio: "4/3",
                maxHeight: "70vh",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.8)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                fill
                sizes="(max-width: 1024px) 100vw, 960px"
                style={{ objectFit: "contain" }}
                priority
              />

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  left: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(10, 10, 10, 0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--primary-accent)")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                style={{
                  position: "absolute",
                  right: "20px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "rgba(10, 10, 10, 0.7)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--primary-accent)")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Lightbox Description */}
            <div
              style={{
                width: "100%",
                maxWidth: "960px",
                textAlign: "center",
                marginTop: "24px",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-bebas-neue)",
                  color: "var(--primary-accent)",
                  letterSpacing: "0.15em",
                  backgroundColor: "rgba(50, 255, 126, 0.1)",
                  border: "1px solid rgba(50, 255, 126, 0.2)",
                  padding: "4px 12px",
                  borderRadius: "4px",
                  display: "inline-block",
                  marginBottom: "12px",
                }}
              >
                {galleryItems[lightboxIndex].category}
              </span>
              <h3
                style={{
                  fontSize: "1.6rem",
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                {galleryItems[lightboxIndex].title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.95rem",
                  color: "rgba(255, 255, 255, 0.65)",
                  maxWidth: "600px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                }}
              >
                {galleryItems[lightboxIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS for the Hover Overlay Trigger & Image Zoom */}
      <style jsx global>{`
        .gallery-item-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover .gallery-text-container {
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
