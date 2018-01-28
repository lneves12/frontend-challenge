export function normalGetSystemsApi (url) {
  // This baseUrl should be configurable, for now lets leave it like this
  const baseUrl = 'http://localhost:3001';

  return fetch(`${baseUrl}${url}`, {
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  }).then((response) => {
    return response.json();
  });
};
