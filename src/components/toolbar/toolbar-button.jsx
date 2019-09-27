import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as SharedStyle from '../../shared-style';

//http://www.cssportal.com/css-tooltip-generator/

const STYLE = {
  display: 'block',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '25px',
  position: 'relative',
  cursor: 'pointer',
  textAlign: 'center',
  padding: '20px 15px',
  height: '100px'
};

export default class ToolbarButton extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { active: false };
  }

  render() {
    let { state, props } = this;
    let color = props.active || state.active ? SharedStyle.SECONDARY_COLOR.icon : SharedStyle.PRIMARY_COLOR.icon;
    // console.log(props);
    return (
      <div style={STYLE} id={props.data_btnname} className='toolbarBtn'
        onMouseOver={event => this.setState({ active: true })}
        onMouseOut={event => this.setState({ active: false })}>
        <div style={{ color }} onClick={props.onClick}>
          {props.children}
        </div>
      </div>
    )
  }
}

ToolbarButton.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};
