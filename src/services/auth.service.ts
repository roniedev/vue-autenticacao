import { Login } from 'src/types/login';
import { post } from './api.service';
import usuarioService from './usuario.service';

class AuthService {
  async login(login: Login) {
    try {
      const response = await post('login', { email: login.email, password: login.password });
      usuarioService.setUsuarioLocalStorage(response.data);
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }

  estaAutenticado() {
    const usuario = usuarioService.getUsuarioLocalStorage();
    return usuario !== null;
  }
}

export default new AuthService();
