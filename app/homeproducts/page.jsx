import { Container } from "react-bootstrap";

import Layout from "@/src/components/layout/Layout";
import Breadcrumb from "@/src/components/common/Breadcrumb/Breadcrumb";
import MainHomeCard from "@/src/components/elements/cards/MainHomeCard";
import { fetchHomeProducts } from "@/src/lib/api";

export default async function HomeProducts() {
  try {
    const homeProducts = await fetchHomeProducts();
    if (!Array.isArray(homeProducts)) {
      console.error(
        "HomeProducts: response.data is not an array",
        homeProducts
      );
      return null;
    }

    const products = homeProducts.filter(
      (product) => product !== null && product !== undefined
    );
    const breadcrumbItems = [{ name: "Productos", href: "products" }];

    return (
      <Layout headerStyle={4} footerStyle={1}>
        <Container className="mt_150">
          <Breadcrumb items={breadcrumbItems} />

          <div className="d-flex justify-content-center align-items-center">
            <section
              id="products"
              className="products__card-section p_relative pt-3 centred"
            >
              <div className="products__card-container productcard__text">
                <div className="products__card-box d-flex flex-row flex-wrap justify-content-center gap-4 align-items-center">
                  {products.map((product) => (
                    <MainHomeCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        </Container>
      </Layout>
    );
  } catch (error) {
    console.error("HomeProducts: Error fetching home products", error);
    return null;
  }
}
