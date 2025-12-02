import React from "react";
import { Link } from "react-router-dom";

function EditProfile({ onClose }) {
  return (
    <div className="flex flex-col gap-y-2 mx-auto w-[80%] pt-4">
      <p className="font-semibold text-lg">Personal Details</p>
      <form className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <label htmlFor="name" className="text-blue-950">
            Name
          </label>
          <input
            type="text"
            className="border rounded py-1.5 px-2 outline-blue-950"
            name="name"
            placeholder="Edit your name"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="phone" className="text-blue-950">
            Phone
          </label>
          <input
            type="tel"
            className="border rounded py-1.5 px-2 outline-blue-950"
            name="phone"
            placeholder="Edit phone number"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-blue-950">
            Email
          </label>
          <input
            type="email"
            className="border rounded py-1.5 px-2 outline-blue-950"
            name="email"
            placeholder="Edit your email"
          />
        </div>
        <div className="flex gap-x-8">
          <button
            type="button"
            className="border w-[45%] bg-blue-950 text-white text-md rounded-md py-2 px-1 md:cursor-pointer md:hover:bg-blue-900"
          >
            Save Changes
          </button>
          <button
            type="button"
            onClick={onClose}
            className="border w-[45%] bg-blue-950 text-white text-md rounded-md py-2 px-1 md:cursor-pointer md:hover:bg-blue-900"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
