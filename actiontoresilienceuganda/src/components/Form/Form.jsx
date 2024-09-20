import React from "react";
import "./Form.css";
import { useForm as useReactHookForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm as useFormspree, ValidationError } from '@formspree/react';

const Form = () => {
  const { control, register, handleSubmit: handleReactHookSubmit } = useReactHookForm();
  const [state, handleSubmit] = useFormspree("manwgelj");

  const onSubmit = (data) => {
    handleReactHookSubmit(data);
    handleSubmit(data);
  };

  if (state.succeeded) {
    return <p>Message submitted successfully, please hold on, We're going to get back to you</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
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
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
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
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>Send Message</button>
    </form>
  );
};

export default Form;