import { ArmstrongNumberPipe } from './armstrong-number.pipe';

describe('ArmstrongNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new ArmstrongNumberPipe();
    expect(pipe).toBeTruthy();
  });
});
