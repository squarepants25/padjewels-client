import { Fragment, useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

const ProductImageGalleryLeftThumb = ({ product, thumbPosition }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);

  const slides = product?.photos.map((img, i) => ({
    src: process.env.PUBLIC_URL + img.secure_url,
    key: i,
  }));

  // Swiper settings for the main gallery
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  // Swiper settings for the thumbnails
  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      320: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      640: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      768: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      992: {
        slidesPerView: 4,
        direction: "horizontal",
      },
      1200: {
        slidesPerView: 4,
        direction: "vertical",
      },
    },
  };

  return (
    <Fragment>
      <div>
        <div className="row row-5">
          <div
            className={clsx(
              thumbPosition === "left"
                ? "col-xl-10 order-1 order-xl-2"
                : "col-xl-10"
            )}
          >
            <div className="product-large-image-wrapper">
              {product?.photos?.length ? (
                <Swiper options={gallerySwiperParams}>
                  {product?.photos.map((single, key) => (
                    <SwiperSlide key={key}>
                      <button
                        className="lightgallery-button"
                        onClick={() => setIndex(key)}
                      >
                        <i className="pe-7s-expand1"></i>
                      </button>
                      <div className="single-image">
                        <img
                          src={single?.secure_url}
                          className="img-fluid"
                          alt="productThumbnail"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <AnotherLightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Thumbnails, Zoom, Fullscreen]}
                  />
                </Swiper>
              ) : null}
            </div>
          </div>
          <div
            className={clsx(
              thumbPosition === "left"
                ? "col-xl-2 order-2 order-xl-1"
                : "col-xl-2"
            )}
          >
            <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb ">
              {product?.photos?.length ? (
                <Swiper options={thumbnailSwiperParams}>
                  {product.photos.map((single, key) => (
                    <SwiperSlide key={key}>
                      <div className="single-image">
                        <img
                          src={single.secure_url}
                          className="img-fluid  "
                          alt="thumbnail"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductImageGalleryLeftThumb.propTypes = {
  product: PropTypes.shape({
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        secure_url: PropTypes.string,
      })
    ),
  }),
  thumbPosition: PropTypes.string,
};

export default ProductImageGalleryLeftThumb;
