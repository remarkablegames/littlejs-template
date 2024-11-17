import * as LittleJS from 'littlejsengine';
import { hsl } from 'littlejsengine';

import { getParticleEmitter } from '../shared';

// sound effects
const soundClick = new LittleJS.Sound([1, 0.5]);

// medals
const medalExample = new LittleJS.Medal(
  0,
  'Example Medal',
  'Welcome to LittleJS!',
);

LittleJS.medalsInit('Hello World');

export function gameUpdate() {
  const particleEmitter = getParticleEmitter();

  if (LittleJS.mouseWasPressed(0)) {
    // play sound when mouse is pressed
    soundClick.play(LittleJS.mousePos);

    // change particle color and set to fade out
    particleEmitter.colorStartA = hsl();
    particleEmitter.colorStartB = LittleJS.randColor();
    particleEmitter.colorEndA = particleEmitter.colorStartA.scale(1, 0);
    particleEmitter.colorEndB = particleEmitter.colorStartB.scale(1, 0);

    // unlock medals
    medalExample.unlock();
  }

  // move particles to mouse location if on screen
  if (LittleJS.mousePosScreen.x) {
    particleEmitter.pos = LittleJS.mousePos;
  }
}
