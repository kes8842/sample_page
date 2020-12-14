import { action, observable } from 'mobx';

export const initialMainState = {
    posts: []
};

export default class MainStore {
    @observable posts = initialMainState.posts;

    hydrate(serializedStore) { }

    @action setPosts = (posts = []) => {
        this.posts = posts;
    }

}