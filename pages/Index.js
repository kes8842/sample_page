import { inject, observer } from "mobx-react"
import React, { Component } from 'react'
import Index from "../common/pages";

@inject("mainStore")
@observer
class IndexPage extends Component {
    render() {
        return (
            <div>{this.props.mainStore.posts}
                <Index {...this.props.mainStore} />
            </div>
        )
    }
}

IndexPage.getInitialProps = ({ query }) => {
    return query
}

export default IndexPage;
