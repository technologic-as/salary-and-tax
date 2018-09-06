import { config } from 'dotenv';
import rp from 'request-promise';

config();

export const BASE_URL = `https://technologic.cvpartner.com`;

const getRequest = async url => await rp({
    url: BASE_URL + url, json: true, headers: { 'Authorization': `Token token="${process.env.CV_PARTNER_API_KEY}"` },
});

export default getRequest;
