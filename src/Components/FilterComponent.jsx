import React from "react";

const FilterComponent = ({ title, children }) => {
  return (
    <section className="flex flex-col mb-6">
      <h3 className="mb-3 text-[rgb(83,91,98)] font-extrabold">{title}</h3>
      <div className="flex">{children}</div>
    </section>
  );
};

export default FilterComponent;
