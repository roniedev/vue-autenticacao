<template>
  <q-layout>
    <q-page-container>
      <q-page class="window-height window-width row justify-center items-center"
        style="background-image: linear-gradient(to top, #0d2f61, #0e356e, #0f3c7c, #11428a, #134998);">
        <div class="column q-pa-lg">
          <div class="row">
            <q-card square class="shadow-24" style="width:500px; height:400px;">
              <q-card-section style="background-color: #134998; text-align: center;">
                <h4 class="text-h5 text-white q-my-md">Informe suas credenciais</h4>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input square clearable v-model="email" type="email" label="Email">
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input square clearable v-model="password" type="password" label="Password">
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions class="q-px-lg">
                <q-btn @click="login" unelevated size="lg" color="primary" class="full-width text-white" label="entrar" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import authService from 'src/services/auth.service';
import { Login } from 'src/types/login';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  data: function () {
    return ({
      email: '',
      password: ''
    });
  },
  methods: {
    async login() {
      const loginModel: Login = { email: this.email, password: this.password };
      const logadoComSucesso = await authService.login(loginModel);

      if (logadoComSucesso) {
        const redirect = this.$route.query.redirect as string | undefined;
        this.$router.push(redirect || { name: 'DashboardPage' });
      }
    }
  }
})
</script>
