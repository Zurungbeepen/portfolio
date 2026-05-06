import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders the brand logo', () => {
    render(<Navbar />)
    expect(screen.getByText('>_<')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Projects').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })
})
