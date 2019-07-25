import { getRepositories } from "./github";

describe("GitHubService", () => {
  describe("When there are no errors", () => {
    const repositories = [
      { id: 1, name: "repository one" },
      { id: 2, name: "repository two" },
      { id: 3, name: "repository three" },
      { id: 4, name: "repository four" },
    ];
    let result;
    beforeAll(async () => {
      fetch.resetMocks();
      fetch.mockResponseOnce(JSON.stringify({ items: repositories }));
      result = await getRepositories("JavaScript", "1970-01-01");
    });
    it("returns the first 3 items from the response", () => {
      expect(result).toEqual(repositories.slice(0, 3));
    });
  });
  describe("When there is a non 200 response", () => {
    let result;
    beforeAll(async () => {
      fetch.resetMocks();
      fetch.mockReject(new Error("fake error message"));
      result = await getRepositories("JavaScript", "1970-01-01");
    });
    it("returns the first 3 items from the response", () => {
      expect(result).toEqual([]);
    });
  });
});
