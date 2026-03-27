import "./filterSelected.css";
import type React from "react";

type props = {
  text: string;
  svg: React.ReactElement;
  value: string;
};

export function AppliedFilter({ text, svg, value }: props) {
  return (
    <div className={`search__selectedFilter ${value ? "active" : ""}`}>
      <p>{text}</p>
      {svg}
    </div>
  );
}
