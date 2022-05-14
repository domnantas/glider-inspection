import {
  gliderTypes,
  gliderType,
  createGliderType,
  updateGliderType,
  deleteGliderType,
} from './gliderTypes'
import type { StandardScenario } from './gliderTypes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('gliderTypes', () => {
  scenario('returns all gliderTypes', async (scenario: StandardScenario) => {
    const result = await gliderTypes()

    expect(result.length).toEqual(Object.keys(scenario.gliderType).length)
  })

  scenario(
    'returns a single gliderType',
    async (scenario: StandardScenario) => {
      const result = await gliderType({ id: scenario.gliderType.one.id })

      expect(result).toEqual(scenario.gliderType.one)
    }
  )

  scenario('creates a gliderType', async () => {
    const result = await createGliderType({
      input: { name: 'String4205218' },
    })

    expect(result.name).toEqual('String4205218')
  })

  scenario('updates a gliderType', async (scenario: StandardScenario) => {
    const original = await gliderType({ id: scenario.gliderType.one.id })
    const result = await updateGliderType({
      id: original.id,
      input: { name: 'String81866702' },
    })

    expect(result.name).toEqual('String81866702')
  })

  scenario('deletes a gliderType', async (scenario: StandardScenario) => {
    const original = await deleteGliderType({ id: scenario.gliderType.one.id })
    const result = await gliderType({ id: original.id })

    expect(result).toEqual(null)
  })
})
