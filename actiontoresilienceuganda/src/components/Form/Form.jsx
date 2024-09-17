import React from "react";
import "./Form.css";
import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
// import { CountryDropdown } from 'react-country-region-selector';
import 'react-phone-number-input/style.css';

const Form = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Contact Us</h2>

      {/* <label htmlFor="country">Location</label>
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <CountryDropdown 
            id="country" 
            {...field} 
            defaultOptionLabel="Select Country" 
          />
        )}
      /> */}

      <label htmlFor="name">Name</label>
      <input 
        id="name" 
        type="text" 
        {...register('name', { required: true })} 
        placeholder="Your Name" 
      />

      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        type="email" 
        {...register('email', { required: true })} 
        placeholder="Your Email" 
      />

      <label htmlFor="phone">Phone Number</label>
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <PhoneInput
            id="phone"
            {...field}
            placeholder="Enter phone number"
            defaultCountry="US"
          />
        )}
      />

      <label htmlFor="message">Message</label>
      <textarea 
        id="message" 
        {...register('message')} 
        placeholder="Your Message" 
      />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default Form;