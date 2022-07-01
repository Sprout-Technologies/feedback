import { NextApiRequest, NextApiResponse } from 'next';

declare function createFeedbackAPI(options: {
    webhooks: string[];
}): (req: NextApiRequest, res: NextApiResponse) => Promise<void>;

export { createFeedbackAPI as default };
