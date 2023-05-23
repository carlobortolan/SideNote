import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverauth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log("LOG=" + req.method, req.url);

    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    await serverAuth(req);

    const { category } = req.query;

    if (typeof category !== "string" || !category) {
      return res.status(400).json({
        error: "Invalid category",
      });
    }

    const trailers = await prismadb.trailer.findMany({
      where: {
        genre: category,
      },
    });

    if (!trailers) {
      return res.status(404).json({
        error: "Trailers not found",
      });
    }

    return res.status(200).json(trailers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
