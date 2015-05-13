jest.dontMock("../TweetsStore");

var TweetsStore = require("../TweetsStore");

describe("the tweets store", function () {
  var tweet, Tweet, tweetsStore;

  beforeEach( function () {
    tweet = {
      id: jest.genMockFunction().mockReturnValueOnce(1).mockReturnValueOnce(2)
    }

    Tweet = {
      create: jest.genMockFunction().mockReturnValue(tweet)
    }

    tweetsStore = new TweetsStore(Tweet);
  });

  describe("#create", function () {
    it("creates a new tweet, and saves it by its id", function () {
      var options = {
        id: 1,
        content: "first tweet"
      }

      tweetsStore.create(options);

      expect(Tweet.create).toBeCalledWith(options);
      expect(tweet.id).toBeCalled();
      expect(tweetsStore.tweets[1]).toBe(tweet);
    })
  });

  describe("#update", function () {
    it("calls the update method for all the tweets", function () {
      tweetsStore.create({})
      tweetsStore.create({})
    });
  });
});
