// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Player } from '../../types/player';
import podcastPlayer from '../../__mocks__/podcast-player.json';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Player>
) {
  res.status(200).json(podcastPlayer)
}
