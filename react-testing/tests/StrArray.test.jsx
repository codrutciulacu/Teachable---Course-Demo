import filterByLetter from "../src/StrArray.jsx"

describe("filterByArray suite", () => {
    it("should filter elements not starting with a", () => {
        let data = ["snake", "banana", "android", "apple", "react"];
        let letter = "a";

        let result = filterByLetter(letter, data);

        expect(result).toStrictEqual(["android", "apple"])
    })

    it("should return nothing when provided with anything else than a letter", () => {
        let data = ["snake", "banana", "android", "apple", "react"];
        let letter = 1;

        let result = filterByLetter(letter, data);

        expect(result).toStrictEqual([])
    })
})