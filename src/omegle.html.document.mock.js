
let makeMockHtmlDocument = require('html-mock/src/html.document.mock')
let makeMockHtmlElement = require('html-mock/src/html.element.mock')

function makeMockOmegleDocument () {
  let mockHtmlDocument = makeMockHtmlDocument()
  let queryableElements = {
    chatBox: {
      selectors: [
        'textarea'
      ],
      elements: [makeMockHtmlElement()]
    },
    submitBtn: {
      selectors: [
        '.sendbtn'
      ],
      elements: [makeMockHtmlElement()]
    },
    startTextChatBtn: {
      selectors: [
        '#textbtn'
      ],
      elements: [makeMockHtmlElement()]
    },
    startNewChatBtn: {
      selectors: [
        '.newchatbtnwrapper img'
      ],
      elements: [makeMockHtmlElement()]
    },
    stopBtn: {
      selectors: [
        '.disconnectbtn'
      ],
      elements: [makeMockHtmlElement()]
    },
    strangerMessages: {
      selectors: [
        '.strangermsg'
      ],
      elements: [makeMockHtmlElement()]
    },
    strangerMessageSpans: {
      selectors: [
        '.strangermsg span'
      ],
      elements: [makeMockHtmlElement()]
    }
  }
  mockHtmlDocument.setAllQueryableElements(queryableElements)
  let queryableElementsHome = [
    queryableElements.startTextChatBtn
  ]
  let queryableElementsChatStarted = [
    queryableElements.chatBox,
    queryableElements.submitBtn,
    queryableElements.stopBtn,
    queryableElements.strangerMessages,
    queryableElements.strangerMessageSpans
  ]
  let queryableElementsChatEnded = [
    queryableElements.startNewChatBtn
  ]
  mockHtmlDocument.setHomePage = function () {
    mockHtmlDocument.setActiveQueryableElements(queryableElementsHome)
  }
  mockHtmlDocument.setChatStarted = function () {
    mockHtmlDocument.setActiveQueryableElements(queryableElementsChatStarted)
  }
  mockHtmlDocument.setChatEnded = function () {
    mockHtmlDocument.setActiveQueryableElements(queryableElementsChatEnded)
  }
  return mockHtmlDocument
}

module.exports = makeMockOmegleDocument
