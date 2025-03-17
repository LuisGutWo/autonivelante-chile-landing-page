import Layout from "@/src/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
export default function Error404() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1}>
        <section className="error-section p_relative centred">
          <div className="auto-container">
            <div className="inner-box">
              <figure className="error-image">
                <Image src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/error-1.png?alt=media&token=784ac3a0-7b41-4653-9e06-2f675be9e3fe"
                alt=""
                width={300}
                height={300}  
                className="w-100"
                layout="responsive"
                objectFit="contain"
                
                />
              </figure>
              <h2>
                Oops! Esta pagina no esta disponible...
              </h2>
              <Link href="/" className="theme-btn-one">
                <i className="icon-5"></i>Regresar al Home.
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
