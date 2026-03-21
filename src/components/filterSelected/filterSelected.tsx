import "./filterSelected.css";
import type React from "react";

type props = {
  text: string;
  svg: React.ReactElement;
};

export function AppliedFilter({ text, svg }: props) {
  return (
    <div className="search__selectedFilter">
      <p>{text}</p>
      <input type="checkbox" />
      {svg}
    </div>
  );
}
