import React, { useState } from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // If no errors, submit the form
      e.target.submit();
    } else {
      // If errors exist, set the state with the error messages
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Validation logic for each field
    if (!data.fullname.trim()) {
      errors.fullname = 'Full Name is required';
    }

    if (!data.phone.trim()) {
        errors.phone = 'Phone Number is required';
      } else if (!isValidPhone(data.phone.trim())) {
        errors.phone = 'Invalid phone number format';
      }

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email format';
    }

    if (!data.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const isValidPhone = (phone) => {
    // Regular expression to validate phone number format
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  };

  const isValidEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="flex justify-center p-10">
      <form
        className="bg-[#E4FEFF] shadow-md rounded-md p-5 flex flex-col justify-between w-1/2 z-10"
        autoComplete='off'
        onSubmit={handleSubmit}
        action="https://formsubmit.co/binishipiyumika3@gmail.com" method="POST"
      >
        <h2 className="text-black font-bold mb-4 text-center">Reach Out</h2>
        <div className="flex flex-col mb-4">
          <label htmlFor="fullname" className="text-black font-bold mb-1">
            Full Name
          </label>
          <input
            className="inputFeild rounded-tl-md rounded-bl-md border border-white p-2"
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <span className="text-red-500">{errors.fullname}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="text-black font-bold mb-1">
            Phone Number
          </label>
          <input
            className="inputFeild rounded-tl-md rounded-bl-md border text-black border-white p-2"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="text-black font-bold mb-1">
            Email
          </label>
          <input
            className="inputFeild rounded-tl-md rounded-bl-md border text-black border-white p-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="text-black font-bold mb-1">
            Message
          </label>
          <textarea
            className="inputFeild rounded-tr-md rounded-br-md border text-black border-white p-2"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="text-red-500">{errors.message}</span>}
        </div>
        <button
          className="bg-[#00A9BB] text-white font-bold py-2 rounded-md shadow-md hover:bg-[#F2F2F2] transition-colors duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactComponent;
