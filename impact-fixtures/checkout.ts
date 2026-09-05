// Keep this caller unchanged when testing a change to pricing.ts.
import {calculateTotal} from './pricing.ts';

export function checkoutTotal(quantity: number): number {
	return calculateTotal(quantity, 1250);
}
