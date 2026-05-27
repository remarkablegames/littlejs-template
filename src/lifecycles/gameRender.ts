import * as LittleJS from 'littlejsengine';
import { hsl, tile, vec2 } from 'littlejsengine';

export function gameRender() {
  // draw a grey square in the background
  LittleJS.drawRect(vec2(16, 8), vec2(20, 14), hsl(0, 0, 0.6));

  // draw the logo as a tile
  LittleJS.drawTile(vec2(21, 5), vec2(4.5), tile(3, 128));
}
