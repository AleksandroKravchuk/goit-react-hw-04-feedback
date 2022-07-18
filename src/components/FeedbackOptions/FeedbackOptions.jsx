import React from 'react';
import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(optionItem => (
      <Button
        type="button"
        key={optionItem}
        onClick={() => onLeaveFeedback(optionItem)}
      >
        {optionItem}
      </Button>
    ))}
  </div>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
export default FeedbackOptions;
