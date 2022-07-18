import React from "react"
import { StatisticsSection, StatisticItem } from './Statistics.styled'
import PropTypes from "prop-types"
const Statistics = ({good,neutral,bad,total,positivePercentage}) => (
       <StatisticsSection>
                    <StatisticItem>Good: {good}</StatisticItem>
                    <StatisticItem>Neutral: {neutral}</StatisticItem>
                    <StatisticItem>Bad: {bad}</StatisticItem>    
                    <StatisticItem>Total: {total}</StatisticItem>  
                    <StatisticItem>Positive feedback: {positivePercentage?positivePercentage:0} %</StatisticItem>  
                </StatisticsSection>
)
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics;