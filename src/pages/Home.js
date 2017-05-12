import React from 'react';
import Link from 'react-router-dom/Link'
import { Button } from '../components';

const Home = () => (
  <div>
    This is Homepage <br />
    <Link to="/notfound"><Button text="Not Found Page" /></Link>
  </div>
)

export { Home };