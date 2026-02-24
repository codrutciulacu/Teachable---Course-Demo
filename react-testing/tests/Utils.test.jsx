import getDelay from "../src/Utils.jsx";

describe("getDelay", () => {
    it("should apply exponential backoff for attempt 1", () => {
        let delay = 10;
        let maxDelay = 1000;
        let attempt = 1;

        expect(getDelay(attempt, delay, maxDelay)).toBe(10 * Math.pow(2, 1))
    });

    it("should apply exponential backoff at an exponential distance", () => {
        let delay = 10;
        let maxDelay = 1000;

        expect().toBe(delay * Math.pow(2, 0))

        expect(getDelay(1, delay, maxDelay) / getDelay(0, delay, maxDelay)).toBe(2)
    });

    it("should apply exponential backoff with max delay", () => {
        let delay = 10;
        let maxDelay = 1000;

        expect().toBe(delay * Math.pow(2, 0))

        expect(getDelay(10, delay, maxDelay)).toBe(1000)
    });
})