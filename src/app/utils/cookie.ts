const setCookie = (cookies: { [key: string]: string | number }, days: number) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
console.log(cookies, 'cookies');

  for (const key in cookies) {
    document.cookie = `${key}=${cookies[key]}; expires=${expires.toUTCString()}; path=/`;
  }
};

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split('; ');
  for (let i = 0; i < cookies.length; i++) {
    const [cookieName, cookieValue] = cookies[i].split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

// Exemplo de uso
// setCookies({
//   cd_depto: 6,
//   cd_pessoa: 271707,
//   no_usuario: 'JohnDoe'
// }, 7);

export {
  setCookie,
  getCookie
}