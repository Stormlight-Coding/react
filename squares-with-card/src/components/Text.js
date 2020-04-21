import React from 'react';

const text = {
  class: "card-text",
  description: "this is some test text..."
}

const Text = (props) => {
  return (
    <p className={text.class}>{text.description}</p>
  )
};

export default Text
