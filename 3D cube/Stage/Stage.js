/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 255.25525525525524,
        y: 195.94594594594594,
      }),
      new Costume("Stars", "./Stage/costumes/Stars.png", { x: 480, y: 360 }),
      new Costume("Neon Tunnel", "./Stage/costumes/Neon Tunnel.png", {
        x: 480,
        y: 360,
      }),
      new Costume("Moon", "./Stage/costumes/Moon.png", { x: 480, y: 360 }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];

    this.vars.focalLength = 240;
    this.vars.camX = -13.688692560999872;
    this.vars.camY = 30;
    this.vars.camZ = 186.26397507700045;
    this.vars.camRotX = 450;
    this.vars.camRotY = 685;
    this.vars.lena = 1200.0000000445154;
    this.vars.lenb = 1697.0562749106682;
    this.vars.lenc = 1200.0000000445154;
    this.vars.peri = 0.0002440776823354894;
    this.vars.incx = 290.13381707739325;
    this.vars.incy = 305.3276384681211;
    this.vars.ind = 702.9437251783626;
    this.vars.aox = -774.6046399918815;
    this.vars.aoy = 493.47757998552913;
    this.vars.box = -86.31291631188162;
    this.vars.boy = -489.50487317447084;
    this.vars.cox = 896.6695368481184;
    this.vars.coy = 198.78685050552917;
    this.vars.td = 0.0008647043081260089;
    this.vars.rate = 0.308658283817455;
    this.vars.px = [
      50, 50, -50, -50, -50, 50, -50, 50, -50, 50, 50, -50, 50, 50, 50, 50, 50,
      50, 50, 50, -50, -50, -50, 50, -50, -50, -50, -50, -50, -50, -150, 150,
      -150, 150, 150, -150,
    ];
    this.vars.py = [
      50, -50, -50, -50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, -50, -50, -50,
      50, 50, -50, -50, -50, 50, 50, 50, 50, -50, -50, -50, 50, -50, -50, -50,
      -50, -50, -50,
    ];
    this.vars.pz = [
      150, 150, 150, 150, 150, 150, 250, 250, 150, 250, 150, 150, 250, 150, 150,
      150, 250, 250, 250, 250, 250, 250, 250, 250, 250, 150, 150, 150, 250, 250,
      350, 350, 50, 350, 50, 50,
    ];
    this.vars.rgb = [
      155, 0, 0, 155, 0, 0, 55, 0, 0, 55, 0, 0, 255, 0, 0, 255, 0, 0, 155, 0, 0,
      155, 0, 0, 255, 0, 0, 255, 0, 0, 55, 0, 0, 55, 0, 0,
    ];
  }
}
