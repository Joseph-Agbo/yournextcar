import { useContext } from "react";
import { GrStatusGood } from "react-icons/gr";
import { FaCcVisa } from "react-icons/fa";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ShopContext from "../context/ShopContext";

function CheckoutPage() {
  const [hasTyped, setHasTyped] = useState(false);
  const param = useParams();
  const productId = Number(param.id);
  const { products } = useContext(ShopContext);

  const specificProduct = products.find((product) => product.id == productId);

  const deliveryFee = 2500;
  const price = Number(specificProduct?.price || 0);
  const total = price + deliveryFee;

  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [cardnumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cvv, setCvv] = useState("");

  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [cardError, setCardError] = useState("");
  const [expirationError, setExpirationError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const numberRegex = /^[0-9]+$/;
  const expirationRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

  const handleInputCursor = (e) => {
    setHasTyped(e.target.value.length > 0);
  };

  const retrieveAddress = (e) => {
    setStreetAddress(e.target.value);
  };

  const retrievCityValue = (e) => {
    setCity(e.target.value);
  };

  const retrieveStateValue = (e) => {
    setState(e.target.value);
  };

  const retrieveNumber = (e) => {
    setNumber(e.target.value);
  };

  const retrieveCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const retrieveExpiration = (e) => {
    setExpiration(e.target.value);
  };

  const retrieveCvv = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;

    setAddressError("");
    setCityError("");
    setStateError("");
    setNumberError("");

    if (!streetAddress) {
      setAddressError("You have not entered an address");
      valid = false;
    }

    if (!city) {
      setCityError("Enter your city name");
      valid = false;
    }

    if (!state) {
      setStateError("Enter state");
      valid = false;
    }

    if (!number) {
      setNumberError("Phone number");
      valid = false;
    } else if (number.length > 11) {
      setNumberError("eleven digits");
      valid = false;
    } else if (!numberRegex.test(number)) {
      setNumberError("Only numbers");
      valid = false;
    }else if (number.length < 11) {
        setNumberError("Incorrect number");
        valid = false;
    }
    
    if (!cardnumber) {
      setCardError("Enter your card number");
      valid = false;
    } else if (cardnumber.length > 16) {
      setCardError("Not more than sixteen characters");
      valid = false;
    } else if (!numberRegex.test(cardnumber)) {
      setCardError("Only numbers allowed");
      valid = false;
    }else if (cardnumber.length < 16) {
        setCardError("Incorrect card number");
        valid = false;
    }

    if (!expiration) {
        setExpirationError("Expiration date");
        valid = false;
    }else if (!expirationRegex.test(expiration)) {
        setExpirationError("Enter valid format");
        valid = false;
    }

    if (!cvv) {
      setCvvError("Enter your CVV");
      valid = false;
    } else if (!numberRegex.test(cvv)) {
      setCvvError("Only numbers");
      valid = false;
    } else if (cvv.length !== 3) {
      setCvvError("three characters");
      valid = false;
    }

    if (!valid) return;

    alert("Payment Successful");

    setStreetAddress("");
    setCity("");
    setState("");
    setNumber("");
    setCardNumber("");
    setExpiration("");
    setCvv("");
  };

  if (!specificProduct) return <p>Loading... </p>;

  return (
    <div className="pb-3 bg-indigo-50/50">
      <h1 className="mx-auto w-[80%] py-3 text-lg md:w-[73%]">
        Cashier Says Hi!
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-[80%] bg-white md:flex md:justify-around"
      >
        <div className="space-y-2 md:w-[40%]">
          <div className="flex justify-between ">
            <div>
              <h2 className="font-bold text-md">{specificProduct?.name}</h2>
              <p className=" text-blue-950 text-sm">Order Summary</p>
            </div>
            <div className="w-[50%]">
              <img src={specificProduct?.img} alt={specificProduct?.name} />
            </div>
          </div>
          <div className="flex justify-between ">
            <div className="py-4">
              <p className="pb-1">Car Price</p>
              <p>Delivery Fee</p>
              <hr className="py-1 mt-3" />
              <p className="font-semibold">Total</p>
            </div>
            <div className="py-4">
              <p className="pb-1">{price}</p>
              <p>{deliveryFee}</p>
              <hr className="py-1 mt-3" />
              <p className="font-semibold">{total}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="space-y-4">
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold pt-2">Billing Address</h2>
              <input
                type="text"
                value={streetAddress}
                onChange={retrieveAddress}
                className="border rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                placeholder="Street Address"
              />
              {addressError && <p className="text-red-500 text-sm">{addressError}</p>}
              <input
                type="text"
                value={city}
                onChange={retrievCityValue}
                className="border rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                placeholder="City"
              />
              {cityError && <p className="text-red-500 text-sm">{cityError}</p>}
              <div className="flex justify-between">
                <input
                  type="text"
                  value={state}
                  onChange={retrieveStateValue}
                  className="border w-[48%] rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                  placeholder="State"
                />
                {stateError && <p className="text-red-500 text-sm">{stateError}</p>}
                <input
                  type="tel"
                  value={number}
                  onChange={retrieveNumber}
                  className="border w-[48%] rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                  placeholder="Phone number"
                />
                {numberError && <p className="text-red-500 text-sm">{numberError}</p>}
              </div>
            </div>
            <div>
              <h2 className="font-semibold pt-1 pb-2">Payment Method</h2>
              <div className="flex flex-col gap-y-1.5 md:border md:border-blue-950 md:rounded-md md:p-4">
                <p className="text-blue-950 text-sm flex items-center justify-between">
                  Credit/Debit Card{" "}
                  <span className="flex items-center">
                    <GrStatusGood className=" text-blue-700 border-none" />
                  </span>
                </p>
                <div className="flex flex-col gap-y-1 relative">
                  <label
                    htmlFor="cardNumber"
                    className="text-blue-950 text-sm font-semibold"
                  >
                    Card Number
                  </label>
                  <input
                    type="tel"
                    value={cardnumber}
                    onChange={(e) => {
                        handleInputCursor(e)
                        retrieveCardNumber(e)
                    }}
                    className={`${
                      hasTyped ? "pl-2" : "pl-8"
                    } border rounded-sm border-black outline-blue-950 text-blue-950 p-1.5 peer`}
                    name="cardNumber"
                    placeholder=" xxxx xxxx xxxx xxxx"
                  />
                  {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
                  <span className="absolute left-3 top-[2.8rem] pointer-events-none -translate-y-1/2 peer-placeholder-shown:opacity-100 peer:not-placeholder-shown:opacity-0 opacity-0 transition-opacity duration-200">
                    <FaCcVisa className="size-4.5" />
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <div className="w-[48%] flex flex-col gap-y-1">
                    <label
                      htmlFor="expirationDate"
                      className="text-blue-950 text-sm font-semibold"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      value={expiration}
                      onChange={retrieveExpiration}
                      className="border rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                      name="expirationDate"
                      placeholder="MM/YY"
                    />
                    {expirationError && <p className="text-red-500 text-sm">{expirationError}</p>}
                  </div>
                  <div className="w-[48%] flex flex-col gap-y-1">
                    <label
                      htmlFor="cvv"
                      className="text-blue-950 text-sm font-semibold"
                    >
                      CVV
                    </label>
                    <input
                      type="tel"
                      value={cvv}
                      onChange={retrieveCvv}
                      className="border rounded-sm border-black outline-blue-950 text-blue-950 p-1.5"
                      name="cvv"
                      placeholder="cvv"
                    />
                    {cvvError && <p className="text-red-500 text-sm">{cvvError}</p>}
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="md:cursor-pointer md:p-2.5 border rounded-md text-white bg-blue-950 text-lg p-2 w-full"
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
