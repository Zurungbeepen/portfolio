import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByText(/Projects/i)).toBeInTheDocument()
  })

  it('renders all 5 projects', () => {
    render(<Projects />)
    expect(screen.getByText('Printronic')).toBeInTheDocument()
    expect(screen.getByText('Land Rental System')).toBeInTheDocument()
    expect(screen.getByText('Charpangre')).toBeInTheDocument()
    expect(screen.getByText('Journal Site')).toBeInTheDocument()
    expect(screen.getByText('Apartment Management System')).toBeInTheDocument()
  })

  it('renders GitHub links for each project', () => {
    render(<Projects />)
    const githubLinks = screen.getAllByText('GitHub')
    expect(githubLinks).toHaveLength(5)
  })
})
