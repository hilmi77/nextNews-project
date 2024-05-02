import React from "react";

const ArchiveLayout = ({ archive, latest }) => {
  return (
    <main>
      <h1>Parallel Route</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </main>
  );
};

export default ArchiveLayout;
