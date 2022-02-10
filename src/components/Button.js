import React from 'react';

const Button = ({ color, text }) => {
  return (
      <Button style={{ backgroundColor: color }} className='btn'>{text}</Button>
  )
};

export default Button;
