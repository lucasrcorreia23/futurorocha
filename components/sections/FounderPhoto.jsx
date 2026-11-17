import { images, founder } from "../../data/site";

// Foto do fundador; sem foto disponível, mostra um bloco com as iniciais.
export default function FounderPhoto({ className }) {
  if (images.arno) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={images.arno}
        alt={`${founder.name}, advogado e fundador`}
        className={className}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "top", display: "block" }}
      />
    );
  }
  return (
    <div
      className={className}
      role="img"
      aria-label={`${founder.name}, advogado e fundador`}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#7C3AED,#2E1065)",
        fontFamily: "var(--font-sora)",
        fontSize: 48,
        fontWeight: 600,
      }}
    >
      AR
    </div>
  );
}
