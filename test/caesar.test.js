const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
    it("should return false if the value of shift is 0, less than -25, greater than 25, or if no shift value is passed in.", () => {
        const actual = caesar("hi", -30);
        expect(actual).to.be.false;
    });
    it("when encoding, should return a string who's characters have been shifted to the right for a positive shift value", () => {
        const actual = caesar("thinkful", 2);
        expect(actual).to.equal("vjkpmhwn");
    });
    it("when encoding, should return a string who's characters have been shifted to the left for a negative shift value", () => {
        const actual = caesar("thinkful", -2);
        expect(actual).to.equal("rfglidsj");
    });
    it("should ignore capital letters", () => {
        const actual = caesar("ThinkFul", 2);
        expect(actual).to.equal("vjkpmhwn");
    });
    it("should maintain spaces and other non-alphabetic symbols", () => {
        const actual = caesar("Think Ful!", 2);
        expect(actual).to.equal("vjkpm hwn!");
    });
    it("when encoding, should wrap around to the back of the alphabet if a letter is shifted 'off' the alphabet with a negative shift value", () => {
        const actual = caesar("Think ful", -6);
        expect(actual).to.equal("nbche zof");
    });
    it("when encoding, should wrap around to the front of the alphabet if a letter is shifted 'off' the alphabet with a positive shift value", () => {
        const actual = caesar("Thinkful", 7);
        expect(actual).to.equal("aopurmbs");
    });
    it("when decoding, should shift the oppsite direction of the shift value(shift to the left for positive shift value and to the right for negative shift value)", () => {
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal("thinkful");
    });
    it("should decode correctly when going 'off' the alphabet", () => {
        const actual = caesar("ynnjc", -2, false);
        expect(actual).to.equal("apple");
    });
    it("should decode correctly when going 'off' the alphabet", () => {
        const actual = caesar("bnlanc", 9, false);
        expect(actual).to.equal("secret");
    });
});

