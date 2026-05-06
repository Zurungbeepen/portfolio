import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/BIT Student/i)).toBeInTheDocument()
  })

  it('renders View Projects button', () => {
    render(<Hero />)
    expect(screen.getByText('View Projects')).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<Hero />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })
})
