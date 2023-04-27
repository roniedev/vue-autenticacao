<template>
  <q-layout style="padding: 10px;">
    <q-btn @click="login">Login</q-btn>
  </q-layout>
</template>

<script lang="ts">
import authService from 'src/services/auth.service';
import { Login } from 'src/types/login';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  methods: {
    login() {

      let loginModel: Login = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }

      authService.login(loginModel);
    }
  }
});
</script>
