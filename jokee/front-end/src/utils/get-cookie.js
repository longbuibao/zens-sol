const getCookie = (key) => {
  const cookies = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return cookies ? cookies.pop() : "";
};

export default getCookie;
