import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function MaskWithRippleExample(): JSX.Element {
  return (
    <div className="flex justify-center space-x-2">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TERipple>
          <div
            className="relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
              className="w-full" />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-white opacity-50"></div>
          </div>
          </TERipple>
        </div>
        <div>
          <TERipple>
          <div
            className="relative w-full overflow-hidden bg-cover bg-no-repeat">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Others/mewa.jpg"
              className="w-full" />
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black opacity-50"></div>
          </div>
          </TERipple>
        </div>
      </div>
    </div>
  );
}
