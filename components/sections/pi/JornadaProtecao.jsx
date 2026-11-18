import Link from "next/link";
import Icon from "../../ui/Icon";
import { jornada } from "../../../data/pi";
import styles from "./JornadaProtecao.module.scss";

// Visual-PI 185–201
export default function JornadaProtecao() {
  return (
    <section className="sec line-top" aria-labelledby="jornada-title">
      <div className="wrap">
        <div className="head-center">
          <div className="eyebrow">Jornada de proteção</div>
          <h2 id="jornada-title">Da criação à defesa</h2>
        </div>
        <ol className="grid" style={{ "--min": "190px", "--gap": "14px", listStyle: "none", margin: 0, padding: 0 }}>
          {jornada.map((step, i) => (
            <li className="card hov" style={{ "--pad": "26px" }} key={step.title}>
              <div className={styles.top}>
                <div className="ico">
                  <Icon name={step.icon} />
                </div>
                <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 style={{ marginTop: 22 }}>{step.title}</h3>
              <p className="small" style={{ marginTop: 8 }}>
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="band">
          <div className="band-body">
            <div className={styles.badges} aria-hidden="true">
              <span className={styles.adv}>ADV</span>
              <span className={styles.plus}>+</span>
              <span className={styles.pi}>PI</span>
            </div>
            <div>
              <h3>ADV + PI atuam de forma integrada</h3>
              <p className="small" style={{ marginTop: 6 }}>
                A proteção de ativos pode envolver procedimentos administrativos, contratos, negociações, notificações e medidas
                judiciais.
              </p>
            </div>
          </div>
          <Link className="btn" href="/#conflitos">
            Conheça nossa atuação em conflitos <Icon name="arrow" size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
