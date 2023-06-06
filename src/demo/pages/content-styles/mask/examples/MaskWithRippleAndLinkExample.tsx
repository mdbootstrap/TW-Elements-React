import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function MaskWithRippleAndLinkExample(): JSX.Element {
  return (
    <div className="flex justify-center space-x-2">
      <TERipple>
        <div
          className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
            className="max-w-xs" />
          <a href="#!">
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-neutral-200 bg-fixed opacity-60"></div>
          </a>
        </div>
      </TERipple>
    </div>
  );
}
