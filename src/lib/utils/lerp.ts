// Parameters may be declared in a variety of syntactic forms
/**
 * @param {number} x - beginning
 * @param {number} y - end
 * @param {number} a - percentage
 * @returns {number} - number that is `a` percent close to y starting from x. e.g. if x = 10, y = 20, a = 0.5 then it will return 15
 */
export function lerp(x: number, y: number, a: number): number {
	return x * (1 - a) + y * a;
}
