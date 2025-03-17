"use client";
import { Button, Container, Image } from "react-bootstrap";
import PropTypes from "prop-types";
import "swiper/css/thumbs";
import "react-multi-carousel/lib/styles.css";
import { formatPrice } from "@/src/config/formatPrice";
import { ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

export default function MainCardDetail({ product }) {
  const dispatch = useDispatch();

  function handleAddItemToCart() {
    try {
      dispatch(addToCart(product));
      toast.success(
        `${product.title} Se agrego satisfactoriamente al carrito!`
      );
    } catch (error) {
      console.error(error);
      toast.error(`Ocurrió un error al agregar ${product.title} al carrito`);
    }
  }

  return (
    <section className="detailproducts__card-box">
      <Container fluid className="detailproducts__card-maincontent">
        <div
          className="card detailmain__img-box text-center"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/white_circle_bg.png?alt=media&token=6434adda-bb60-43ba-a345-f92d4aac073b)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "27rem",
          }}
        >
          <Image
            src={product.image}
            className="card-img-top"
            alt="Card Detail Image"
          />
        </div>
        <div className="card detailmain__card">
          <div className="detailcard-body">
            <h2 className="fw-bold pb-3">{product.title ?? "Product Name"}</h2>
            <h5 className="fw-bold mb_25">{product.subtitle ?? ""}</h5>
            {Array.isArray(product?.desc) ? (
              product.desc.map((desc, index) => (
                <p key={index} className="fw-normal mb_25">
                  {desc}
                </p>
              ))
            ) : (
              <p className="fw-normal mb_25">{product?.desc}</p>
            )}
            {product.details && (
              <>
                <p className="fs_16 mt-2 mb-2 fw-bold">Características :</p>
                <ul className="text-dark list-style-one">
                  {product?.details?.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="detailcard-price fw-bold">
              {product.price ? formatPrice(product.price) : "Sin precio"}
            </div>
            <div className="buttons__card d-flex flex-column w-75">
              <Button
                onClick={handleAddItemToCart}
                className="btn btn-primary btn-lg w-100 d-flex justify-content-evenly align-content-center"
              >
                <b>Agregar al carro</b>
                <ShoppingBag />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
MainCardDetail.propTypes = {
  product: PropTypes.object.isRequired,
};
