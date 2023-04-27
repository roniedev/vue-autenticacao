import { Usuario } from 'src/types/usuario';

class UsuarioService {
  setUsuarioLocalStorage(usuario: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuarioLocalStorage(): Usuario | null {
    const usuario = localStorage.getItem('usuario');

    if (usuario)
      return JSON.parse(usuario);

    return null;
  }

  removeUsuarioLocalStorage() {
    localStorage.removeItem('usuario');
  }
}

export default new UsuarioService();
