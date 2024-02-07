export const fetchUrl = (path) => {
  let domain = new URL(path);
  domain = domain.hostname.replace("www.", "");
  return domain;
};
