<template>
  <div class="app">
    <form>
      <h5>Posts create</h5>
      <input class="input" v-bind:value="title" type="text" placeholder="name">
      <input class="input" v-bind:value="body" type="text" placeholder="description">
      <button class="btn" @click="createPost" > Create post</button>
    </form>


    <div class="post" v-for="post in posts" v-bind:key="post.id">
      <div><strong>Name:</strong> {{ post.title }}</div>
      <div><strong>Description:</strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "javascript", body: "some date here" },
        { id: 2, title: "javascript2", body: "some date here2" },
        { id: 3, title: "javascript3", body: "some date here3 " }
      ],
      title : '',
      body : ''
    }
  },
  methods: {
    createPost() {

    },
    inputTitle(event) {
      console.log(event)
    },
    inputBody() {

    },

  }
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

.post {
  width: 80%;
  padding: 10px;
  border: 1px solid lightslategray;
  border-radius: 50px;
  margin-top: 15px;
}

.input {
  border: 1px solid lightgreen;
  width: 100%;
  padding: 5px;
  border-radius: 50px;
  margin-top: 5px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  background: none;
  border: 1px solid lightsalmon;
  border-radius: 50px;
  padding: 5px;
  color: lightskyblue
}</style>