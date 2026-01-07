import jwt from "jsonwebtoken";

const JWT_SECRET = "ThisisaJWT@#SEC&RET";

const fetchUser = (req, res, next) => {
  // Get the user from the jwt token and add id to request object.
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ Error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;

    next();
  } catch (error) {
    res.status(401).send({ Error: "Please authenticate using a valid token" });
  }
};

export default fetchUser;
