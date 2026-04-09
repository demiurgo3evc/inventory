const TOKEN_KEY = 'AUTH_TOKEN';

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return !!getToken();
}

export function decodeToken() {
  const payload = getToken()!.split('.')[1];
  const decoded = atob(payload);
  return JSON.parse(decoded);
}