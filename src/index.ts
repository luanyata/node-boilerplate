import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  return res.send({ message: "Helo World" });
});

app.listen(3333, () => console.log(`Servidor Decolando 🚀 , porta 3333`));
