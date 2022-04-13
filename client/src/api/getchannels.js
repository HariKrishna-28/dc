import { client } from "../lib/client";

const getChannels = async () => {
  const query = `*[_type == "conversations" && isDm==false]{
    roomId,
    roomName,
    image,
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

export default getChannels;
