import React from 'react';
import PokeGrid from './components/grid';
import {Ripple} from '@rmwc/ripple';
import '@material/ripple/dist/mdc.ripple.css';

function App() {
  return (
      <Ripple primary>
          <PokeGrid />
      </Ripple>
  );
}

export default App;
