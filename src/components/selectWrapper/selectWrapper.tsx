import "./selectWrapper.css";

import { useId } from "react";

type optionProps = {
  text?: string;
  value: string;
};

type props = {
  option: optionProps[];
  name: string;
};

export function SelectWrapper({ option, name }: props) {
  return (
    <div className="select-wrapper">
      <select className="selectFilter salaryFilter" name={name}>
        {option.map((opt) => (
          <option key={opt.value} value={opt.value.toLowerCase()}>
            {opt.text ? opt.text : opt.value}
          </option>
        ))}
      </select>
    </div>
  );
}

/**
 * <option value="">All salaries</option>
        <option value="0-1999">Less than $2000</option>
        <option value="2000-3000">$2000 - $3000</option>
        <option value="3001-4000">$3000 - $4000</option>
        <option value="4001-Infinity">More than $4000</option>
 */
