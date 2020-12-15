import React, { Component } from "react";

class Select extends Component {
  renderOption = (e) => {
    const { options } = this.props;

    return (
      options &&
      Object.keys(options)?.map((item) => {
        return (
          <option key={item} value={item}>
            {options[item]}
          </option>
        );
      })
    );
  };

  render() {
    const { options, value, callBack } = this.props;

    return (
      <select
        onChange={(e) => callBack && callBack(e)}
        defaultValue={
          options && Object.keys(options)?.find((key) => options[key] === value)
        }
      >
        {options && this.renderOption()}
      </select>
    );
  }
}

export default Select;
