import "./appliedFiltersContainer.css";

//Components
import { AppliedFilter } from "../filterSelected/filterSelected";

//Icons
import { RemoteIcon } from "../../components/svgIcons/remoteIcon";
import { LocationIcon } from "../../components/svgIcons/locationIcon";
import { TechnologiesIcon } from "../../components/svgIcons/technologiesIcon";
import { ContractIcon } from "../../components/svgIcons/contractIcon";
//types
import { type typeFilter } from "../types/types";
type props = {
  filter: typeFilter;
  text: string;
  setFilter: (filter: typeFilter) => void;
  setTextToFilter: (text: string) => void;
};
export function AppliedFiltersContainer({
  text,
  filter,
  setFilter,
  setTextToFilter,
}: props) {
  const handleRemoveAllFilter = () => {
    const selects =
      document.querySelectorAll<HTMLSelectElement>(".selectFilter");
    const inputText =
      document.querySelector<HTMLInputElement>(".search__input");

    setTextToFilter("");
    setFilter({
      technology: "",
      experience: "",
      location: "",
    });

    selects.forEach((select) => (select.selectedIndex = 0));
    if (inputText) inputText.value = "";
  };
  return (
    <section className="appliedFiltersContainer container">
      <div className="appliedFiltersContainer__texts">
        <button onClick={handleRemoveAllFilter}>Remove All Filters</button>
      </div>
      <div className="appliedFilterContainer__filters">
        <AppliedFilter
          value={text}
          text="Text"
          svg={<ContractIcon value={text} />}
        />
        <AppliedFilter
          value={filter.technology}
          text="Technologies"
          svg={<TechnologiesIcon value={filter.technology} />}
        />
        <AppliedFilter
          value={filter.location}
          text="Location"
          svg={<LocationIcon value={filter.location} />}
        />
        <AppliedFilter
          value={filter.experience}
          text="Experience"
          svg={<RemoteIcon value={filter.experience} />}
        />
      </div>
    </section>
  );
}
