import React from "react";
import productImg from "../assets/img-hero.jpg";

const ProductPage = () => {
  return (
    <>
      <section className="showcase">
        <img className="product-img" src={productImg} alt="" />
        <div className="product-info">
          <div className="product-name">Product name</div>
          <p className="product-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            laboriosam eaque rerum veniam, fugiat voluptatibus facere odit,
            quaerat debitis quod sint maxime quam, blanditiis dolorem ullam
            adipisci! Accusantium, numquam quasi quas et reprehenderit, incidunt
            est eaque laborum iste dolorum soluta at, beatae repellat cumque
            magni. Eum error eligendi ullam nulla id ipsam provident soluta. Id
            itaque magnam eligendi est ut dolore saepe
          </p>
          <div className="product-price">39 €</div>
          <button className="buy-btn">Buy now</button>
        </div>
      </section>
      <section className="details">
        <div className="wrapper">
          <h2 className="details-title">More details</h2>
          <p className="details-description">
            Lorem ipsum dolor sit. Numquam enim itaque odit veniam accusantium
            sapiente ullam nemo quasi deleniti aliquid quas vero iusto,
            provident assumenda maxime magni nam eius impedit. Vel autem error
            velit fugiat ab esse laboriosam laborum maiores blanditiis
            architecto, facilis praesentium natus sit. Repellat, beatae? Impedit
            sit debitis perspiciatis suscipit quae ea praesentium eligendi
            recusandae quis vitae. Placeat itaque reiciendis quo aperiam
            voluptatibus eveniet ut! Consectetur optio saepe culpa rem numquam
            aliquam neque corporis sequi totam alias officiis, laudantium ea
            odit, nihil sapiente? Soluta, laudantium voluptas. Aut odio fuga,
            inventore ut dicta blanditiis aliquam officia illum laudantium
            possimus iure assumenda debitis, deleniti, praesentium voluptates
            doloribus magni iste laborum nobis! Animi aspernatur beatae in iusto
            mollitia officiis quibusdam cumque dolore culpa voluptates esse
            minus, eos dolorum sapiente inventore similique nostrum aut dolorem
            repellat. Laudantium vero hic earum! Consequuntur consectetur itaque
            tenetur eum nemo, officia, labore neque magni, quod repellendus quos
            est in! Quisquam temporibus quod officia? Hic, ipsum tempore!
          </p>
        </div>
      </section>

      <section className="reviews">
        <div className="wrapper">
          <h2 className="reviews-title">Reviews</h2>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
