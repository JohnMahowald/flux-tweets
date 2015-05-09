jest.autoMockOff();

describe("creating a new tweet", function () {
  it("creates a new tweet, and saves it by its id", function () {
   var TweetStore = require("../TweetStore");

   var options = {
      id: 1,
      content: "first tweet"
    }

    var tweetStore = new TweetStore();
    tweetsStore.create(options)
    expect(tweetStore[1]).toBe("first tweet");
  })
});
