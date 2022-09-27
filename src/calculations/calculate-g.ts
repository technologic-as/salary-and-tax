import round from './round';
import { taxConstants } from '../constants';

export const calculateG = (g: number) => round(taxConstants.oneG * g);

export default calculateG;
