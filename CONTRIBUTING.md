# Contributing to LIPAD Corporation System

Thank you for your interest in contributing to the LIPAD Corporation System! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Security](#security)
- [Contact](#contact)

## Code of Conduct

This project adheres to a [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [neal.alim@lipadcorp.com](mailto:neal.alim@lipadcorp.com).

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository**

   ```bash
   git clone https://github.com/your-username/lipadcorp-hr.git
   cd lipadcorp-hr
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Contributing Guidelines

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🧪 **Tests**
- 🎨 **UI/UX improvements**
- 🔒 **Security enhancements**
- ⚡ **Performance optimizations**

### Before You Start

1. **Check existing issues** - Look for open issues that match your contribution
2. **Create an issue** - For significant changes, create an issue first to discuss
3. **Follow the project structure** - Maintain consistency with existing code

## Pull Request Process

### 1. Create a Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

### 2. Make Your Changes

- Follow our [Code Standards](#code-standards)
- Write tests for new functionality
- Update documentation as needed
- Ensure all tests pass

### 3. Commit Your Changes

Use clear, descriptive commit messages:

```bash
git commit -m "feat: add user authentication module"
git commit -m "fix: resolve login form validation issue"
git commit -m "docs: update API documentation"
```

### 4. Push and Create PR

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request with:

- Clear title and description
- Reference any related issues
- Include screenshots for UI changes
- Ensure CI checks pass

## Code Standards

### TypeScript & React

- Use TypeScript for all new code
- Follow React best practices and hooks
- Use functional components over class components
- Implement proper error boundaries

### Styling

- Use Tailwind CSS for styling
- Follow the existing design system
- Use the LIPAD brand color `#003087` for primary elements
- Ensure responsive design

### Code Quality

- Write clean, readable code
- Use meaningful variable and function names
- Add comments for complex logic
- Follow the existing file structure

### File Organization

```
components/
├── ui/                 # Reusable UI components
├── modules/           # Feature-specific components
│   └── auth/         # Authentication components
└── layout/           # Layout components

app/                  # Next.js app directory
├── (routes)/        # Route groups
├── globals.css      # Global styles
└── layout.tsx       # Root layout

lib/                 # Utility functions
tests/               # Test files
├── unit/           # Unit tests
├── e2e/            # End-to-end tests
└── results/        # Test results
```

## Testing

### Running Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# All tests
npm run test:all

# Test coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for utility functions
- Write component tests for React components
- Write E2E tests for critical user flows
- Aim for good test coverage (>80%)

### Test Structure

```typescript
// Example test file
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import { LoginForm } from './login-form';

describe('LoginForm', () => {
  it('should render login form correctly', () => {
    render(<LoginForm onViewChange={jest.fn()} />);
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
```

## Security

### Security Guidelines

- Never commit sensitive information (passwords, API keys, etc.)
- Use environment variables for configuration
- Follow OWASP security guidelines
- Report security vulnerabilities privately to [neal.alim@lipadcorp.com](mailto:neal.alim@lipadcorp.com)

### Data Protection

- Handle HR data with extreme care
- Follow GDPR and data protection regulations
- Implement proper access controls
- Use secure authentication methods

## Code Review Process

### For Contributors

1. **Self-review** your code before submitting
2. **Run all tests** and ensure they pass
3. **Check linting** with `npm run lint`
4. **Format code** with `npm run format`
5. **Update documentation** if needed

### For Reviewers

1. **Check functionality** - Does the code work as intended?
2. **Review security** - Are there any security concerns?
3. **Verify tests** - Are tests comprehensive and passing?
4. **Check performance** - Any performance implications?
5. **Ensure consistency** - Does it follow project standards?

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `test/description` - Test improvements
- `refactor/description` - Code refactoring

### Commit Message Format

```
type(scope): description

[optional body]

[optional footer]
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Getting Help

- 📧 **Email**: [neal.alim@lipadcorp.com](mailto:neal.alim@lipadcorp.com)
- 🐛 **Issues**: Create a GitHub issue for bugs or feature requests
- 💬 **Discussions**: Use GitHub Discussions for questions

## Recognition

Contributors will be recognized in:

- Project README
- Release notes
- Annual contributor acknowledgments

## License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to the LIPAD Corporation System! 🚀
