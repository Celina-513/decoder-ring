const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("should return a string of numbers that correspond to the letters of the input when encode is set to true.", () => {
        const actual = polybius("hello", true);
        expect(actual).to.equal("3251131343");
    });
    it("should return a string of letters that correspond to the numbers of the input when encode is set to false.", () => {
        const actual = polybius("3251131343", false);
        expect(actual).to.equal("hello");
    });
    it("should ignore capital letters", () => {
        const actual = polybius("Hello", true);
        expect(actual).to.equal("3251131343");
    });
    it("should maintain spaces when encoding", () => {
        const actual = polybius("hello there", true);
        expect(actual).to.equal("3251131343 4432512451");
    });
    it("should maintain spaces when decoding", () => {
        const actual = polybius("3242 424351", false);
        expect(actual).to.equal("h(i/j) (i/j)oe");
    });
    it("should return false if, when decoding, the number of characters excluding spaces in the input string is not even ", () => {
        const actual = polybius("3251131343 443251245", false);
        expect(actual).to.be.false;
    });
    it("should encode i and j to 42", () => {
        const actual = polybius("hi joe", true);
        expect(actual).to.equal("3242 424351");
    });
    it("should decode 42 to '(i/j)'", () => {
        const actual = polybius("3242", false);
        expect(actual).to.equal("h(i/j)");
    });
});
