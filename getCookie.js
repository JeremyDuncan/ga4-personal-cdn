function getCookie(name) {
  if (document.cookie) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) { 
      const result = parts.pop().split(';').shift();
      const client_info = result.split('.').slice(-2).join('.');
      return client_info;
    }
  } else {
    return "Cookies_Disabled";
  }
}
