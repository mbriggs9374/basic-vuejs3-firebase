<template>
  <form @submit.prevent="register">
    <h2>Register</h2>
    <input type="email" placeholder="Email address..." v-model="email" />
    <input type="password" placeholder="password..." v-model="password" />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  // @ is an alias to /src
  name: "Register",
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
    register() {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const msg = user.isAnonymous
            ? "Please login."
            : `Welcome ${user.email}!`;
          alert(`Successfully registered! ${msg}`);
          this.$router.push("/");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`${errorCode}::${errorMessage}`);
          // ..
        });
    },
  },
};
</script>
