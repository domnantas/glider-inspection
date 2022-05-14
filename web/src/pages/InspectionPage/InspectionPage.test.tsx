import { render } from '@redwoodjs/testing/web'

import InspectionPage from './InspectionPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InspectionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InspectionPage />)
    }).not.toThrow()
  })
})
