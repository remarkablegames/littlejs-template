import * as LittleJS from 'littlejsengine';
import { hsl, tile, vec2 } from 'littlejsengine';

import { setParticleEmitter } from '../shared';

export function gameInit() {
  // create tile collision and visible tile layer
  const tileCollisionSize = vec2(32, 16);
  LittleJS.initTileCollision(tileCollisionSize);
  const pos = vec2();
  const tileLayer = new LittleJS.TileLayer(pos, tileCollisionSize);

  // get level data from the tiles image
  const mainContext = LittleJS.mainContext;
  const tileImage = LittleJS.textureInfos[0].image;
  mainContext.drawImage(tileImage, 0, 0);
  const imageData = mainContext.getImageData(
    0,
    0,
    tileImage.width,
    tileImage.height,
  ).data;

  for (pos.x = tileCollisionSize.x; pos.x--; )
    for (pos.y = tileCollisionSize.y; pos.y--; ) {
      // check if this pixel is set
      const i = pos.x + tileImage.width * (15 + tileCollisionSize.y - pos.y);
      if (!imageData[4 * i]) continue;

      // set tile data
      const tileIndex = 1;
      const direction = LittleJS.randInt(4);
      const mirror = !LittleJS.randInt(2);
      const color = LittleJS.randColor();
      const data = new LittleJS.TileLayerData(
        tileIndex,
        direction,
        mirror,
        color,
      );
      tileLayer.setData(pos, data);
      LittleJS.setTileCollisionData(pos, 1);
    }

  // draw tile layer with new data
  tileLayer.redraw();

  // move camera to center of collision
  LittleJS.setCameraPos(tileCollisionSize.scale(0.5));
  LittleJS.setCameraScale(48);

  // enable gravity
  LittleJS.setGravity(-0.01);

  // create particle emitter
  const particleEmitter = new LittleJS.ParticleEmitter(
    vec2(16, 9),
    0, // emitPos, emitAngle
    1,
    0,
    500,
    Math.PI, // emitSize, emitTime, emitRate, emiteCone
    tile(0, 16), // tileIndex, tileSize
    hsl(1, 1, 1),
    hsl(0, 0, 0), // colorStartA, colorStartB
    hsl(0, 0, 0, 0),
    hsl(0, 0, 0, 0), // colorEndA, colorEndB
    2,
    0.2,
    0.2,
    0.1,
    0.05, // time, sizeStart, sizeEnd, speed, angleSpeed
    0.99,
    1,
    1,
    Math.PI, // damping, angleDamping, gravityScale, cone
    0.05,
    0.5,
    true,
    true, // fadeRate, randomness, collide, additive
  );
  particleEmitter.elasticity = 0.3; // bounce when it collides
  particleEmitter.trailScale = 2; // stretch in direction of motion
  setParticleEmitter(particleEmitter);
}
