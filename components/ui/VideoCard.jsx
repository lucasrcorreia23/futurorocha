import { useState } from "react";
import Icon from "./Icon";
import { track } from "../../data/site";

/**
 * Card de vídeo da proposta visual (.video).
 * - mode="external": link que abre em nova aba (ex.: vídeo no Google Drive).
 * - mode="youtube": embed "lite" — só carrega o iframe do YouTube após o clique (sem autoplay ao rolar).
 */
export default function VideoCard({ mode = "external", href, youtubeId, title, label, sublabel, top, grid = false, className = "", style }) {
  const [playing, setPlaying] = useState(false);

  const inner = (
    <>
      {grid && <div className="video-grid" aria-hidden="true" />}
      {top && (
        <div className="video-top" aria-hidden="true">
          {top}
        </div>
      )}
      <span className="play" style={{ position: "relative" }}>
        <Icon name="play" size={26} />
      </span>
      <span className="video-label">
        <strong>{label}</strong>
        {sublabel && <span className="small">{sublabel}</span>}
      </span>
    </>
  );

  if (mode === "youtube") {
    if (playing) {
      return (
        <div className={`video ${className}`} style={style}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    return (
      <button
        type="button"
        className={`video ${className}`}
        style={style}
        aria-label={`Reproduzir: ${title}`}
        onClick={() => {
          setPlaying(true);
          track("video_play", { video: title });
        }}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      className={`video ${className}`}
      style={style}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} (abre em nova aba)`}
      onClick={() => track("video_open", { video: title })}
    >
      {inner}
    </a>
  );
}
