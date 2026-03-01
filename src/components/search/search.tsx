import "./search.css";
import { useState } from "react";
//Components
import { SelectedFilterOption } from "./filterSelected";
import { FilterOptions } from "../filterOptions/filterOptions";
//Icons
import { Magnifying } from "../svgIcons/magnifying";
import { AdjustmentIcon } from "../svgIcons/adjustmentIcon";
import { RemoteIcon } from "../svgIcons/remoteIcon";
import { LocationIcon } from "../svgIcons/locationIcon";
import { SalaryIcon } from "../svgIcons/salaryIcon";
import { AreaIcon } from "../svgIcons/areaIcon";
import { TechnologiesIcon } from "../svgIcons/technologiesIcon";
import { ContractIcon } from "../svgIcons/contractIcon";

export function Search() {
  const [isFilterOption, setIsFilterOptions] = useState(false);

  const handleSetActive = () => {
    setIsFilterOptions(!isFilterOption);
  };

  return (
    <section className="search container">
      <form action="" className="search__form">
        <div className="search__seeker">
          <input
            type="text"
            placeholder="Senior Backend"
            className="search__input"
          />
          <Magnifying className="search__iconMagnifying" />
        </div>
        <div className="search__filter" onClick={handleSetActive}>
          <AdjustmentIcon className="search__iconAdjustment" />
        </div>
      </form>

      <FilterOptions
        iconLocation={<LocationIcon />}
        iconTech={<TechnologiesIcon />}
        iconRemote={<RemoteIcon />}
        isActive={isFilterOption}
      />

      <section className="search__resultFilter">
        <SelectedFilterOption text="Remote" svg={<RemoteIcon />} />
        <SelectedFilterOption text="Location" svg={<LocationIcon />} />
        <SelectedFilterOption text="Salary" svg={<SalaryIcon />} />
        <SelectedFilterOption text="Contract" svg={<ContractIcon />} />
        <SelectedFilterOption text="Area" svg={<AreaIcon />} />
        <SelectedFilterOption text="Technologies" svg={<TechnologiesIcon />} />
      </section>
    </section>
  );
}
