/**
 * Describe all routes is available in project
*/
export const routePaths = {
  home: '/',
};

/**
 * Describe all routes is available in project
 * @params location Info about env project is running
 * @return {String} What server should be connected
*/
export const typeServer = () => {
  const server = 'http://localhost:6060';

  return server;
};

export const apiEndpoints = {
  order: `${typeServer(location)}/order`,
};
