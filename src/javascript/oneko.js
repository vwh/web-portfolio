!(function () {
  if (window.matchMedia("(max-width: 600px)").matches) {
    return;
  }

  !0 === window.matchMedia("(prefers-reduced-motion: reduce)") ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const t = document.createElement("div");
  let e = 32,
    n = 32,
    a = 0,
    l = 0,
    o = 0,
    c = 0,
    i = null,
    r = 0;
  const s = 10,
    d = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, 0],
        [-6, 0],
        [-7, 0],
      ],
      scratchWallN: [
        [0, 0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, 0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, 0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, 0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, 0],
        [-1, -1],
      ],
    };
  let h;
  function m(d) {
    t.isConnected &&
      (h || (h = d),
      d - h > 100 &&
        ((h = d),
        (function () {
          o += 1;
          const d = e - a,
            h = n - l,
            m = Math.sqrt(d ** 2 + h ** 2);
          if (m < s || m < 48)
            return void (function () {
              if (
                ((c += 1),
                c > 10 && 0 == Math.floor(200 * Math.random()) && null == i)
              ) {
                let t = ["sleeping", "scratchSelf"];
                e < 32 && t.push("scratchWallW"),
                  n < 32 && t.push("scratchWallN"),
                  e > window.innerWidth - 32 && t.push("scratchWallE"),
                  n > window.innerHeight - 32 && t.push("scratchWallS"),
                  (i = t[Math.floor(Math.random() * t.length)]);
              }
              switch (i) {
                case "sleeping":
                  if (r < 8) {
                    u("tired", 0);
                    break;
                  }
                  u("sleeping", Math.floor(r / 4)), r > 192 && p();
                  break;
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                case "scratchSelf":
                  u(i, r), r > 9 && p();
                  break;
                default:
                  return void u("idle", 0);
              }
              r += 1;
            })();
          if (((i = null), (r = 0), c > 1))
            return u("alert", 0), (c = Math.min(c, 7)), void (c -= 1);
          let f;
          (f = h / m > 0.5 ? "N" : ""),
            (f += h / m < -0.5 ? "S" : ""),
            (f += d / m > 0.5 ? "W" : ""),
            (f += d / m < -0.5 ? "E" : ""),
            u(f, o),
            (e -= (d / m) * s),
            (n -= (h / m) * s),
            (e = Math.min(Math.max(16, e), window.innerWidth - 16)),
            (n = Math.min(Math.max(16, n), window.innerHeight - 16)),
            (t.style.left = e - 16 + "px"),
            (t.style.top = n - 16 + "px");
        })()),
      window.requestAnimationFrame(m));
  }
  function u(e, n) {
    const a = d[e][n % d[e].length];
    t.style.backgroundPosition = `${32 * a[0]}px ${32 * a[1]}px`;
  }
  function p() {
    (i = null), (r = 0);
  }
  const f = document.createElement("style");
  (f.innerHTML =
    "\n\t\t  @keyframes heartBurst {\n\t\t\t  0% { transform: scale(0); opacity: 1; }\n\t\t\t  100% { transform: scale(1); opacity: 0; }\n\t\t  }\n\t\t  .heart {\n\t\t\t  position: absolute;\n\t\t\t  font-size: 2em;\n\t\t\t  animation: heartBurst 1s ease-out;\n\t\t\t  animation-fill-mode: forwards;\n\t\t\t  color: #ab9df2;\n\t\t  }\n\t  "),
    document.head.appendChild(f),
    t.addEventListener("click", function () {
      const e = t.parentElement,
        n = t.getBoundingClientRect(),
        a = window.scrollX || document.documentElement.scrollLeft,
        l = window.scrollY || document.documentElement.scrollTop,
        o = n.left + n.width / 2 + a,
        c = n.top + n.height / 2 + l;
      for (let t = 0; t < 10; t++) {
        const t = document.createElement("div");
        (t.className = "heart"), (t.textContent = "❤");
        const n = 50 * (Math.random() - 0.5),
          a = 50 * (Math.random() - 0.5);
        (t.style.left = o + n - 16 + "px"),
          (t.style.top = c + a - 16 + "px"),
          (t.style.transform = `translate(-50%, -50%) rotate(${
            360 * Math.random()
          }deg)`),
          e.appendChild(t),
          setTimeout(() => {
            e.removeChild(t);
          }, 800);
      }
    }),
    (function () {
      (t.id = "oneko"),
        (t.ariaHidden = !0),
        (t.style.width = "32px"),
        (t.style.height = "32px"),
        (t.style.position = "fixed"),
        (t.style.pointerEvents = "auto"),
        (t.style.imageRendering = "pixelated"),
        (t.style.left = e - 16 + "px"),
        (t.style.top = n - 16 + "px"),
        (t.style.zIndex = Number.MAX_VALUE);
      let o = "./images/effects/Oneko.gif";
      const c = document.currentScript;
      c && c.dataset.cat && (o = c.dataset.cat),
        (t.style.backgroundImage = `url(${o})`),
        document.body.appendChild(t),
        document.addEventListener("mousemove", function (t) {
          (a = t.clientX), (l = t.clientY);
        }),
        window.requestAnimationFrame(m);
    })();
})();
