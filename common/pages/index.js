import React, { Component } from 'react'

class Index extends Component {
    render() {
        const { posts, setPosts, getPosts } = this.props
        console.log(getPosts())
        return (
            <div>
                {posts}
                <button onClick={() => setPosts([4, 5, 6])}>hi</button>
            </div>
        )
    }
}

export default Index;
