function baseJoin(baseURL, pathname) {
  const stripSlashBaseURL = baseURL.replace(/\/$/, "");
  return stripSlashBaseURL + pathname;
}

function getResource(baseURL, pathname) {
  const url = baseJoin(baseURL, pathname);
  console.log(url);
}

const baseURL = "http://example.com/resouces/";
const pathname = "/example.js";
getResource(baseURL, pathname);