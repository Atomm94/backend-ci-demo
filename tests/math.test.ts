import { add } from '../src/math';

describe('math utils', () => {
    test('add()', () => {
        expect(add(2, 3)).toBe(5);
    });
});
