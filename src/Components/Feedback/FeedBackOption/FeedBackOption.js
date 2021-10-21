import React from 'react';
import s from './FeedBackOption.module.css';
import PropTypes from 'prop-types';

const FeedBackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map((option, inx) => (
        <button
          className={s.btn}
          key={inx}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedBackOption;

FeedBackOption.propTypes = {
  option: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
}