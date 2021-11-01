import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('Test Hello World', ()=>{
    render(<HelloWorld/>)
    const text = screen.getByText('Hello World')
    expect(text).toBeInTheDocument();
})