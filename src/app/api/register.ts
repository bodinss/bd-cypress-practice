import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";

const databasePath = path.join(
  process.cwd(),
  "utils",
  "mocks",
  "database.json"
);

const addUserToDatabase = (user: any) => {
  const databaseContent = fs.readFileSync(databasePath, "utf-8");
  const users = JSON.parse(databaseContent);
  users.push(user);
  fs.writeFileSync(databasePath, JSON.stringify(users, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const newUser = req.body;

    addUserToDatabase(newUser);

    res.status(200).json({ message: "Successfully Registered" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
