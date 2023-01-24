<template>
  <div class="admin-login">
    <div class="admin-login__card">
      <span>Вхід</span>
      <input v-model="login" type="text" placeholder="login" />
      <input v-model="password" type="password" placeholder="password" />
      <button @click="handleSubmit">Увійти</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  layout: "AdminLayout",
  name: "admin",
  data() {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      const { data } = await axios.post("http://localhost:8080/api/admin", {
        login: this.login,
        password: this.password,
      });
      console.log(data.token);
      localStorage.setItem("token", data.token);
      this.$store.dispatch("config/authenticated");
      this.$router.push("/panel");
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-login {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-login__card {
  display: flex;
  flex-direction: column;

  width: 350px;
  padding: 20px;
  box-shadow: 0px 0px 10px -5px #000000;
  border-radius: 8px;

  span {
    display: block;
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }

  input {
    margin-bottom: 20px;
    outline: none;
    border: 1px solid rgb(185, 185, 185);
    border-radius: 8px;
    padding: 7px 15px;
  }

  button {
    background: #4a5cff;
    border-radius: 8px;
    color: #fff;
    border: 0;
    padding: 8px;
    cursor: pointer;
  }
}
</style>
