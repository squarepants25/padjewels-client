import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Logo from "../../components/header/Logo";
import p1 from "../../assets/designer-artificial-jewellery.jpg";
// import logo from '../../assets/img/logo/logo2.jpg'
import logo from "../../assets/logo-2.jpg";
import p2 from "../../assets/ourapporach.webp";

import FooterCopyright from "../../components/footer/FooterCopyright";

const About = () => {
  let { pathname } = useLocation();

  return (
    <Fragment>
      <SEO
        titleTemplate="About us"
        description="About page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "About us", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className="w-full h-full flex flex-col items-center justify-center gap-y-8 mb-16 mt-8">
          {/* about section */}
          <div
            className="w-[90%] h-auto d-flex flex-row justify-center items-center space-y-6"
            id="about-section-part"
          >
            <div className="w-[30%] h-[30%] mr-8">
              <img src={logo} alt="" />
            </div>

            <div className="w-full h-full  bg-gray-100 rounded-lg flex flex-col justify-center items-center py-6 px-4 lg:d-flex flex-col">
              <h1 className="text-3xl font-bold font-serif">About Us</h1>
              <div className="w-[100%] h-[100%] ">
                <p className="text-lg  ">
                  We exist to craft high quality, exquisite designs, exceptional
                  management and extra ordinary service. We Pad Jewels
                  epitomizes sophistications, elegance and innovation in every
                  piece we create. Our dedicated design and development team
                  enable us cater to current trend and hence being available to
                  our customers with unique and classic designs.
                </p>
              </div>
            </div>
          </div>
          {/* our mission */}
          <div className="w-[90%] h-auto flex flex-row justify-center items-center  space-y-6">
            <div className="w-full h-full  bg-gray-100 rounded-lg flex flex-col justify-center items-center py-6 px-4">
              <h1 className="text-3xl font-bold font-serif ">Our Mission</h1>
              <div className="w-[100%] h-[100%] ">
                <p className="text-lg ">
                  Our website dedicated to imitation jewellery aims to redefine
                  elegance and affordability. Our mission is to provide access
                  to high-quality, meticulously crafted pieces that capture the
                  essence of luxury without the hefty price tag. We believe that
                  everyone deserves to adorn themselves with stunning
                  accessories that reflect their unique style and personality.
                  From classic elegance to contemporary chic, our collection is
                  curated with care to ensure that each piece becomes a
                  cherished addition to your wardrobe. Join us on our mission to
                  make luxury accessible to all, one exquisite piece at a time.
                </p>
              </div>
            </div>
            <div className="w-[30%] h-[30%] ml-8">
              <img src={p1} className="rounded" alt="" />
            </div>
          </div>
          {/* our approach */}
          <div className="w-[90%] h-auto flex flex-row justify-center items-center  space-y-6">
            <div className="w-[50%] h-[50%] mr-8">
              <img src={p2} className="rounded" alt="" />
            </div>
            <div className="w-full h-full  bg-gray-100 rounded-lg flex flex-col justify-center items-center py-6 px-4">
              <h1 className="text-3xl font-bold font-serif ">Our Approach</h1>
              <div>
                <p className="text-lg ">
                  At our imitation jewellery website, our approach is rooted in
                  three core principles: quality, variety, and customer service
                  with satisfaction. We prioritize quality by meticulously
                  selecting materials and artisans who craft each piece with
                  precision and care, ensuring that every item exudes a sense of
                  luxury and durability. Our commitment to variety means
                  offering a diverse range of designs, from classic to
                  contemporary, ensuring that there's something to suit every
                  taste and occasion. But above all, we prioritize customer
                  satisfaction, offering a seamless shopping experience from
                  browsing to purchase and beyond. We provide detailed product
                  information, responsive customer service, and hassle-free
                  returns, ensuring that our customers feel confident and
                  delighted with their jewellery choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default About;
