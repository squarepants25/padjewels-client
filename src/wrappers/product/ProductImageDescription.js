import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import clsx from "clsx";
import { getDiscountPrice } from "../../helpers/product";
import ProductImageGallery from "../../components/product/ProductImageGallery";
import ProductDescriptionInfo from "../../components/product/ProductDescriptionInfo";
import ProductImageGallerySideThumb from "../../components/product/ProductImageGallerySideThumb";
import ProductImageFixed from "../../components/product/ProductImageFixed";

import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import { BASE_URL } from "../../constants/Constants";

const ProductImageDescription = ({
  spaceTopClass,
  spaceBottomClass,
  galleryType,
  product,
}) => {
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const wishlistItem = wishlistItems.find((item) => item.id === product.id);
  const compareItem = compareItems.find((item) => item.id === product.id);
  const [products, setProducts] = useState([]);

  // const discountedPrice = getDiscountPrice(product.price, product.discount);
  // const finalProductPrice = +(product.mrpPrice * currency.currencyRate).toFixed(2);
  const finalProductPrice = +(product?.mrpPrice).toFixed(2);

  // const finalDiscountedPrice = +(
  //   discountedPrice * currency.currencyRate
  // ).toFixed(2);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}api/v1/product/productsByCategory/${product.productCategories}`
        );
        setProducts(response.data.products);
        console.log("abc", response.data.products);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      }
    };

    fetchProducts();
  }, [product.productCategories]);

  return (
    <div className={clsx("shop-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            {/* product image gallery */}
            {/* {galleryType === "leftThumb" ? ( */}
            <ProductImageGallerySideThumb
              product={product}
              thumbPosition="left"
            />
            {/* ) : galleryType === "rightThumb" ? ( */}
            {/* <ProductImageGallerySideThumb product={product} /> */}
            {/* ) : galleryType === "fixedImage" ? ( */}
            {/* <ProductImageFixed product={product} /> */}
            {/* ) : ( */}
            {/* <ProductImageGallery product={product} /> */}
            {/* )} */}
          </div>
          <div className="col-lg-6 col-md-6">
            {/* product description info */}
            <ProductDescriptionInfo
              product={product}
              // discountedPrice={discountedPrice}
              currency={currency}
              // finalDiscountedPrice={finalDiscountedPrice}
              finalProductPrice={finalProductPrice}
              cartItems={cartItems}
              cartItem={cartItems.find(
                (cartItem) => cartItem.id === product.id
              )}
              wishlistItem={wishlistItem}
              compareItem={compareItem}
            />
          </div>
          {/*<div className="col-lg-6 col-md-6" style={{ margin: "auto" }}>
            <div className="slider-container">
              <h3 className="text-center font-serif">Similar Products</h3>

              {products &&
              console.log("products", products) &&
              products.length > 0 ? (
                <Slider {...settings}>
                  {products.map((p, index) => (
                    <div key={index}>
                      <div className="card">
                        <img
                          src={p.photos[0].secure_url}
                          className="card-img-top"
                          alt={p.productName}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{p.productName}</h5>
                          <p className="card-text">{p.description}</p>
                          <a className="btn btn-secondary">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              ) : (
                <p className="text-center">No similar products found</p>
              )}
            </div>
            </div>*/}
        </div>
      </div>
    </div>
  );
};

ProductImageDescription.propTypes = {
  galleryType: PropTypes.string,
  product: PropTypes.shape({}),
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default ProductImageDescription;
