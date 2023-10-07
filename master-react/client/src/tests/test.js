import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from '../app/store'; 
import App from '../App';

test('it renders the component', () => {
  render(<App />);
  const element = screen.getByText('Hello, World!');
  expect(element).toBeInTheDocument();
});

test('renders Home component for the home route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    
    const homeElement = screen.getByTestId('home');
    expect(homeElement).toBeInTheDocument();
  });
  
  test('renders Community component for the community route', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/community']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    
    const communityElement = screen.getByTestId('community');
    expect(communityElement).toBeInTheDocument();
  });

test('renders App component without errors', () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>
  );

  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});
