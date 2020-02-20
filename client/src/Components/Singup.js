import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Js/actions';
const Singup = () => {
  const dispatch = useDispatch();
  const [cred, setCred] = useState({
    login: '',
    password: '',
    email: ''
  });
  const onChangeHandler = e =>
    setCred({
      ...cred,
      [e.target.name]: e.target.value
    });
  const onSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(cred));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='email'
          placeholder='email'
          onChange={onChangeHandler}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={onChangeHandler}
        />
        <input
          type='text'
          name='login'
          placeholder='login'
          onChange={onChangeHandler}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Singup;
