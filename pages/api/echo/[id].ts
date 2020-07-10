import { NextApiRequest, NextApiResponse } from "next";

interface ReqApiQuery extends NextApiRequest {
  query: {
    id?: string | string[];
  };
}

export default function getById(req: ReqApiQuery, res: NextApiResponse) {
  // res.statusCode = 200;
  // res.setHeader("Content-Type", "application/json");
  // res.end(req.query.id);
  res.json({ yourId: req.query.id });
}
