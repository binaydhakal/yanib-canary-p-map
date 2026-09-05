// Controlled Yanib acceptance fixture; not part of the published package.
export function calculateTotal(currency: string, quantity: number, unitPriceCents: number): number {
	if (typeof currency !== 'string' || currency.length !== 3) {
		throw new TypeError('Currency must be a three-letter code');
	}
	return quantity * unitPriceCents;
}
