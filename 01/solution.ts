const tests = {
	input: 
`
3   4
4   3
2   5
1   3
3   9
3   3
`,
	first: 11,
	second: 31
};

import { puzzle } from "../puzzle.ts";


const findAnswers = (entries: string[][][]) => {
	const matches = (xs: number[], k: number) => xs.filter(x => x==k).length
	const list1 = entries[0].map((entry) => { return parseInt(entry[0]); }).sort();
	const list2 = entries[0].map((entry) => { return parseInt(entry[1]); }).sort();
	const diff = list1.map((value, index) => { return Math.abs(list2[index] - value); });
	const sum = diff.reduce((acc, value) => { return acc + value; }, 0)

	const mul = list1.map((value) => { return value * matches(list2, value); });
	const sum2 = mul.reduce((acc, value) => { return acc + value; }, 0)
	const answers = { first: sum, second: sum2 };
	console.log(entries);
	return answers;
};
const testPart1 = async (input) => { // (input: string): Promise<boolean> => {
	if(tests.first === 0){ return false; }
	const puzzle_input = await puzzle.parseInput(input);
	const entries = puzzle_input.blocks.length > 0 ? puzzle_input.blocks : puzzle_input.blocks[0];
	const answers = findAnswers(entries);
	return answers.first === tests.first;
};
const solvePart1 = async () => { // (): Promise<number> => {
	if(tests.first === 0){ return 0; }
	const puzzle_input = await puzzle.parseInput();
	const entries = puzzle_input.blocks.length > 0 ? puzzle_input.blocks : puzzle_input.blocks[0];
	const answers = findAnswers(entries);
	return answers.first;
};
const testPart2 = async (input) => { // (input: string): Promise<boolean> => {
	if(tests.second === 0){ return false; }
	const puzzle_input = await puzzle.parseInput(input);
	const entries = puzzle_input.blocks.length > 0 ? puzzle_input.blocks : puzzle_input.blocks[0];
	const answers = findAnswers(entries);
	return answers.second === tests.second;
};
const solvePart2 = async () => { // (): Promise<number> => {
	if(tests.second === 0){ return 0; }
	const puzzle_input = await puzzle.parseInput();
	const entries = puzzle_input.blocks.length > 0 ? puzzle_input.blocks : puzzle_input.blocks[0];
	const answers = findAnswers(entries);
	return answers.second;
};
const part1_correct = await testPart1(tests.input);
let check = part1_correct ? '✅' : '❌';
const part1 = await solvePart1();
console.log("    part 1: ", part1, check);
const part2_correct = await testPart2(tests.input);
check = part2_correct ? '✅' : '❌';
const part2 = await solvePart2();
console.log("    part 2: ", part2, check);