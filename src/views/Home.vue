<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <input type="email" placeholder="Email address..." v-model="email" />
    <input type="password" placeholder="password..." v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const auth = getAuth();
      var loggedIn = auth.currentUser !== null;
      if (loggedIn) {
        alert("You're already logged in.");
        vm.$router.push("/dashboard");
      }
    });
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          alert(`Successfully logged in as ${user.email}!`);
          this.$router.push("/dashboard");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}::${errorMessage}`);
        });
    },
  },
};
</script>
