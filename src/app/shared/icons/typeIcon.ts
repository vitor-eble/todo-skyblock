import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import {
  faHammer,
  faFire,
  faSkull,
  faFish,
  faWheatAwn,
  faGem,
} from '@fortawesome/free-solid-svg-icons';

export const tipoIcons: Record<string, IconDefinition> = {
  mining: faHammer,
  blaze: faFire,
  eman: faSkull,
  fishing: faFish,
  farming: faWheatAwn,
  mp: faGem
};
