import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function ButtonLinkExample(): JSX.Element {
    return (
        <div className="flex justify-center space-x-2"> 
        <TERipple>
            <button
                type="button"
                className="rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700">
                Link
            </button>
        </TERipple>
        </div>
    );
}
