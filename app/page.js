import Layout from "@/src/components/layout/Layout";
import About from "@/src/components/layout/About";
import Banner from "@/src/components/layout/Banner";
import Services from "@/src/components/layout/Services";
import FeaturesBanner from "@/src/components/layout/FeaturesBanner";
import MainFeatures from "@/src/components/layout/MainFeatures";
import ProductsCard from "@/src/components/layout/ProductsCard";
import Contact from "@/src/components/layout/Contact";

export default async function Home() {
  return (
    <Layout headerStyle={3} footerStyle={1}>
      <Banner />
      <FeaturesBanner />
      <About />
      <Services />
      <MainFeatures />
      <ProductsCard />
      <Contact />
    </Layout>
  );
}
