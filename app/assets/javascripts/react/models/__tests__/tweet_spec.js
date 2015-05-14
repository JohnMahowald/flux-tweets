jest.dontMock("../Tweet");

var Tweet = require("../Tweet");

describe("tweet model", function () {
  it("can initialize a new tweet", function () {
    var data = {
      id: 1,
      content: "first tweet",
    }

    var tweet = new Tweet(data);

    expect(tweet.id()).toBe(1);
    expect(tweet.content()).toBe("first tweet");
  })

  describe("error handling", function () {
    it("raises an error when the content is not given", function () {
      var data = {
        content: "first tweet"
      }

      expect(function () { new Tweet(data) }).toThrow(new Error("Invariant Violation: missing key 'id'"));
    });

    it("raises an error when the id is not given", function () {
      var data = {
        id: 1
      }

      expect(function () { new Tweet(data) }).toThrow("Invariant Violation: missing key 'content'");
    });
  })

  describe("id", function () {
  });
});
