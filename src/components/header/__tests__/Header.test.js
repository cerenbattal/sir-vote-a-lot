import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import Header from '../Header'

afterEach(() => {
    cleanup();
})

test('should render header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header-test');
    expect(headerElement).toBeInTheDocument();
})

test('matches snapshot', () => {
    const tree = renderer.create(<Header />);
    expect(tree).toMatchSnapshot();
})