// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Details } from '../../types/details';
import detailsMock from '../../__mocks__/details.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Details>
) {
  res.status(200).json(detailsMock)
}
