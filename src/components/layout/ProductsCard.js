"use client";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MainHomeCard from "@/src/components/elements/cards/MainHomeCard";
import { fetchHomeProducts } from "@/src/lib/api";

export default function ProductsCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await fetchHomeProducts();
      if (Array.isArray(products)) {
        setProducts(products);
      } else {
        console.error("HomeProducts: response.data is not an array", products);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="products"
      className="products__card-section p_relative pt-3 centred sec-pad"
    >
      <Container fluid>
        <div className="products__card-container productcard__text">
          <div
            className="product__card-title wow fadeIn animated"
            data-wow-delay="01ms"
            data-wow-duration="1000ms"
          >
            <h2 className="productcard__title blue text-dark text-center fw-bold">
              Nuestros Productos
            </h2>
            <div className="productcard__bar"></div>
          </div>

          <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4  align-items-center">
            {products.map((product) => (
              <MainHomeCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
