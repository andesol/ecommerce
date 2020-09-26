import React from "react";

import Gallery from "../components/Gallery";

const Main = () => {
  return (
    <>
      <section className="hero">
        <h1>Miniatures</h1>
      </section>
      <section className="gallery">
        <Gallery />
      </section>
    </>
  );
};

export default Main;
