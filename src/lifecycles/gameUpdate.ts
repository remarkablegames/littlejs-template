import * as LittleJS from 'littlejsengine';

import { getParticleEmitter } from '../shared';

const { hsl } = LittleJS;

// sound effects
const sound_click = new LittleJS.Sound([1, 0.5]);

// medals
const medal_example = new LittleJS.Medal(
  0,
  'Example Medal',
  'Welcome to LittleJS!',
);

LittleJS.medalsInit('Hello World');

export function gameUpdate() {
  const particleEmitter = getParticleEmitter();

  if (LittleJS.mouseWasPressed(0)) {
    // play sound when mouse is pressed
    sound_click.play(LittleJS.mousePos);

    // change particle color and set to fade out
    particleEmitter.colorStartA = hsl();
    particleEmitter.colorStartB = LittleJS.randColor();
    particleEmitter.colorEndA = particleEmitter.colorStartA.scale(1, 0);
    particleEmitter.colorEndB = particleEmitter.colorStartB.scale(1, 0);

    // unlock medals
    medal_example.unlock();
  }

  // move particles to mouse location if on screen
  if (LittleJS.mousePosScreen.x) {
    particleEmitter.pos = LittleJS.mousePos;
  }
}
