import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import RequestForm from './Components/Form/Form'

it('renders RESTy header', () => {
  render(<App />);
  const linkElement = screen.getByText("RESTy");
  expect(linkElement).toBeInTheDocument();
});

it('should invoke handleSubmit with correct parameters', () => {
  const mockFn = jest.fn();
  render(<RequestForm handleSubmit={mockFn}/>);
  const input = screen.getByRole('textbox') 
  let get = screen.getByRole('button', {
    name: /get/i
  })
  let submit = screen.getByRole('button', {
    name: /submit/i
  })
  fireEvent.change(input, {target: {value: 'https://pokeapi.co/api/v2/'}})
  fireEvent.click(get)
  fireEvent.click(submit)
  expect(mockFn).toBeCalledWith("GET", "https://pokeapi.co/api/v2/");
})

it('should match snapshot', () => {
  expect(render(<App />)).toMatchSnapshot()
})
