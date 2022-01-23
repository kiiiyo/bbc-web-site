import { render } from '@testing-library/react'

import HomePage from '@/pages/index'

describe('Pages: HomePage', () => {
  test('render', async () => {
    render(<HomePage />)
  })
})
