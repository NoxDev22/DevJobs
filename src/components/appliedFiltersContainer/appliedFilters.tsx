import "./appliedFiltersContainer.css";

//Components
import { AppliedFilter } from "../filterSelected/filterSelected";

//Icons
import { RemoteIcon } from "../../components/svgIcons/remoteIcon";
import { LocationIcon } from "../../components/svgIcons/locationIcon";
import { TechnologiesIcon } from "../../components/svgIcons/technologiesIcon";
import { ContractIcon } from "../../components/svgIcons/contractIcon";

export function AppliedFiltersContainer() {
  return (
    <section className="appliedFiltersContainer">
      <AppliedFilter text="Remote" svg={<RemoteIcon />} />
      <AppliedFilter text="Location" svg={<LocationIcon />} />
      <AppliedFilter text="Text" svg={<ContractIcon />} />
      <AppliedFilter text="Technologies" svg={<TechnologiesIcon />} />
    </section>
  );
}
