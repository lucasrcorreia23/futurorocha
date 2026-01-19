import { useRef, useEffect } from "react";
import { dsnCN } from "../../hooks/helper";
import { gsap } from "gsap";

export interface ServiceCategoryItemProps {
  category: {
    id: number;
    title: string;
    description: string;
    services: string[];
  };
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

function ServiceCategoryItem({ category, index, isExpanded, onToggle }: ServiceCategoryItemProps) {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesRef.current) return;

    if (isExpanded) {
      gsap.set(servicesRef.current, { height: "auto", display: "block", overflow: "hidden" });
      const height = servicesRef.current.scrollHeight;
      gsap.fromTo(
        servicesRef.current,
        { height: 0, opacity: 0 },
        { height: height, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(servicesRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        onComplete: () => {
          if (servicesRef.current) {
            servicesRef.current.style.display = "none";
          }
        },
      });
    }
  }, [isExpanded]);

  return (
    <div className={dsnCN("service-category-item p-relative", isExpanded && "expanded")}>
      <div className="service-category-item-inner background-section p-relative">
        <div
          className="service-category-header d-flex align-items-center justify-content-between p-relative"
          onClick={onToggle}
        >
          <div className="service-category-content">
            <span className="service-category-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="service-category-text">
              <h4 className="title-block service-category-title">{category.title}</h4>
              <p className="service-category-description">{category.description}</p>
            </div>
          </div>
          <div className={dsnCN("service-category-toggle", isExpanded && "active")}>
            <span className="toggle-icon">+</span>
          </div>
        </div>
        <div
          ref={servicesRef}
          className="service-category-services"
          style={{ display: "none", height: 0, overflow: "hidden" }}
        >
          <ul className="service-list">
            {category.services.map((service, serviceIndex) => (
              <li key={serviceIndex} className="service-list-item">
                <span className="service-bullet">●</span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServiceCategoryItem;
