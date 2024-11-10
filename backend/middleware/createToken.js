const jwt = require("jsonwebtoken");

const createToken = (id) => {
  const token = jwt.sign({ id }, process.env.KEY, { expiresIn: "1d" });
 return token
};

module.exports = createToken;
