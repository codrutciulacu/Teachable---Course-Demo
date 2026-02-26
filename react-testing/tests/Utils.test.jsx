import getDelay from "../src/Utils.jsx";

describe("getDelay", () => {
    it("should apply exponential backoff for attempt 1", () => {
        let delay = 10;
        let maxDelay = 1000;
        let attempt = 1;

        let result = getDelay(attempt, delay, maxDelay);

        expect(result).toBe(10 * Math.pow(2, 1))
    });

    it("should apply exponential backoff at an exponential distance", () => {
        let delay = 10;
        let maxDelay = 1000;

        let result = getDelay(1, delay, maxDelay) / getDelay(0, delay, maxDelay);

        expect(result).toBe(2)
    });

    it("should apply exponential backoff with max delay", () => {
        let delay = 10;
        let maxDelay = 1000;

        let result = getDelay(10, delay, maxDelay);

        expect(result).toBe(maxDelay)
    });

    test("should equal 1 + 1 to 2", () => {
        let result = 1 + 1;

        expect(result).toBe(2)
    })
})