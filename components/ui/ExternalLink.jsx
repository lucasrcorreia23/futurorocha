// Link que só vira <a> quando há URL. Sem URL (pendente do cliente), renderiza
// um elemento desabilitado para não publicar links quebrados.
export default function ExternalLink({ href, children, className = "btn", onClick, style, ...rest }) {
  if (!href) {
    return (
      <span
        className={className}
        aria-disabled="true"
        title="Em breve"
        style={{ ...style, opacity: 0.55, cursor: "not-allowed" }}
        {...rest}
      >
        {children}
      </span>
    );
  }
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      onClick={onClick}
      style={style}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
