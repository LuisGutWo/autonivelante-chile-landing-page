import { Container } from "react-bootstrap";
import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainCard from "@/src/components/elements/cards/MainCard";
import React from "react";
import { fetchMainProducts } from "@/src/lib/api";

export default async function MainProductsPage() {
  try {
    const mainProducts = await fetchMainProducts();

    if (!Array.isArray(mainProducts)) {
      console.error(
        "MainProductsPage: response.data is not an array",
        mainProducts
      );
      return null;
    }

    const products = mainProducts.filter(
      (product) => product !== null && product !== undefined
    );

    if (products.length === 0) {
      console.warn(
        "MainProductsPage: No products found",
        "Please check your API response"
      );
      return null;
    }

    const breadcrumbItems = [{ name: "Productos", href: "products" }];

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="breadcrumb_container">
          <Breadcrumb items={breadcrumbItems} />
          <div className="d-flex justify-content-center align-items-center">
            <section
              id="products"
              className="products__card-section p_relative pt-3 centred sec-pad"
            >
              <Container fluid>
                <div className="products__card-container productcard__text">
                  <div className="outer-container">
                    {products.map((product) => {
                      if (!product) {
                        console.warn(
                          "MainProductsPage: A product is null or undefined",
                          "Please check your API response"
                        );
                        return null;
                      }

                      return (
                        <MainCard
                          key={product.id}
                          product={product}
                        />
                      );
                    })}
                  </div>
                </div>
              </Container>
            </section>
          </div>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("MainProductsPage: Error fetching main products", error);
    return null;
  }
}
