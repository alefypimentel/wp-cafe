'use strict'

class Model {
  constructor () {
    this.addEventListeners()
  }

  addEventListeners () {
    jQuery('.menu-start').click(function () {
      jQuery('.navigation').toggleClass('active')
    })

    jQuery('.btn-off').click(function () {
      jQuery('.navigation').removeClass('active')
    })
  }
}

export default new Model()
