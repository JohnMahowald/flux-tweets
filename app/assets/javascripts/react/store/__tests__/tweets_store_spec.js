jest.dontMock("../TweetsStore");
jest.dontMock("../__mocks__/tweet");

var mockTweet = require("../__mocks__/tweet");

var TweetsStore = require("../TweetsStore");

describe("the tweets store", function () {
  var tweet1, tweet2, Tweet, tweetsStore;

  beforeEach( function () {
    tweet1 = mockTweet(1);
    tweet2 = mockTweet(2);

    Tweet = {
      create: jest.genMockFunction().mockReturnValueOnce(tweet1).mockReturnValueOnce(tweet2)
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
      expect(tweet1.id).toBeCalled();
      expect(tweetsStore.tweets[1]).toBe(tweet1);
    })
  });

  describe("#update", function () {
    beforeEach(function () {
      tweetsStore.create({})
      tweetsStore.create({})
    });

    it("calls the update method for all the tweets", function () {
      tweetsStore.updateAll();
      
      expect(tweet1.update.mock.calls.length).toBe(1);
      expect(tweet2.update.mock.calls.length).toBe(1);
    });

    it("can call the update method for an individual tweet", function () {
      tweetsStore.update(1)
      
      expect(tweet1.update.mock.calls.length).toBe(1);
      expect(tweet2.update.mock.calls.length).toBe(0);
    });
  });

  describe("#get", function () {
    it ("returns a tweet from the collection", function () {
      tweetsStore.create({})

      tweet = tweetsStore.get(1);

      expect(tweet).toBe(tweet1);
    });
  });
});
