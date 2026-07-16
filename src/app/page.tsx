import fs from "fs";
import path from "path";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Authority from "@/components/Authority";
import FootballGlobal from "@/components/FootballGlobal";
import FootballGallery from "@/components/FootballGallery";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import BeforeAfter from "@/components/BeforeAfter";
import WhyChooseMe from "@/components/WhyChooseMe";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  // Read football images dynamically from public/images
  const imagesDir = path.join(process.cwd(), "public/images");
  let footballImages: { src: string; title: string; category: string; description: string }[] = [];

  try {
    const files = fs.readdirSync(imagesDir);
    const filteredFiles = files.filter((file) => {
      const lower = file.toLowerCase();
      // Exclude specific files: futebol6.jpeg and foto futebol5.jpeg
      if (lower === "futebol6.jpeg" || lower === "foto futebol5.jpeg") {
        return false;
      }
      // Filter for files starting with "foto futebol", "foto futbol", "futebol"
      return (
        (lower.startsWith("foto futebol") || lower.startsWith("foto futbol") || lower.startsWith("futebol")) &&
        (lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png") || lower.endsWith(".webp"))
      );
    });

    // Sort to keep a predictable order
    filteredFiles.sort();

    footballImages = filteredFiles.map((file, idx) => {
      let title = "Treinamento Técnico Coletivo";
      let category = "Treinos";
      let description = "Aprimoramento técnico e tático em campo com foco em posse de bola e transição.";

      if (idx % 4 === 0) {
        title = "Treinamento Técnico Coletivo";
        category = "Treinos";
        description = "Aprimoramento técnico e tático em campo com foco em posse de bola e transição.";
      } else if (idx % 4 === 1) {
        title = "Preparação Física Integrada";
        category = "Preparação";
        description = "Trabalho de aceleração, potência muscular e capacidade aeróbica específica.";
      } else if (idx % 4 === 2) {
        title = "Orientação e Análise Tática";
        category = "Tática";
        description = "Feedback individual e correções posicionais durante as atividades práticas.";
      } else {
        title = "Situação de Jogo Real";
        category = "Jogos";
        description = "Aplicação prática dos conceitos treinados em simulações sob pressão competitiva.";
      }

      return {
        src: `/images/${file}`,
        title,
        category,
        description,
      };
    });
  } catch (error) {
    console.error("Error reading images directory:", error);
  }

  // Fallback static list just in case
  if (footballImages.length === 0) {
    const staticFiles = [
      "foto futebol1.jpeg",
      "foto futebol2.jpeg",
      "foto futebol3.jpeg",
      "foto futbol4.jpeg",
      "foto futebol6.jpeg",
      "foto futebol 7.jpeg"
    ];
    footballImages = staticFiles.map((file, idx) => {
      let title = "Treinamento Técnico Coletivo";
      let category = "Treinos";
      let description = "Aprimoramento técnico e tático em campo com foco em posse de bola e transição.";

      if (idx % 4 === 0) {
        title = "Treinamento Técnico Coletivo";
        category = "Treinos";
        description = "Aprimoramento técnico e tático em campo com foco em posse de bola e transição.";
      } else if (idx % 4 === 1) {
        title = "Preparação Física Integrada";
        category = "Preparação";
        description = "Trabalho de aceleração, potência muscular e capacidade aeróbica específica.";
      } else if (idx % 4 === 2) {
        title = "Orientação e Análise Tática";
        category = "Tática";
        description = "Feedback individual e correções posicionais durante as atividades práticas.";
      } else {
        title = "Situação de Jogo Real";
        category = "Jogos";
        description = "Aplicação prática dos conceitos treinados em simulações sob pressão competitiva.";
      }

      return {
        src: `/images/${file}`,
        title,
        category,
        description,
      };
    });
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Authority />
        <FootballGlobal />
        <FootballGallery images={footballImages} />
        <Services />
        <Methodology />
        <Results />
        <BeforeAfter />
        <WhyChooseMe />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
