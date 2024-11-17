import * as LittleJS from 'littlejsengine';

import {
  gameInit,
  gameRender,
  gameRenderPost,
  gameUpdate,
  gameUpdatePost,
} from './lifecycles';

// show the LittleJS splash screen
LittleJS.setShowSplashScreen(true);

// Startup LittleJS Engine
LittleJS.engineInit(
  gameInit,
  gameUpdate,
  gameUpdatePost,
  gameRender,
  gameRenderPost,
);
