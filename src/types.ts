import Token from './parsers/Token';

export type Date = string;
export type Format = string;

export interface ParsedResult {
	tokens: Array<Token>;
	index: number;
	parser: string;
}

export interface IParser {
	readonly name: string;
	readonly pattern: RegExp;
	parse(date: Date): ParsedResult | undefined;
}