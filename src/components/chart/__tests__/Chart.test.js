import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import '@testing-library/jest-dom/extend-expect'
import Chart from '../Chart'

afterEach(() => {
    cleanup();
})

test('should render chart component', () => {
    render(<Chart />);
    const chartElement = screen.getByTestId('chart-test');
    expect(chartElement).toBeInTheDocument();
})

test('matches snapshot', () => {
    const tree = renderer.create(<Chart />);
    expect(tree).toMatchSnapshot();
})