jest.dontMock("../Tweet");
var sinon = require("sinon");

var Tweet = require("../Tweet");

describe("tweet model", function () {
  var data, tweet; 

  beforeEach(function () {
    data = {
      id: 1,
      content: "first tweet",
      urlRoot: "/tweets/"
    }

    tweet = new Tweet(data);
  });

  it("can initialize a new tweet", function () {
    expect(tweet.id()).toBe(1);
    expect(tweet.content()).toBe("first tweet");
  });

  describe("error handling", function () {
    it("raises an error when the content is not given", function () {
      delete data.id;

      expect(function () { new Tweet(data) }).toThrow(new Error("Invariant Violation: missing key 'id'"));
    });

    it("raises an error when the id is not given", function () {
      delete data.content;

      expect(function () { new Tweet(data) }).toThrow("Invariant Violation: missing key 'content'");
    });

    it("raises and error when the url is not given", function () {
      delete data.urlRoot;

      expect(function () { new Tweet(data) }).toThrow("Invariant Violation: missing key 'urlRoot'");
    });
  })

  describe("#update", function () {
    it("makes an api call to the url root", function () {
      var payload = {
        content: "updated content"
      }

      expect(tweet.content()).toBe("first tweet");

      tweet.update(payload);

      expect(tweet.content()).toBe("updated content");
    })
  })
});
