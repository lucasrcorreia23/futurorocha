import Icon from "./Icon";

// Acordeão sobre <details> nativo: acessível por teclado sem JS.
export default function Accordion({ items, defaultOpen = 0 }) {
  return (
    <div className="acc-list">
      {items.map((item, i) => (
        <details className="acc" key={item.title} open={i === defaultOpen}>
          <summary>
            <div className="acc-head">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="small" style={{ marginTop: 6 }}>
                  {item.text}
                </p>
              </div>
            </div>
            <span className="pm" aria-hidden="true">
              <Icon name="plus" size={16} strokeWidth={2} />
            </span>
          </summary>
          <div className="body">
            <ul className="dots">
              {item.items.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}
