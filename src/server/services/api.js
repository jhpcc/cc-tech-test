const data = require(`${__dirname}/../../../fixtures/api.json`);

const getInvestments = () => {
  return Promise.resolve(data);
};

export { getInvestments };
