// import React, { useEffect } from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBProgress,
//   MDBProgressBar,
//   // MDBTypography,
// } from "mdb-react-ui-kit";
// import { Fragment } from "react";
// import { useLocation } from "react-router-dom";
// import LayoutOne from "../../layouts/LayoutOne";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import SEO from "../../components/seo";
// import { useSelector } from "react-redux";
// import { fetchAndDispatchOrders } from "../../helpers/userOrders";
// import { store } from "../../store/store";

// const Orders = () => {
//   let { pathname } = useLocation();
//   const user = useSelector((state) => state.user);
//   const products = useSelector((state) => state.product);

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchAndDispatchOrders(user, store.dispatch);
//     };
//     fetchData();
//   }, [user]);

//   const orders = useSelector((state) => state.order);
//   console.log(orders)

//   const mapProductDetails = (product) => {
//     const productDetails = products.products.find((p) => p._id === product._id);

//     if (productDetails) {
//       return (
//         <>
//           <MDBRow key={productDetails._id}>
//             <MDBCol md="2">
//               <MDBCardImage
//                 src={productDetails.photos[0].secure_url}
//                 fluid
//                 alt={productDetails.productName}
//               />
//             </MDBCol>
//             <MDBCol
//               md="2"
//               className="text-center d-flex justify-content-center align-items-center"
//             >
//               <p className="text-muted mb-0">{productDetails.productName}</p>
//             </MDBCol>
//             <MDBCol
//               md="2"
//               className="text-center d-flex justify-content-center align-items-center"
//             >
//               <p className="text-muted mb-0 small">{productDetails.color}</p>
//             </MDBCol>
//             <MDBCol
//               md="2"
//               className="text-center d-flex justify-content-center align-items-center"
//             >
//               <p className="text-muted mb-0 small">
//                 Qty: {productDetails.productQuantity}
//               </p>
//             </MDBCol>
//             <MDBCol
//               md="2"
//               className="text-center d-flex justify-content-center align-items-center"
//             >
//               <p className="text-muted mb-0 small">{productDetails.mrpPrice}</p>
//             </MDBCol>
//           </MDBRow>
//           <hr
//             className="mb-4"
//             style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
//           />
//           <MDBRow className="align-items-center">
//             <MDBCol md="2">
//               <p className="text-muted mb-0 small">Track Order</p>
//             </MDBCol>
//             <MDBCol md="10">
//               <MDBProgress style={{ height: "6px", borderRadius: "16px" }}>
//                 <MDBProgressBar
//                   style={{
//                     borderRadius: "16px",
//                     backgroundColor: "#a8729a",
//                   }}
//                   width={50}
//                   valuemin={0}
//                   valuemax={100}
//                 />
//               </MDBProgress>
//               <div className="d-flex justify-content-around mb-1">
//                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Ordered</p>
//                 <p className="text-muted mt-1 mb-0 small ms-xl-5">Delivered</p>
//               </div>
//             </MDBCol>
//           </MDBRow>
//         </>
//       );
//     }
//   };

//   return (
//     <Fragment>
//       <SEO
//         titleTemplate="Orders"
//         description="Orders page of flone react minimalist eCommerce template."
//       />
//       <LayoutOne headerTop={"visible"}>
//         <Breadcrumb
//           pages={[
//             { label: "Home", path: process.env.PUBLIC_URL + "/" },
//             { label: "Orders", path: process.env.PUBLIC_URL + pathname },
//           ]}
//         />
//         <section
//           className="h-100 gradient-custom"
//           style={{ backgroundColor: "#eee" }}
//         >
//           <MDBContainer className="py-5 h-100">
//             <MDBRow className="justify-content-center align-items-center h-100">
//               <MDBCol lg="10" xl="8">
//                 <MDBCard style={{ borderRadius: "10px" }}>
//                   {orders.orders && orders.orders.length > 0 ? (
//                     orders.orders.map((orderItem) => (
//                       <MDBCard
//                         key={orderItem._id}
//                         className="shadow-0 border mb-4"
//                       >
//                         <MDBCardBody>
//                           {orderItem.product.map((product) =>
//                             mapProductDetails(product)
//                           )}
//                           {/* ... (other details for the order item) */}
//                         </MDBCardBody>
//                       </MDBCard>
//                     ))
//                   ) : (
//                     <MDBCardBody>
//                       <p>No orders found.</p>
//                     </MDBCardBody>
//                   )}
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </section>
//       </LayoutOne>
//     </Fragment>
//   );
// };

// export default Orders;
// import React, { useEffect } from "react";
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBProgress,
//   MDBProgressBar,
// } from "mdb-react-ui-kit";
// import { Fragment } from "react";
// import { useLocation } from "react-router-dom";
// import LayoutOne from "../../layouts/LayoutOne";
// import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import SEO from "../../components/seo";
// import { useSelector } from "react-redux";
// import { fetchAndDispatchOrders } from "../../helpers/userOrders";
// import { store } from "../../store/store";

// const Orders = () => {
//   let { pathname } = useLocation();
//   const user = useSelector((state) => state.user);
//   const products = useSelector((state) => state.product);

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchAndDispatchOrders(user, store.dispatch);
//     };
//     fetchData();
//   }, [user]);

//   const orders = useSelector((state) => state.order);
//   console.log(orders);

//   const mapProductDetails = (product, orderItem) => {
//     const productDetails = products.products.find((p) => p._id === product._id);
//     console.log(productDetails);
//     console.log(orderItem);

//     if (productDetails) {
//       return (
//         <MDBRow
//           className="w-100 border py-3 justify-content-center"
//           key={productDetails._id}
//         >
//           <MDBCol
//             lg="4"
//             className="border-right d-flex justify-content-center align-items-center"
//           >
//             <MDBCardImage
//               src={productDetails.photos[0].secure_url}
//               fluid
//               alt={productDetails.productName}
//             />
//           </MDBCol>
//           <MDBCol
//             lg="6"
//             className="border-right d-flex justify-content-center align-items-center"
//           >
//             <p>{productDetails.productName}</p>
//           </MDBCol>
//           <MDBCol
//             lg="2"
//             className="d-flex justify-content-center align-items-center"
//           >
//             <p>Qty: {product.quantity}</p>
//           </MDBCol>
//         </MDBRow>
//       );
//     }
//   };

//   return (
//     <Fragment>
//       <SEO
//         titleTemplate="Orders"
//         description="Orders page of flone react minimalist eCommerce template."
//       />
//       <LayoutOne headerTop={"visible"}>
//         <Breadcrumb
//           pages={[
//             { label: "Home", path: process.env.PUBLIC_URL + "/" },
//             { label: "Orders", path: process.env.PUBLIC_URL + pathname },
//           ]}
//         />
//         <section
//           className="h-100 gradient-custom"
//           style={{ backgroundColor: "#eee" }}
//         >
//           <MDBContainer className="py-5 h-100">
//             <MDBRow className="justify-content-center align-items-center h-100">
//               <MDBCol lg="10" xl="8">
//                 <MDBCard style={{ borderRadius: "10px" }}>
//                   {orders.orders && orders.orders.length > 0 ? (
//                     orders.orders.map((orderItem) => (
//                       <MDBCard
//                         key={orderItem._id}
//                         className="shadow-0 border mb-4"
//                       >
//                         <MDBCardBody>
//                           <div className="w-full h-full flex flex-row flex-wrap justify-around my-4 underline">
//                             <p>Order ID: {orderItem.orderId}</p>
//                             <p>
//                               Grand Total :{" "}
//                               <span> &#8377; {orderItem.amount}</span>
//                             </p>
//                           </div>

//                           {orderItem.product.map((product) =>
//                             mapProductDetails(product, orderItem)
//                           )}
//                           <MDBRow className="align-items-center">
//                             <MDBCol md="2">
//                               <p className="text-muted mb-0 small">
//                                 Track Order
//                               </p>
//                             </MDBCol>
//                             <MDBCol md="10">
//                               <MDBProgress
//                                 style={{ height: "6px", borderRadius: "16px" }}
//                               >
//                                 <MDBProgressBar
//                                   style={{
//                                     borderRadius: "16px",
//                                     backgroundColor: "#a8729a",
//                                   }}
//                                   width={
//                                     orderItem.orderStatus === "DELIVERED"
//                                       ? 100
//                                       : 50
//                                   }
//                                   valuemin={0}
//                                   valuemax={100}
//                                 />
//                               </MDBProgress>
//                               <div className="d-flex justify-content-around mb-1">
//                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                                   Ordered
//                                 </p>
//                                 <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                                   Delivered
//                                 </p>
//                               </div>
//                             </MDBCol>
//                           </MDBRow>
//                         </MDBCardBody>
//                       </MDBCard>
//                     ))
//                   ) : (
//                     <MDBCardBody>
//                       <p>No orders found.</p>
//                     </MDBCardBody>
//                   )}
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </section>
//       </LayoutOne>
//     </Fragment>
//   );
// };

// export default Orders;
import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import SEO from "../../components/seo";
import { useSelector } from "react-redux";
import { fetchAndDispatchOrders } from "../../helpers/userOrders";
import { store } from "../../store/store";
import { BASE_URL } from "../../constants/Constants";
import cogoToast from "cogo-toast";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

const Orders = () => {
  let { pathname } = useLocation();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.product);
  const [currentOrderId, setCurrentOrderId] = useState("");
  const [returnRequests, setReturnRequests] = useState([]);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [returnOrder, setReturnOrder] = useState({
    orderId: "",
    returnReason: "",
    comment: "",
    accountNumber: "",
    ifscCode: "",
    bankName: "",
    accountHolderName: "",
  });

  const handleReturnClose = () => setShowReturnModal(false);
  const handleReturnShow = (orderId) => {
    setCurrentOrderId(orderId);
    setReturnOrder({ ...returnOrder, orderId: orderId }); // Set the orderId in the returnOrder state
    setShowReturnModal(true);
  };

  const handleReturnOrderChange = (e) => {
    const { name, value } = e.target;
    setReturnOrder({ ...returnOrder, [name]: value });
  };

  const handleReturnOrderSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}api/v1/return/return-requests`,
        returnOrder
      );
      cogoToast.success("Return Initiated");

      window.location.reload();
    } catch (error) {
      console.error("Error status:", error);
      cogoToast.error("Something went wrong!Try again later");
    }
  };

  const handleCancelOrder = async (orderID) => {
    try {
      const response = await fetch(
        `${BASE_URL}api/v1/order/${orderID}/orderstatus`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ orderStatus: "CANCELLED" }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();

        if (response.status === 200) {
          console.log(responseData.message);
          console.log("Updated Order:", responseData.updatedOrder);

          cogoToast.success("Order status updated successfully");
          window.location.reload();
        } else {
          console.error("Unexpected response status:", response.status);
        }
      } else {
        console.error("Failed to update order status:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchAndDispatchOrders(user, store.dispatch);
    };
    fetchData();
    fetchReturnRequests();
  }, [user]);

  const fetchReturnRequests = async (returnRequests) => {
    try {
      const res = await axios.get(
        `${BASE_URL}api/v1/return/return-requests/${returnRequests}`
      );
      setReturnRequests(res.data);
    } catch (error) {
      console.error("Error status:", error);
    }
  };

  const orders = useSelector((state) => state.order);
  console.log(orders);
  useEffect(() => {
    if (orders.orders) {
      orders.orders.forEach((order) => {
        fetchReturnRequests(order.returnRequests);
      });
    }
  }, [orders]);

  const mapProductDetails = (product, orderItem) => {
    const productDetails = products.products.find((p) => p._id === product._id);
    console.log(productDetails);
    console.log(orderItem);

    if (productDetails) {
      return (
        <MDBRow
          style={{
            marginLeft: "4px",
          }}
          className="w-100 border py-3 justify-content-center"
          key={productDetails._id}
        >
          <MDBCol
            lg="4"
            className="border-right d-flex justify-content-center align-items-center"
          >
            <MDBCardImage
              src={productDetails.photos[0].secure_url}
              fluid
              alt={productDetails.productName}
            />
          </MDBCol>
          <MDBCol
            lg="6"
            className="border-right d-flex justify-content-center align-items-center"
          >
            <p>{productDetails.productName}</p>
          </MDBCol>
          <MDBCol
            lg="2"
            className="d-flex justify-content-center align-items-center"
          >
            <p>Qty: {product.quantity}</p>
          </MDBCol>
        </MDBRow>
      );
    }
  };

  const getProgressWidth = (status) => {
    switch (status) {
      case "ORDERED":
        return 25;
      case "SHIPPED":
        return 50;
      case "DELIVERED":
        return 100;
      case "CANCELLED":
        return 100;
      default:
        return 0;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "ORDERED":
        return "Order Placed";
      case "SHIPPED":
        return "Shipped";
      case "DELIVERED":
        return "Delivered";
      case "CANCELLED":
        return "Cancelled";
      default:
        return "Unknown";
    }
  };

  const getReturnProgressWidth = (status) => {
    switch (status) {
      case "REQUESTED":
        return 25;
      case "APPROVED":
        return 50;
      case "REJECTED":
        return 100;
      case "RETURNED":
        return 0;
      default:
        return 0;
    }
  };

  const getReturnStatusText = (status) => {
    switch (status) {
      case "REQUESTED":
        return "Return Requested";
      case "APPROVED":
        return "Return Accepted";
      case "REJECTED":
        return "Return rejected";
      case "RETURNED":
        return "Order Returned";
      default:
        return "Unknown";
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="Orders"
        description="Orders page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop={"visible"}>
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Orders", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100 ">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  {orders.orders && orders.orders.length > 0 ? (
                    orders.orders.map((orderItem) => (
                      <MDBCard
                        key={orderItem._id}
                        className="shadow-0 border mb-4 "
                      >
                        <MDBCardBody>
                          <div className="w-full h-full flex flex-row flex-wrap justify-around my-4 ">
                            <p className="underline">
                              Order ID: {orderItem.orderId}
                            </p>
                            <p className="underline">
                              Grand Total :{" "}
                              <span> &#8377; {orderItem.amount}</span>
                            </p>
                            {orderItem.orderStatus == "DELIVERED" ? (
                              <button
                                type="button"
                                class="btn btn-outline-success"
                                onClick={() => handleReturnShow(orderItem._id)}
                              >
                                Return order
                              </button>
                            ) : (
                              ""
                            )}
                            {orderItem.orderStatus !== "DELIVERED" &&
                            orderItem.orderStatus !== "SHIPPED" ? (
                              <button
                                type="button"
                                class="btn btn-outline-danger"
                                onClick={() => handleCancelOrder(orderItem._id)}
                              >
                                Cancel order
                              </button>
                            ) : (
                              ""
                            )}
                          </div>

                          {orderItem.product.map((product) =>
                            mapProductDetails(product, orderItem)
                          )}

                          <MDBRow className="align-items-center">
                            <MDBCol md="2">
                              <p className="text-muted mb-0 small">
                                Track Order
                              </p>
                            </MDBCol>
                            <MDBCol md="10">
                              <MDBProgress
                                style={{
                                  height: "6px",
                                  borderRadius: "16px",
                                  width: "100%",
                                }}
                              >
                                <MDBProgressBar
                                  style={{
                                    borderRadius: "16px",
                                    backgroundColor:
                                      orderItem.orderStatus === "CANCELLED"
                                        ? "red"
                                        : "#a8729a",
                                  }}
                                  width={getProgressWidth(
                                    orderItem.orderStatus
                                  )}
                                  valuemin={0}
                                  valuemax={100}
                                />
                              </MDBProgress>
                              <div className="d-flex justify-content-around mb-1">
                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                  {getStatusText(orderItem.orderStatus)}
                                </p>
                              </div>
                            </MDBCol>
                          </MDBRow>
                          {orderItem.returnRequests ? (
                            <MDBRow className="align-items-center">
                              <MDBCol md="2">
                                <p className="text-muted mb-0 small">
                                  Track Return Request
                                </p>
                              </MDBCol>
                              <MDBCol md="10">
                                <MDBProgress
                                  style={{
                                    height: "6px",
                                    borderRadius: "16px",
                                    width: "600px",
                                  }}
                                >
                                  <MDBProgressBar
                                    style={{
                                      borderRadius: "16px",
                                      backgroundColor: "gold",
                                    }}
                                    width={getReturnProgressWidth(
                                      returnRequests.returnStatus
                                    )}
                                    valuemin={0}
                                    valuemax={100}
                                  />
                                </MDBProgress>
                                <div className="d-flex justify-content-around mb-1">
                                  <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                    {getReturnStatusText(
                                      returnRequests.returnStatus
                                    )}
                                  </p>
                                </div>
                              </MDBCol>
                            </MDBRow>
                          ) : (
                            ""
                          )}
                        </MDBCardBody>
                      </MDBCard>
                    ))
                  ) : (
                    <MDBCardBody>
                      <p>No orders found.</p>
                    </MDBCardBody>
                  )}
                </MDBCard>
              </MDBCol>
            </MDBRow>

            <Modal
              show={showReturnModal}
              onHide={handleReturnClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Return Your Order</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Return Reason
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      name="returnReason"
                      value={returnOrder.reason}
                      onChange={handleReturnOrderChange}
                    />
                  </div>

                  <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">
                      Comment
                    </label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="inputAddress"
                      name="comment"
                      value={returnOrder.comment}
                      onChange={handleReturnOrderChange}
                    />
                  </div>
                  <h4>Bank Account Details</h4>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      Bank Account No
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      name="accountNumber"
                      value={returnOrder.accountNumber}
                      onChange={handleReturnOrderChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">
                      Account Holder Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      name="accountHolderName"
                      value={returnOrder.accountHolderName}
                      onChange={handleReturnOrderChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      name="bankName"
                      value={returnOrder.bankName}
                      onChange={handleReturnOrderChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputZip" className="form-label">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      name="ifscCode"
                      value={returnOrder.ifscCode}
                      onChange={handleReturnOrderChange}
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      class="btn btn-outline-success"
                      onClick={handleReturnOrderSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </MDBContainer>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

export default Orders;
