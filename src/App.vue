<template>
  <div class="app">
<post-form
@create="createPost"
/>
<post-list 
v-bind:posts="posts"
/>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue';

export default {
  components:{
PostForm,PostList
  },
    data() {
        return {
            posts: [
                { id: 1, title: "javascript", body: "some date here" },
                { id: 2, title: "javascript2", body: "some date here2" },
                { id: 3, title: "javascript3", body: "some date here3 " }
            ],
   
        };
    },
    methods: {
        createPost(post) {
           console.log(post )
        },
        inputTitle(event) {
            this.title = event.target.value;
        },
        inputBody(event) {
            this.body = event.target.value;
        },
    },
}

</script>


<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}


</style>