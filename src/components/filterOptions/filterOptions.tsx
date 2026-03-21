import type React from "react";
import "./filterOptions.css";

//types
//utils

type Props = {
  iconLocation: React.ReactElement;
  iconTech: React.ReactElement;
  iconRemote: React.ReactElement;
  isActive: boolean;
};

export function FilterOptions({
  iconLocation,
  iconTech,
  iconRemote,
  isActive,
}: Props) {
  const handleFilteredJobs = (e: React.ChangeEvent<HTMLFormElement>) => {
    const form = new window.FormData(e.currentTarget);
    // setFilters({
    //   location: form.get(idLocation)?.toString() ?? "",
    //   tech: form.get(idTech)?.toString() ?? "",
    //   contract: form.get(idContract)?.toString() ?? "",
    //   area: form.get(idArea)?.toString() ?? "",
    //   salary: form.get(idSalary)?.toString() ?? "",
    //   remote: form.get(idRemote) === "on",
    // });
  };

  return (
    <form
      className={`search__formFilter ${isActive ? "search__formFilter--active" : ""}`}
      onChange={handleFilteredJobs}
    >
      <h2>
        Find your next 10x <span>role</span>
      </h2>
      <p>Find the job that best suits you</p>
      <div className="search__formFilterOptions">
        <label htmlFor="" className="locationFilter labelFilter">
          <input
            type="text"
            placeholder="Location (e.g.Medellin, Bogota)"
            className="inputLocation"
          />
          {iconLocation}
        </label>
        <label htmlFor="" className="TechFilter labelFilter">
          <input
            type="text"
            placeholder="Tech Stack (e.g.React,Next.js)"
            className="inputTech"
          />
          {iconTech}
        </label>
        <div className="select-wrapper">
          <select id="contractFilter" className="selectFilter contractFilter">
            <option value="">All contracts</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <div className="select-wrapper">
          <select id="salaryFilter" className="selectFilter salaryFilter">
            <option value="">All salaries</option>
            <option value="0-1999">Less than $2000</option>
            <option value="2000-3000">$2000 - $3000</option>
            <option value="3001-4000">$3000 - $4000</option>
            <option value="4001-Infinity">More than $4000</option>
          </select>
        </div>
        <div className="select-wrapper">
          <select id="areaFilter" className="selectFilter areaFilter">
            <option value="">All areas</option>
            <option value="Engineering">Engineering</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Mobile">Mobile</option>
            <option value="DevOps">DevOps</option>
            <option value="Quality Assurance">Quality Assurance</option>
            <option value="Design">Design</option>
            <option value="Data">Data</option>
            <option value="Product">Product</option>
          </select>
        </div>
        <label htmlFor="remote" className="remoteFilter">
          <span>
            <p>Remote Only</p>
          </span>
          <input type="checkbox" id="remote" className="checkRemote" />
          {iconRemote}
          <div className="sliderButton">
            <span></span>
          </div>
        </label>
      </div>
    </form>
  );
}
