import * as LittleJS from 'littlejsengine';

const { vec2 } = LittleJS;

export function gameRenderPost() {
  // draw to overlay canvas for hud rendering
  LittleJS.drawTextScreen(
    'LittleJS with TypeScript',
    vec2(LittleJS.mainCanvasSize.x / 2, 80),
    80,
  );
}
