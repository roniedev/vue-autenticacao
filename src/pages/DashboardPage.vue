<template>
  <div style="padding: 15px;">
    <q-btn @click="logout" color="primary">Logout</q-btn>
  </div>
</template>

<script lang="ts">
import usuarioService from 'src/services/usuario.service';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DashboardPage',
  methods: {
    logout() {
      usuarioService.removeUsuarioLocalStorage();
      this.$router.push({ name: 'LoginPage' });
    }
  }
})
</script>
