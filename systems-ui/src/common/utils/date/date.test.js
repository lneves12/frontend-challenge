import {compareDateByTimestamp} from './date';

describe("Date - compareDateByTimestamp", () => {
  it('should return a value under 0 if first timestamp is more recent', () => {
    const timeStamp = compareDateByTimestamp(1516800657040, 1516800657800);

    expect(timeStamp).toBeLessThan(0);
  });

  it('should return a value over 0 if first timestamp is less recent', () => {
    const timeStamp = compareDateByTimestamp(1516800657800, 1516800657040);

    expect(timeStamp).toBeGreaterThan(0);
  });

  it('should return a value 0 if both timestamp are equal', () => {
    const timeStamp = compareDateByTimestamp(1516800657800, 1516800657800);

    expect(timeStamp).toBe(0);
  });
})
