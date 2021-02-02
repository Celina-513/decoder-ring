const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("Should return false if the substitution alphabet passed in is not exactly 26 characters.", () => {
        const alphabet = "glh*jktoesgrg";
        const actual = substitution("hello", alphabet);
        expect(actual).to.be.false;
    });
    it("Should return false if the substitution alphabet is missing", () => {
        const alphabet = "glh*jktoesgrg";
        const actual = substitution("hello");
        expect(actual).to.be.false;
    });
    it("Should return the input encoded with the substitution alphabet if encode is true", () => {
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution("hello", alphabet, true);
        expect(actual).to.equal("rmwwl");
    });
    it("Should return the input decoded with the regular alphabet if encode is false", () => {
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution("rmwwl", alphabet, false);
        expect(actual).to.equal("hello");
    });
    it("Should ignore capital letters", () => {
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution("Hello", alphabet, true);
        expect(actual).to.equal("rmwwl");
    });
    it("Should maintain spaces throughout", () => {
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const actual = substitution("hello world", alphabet, true);
        expect(actual).to.equal("rmwwl ilhwq");
    });
    it("Should work when special characters are included in the input", () => {
        const alphabet = "xoyqmcgrukswaf!nthdjpzibev";
        const actual = substitution("rmww!", alphabet, false);
        expect(actual).to.equal("hello");
    });
    it("Should return false if all the characters in the substitution alphabet are not unique", () => {
        const alphabet = "!oyqmcgrukswaf!nthdjpzibev";
        const actual = substitution("rmww!", alphabet, false);
        expect(actual).to.be.false;
    });
});
