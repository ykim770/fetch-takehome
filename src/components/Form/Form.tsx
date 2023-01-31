import axios from 'axios';
import React, { useState, ChangeEvent } from 'react';
import { IData, IUser } from '../../Interfaces';
const Form = ({ occupations, states }: IData) => {
  // use a single state variable to manage all of our user's information
  const [fields, setFields] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: '',
  });
  const [submitted, setSubmitted] = useState(false);
  // this allows us to use a single on change handler
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    if (submitted) setSubmitted(!submitted);
    const {
      target: { name, value },
    } = e;
    setFields({ ...fields, [name]: value });
  };
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // double down on having each input, sometimes the html required/patterns get a bit buggy
    if (!fields.name) return window.alert('Please enter your full name :)');
    if (!fields.email) return window.alert('Plese enter your email :)');
    if (!fields.password) return window.alert('Please enter a password!');
    if (!fields.occupation || !fields.state)
      return window.alert('Please select an input :)');
    fields.name = fields.name.trim();
    fields.email = fields.email.trim();
    try {
      const res = await axios.post<IUser>(
        'https://frontend-take-home.fetchrewards.com/form',
        fields,
      );
      if (res.status === 201) {
        setFields({
          name: '',
          email: '',
          password: '',
          occupation: '',
          state: '',
        });
        setSubmitted(true);
      }
    } catch (error: unknown) {
      console.log('Oops, looks like something went wrong here');
      if (axios.isAxiosError(error)) {
        console.log('Data:', error?.response?.data);
        console.log('Status:', error?.response?.status);
      }
      window.alert('Oops, looks like something went wrong here');
    }
  };
  return (
    // we could use form validation with a tailored library like react hook forms in conjunction with yup, but I'm opting to rely utilize HTML as is
    <div className='form-wrapper'>
      {submitted && <span id='submitted'>Thank you for your submission!</span>}
      <form className='input-wrapper' onSubmit={handleSubmit}>
        {/* Client name */}
        {/* Intentionally leave full name a bit looser for inclusivity */}
        <label htmlFor='name'>Enter Full Name:</label>
        <input
          required
          type='text'
          id='name'
          name='name'
          pattern='\s*\w+\s\w+\s*'
          value={fields.name}
          onChange={handleChange}
        />
        {/* Client email */}
        <label htmlFor='email'>Enter Email:</label>
        <input
          required
          type='email'
          id='email'
          name='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
          value={fields.email}
          onChange={handleChange}
        ></input>
        {/* Client password */}
        <label htmlFor='password'>Enter Password:</label>
        <input
          required
          minLength={5}
          maxLength={20}
          type='password'
          id='password'
          name='password'
          value={fields.password}
          onChange={handleChange}
        />
        {/* Client occupation */}
        <label htmlFor='occupation'>Occupation:</label>
        <select
          required
          id='occupation'
          name='occupation'
          value={fields.occupation}
          onChange={handleChange}
        >
          <option value={''}>- Select an Occupation -</option>
          <optgroup label='Occupations'>
            {occupations.map((occupation) => (
              <option value={occupation} key={occupation}>
                {occupation}
              </option>
            ))}
          </optgroup>
        </select>
        {/* Client state */}
        <label htmlFor='state'>State:</label>
        <select
          required
          id='state'
          name='state'
          value={fields.state}
          onChange={handleChange}
        >
          <option value={''}>- Select your state -</option>
          <optgroup label='States'>
            {states.map(({ name, abbreviation }) => (
              <option value={abbreviation} key={abbreviation}>
                {name}
              </option>
            ))}
          </optgroup>
        </select>
        <button type='submit' id='submit-button' className='cta-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
