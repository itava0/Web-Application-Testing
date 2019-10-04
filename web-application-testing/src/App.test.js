import React from 'react';
import { render } from ' ';
import DashBoard from './Components/Dashboard';
import Display from './Components/Display'
import App from './App';


test('renders without crashing', () => {
  render(<App />);
});

test('renders without crashing', () => {
  render(<DashBoard />);
});

test('renders without crashing', () => {
  render(<Display />);
});

