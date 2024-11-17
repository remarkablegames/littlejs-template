import * as LittleJS from 'littlejsengine';

import {
  gameInit,
  gameRender,
  gameRenderPost,
  gameUpdate,
  gameUpdatePost,
} from './lifecycles';

LittleJS.setShowSplashScreen(true);

LittleJS.engineInit(
  gameInit,
  gameUpdate,
  gameUpdatePost,
  gameRender,
  gameRenderPost,
);
