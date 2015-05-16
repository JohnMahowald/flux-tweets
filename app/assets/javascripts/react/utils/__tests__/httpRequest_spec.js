jest.dontMock("../httpRequest");

var HttpRequest = require("../httpRequest");
var sinon = require("sinon");

describe("HttpRequest#create", function () {
  var callback, options, xhr, server;

  beforeEach( function () {
    callback = jest.genMockFunction();

    options = {
      url: "http://www.localhost:3000/users/1",
      payload: '{ "content": "test" }',
      async: false,
      callback: callback,
    }

    xhr = HttpRequest.create(options)

    server = sinon.fakeServer.create();
    server.respondImmediately = true;
  });

  afterEach( function () {
    server.restore();
  });

  it("it can create a request object", function () {
    expect(xhr.url).toBe(options.url);
    expect(xhr.payload).toBe(options.payload);
    expect(xhr.async).toBe(options.async);
    expect(xhr.callback).toBe(options.callback);
  })

  it("it can send a post request", function () {
    xhr.post();

    server.requests[0].respond(
      200,
      { "Content-Type": "application/json" },
      JSON.stringify([{ id: 1, text: "Provide examples", done: true }])
    );

    expect(callback.mock.calls.length).toBe(1);
  });
});
