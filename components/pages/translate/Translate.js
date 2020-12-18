import React, { Component } from "react";
import axios from "axios";
import style from "./translate.scss";
import Select from "../../common/select/Select";
import { connect } from "react-redux";
import {
  updateSource,
  updateTarget,
  callTransPai,
} from "../../../store/action/translate/trans-action";

class Translate extends Component {
  textValue = React.createRef();

  callTranslateApi = () => {
    const { source, target } = this.props;
    this.props.callTransApi(source, target, this.textValue?.current?.value);
  };

  renderTransResult = (result) => {
    return (
      <div>
        <h3>번역결과:</h3>
        <Select
          options={this.props?.options}
          value="영어"
          callBack={(e) => this.props.changeTarget(e?.target?.value)}
        />
        {result}
      </div>
    );
  };
  render() {
    return (
      <div>
        <div className={style.transContainer}>
          <div>
            <h3>입력:</h3>
            <Select
              options={this.props.options}
              value="한국"
              callBack={(e) => this.props.changeSource(e?.target?.value)}
            />
            <textarea className={style.transTextArea} ref={this.textValue} />
            <button
              className={style.submit}
              onClick={() => this.callTranslateApi()}
            >
              확인
            </button>
          </div>

          {this.renderTransResult(this.props?.transResult)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.translate;
};

const temp = (dispatch) => {
  return {
    changeSource(data) {
      dispatch(updateSource(data));
    },
    changeTarget(data) {
      dispatch(updateTarget(data));
    },
    callTransApi(source, target, value) {
      dispatch(callTransPai(source, target, value));
    },
  };
};

export default connect(mapStateToProps, temp)(Translate);
