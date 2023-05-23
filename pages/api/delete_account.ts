import { NextApiRequest, NextApiResponse } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email ) {
      return res.status(400).json({ error: "Missing email, name or password" });
    }

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      prismadb.user.delete;
    }

    return res.status(201);
  } catch (error) {
    return res.status(400).end();
  }
}
