import React from 'react';
import Link from 'react-router-dom/Link'
import { Button } from '../components';

const NoMatch = () => (
  <div>
    Page Not Found <br />
    <Link to="/"><Button text="Home Page" /></Link>
  </div>
)

export { NoMatch };