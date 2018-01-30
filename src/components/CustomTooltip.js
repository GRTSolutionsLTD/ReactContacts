import React, { Component, PropTypes } from 'react';

const CustomTooltip = React.createClass({
    propTypes: {
        payload: PropTypes.array
    },

    render() {
        const { active } = this.props;

        if (active) {
            const { payload, label } = this.props;
            return (
                <div className="custom-tooltip transparent">
                    <p className="label">{`${label} : ${payload ? payload[0].value : 0}`}</p>
                    <p className="intro">Price:Amount of people</p>
                </div>

            );
        }

        return null;
    }
});

export default CustomTooltip;