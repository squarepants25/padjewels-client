import { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Form from "react-bootstrap/Form";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import cogoToast from "cogo-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { deleteAllFromCart } from "../../store/slices/cart-slice";
import Swal from "sweetalert2";
import BASE_URL from "../../constants/Constants";

// import dotenv from "dotenv";

const Checkout = () => {
  // let cartTotalPrice = 0;
  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const user = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    companyName: "Home",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    phone: " ",
    email: "",
    orderNotes: "",
    coupon: "",
  });

  const formatFieldName = (fieldName) => {
    return fieldName
      .replace(/([A-Z])/g, " $1") // insert a space before all capital letters
      .toLowerCase() // convert all letters to lowercase
      .replace(/^./, (str) => str.toUpperCase()); // capitalize the first letter
  };
  const validateForm = () => {
    if (!selectedAddress) {
      for (let field in billingDetails) {
        if (
          field !== "orderNotes" &&
          field !== "coupon" &&
          !billingDetails[field]
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Please fill in the ${formatFieldName(
              field
            )} before placing your order.`,
          });
          return false;
        }
      }
    } else {
      // Validate only essential fields when an address is selected
      const essentialFields = ["city", "country"];
      for (let field of essentialFields) {
        if (!billingDetails[field]) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Please fill in the ${formatFieldName(
              field
            )} before placing your order.`,
          });
          return false;
        }
      }
    }

    if (!paymentMethod) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a payment method before placing your order.",
      });
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckout = async (e) => {
    console.log("jjjjjjj");
    // e.preventDefault();
    if (e) e.preventDefault();
    let address;
    if (selectedAddress) {
      address = `${selectedAddress.houseName} ${selectedAddress.landmark} ${selectedAddress.city} ${selectedAddress.stateName} ${selectedAddress.country} ${selectedAddress.pincode}`;
    } else {
      address = `${billingDetails.apartment} ${billingDetails.streetAddress} ${billingDetails.city} ${billingDetails.state} ${billingDetails.country} ${billingDetails.postcode}`;
    }

    if (!paymentMethod) {
      cogoToast.error("Please select a payment method.");
      return;
    }
    const obj = {
      firstName: billingDetails.firstName,
      lastName: billingDetails.lastName,
      products: cartItems,
      coupon: coupon,
      user: user.userId,
      address: address,
      phoneNumber: billingDetails.phone,
      paymentOption: "COD",
      amount: cartTotalPrice.toFixed(2),
    };
    console.log(obj);
    if (!address || !billingDetails.phoneNumber) {
      cogoToast.error("Please provide address and phone number.");
      return;
    }
    if (paymentMethod === "COD") {
      // Handle COD payment
      try {
        const response = await axios.post(
          `${BASE_URL}api/v1/order/generateorder`,
          {
            firstName: billingDetails.firstName,
            lastName: billingDetails.lastName,
            products: cartItems,
            user: user.userId,
            coupon: coupon,
            address: address,
            phoneNumber: billingDetails.phoneNumber,
            paymentOption: paymentMethod,
            amount: cartTotalPrice.toFixed(2),
          }
        );

        if (response.status === 200) {
          cogoToast.success("Order placed successfully!");
          dispatch(deleteAllFromCart());
          navigate("/orders");
        }
      } catch (error) {
        console.error("Error placing order:", error);

        cogoToast.error("Failed to place order. Please try again.");
      }
    } else if (paymentMethod === "ONLINE") {
      cogoToast.success("Order placed successfully!");
      dispatch(deleteAllFromCart());
      navigate("/orders");
      // Handle online payment
      try {
        const response = await axios.post(
          `${BASE_URL}api/v1/order/generateorder`,
          {
            products: cartItems,
            user: user.userId,
            address: address,
            phoneNumber: billingDetails.phoneNumber,
            paymentOption: "ONLINE",
            amount: cartTotalPrice.toFixed(2),
          }
        );

        const order = response.data.paidOrder;
        var options = {
          key: "", // Enter the Key ID generated from the Dashboard
          amount: order?.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Shukra Jewellars",
          description: " Transaction",
          image: "https://example.com/your_logo",
          order_id: order?.orderId,
          handler: async function (response) {
            const data = await fetch(
              "https://padjewels.onrender.com/api/v1/paymentmethod/verifytransaction",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              }
            );
            const val = await data.json();
            cogoToast.success(val.message);
          },
          prefill: {
            name: billingDetails.firstName,
            email: billingDetails.email,
            contact: billingDetails.phoneNumber,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        if (response.status === 200) {
          cogoToast.success("Order placed successfully!");
          dispatch(deleteAllFromCart());
          navigate("/orders");
        }
      } catch (error) {
        console.log("Error placing order:", error);
        cogoToast.error("Failed to place order. Please try again.");
      }
    } else {
      cogoToast.error("Please select a payment method.");
    }
  };

  const confirmAndCheckout = async () => {
    if (!validateForm()) {
      return;
    }

    const result = await Swal.fire({
      title: "Order confirmation",
      text: "Are you sure you want to proceed the payment ",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      handleCheckout();
    }
  };
  const handleApplyCoupon = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${BASE_URL}api/v1/carts/cart/coupon/${coupon}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Failed to fetch coupon: ${errorData.message}`);
        cogoToast.error("Coupon code invalid", { position: "bottom-left" });
        return;
      }

      const couponData = await response.json();

      // Apply the coupon to the cart
      if (couponData.couponType === "%") {
        // If the coupon is a percentage discount, calculate the discount
        const discount = cartTotalPrice * (couponData.cost / 100);
        setCartTotalPrice(cartTotalPrice - discount);
      } else if (couponData.couponType === "Rs") {
        // If the coupon is a fixed amount discount, subtract it from the total price
        setCartTotalPrice(cartTotalPrice - couponData.cost);
      }
      cogoToast.success("Coupon applied successfully", {
        position: "bottom-left",
      });
      setCouponApplied(true);
    } catch (error) {
      console.error("Error in API request:", error);
    }
  };

  const fetchAddressData = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}api/v1/address/user/${user.userId}`
      );
      if (response.ok) {
        const fetchedAddressData = await response.json();
        setAddresses(fetchedAddressData);
      } else {
        console.error("Failed to fetch user addresses");
      }
    } catch (error) {
      console.error("Error during data fetching:", error);
    }
  };

  useEffect(() => {
    fetchAddressData();
  }, []);

  const handleAddressChange = (addressId) => {
    const selected = addresses.find((address) => address._id === addressId);
    setSelectedAddress(selected);
    console.log(selected);
    setBillingDetails((prevDetails) => ({
      ...prevDetails,
      streetAddress: selected ? selected.landmark : "",
      state: selected ? selected.stateName : "",
      postcode: selected ? selected.pincode : "",
      country: selected ? selected.country : "",
      city: selected ? selected.city : "",
      apartment: selected ? selected.houseName : "",
    }));
  };

  useEffect(() => {
    let total = 0;

    cartItems.forEach((cartItem) => {
      const discountedPrice = getDiscountPrice(
        cartItem.mrpPrice,
        cartItem.discount
      );
      const finalProductPrice = (
        cartItem.mrpPrice * currency.currencyRate
      ).toFixed(2);
      const finalDiscountedPrice = (
        discountedPrice * currency.currencyRate
      ).toFixed(2);

      total +=
        discountedPrice != null
          ? finalDiscountedPrice * cartItem.quantity
          : finalProductPrice * cartItem.quantity;
    });

    setCartTotalPrice(total);
  }, [cartItems, currency]);

  return (
    <Fragment>
      <SEO
        titleTemplate="Checkout"
        description="Checkout page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Address Type</label>
                          <input
                            type="text"
                            name="companyName"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-select mb-20">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            onChange={handleInputChange}
                            value={billingDetails.country}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <input
                            className="billing-address"
                            name="apartment"
                            placeholder="House number and street name"
                            type="text"
                            value={billingDetails.apartment}
                            onChange={handleInputChange}
                          />
                          <input
                            placeholder="Apartment, suite, unit etc."
                            name="streetAddress"
                            type="text"
                            value={billingDetails.streetAddress}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Town / City</label>
                          <input
                            type="text"
                            name="city"
                            value={billingDetails.city}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            value={billingDetails.state}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Postcode / ZIP</label>
                          <input
                            type="text"
                            name="postcode"
                            onChange={handleInputChange}
                            value={billingDetails.postcode}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="additional-info-wrap">
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="card-header font-bold mt-6">
                      <h4>Additional Addresses</h4>
                    </div>
                    {addresses.length > 0
                      ? addresses.map((address, index) => (
                          <div className="card mb-4" style={{ width: "100%" }}>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item" key={index}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="selectedAddress"
                                    id={`address${index}`}
                                    value={address._id}
                                    checked={
                                      selectedAddress &&
                                      selectedAddress._id === address._id
                                    }
                                    onChange={() =>
                                      handleAddressChange(address._id)
                                    }
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor={`address${index}`}
                                  >
                                    {address.houseName}, {address.landmark},
                                    {address.city}, {address.stateName},
                                    {address.pincode}, {address.country}
                                  </label>
                                </div>
                              </li>
                            </ul>
                          </div>
                        ))
                      : "No addresses found"}
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.mrpPrice * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              {
                                /* discountedPrice != null
                                ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity); */
                              }
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol +
                                        (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2)
                                      : currency.currencySymbol +
                                        (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {currency.currencySymbol +
                                cartTotalPrice.toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="w-full h-full">
                        <div className="discount-code-wrapper">
                          <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gray">
                              Use Coupon Code
                            </h4>
                          </div>
                          <div className="discount-code">
                            <p>Enter your coupon code if you have one.</p>
                            <form onSubmit={handleApplyCoupon}>
                              <input
                                type="text"
                                required
                                name="name"
                                value={coupon}
                                onChange={(e) => {
                                  const value = e.target.value;
                                  console.log(value);
                                  setCoupon(value);
                                  handleInputChange(value);
                                }}
                              />
                              <button
                                className="cart-btn-2"
                                type="submit"
                                disabled={couponApplied}
                              >
                                Apply Coupon
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="payment-method">
                        <h4>Payment Method</h4>
                        <div className="payment-method-form">
                          <div className="my-2">
                            <input
                              type="radio"
                              id="online-payment"
                              name="payment-method"
                              value="ONLINE"
                              className=" inline-block mx-1"
                              style={{ height: "15px", width: "15px" }} // Adjust size here
                              onChange={handlePaymentMethodChange}
                            />
                            <label htmlFor="online-payment ">
                              Online Payment
                            </label>
                          </div>

                          <div>
                            <input
                              type="radio"
                              id="cod"
                              name="payment-method"
                              value="COD"
                              className="inline-block mx-1"
                              style={{ height: "15px", width: "15px" }} // Adjust size here
                              onChange={handlePaymentMethodChange}
                              defaultChecked // Make this the default option
                            />
                            <label htmlFor="cod">Cash on Delivery (COD)</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="place-order mt-25">
                      <button
                        className="btn-hover"
                        onClick={confirmAndCheckout}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
