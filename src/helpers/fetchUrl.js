export const fetchUrl = (path) => {
  try {
    let domain = new URL(path);
    domain = domain.hostname.replace("www.", "");
    return domain;
  } catch (e) {
    console.log("there are some error regarding ", e);
  }
};
