/*
    Little JS TypeScript Demo
    - A simple starter project
    - Shows how to use LittleJS with modules
*/

'use strict';

// import LittleJS module
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

// fix texture bleeding by shrinking tile slightly
LittleJS.setTileDefaultBleed(0.5);

// Startup LittleJS Engine
LittleJS.engineInit(
  gameInit,
  gameUpdate,
  gameUpdatePost,
  gameRender,
  gameRenderPost,
  ['tiles.png'],
);
