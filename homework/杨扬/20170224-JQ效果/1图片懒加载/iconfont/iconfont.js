;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-see" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M1000.25 496.8125c0 12.5-3.75 25.25-11.1875 38.0625-52.0625 84.75-122.125 152.6875-210.125 203.75s-180.9375 76.5625-278.75 76.5625-190.8125-25.625-278.8125-76.8125S63.3125 619.3125 11.1875 534.9375C3.75 522.0625 0 509.3125 0 496.8125c0-12.5625 3.75-25.25 11.1875-38.125 52.0625-84.375 122.125-152.1875 210.125-203.375C309.375 204.0625 402.3125 178.4375 500.125 178.4375s190.75 25.625 278.75 76.8125c88 51.25 158.0625 119 210.125 203.375C996.5 471.5625 1000.25 484.3125 1000.25 496.8125zM928.8125 496.8125c-56.5625-87-127.4375-152-212.625-195.125 22.625 38.3125 34 79.8125 34 124.375 0 68.125-24.5 126.4375-73.375 174.9375-48.9375 48.4375-107.875 72.6875-176.6875 72.6875-68.875 0-127.75-24.25-176.6875-72.6875S250.0625 494.25 250.0625 426.0625c0-44.5625 11.375-86.0625 34.0625-124.375-85.25 43.125-156.125 108.125-212.6875 195.125 49.5 75.5625 111.5625 135.6875 186.1875 180.5 74.5625 44.75 155.4375 67.125 242.5 67.125s167.9375-22.375 242.5-67.125C817.25 632.5 879.3125 572.375 928.8125 496.8125zM519.125 303.375c5.1875-5.1875 7.8125-11.4375 7.8125-18.8125 0-7.375-2.625-13.625-7.8125-18.8125C513.9375 260.625 507.625 258.0625 500.125 258.0625c-46.5 0-86.4375 16.5-119.75 49.5C347.125 340.5 330.5 380 330.5 426.0625c0 7.375 2.625 13.625 7.8125 18.75 5.1875 5.1875 11.5625 7.75 19 7.75 7.4375 0 13.75-2.5625 18.9375-7.75 5.1875-5.1875 7.8125-11.4375 7.8125-18.75 0-31.6875 11.3125-58.75 34-81.25 22.6875-22.4375 50.0625-33.75 82.0625-33.75C507.625 311.125 513.9375 308.5625 519.125 303.375z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-good" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M352.5 762c0 0 0.2 14.3-18.1 14.3l-87.7 0c0 0-21.6 0-21.6-21.6L204.1 415c0 0 0.3-20.6 21.3-20.6l101.3 0c0 0 25.8-0.3 25.8 25.8L352.5 762z"  ></path>' +
    '' +
    '<path d="M757 713.4c0 0-19.5 62.9-43.4 62.9L459.1 776.3c-17.7 0-62.9-12-62.9-45.2L396.2 394.3c0 0 125.8-93.1 125.8-211.8 3.6-6.2-6.2-43.4 40.8-43.4 0 0 110.8 12.4 45.2 255.3l169.3 0c0 0 42.5-3.6 42.5 40.8C819.9 435.1 819.9 498.9 757 713.4z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-favour" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M871.253333 409.053867c0 225.262933-375.466667 469.128533-375.466667 469.128533s-375.466667-243.8656-375.466667-469.128533 234.018133-292.4544 375.466667-103.389867C635.938133 116.599467 871.253333 183.790933 871.253333 409.053867z"  ></path>' +
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