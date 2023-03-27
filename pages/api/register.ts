import bcrypt from "bcrypt";
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
    const { email, name, password } = req.body;

    if (!email || !password || !name) {
      return res
        .status(400)
        .json({ error: "Missing email, name or password" });
    }

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(422).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        // image: "",
        emailVerified: new Date(),
      },
    });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).end();
  }
}
