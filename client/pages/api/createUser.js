import { client } from "../../lib/client";
import { useAuth0 } from "@auth0/auth0-react";

export default async (req, res) => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user, isAuthenticated);
  if (!isAuthenticated) return;
  // const { email } = req.body;

  const userDoc = {
    _type: "users",
    _id: `${user.email}-user`,
    name: "Unnamed",
    email: user.email,
  };

  try {
    await client.createIfNotExists(userDoc);

    res.status(200).send("Successful");
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
