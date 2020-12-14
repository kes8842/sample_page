import { action, observable, computed, toJS } from 'mobx';

export const initialMainState = {
    posts: []
};

export default class MainStore {
    @observable posts = [1,2,3];

    hydrate(serializedStore) { }

    @computed
    getPosts = () => {
        return this.posts
    }

    @action
    setPosts = (posts = []) => {
        this.posts = posts;
    }

}