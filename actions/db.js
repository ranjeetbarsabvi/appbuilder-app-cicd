const dbLib = require("@adobe/aio-lib-db");
const { Core } = require("@adobe/aio-sdk");

async function getDbConf(params) {
  const { generateAccessToken } = Core.AuthClient;
  const token = await generateAccessToken(params);
  const db = await dbLib.init({ token: token.access_token });
  return await db.connect();
}

module.exports = { getDbConf };
