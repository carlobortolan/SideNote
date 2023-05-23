import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";
import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverauth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { currentUser } = await serverAuth(req);
      const { trailerId } = req.body;

      const trailer = await prismadb.trailer.findUnique({ where: { id: trailerId } });
      if (!trailer) {
        return res.status(404).json({ error: "Trailer not found" });
      }

      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: {
            push: trailerId,
          },
        },
      });
      return res.status(200).json(user);
    }
    if (req.method === "DELETE") {
      const { currentUser } = await serverAuth(req);
      const { trailerId } = req.body;

      const trailer = await prismadb.trailer.findUnique({ where: { id: trailerId } });
      if (!trailer) {
        return res.status(404).json({ error: "Trailer not found" });
      }

      const updatedFavoriteIds = without(currentUser.favoriteIds, trailerId);
      const user = await prismadb.user.update({
        where: {
          email: currentUser.email || "",
        },
        data: {
          favoriteIds: updatedFavoriteIds,
        },
      });
      return res.status(200).json(user);
    }
    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
