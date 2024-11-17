import * as LittleJS from 'littlejsengine';
import { vec2 } from 'littlejsengine';

export function gameRenderPost() {
  // draw to overlay canvas for hud rendering
  LittleJS.drawTextScreen(
    'LittleJS Template',
    vec2(LittleJS.mainCanvasSize.x / 2, 80),
    80,
  );
}
