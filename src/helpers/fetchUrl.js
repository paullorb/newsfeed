export const fetchUrl = (path) => {
  let domain = new URL(path, "");
  if (domain) {
    domain = domain.hostname.replace("www.", "");
    return domain;
  }

  return "";
};
