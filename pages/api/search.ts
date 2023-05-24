import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Started get");

  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const { query } = req.query;
  console.log("GET === " + query);

  try {
    const searchResults = await prismadb.trailer.findMany({
      where: {
        OR: [
          { title: { contains: query as string } },
          { description: { contains: query as string } },
          { genre: { contains: query as string } },
          { directed_by: { has: query as string } },
          { written_by: { has: query as string } },
          { starring: { has: query as string } },
          { release_year: { contains: query as string } },
        ],
      },
    });
    return res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
