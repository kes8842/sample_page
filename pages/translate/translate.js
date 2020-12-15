import Page from "../../components/common/page";
import Translate from "../../components/pages/translate";
import React, { Component } from "react";
import { connect } from "react-redux";

class TranslatePage extends Component {
  render() {
    return (
      <Page>
        <Translate {...this.props} />
      </Page>
    );
  }
}

TranslatePage.getInitialProps = ({ query }) => {
  return query;
};


export default TranslatePage;