const usuarioAdmin = process.env.NEXT_PUBLIC_USUARIO_ADMIN;
const passwordAdminHash = process.env.NEXT_PUBLIC_PASSWORD_ADMIN_HASH;

const autenticar = async (usuario, password) => {
  if (usuario !== usuarioAdmin) {
    return false;
  }
  
  // Comparación directa de la contraseña
  return password === passwordAdminHash;
};

export default autenticar;