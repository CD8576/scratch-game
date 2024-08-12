import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Renderer from "./Renderer/Renderer.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Renderer: new Renderer({
    x: 1064.7384570692748,
    y: -188.14994151740805,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 1000000000,
    visible: false,
    layerOrder: 1,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
