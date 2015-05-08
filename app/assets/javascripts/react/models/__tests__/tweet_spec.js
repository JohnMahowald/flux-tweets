jest.dontMock("../Tweet");
var Tweet = require("../Tweet");

describe("tweet model", function () {
  it("", function () {
    var data = {
      id: 1,
      content: "first tweet"
    }

    var tweet = new Tweet(data);

    expect(tweet.id).toBe(1);
    expect(tweet.content).toBe("first tweet");
  })
});
