import { client } from "../lib/client";

const createUser = async (data, res) => {
  // console.log(data);

  const userDoc = {
    _type: "users",
    _id: `${data.email.slice(0, data.email.indexOf("@"))}-user`,
    name: data.name,
    email: data.email,
    profileimage: data.picture,
  };
  console.log(userDoc);
  try {
    const res = await client.createIfNotExists(userDoc);
    console.log(res);
    // res.status(200).send("Successful");
  } catch (error) {
    console.error(error);
    // res.status(500).send(error);
  }
};

export default createUser;
