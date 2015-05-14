var mockTweet = function (i) {
  return {
    id: jest.genMockFunction().mockReturnValue(i),
    update: jest.genMockFunction()
  }
}

module.exports = mockTweet;
