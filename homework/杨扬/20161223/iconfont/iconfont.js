;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-more" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M917.661538 980.676923H106.338462c-35.446154 0-63.015385-27.569231-63.015385-63.015385V106.338462c0-35.446154 27.569231-63.015385 63.015385-63.015385h811.323076c35.446154 0 63.015385 27.569231 63.015385 63.015385v811.323076c0 35.446154-27.569231 63.015385-63.015385 63.015385z" fill="#241101" ></path>' +
    '' +
    '<path d="M807.384615 575.015385h-590.76923c-27.569231 0-47.261538-23.630769-47.261539-51.2v-31.507693c0-27.569231 23.630769-47.261538 47.261539-47.261538h594.707692c27.569231 0 51.2 23.630769 51.2 47.261538v31.507693c-3.938462 31.507692-27.569231 51.2-55.138462 51.2z" fill="#ac771f" ></path>' +
    '' +
    '<path d="M448.984615 807.384615v-590.76923c0-27.569231 23.630769-51.2 51.2-51.2h31.507693c27.569231 0 47.261538 23.630769 47.261538 51.2v594.707692c0 27.569231-23.630769 51.2-47.261538 51.2h-31.507693c-31.507692-3.938462-51.2-27.569231-51.2-55.138462z" fill="#ac771f" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)