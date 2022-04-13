import { client } from "../lib/client";

const getDms = async () => {
  const query = `*[_type == "conversations" && isDm==true]{
    roomId,
    roomName,
    image,
  "conversation": userReference->{
    name,
    email,
  }
}`;
  return client.fetch(query);
  // try {
  //   const sanityResponse = await client.fetch(query);

  //   res.status(200).send(sanityResponse);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).send(error);
  // }
};

export default getDms;
