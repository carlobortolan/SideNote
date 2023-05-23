import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverauth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    await serverAuth(req);

    const { trailerId } = req.query;

    if (typeof trailerId !== "string" || !trailerId) {
      return res.status(400).json({
        error: "Invalid trailerId",
      });
    }

    const trailer = await prismadb.trailer.findUnique({
      where: {
        id: trailerId,
      },
    });

    if (!trailer) {
      return res.status(404).json({
        error: "Trailer not found",
      });
    }

    return res.status(200).json(trailer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
