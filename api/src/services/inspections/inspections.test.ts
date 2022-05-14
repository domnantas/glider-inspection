import {
  inspections,
  inspection,
  createInspection,
  updateInspection,
  deleteInspection,
} from './inspections'
import type { StandardScenario } from './inspections.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inspections', () => {
  scenario('returns all inspections', async (scenario: StandardScenario) => {
    const result = await inspections()

    expect(result.length).toEqual(Object.keys(scenario.inspection).length)
  })

  scenario(
    'returns a single inspection',
    async (scenario: StandardScenario) => {
      const result = await inspection({ id: scenario.inspection.one.id })

      expect(result).toEqual(scenario.inspection.one)
    }
  )

  scenario('creates a inspection', async (scenario: StandardScenario) => {
    const result = await createInspection({
      input: {
        gliderId: scenario.inspection.two.gliderId,
        inspectorName: 'String',
      },
    })

    expect(result.gliderId).toEqual(scenario.inspection.two.gliderId)
    expect(result.inspectorName).toEqual('String')
  })

  scenario('updates a inspection', async (scenario: StandardScenario) => {
    const original = await inspection({ id: scenario.inspection.one.id })
    const result = await updateInspection({
      id: original.id,
      input: { inspectorName: 'String2' },
    })

    expect(result.inspectorName).toEqual('String2')
  })

  scenario('deletes a inspection', async (scenario: StandardScenario) => {
    const original = await deleteInspection({ id: scenario.inspection.one.id })
    const result = await inspection({ id: original.id })

    expect(result).toEqual(null)
  })
})
