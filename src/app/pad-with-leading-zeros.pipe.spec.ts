import { PadWithLeadingZerosPipe } from './pad-with-leading-zeros.pipe';

describe('PadWithLeadingZerosPipe', () => {
  it('create an instance', () => {
    const pipe = new PadWithLeadingZerosPipe();
    expect(pipe).toBeTruthy();
  });
});
