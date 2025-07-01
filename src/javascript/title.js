(function () {
  const baseTitle = document.title;
  let stopped = false;
  const effects = [waveEffect, scrambleEffect, typewriterEffect, marqueeEffect];
  let idx = 0;

  nextEffect();

  globalThis.stopTitleMagic = () => {
    stopped = true;
  };

  function nextEffect() {
    if (stopped) return;
    const effect = effects[idx++];
    if (idx >= effects.length) idx = 0;
    effect(baseTitle, () => setTimeout(nextEffect, 1000));
  }

  function waveEffect(text, done) {
    let t = 0;
    const interval = setInterval(() => {
      if (stopped) return clearInterval(interval);
      document.title = text
        .split("")
        .map((ch, i) => {
          if (!/[a-zA-Z]/.test(ch)) return ch;
          return Math.sin((t + i) / 3) > 0
            ? ch.toUpperCase()
            : ch.toLowerCase();
        })
        .join("");
      t += 0.5;
    }, 100);
    setTimeout(() => {
      if (!stopped) {
        clearInterval(interval);
        document.title = text;
        done();
      }
    }, 4000);
  }

  function scrambleEffect(text, done) {
    const letters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const duration = 2500,
      speed = 50,
      frames = duration / speed;
    let frame = 0;
    const interval = setInterval(() => {
      if (stopped) return clearInterval(interval);
      document.title = text
        .split("")
        .map((ch, i) => {
          if (i < (frame / frames) * text.length) return ch;
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");
      frame++;
      if (frame > frames) {
        clearInterval(interval);
        document.title = text;
        !stopped && done();
      }
    }, speed);
  }

  function typewriterEffect(text, done) {
    let i = 0,
      deleting = false;
    (function tick() {
      if (stopped) return;
      document.title = deleting
        ? text.substring(0, i--)
        : text.substring(0, ++i);
      if (!deleting && i === text.length) {
        deleting = true;
        setTimeout(tick, 1000);
      } else if (deleting && i === 0) {
        document.title = "";
        !stopped && done();
      } else {
        setTimeout(tick, deleting ? 75 : 150);
      }
    })();
  }

  function marqueeEffect(text, done) {
    const pad = "   ";
    const msg = text + pad;
    let pos = 0;

    const interval = setInterval(() => {
      if (stopped) return clearInterval(interval);

      document.title = msg.substring(pos) + msg.substring(0, pos);
      pos = (pos + 1) % msg.length;
    }, 200);

    setTimeout(() => {
      if (!stopped) {
        clearInterval(interval);
        document.title = text;
        done();
      }
    }, msg.length * 200 + 2000);
  }
})();
