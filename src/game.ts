import { engineInit, setShowSplashScreen } from 'littlejsengine';

import {
  gameInit,
  gameRender,
  gameRenderPost,
  gameUpdate,
  gameUpdatePost,
} from './lifecycles';

setShowSplashScreen(true);

engineInit(gameInit, gameUpdate, gameUpdatePost, gameRender, gameRenderPost);
