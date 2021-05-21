import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Vote from '../Vote'

test('should render vote component', () => {
    render(<Vote />);
    const voteElement = screen.getByTestId('vote-test');
    expect(voteElement).toBeInTheDocument();
})