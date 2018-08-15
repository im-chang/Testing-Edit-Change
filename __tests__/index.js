const edits = require("../lib/edits");
describe("when words are the same", () => {
  it("should return true", () => {
    const result = edits("pale", "pale");
    expect(result).toEqual(true);
  });
});

describe("when a word has more than two character differences", () => {
  it("should return false", () => {
    const result = edits("pale", "bakefdgfdasfdsfafds");
    expect(result).toEqual(false);
  });
});

describe("when a word has one character difference", () => {
  it("should return true", () => {
    const result = edits("pale", "lale");
    expect(result).toEqual(true);
  });
});

describe("when a word has two character differences", () => {
  it("should return false", () => {
    const result = edits("pale", "lape");
    expect(result).toEqual(false);
  });
});

describe("when a word has a capital letter", () => {
  it("should return true", () => {
    const result = edits("pale", "Pale");
    expect(result).toEqual(true);
  });
});

describe("when a word has two capital letters", () => {
  it("should return true", () => {
    const result = edits("pale", "PAle");
    expect(result).toEqual(true);
  });
});
