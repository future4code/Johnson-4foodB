export const goToLogin = (history) => {
  history.push("/");
};

export const goToSignUp = (history) => {
  history.push("/cadastro");
};

export const goToAddress = (history) => {
  history.push("/cadastro/endereco");
};

export const goToHome = (history) => {
  history.push("/home");
};

export const goToRestaurant = (history, id) => {
//  history.push(`/restaurante`);
history.push(`/restaurante/${id}`);
};

export const goToCart = (history) => {
  history.push("/carrinho");
};
export const goToProfile = (history) => {
  history.push("/perfil");
};
