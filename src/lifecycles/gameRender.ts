import * as LittleJS from 'littlejsengine';

const { tile, vec2, hsl } = LittleJS;

export function gameRender() {
  // draw a grey square in the background without using webgl
  LittleJS.drawRect(vec2(16, 8), vec2(20, 14), hsl(0, 0, 0.6), 0, false);

  // draw the logo as a tile
  LittleJS.drawTile(vec2(21, 5), vec2(4.5), tile(3, 128));
}
