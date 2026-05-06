import { render, screen } from '@testing-library/react'
import Skills from '../components/Skills'

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />)
    expect(screen.getByText(/Skills/i)).toBeInTheDocument()
  })

  it('renders all skill categories', () => {
    render(<Skills />)
    expect(screen.getByText('Frontend')).toBeInTheDocument()
    expect(screen.getByText('Backend')).toBeInTheDocument()
    expect(screen.getByText('Database')).toBeInTheDocument()
    expect(screen.getByText('Tools')).toBeInTheDocument()
  })

  it('renders React as a skill', () => {
    render(<Skills />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
