import React from 'react';
import ButtonLink from './components/ButtonLink';

import demoPages from './pages';

const HomePage = () => {
  return (
    <div>
      <h1 className="flex justify-center mb-2 mt-0 text-5xl font-medium leading-tight text-primary">Tailwind Element React UI KIT</h1>
      {
        demoPages.map(({ name, path }) => (
          <ButtonLink href={path}>
            {name}
          </ButtonLink>
        ))
      }
    </div>
  )
}

export default HomePage;
