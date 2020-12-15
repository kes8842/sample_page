import Page from "../../common/components/page";
import Translate from "../../common/pages/translate";
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
