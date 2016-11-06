
let expect = require('chai').expect

let makeMockOmegleDocument = require('./../src/omegle.html.document.mock')

let mockOmegleDocument = makeMockOmegleDocument()

describe('mockOmegleDocument', function () {
  it('can be configured on Home page', function () {
    mockOmegleDocument.setHomePage()
  })
  it('can be configured on Chat Started state', function () {
    mockOmegleDocument.setChatStarted()
  })
  it('can be configured on Chat Ended state', function () {
    mockOmegleDocument.setChatEnded()
  })
  describe('on Home page', function () {
    it('has the Start Text button', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('#textbtn')
      ).to.not.be.null
    })
    it('does not have the chat box', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('textarea')
      ).to.be.null
    })
    it('does not have the send button', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('.sendbtn')
      ).to.be.null
    })
    it('does not have the stop button', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('.disconnectbtn')
      ).to.be.null
    })
    it('does not have the stranger\'s messages', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg')
      ).to.be.an('array').of.length(0)
    })
    it('does not have the stranger\'s messages content', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg span')
      ).to.be.an('array').of.length(0)
    })
    it('does not have the New Chat button', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('.newchatbtnwrapper img')
      ).to.be.null
    })
  })
  describe('in Chat Started state', function () {
    it('does not have the Start Text button', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('#textbtn')
      ).to.be.null
    })
    it('has the chat box', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('textarea')
      ).to.not.be.null
    })
    it('has the Send button', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.sendbtn')
      ).to.not.be.null
    })
    it('has the Stop button', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.disconnectbtn')
      ).to.not.be.null
    })
    it('has the stranger\'s messages', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg')
      ).to.be.an('array').of.length(1)
    })
    it('has the stranger\'s messages content', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg span')
      ).to.be.an('array').of.length(1)
    })
    it('does not have the New Chat button', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.newchatbtnwrapper img')
      ).to.be.null
    })
  })
  describe('in Chat Ended state', function () {
    it('does not have the Start Text button', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('#textbtn')
      ).to.be.null
    })
    it('does not have the chat box', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('textarea')
      ).to.be.null
    })
    it('does not have the Send button', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('.sendbtn')
      ).to.be.null
    })
    it('does not have the Stop button', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('.disconnectbtn')
      ).to.be.null
    })
    it('does not have the stranger\'s messages', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg')
      ).to.be.an('array').of.length(0)
    })
    it('does not have the stranger\'s messages content', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelectorAll('.strangermsg span')
      ).to.be.an('array').of.length(0)
    })
    it('has the New Chat button', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('.newchatbtnwrapper img')
      ).to.not.be.null
    })
  })
  describe('Start Text button', function () {
    it('is clickable', function () {
      mockOmegleDocument.setHomePage()
      expect(
        mockOmegleDocument.querySelector('#textbtn')
      ).to.respondTo('click')
    })
  })
  describe('chat box', function () {
    it('has a property `value`', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('textarea')
      ).to.have.property('value')
    })
  })
  describe('Send button', function () {
    it('is clickable', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.sendbtn')
      ).to.respondTo('click')
    })
  })
  describe('Stop button', function () {
    it('is clickable', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.disconnectbtn')
      ).to.respondTo('click')
    })
  })
  describe('stranger\'s messages content', function () {
    it('has property `innerHTML`', function () {
      mockOmegleDocument.setChatStarted()
      expect(
        mockOmegleDocument.querySelector('.strangermsg span')
      ).to.have.property('innerHTML')
    })
  })
  describe('New Chat button', function () {
    it('is clickable', function () {
      mockOmegleDocument.setChatEnded()
      expect(
        mockOmegleDocument.querySelector('.newchatbtnwrapper img')
      ).to.respondTo('click')
    })
  })
})
