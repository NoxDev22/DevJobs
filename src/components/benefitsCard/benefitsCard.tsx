import type React from "react";
import "./benefitsCard.css";

type Props = {
  title: string;
  description: string;
  svg: React.ReactNode;
};

export function BenefitsCard({ title, description, svg }: Props) {
  return (
    <div className="benefitCard">
      {svg}
      <h2 className="benefitCard_title">{title}</h2>
      <p className="benefitCard_description">{description}</p>
    </div>
  );
}
