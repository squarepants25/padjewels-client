import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import GoogleMap from "../../components/google-map";
import axios from "axios";
import BASE_URL from "../../constants/Constants";

const Contact = () => {
  let { pathname } = useLocation();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}api/v1/contact-us/contact`,
        formData
      );
      if (response.data.success) {
        setFormMessage("Message sent successfully!");
        setFormData({
          Name: "",
          Email: "",
          Subject: "",
          Message: "",
        });
      }
    } catch (error) {
      setFormMessage("Failed to send message.");
      console.error("Error sending contact message:", error);
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Contact"
        description="Contact page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Contact", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <GoogleMap lat={47.444} lng={-122.176} />
            </div>
            <div className="custom-row-2">
              <div className="col-12 col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>+91 8591074235</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:yourname@email.com">
                          jewelspad7@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p> </p>Shop No 5 Shakti Tower, Shakti Nagar
                      <p>Dahisar(East) Mumbai.</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/share/VaUP7x8PJkfL7vAg/?mibextid=qi2Omg"
                          target="blank"
                        >
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/padjewels/?utm_source=qr&igsh=djU1cjJzemplcm80"
                          target="blank"
                        >
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input
                          name="Name"
                          placeholder="Name*"
                          type="text"
                          value={formData.Name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          name="Email"
                          placeholder="Email*"
                          type="email"
                          value={formData.Email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="Subject"
                          placeholder="Subject*"
                          type="text"
                          value={formData.Subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="Message"
                          placeholder="Your Message*"
                          value={formData.Message}
                          onChange={handleChange}
                          required
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-message">{formMessage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
