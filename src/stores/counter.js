import {defineStore} from "pinia";

const postStore = defineStore('post', {
    state: ()=> {
        like: 0;
        post_id: 12;
        post: 'ok tis is test';
    }
})