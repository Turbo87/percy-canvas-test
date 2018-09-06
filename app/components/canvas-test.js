import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    this.paintCanvas1();
    this.paintCanvas2();
  },

  paintCanvas1() {
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");

    // Create gradient
    let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  },

  paintCanvas2() {
    let c = document.getElementById("myCanvas2");
    let ctx = c.getContext("2d");

    // Create gradient
    let grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "white");

    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
  },
});
