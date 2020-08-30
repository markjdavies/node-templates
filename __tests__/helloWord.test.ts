import { helloWorld } from '../src/helloWorld';

test('helloWorld should say Hello World', () => {
    const hw = helloWorld();

    expect(hw).toBe('Hello world');
});
