import {
  gliders,
  glider,
  createGlider,
  updateGlider,
  deleteGlider,
} from './gliders'
import type { StandardScenario } from './gliders.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gliders', () => {
  scenario('returns all gliders', async (scenario: StandardScenario) => {
    const result = await gliders()

    expect(result.length).toEqual(Object.keys(scenario.glider).length)
  })

  scenario('returns a single glider', async (scenario: StandardScenario) => {
    const result = await glider({ id: scenario.glider.one.id })

    expect(result).toEqual(scenario.glider.one)
  })

  scenario('creates a glider', async (scenario: StandardScenario) => {
    const result = await createGlider({
      input: {
        gliderTypeId: scenario.glider.two.gliderTypeId,
        callsign: 'String',
      },
    })

    expect(result.gliderTypeId).toEqual(scenario.glider.two.gliderTypeId)
    expect(result.callsign).toEqual('String')
  })

  scenario('updates a glider', async (scenario: StandardScenario) => {
    const original = await glider({ id: scenario.glider.one.id })
    const result = await updateGlider({
      id: original.id,
      input: { callsign: 'String2' },
    })

    expect(result.callsign).toEqual('String2')
  })

  scenario('deletes a glider', async (scenario: StandardScenario) => {
    const original = await deleteGlider({ id: scenario.glider.one.id })
    const result = await glider({ id: original.id })

    expect(result).toEqual(null)
  })
})
