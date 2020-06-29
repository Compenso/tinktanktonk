'use strict'

const store = {
  x: 0,
  o: 0,
  d: 0,
  reset: function () {
    this.x = 0
    $('#xwin').text(store.x)
    this.o = 0
    $('#owin').text(store.o)
    this.d = 0
    $('#draw').text(store.d)
  }
}

module.exports = store
