import { inject, observer } from "mobx-react"
import React, { Component } from 'react'
import Index from "../common/pages";

@inject("mainStore")
@observer
class TestPage extends Component {
    render() {
        return (
            <div>
                <Index {...this.props.mainStore} />
            </div>
        )
    }
}

TestPage.getInitialProps = ({ query }) => {
    return query
}

export default TestPage;
