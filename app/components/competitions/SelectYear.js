import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const SelectYear = props => {
    const years = ['2017', '2016', '2015','2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000']
    return (
        <div className="select-year">
            <ul>
                {years.map(year => {
                    return (
                        <li key={year} 
                            onClick={props.updateSeason.bind(null, year)} 
                            style={year === props.selectedSeason ? {color: '#d0021b'} : null}
                        >
                        {year}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

SelectYear.propTypes = {
    updateSeason: PropTypes.func.isRequired,
    selectedSeason: PropTypes.string.isRequired
}

module.exports = SelectYear;