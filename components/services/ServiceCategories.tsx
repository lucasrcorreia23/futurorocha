import { useState } from "react";
import { dsnCN } from "../../hooks/helper";
import DsnGrid from "../../layout/DsnGrid";
import ServiceCategoryItem from "./ServiceCategoryItem";
import { serviceCategories } from "../../data/serviceCategories";

export interface ServiceCategoriesProps {
  className?: string;
  col?: number;
  colTablet?: number;
  colMobile?: number;
  colGap?: number;
}

function ServiceCategories({
  className,
  col = 2,
  colTablet = 1,
  colMobile = 1,
  colGap = 30,
}: ServiceCategoriesProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={dsnCN("service-categories", className)}>
      <DsnGrid
        col={col}
        colTablet={colTablet}
        colMobile={colMobile}
        colGap={colGap}
        rowGap={colGap}
      >
        {serviceCategories.map((category, index) => (
          <ServiceCategoryItem
            key={category.id}
            category={category}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </DsnGrid>
    </div>
  );
}

export default ServiceCategories;
