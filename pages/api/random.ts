import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverauth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await serverAuth(req);

    const trailerCount = await prismadb.trailer.count();
    const randomIndex = Math.floor(Math.random() * trailerCount);
    const randomTrailers = await prismadb.trailer.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomTrailers[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
