import { add } from '../src/math';

describe('math utils', () => {
    test('add()', () => {
        expect(add(2, 3)).toBe(5);
    });
});

describe('math utils 2', () => {
    test('add()', () => {
        expect(add(2, 8)).toBe(10);
    });
});
