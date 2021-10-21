import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedBack }) => (
  <>
    <ul className={s.statisticlist}>
      <li className={s.statistic__item}>good: {good}</li>
      <li className={s.statistic__item}>neutral: {neutral}</li>
      <li className={s.statistic__item}>bad: {bad}</li>
      <li className={s.statistic__item}>
        Positive Feedback: {positiveFeedBack}%
      </li>
      <li className={s.statistic__item}>Total: {total}</li>
    </ul>
  </>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positiveFeedBack: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,

}