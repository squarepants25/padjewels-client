import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Button from "react-bootstrap/Button";
import { selectUserId } from "../../store/slices/user-slice";
import BASE_URL from "../../constants/Constants";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import cogoToast from "cogo-toast";
import axios from "axios";
const MyAccount = () => {
  let { pathname } = useLocation();
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const [userData, setUserData] = useState(null); // Initialize with null
  const [isEditMode, setIsEditMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [changePasswordSuccess, setChangePasswordSuccess] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [show, setShow] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState(null);
  const [userAddress, setUserAddress] = useState([]);
  const [addressData, setAddressData] = useState({
    houseName: "",
    landmark: "",
    city: "",
    pincode: "",
    stateName: "",
    country: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setAddressData({
      houseName: "",
      landmark: "",
      city: "",
      pincode: "",
      stateName: "",
      country: "",
    });
    setShow(true);
  };

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = (address) => {
    setAddressData(address);
    setShowEditModal(true);
  };

  const handleDeleteClose = () => setShowDeleteModal(false);
  const handleDeleteShow = (address) => {
    setShowDeleteModal(true);
    setAddressToDelete(address);
  };
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}api/v1/auth/getUser/${userId}`
        );
        if (response.ok) {
          const fetchedUserData = await response.json();
          setUserData(fetchedUserData);
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error during data fetching:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  useEffect(() => {
    fetchAddressData();
  }, []);

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateAccount = async (e) => {
    e.preventDefault();
    try {
      // console.log('Updating account information with payload:', JSON.stringify(userData));

      const response = await fetch(`${BASE_URL}api/v1/auth/updUser/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Account information updated successfully");
        setIsEditMode(false); // Exit edit mode after successful update
      } else {
        console.error(
          "Failed to update account information. Response:",
          response
        );
      }
    } catch (error) {
      console.error("Error during account update:", error);
    }
  };

  const handleAddAddress = async (e) => {
    e.preventDefault();

    // Check if the user already has three addresses
    if (userAddress?.length >= 3) {
      cogoToast.warn("You can't add more than three addresses.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}api/v1/address/addresses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...addressData, userid: userId }),
      });

      if (response.ok) {
        console.log("Address added successfully");
        cogoToast.success("Address added successfully");
        fetchAddressData();
        setShow(false);
      } else {
        console.error("Failed to add address. Response:", response);
        cogoToast.error("Failed to add address! Try again later");
      }
    } catch (error) {
      console.error("Error during account update:", error);
    }
  };

  const handleUpdateAddress = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BASE_URL}api/v1/address/addresses/${addressData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addressData),
        }
      );

      if (response.ok) {
        console.log("Address updated successfully");
        cogoToast.success("Address updated successfully");
        setShowEditModal(false);
        fetchAddressData();
      } else {
        console.error("Failed to update address. Response:", response);
        cogoToast.error("Failed to update address! Try again later");
      }
    } catch (error) {
      console.error("Error during address update:", error);
    }
  };

  const handleAddressInputChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}api/v1/auth/change-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          newPassword: newPassword,
          confirmPassword: confirmPassword,
        }),
      });

      if (response.ok) {
        console.log("Password changed successfully");
        cogoToast.success("Password changed!");
        setChangePasswordSuccess(true);
        setNewPassword("");
        setConfirmPassword("");
        setPasswordMismatch(false);
      } else {
        const errorData = await response.json();
        console.error("Failed to change password. Error:", errorData);
      }
    } catch (error) {
      console.error("Error during password change:", error);
    }
  };

  const fetchAddressData = async () => {
    try {
      const response = await fetch(`${BASE_URL}api/v1/address/user/${userId}`);
      if (response.ok) {
        const fetchedAddressData = await response.json();
        setUserAddress(fetchedAddressData);
      } else {
        console.error("Failed to fetch user addresses");
      }
    } catch (error) {
      console.error("Error during data fetching:", error);
    }
  };

  //Function to handle deletion of address
  const handleDeleteAddress = async () => {
    try {
      const deleteResponse = await axios.delete(
        `${BASE_URL}api/v1/address/addresses/${addressToDelete._id}`
      );

      if (deleteResponse && deleteResponse.data) {
        cogoToast.success("Address deleted!");
        setShowDeleteModal(false);
      }
      fetchAddressData();
    } catch (error) {
      console.error("Error deleting address:", error);
      cogoToast.error("Error deleting address. Please try again.");
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "My Account", path: process.env.PUBLIC_URL + pathname },
          ]}
        />

        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>1 .</span> Edit your account information{" "}
                        <Button
                          variant="outline-primary"
                          size="sm"
                          onClick={() => setIsEditMode(!isEditMode)}
                          className="float-end"
                        >
                          {isEditMode ? "Cancel" : "Update Details"}
                        </Button>
                      </Accordion.Header>
                      <Accordion.Body>
                        {userData && (
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                              <h5>Your Personal Details</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Username</label>
                                  <input
                                    type="text"
                                    name="username"
                                    value={userData.username}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    name="firstname"
                                    value={userData.firstname}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    name="lastname"
                                    value={userData.lastname}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Phone Number</label>
                                  <input
                                    type="number"
                                    name="phone"
                                    value={userData.phone}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Alternate Number</label>
                                  <input
                                    type="number"
                                    name="altNumber"
                                    value={userData.altNumber}
                                    readOnly={!isEditMode}
                                    onChange={handleInputChange}
                                  />
                                </div>
                              </div>
                              {/* Add other fields as needed */}
                            </div>
                            {/* Continue button and other components */}
                            {isEditMode && (
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button
                                    type="submit"
                                    onClick={handleUpdateAccount}
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>2 .</span> Change your password
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Change Password</h4>

                            {passwordMismatch && (
                              <p style={{ color: "red" }}>
                                Password and confirm password do not match
                              </p>
                            )}
                          </div>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>New Password</label>
                                <input
                                  type="password"
                                  value={newPassword}
                                  onChange={(e) =>
                                    setNewPassword(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Password Confirm</label>
                                <input
                                  type="password"
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button
                                type="submit"
                                onClick={handleChangePassword}
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="2"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>3 .</span> Modify your address book entries
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Address Book Entries</h4>
                          </div>
                          <div className="col-lg-12 col-md-12">
                            <Button
                              size="sm"
                              variant="outline-primary"
                              style={{ marginBottom: "20px" }}
                              onClick={handleShow}
                            >
                              Add New Address
                            </Button>
                            <div className="flex flex-row flex-wrap justify-center gap-4">
                              {userAddress && userAddress.length > 0
                                ? userAddress.map((address) => (
                                    <Card
                                      key={address._id}
                                      style={{ width: "15rem" }}
                                    >
                                      <Card.Body>
                                        <Card.Title>Address</Card.Title>

                                        <Card.Text>
                                          #{address.houseName},
                                          {address.landmark}
                                          <br />
                                          {address.city},{address.stateName}
                                          <br />
                                          {address.pincode}, {address.country}
                                        </Card.Text>
                                        <Card.Link
                                          style={{ color: "green" }}
                                          onClick={() =>
                                            handleEditShow(address)
                                          }
                                        >
                                          Edit{" "}
                                        </Card.Link>
                                        <Card.Link
                                          style={{ color: "red" }}
                                          onClick={() =>
                                            handleDeleteShow(address)
                                          }
                                        >
                                          Delete
                                        </Card.Link>
                                      </Card.Body>
                                    </Card>
                                  ))
                                : "No addresses found"}
                            </div>
                          </div>
                          {isEditMode && (
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button
                                  type="submit"
                                  onClick={handleUpdateAccount}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Housename</label>
                  <input
                    type="text"
                    name="houseName"
                    value={addressData.houseName}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={addressData.landmark}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={addressData.city}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>State</label>
                  <input
                    type="text"
                    name="stateName"
                    value={addressData.stateName}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={addressData.pincode}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={addressData.country}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddAddress}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Edit address modal*/}
        <Modal show={showEditModal} onHide={handleEditClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Housename</label>
                  <input
                    type="text"
                    name="houseName"
                    value={addressData.houseName}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Landmark</label>
                  <input
                    type="text"
                    name="landmark"
                    value={addressData.landmark}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>City</label>
                  <input
                    type="text"
                    name="city"
                    value={addressData.city}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>State</label>
                  <input
                    type="text"
                    name="stateName"
                    value={addressData.stateName}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Pincode</label>
                  <input
                    type="number"
                    name="pincode"
                    value={addressData.pincode}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="billing-info">
                  <label>Country</label>
                  <input
                    type="text"
                    name="country"
                    value={addressData.country}
                    onChange={handleAddressInputChange}
                  />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdateAddress}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        {/*Delete modal*/}
        <Modal show={showDeleteModal} onHide={handleDeleteClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {addressToDelete && (
              <React.Fragment>
                <p>
                  {/* Display the address details */}
                  {addressToDelete.houseName},{addressToDelete.landmark}
                  <br />
                  {addressToDelete.city}, {addressToDelete.stateName}
                  <br />
                  {addressToDelete.pincode}
                  <br />
                  {addressToDelete.country}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Please Note:</span>{" "}
                  Deleting this address will not delete any pending orders being
                  shipped to this address.
                </p>
              </React.Fragment>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDeleteAddress}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
