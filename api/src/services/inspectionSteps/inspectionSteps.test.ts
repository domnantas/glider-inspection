import {
  inspectionSteps,
  inspectionStep,
  createInspectionStep,
  updateInspectionStep,
  deleteInspectionStep,
} from './inspectionSteps'
import type { StandardScenario } from './inspectionSteps.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('inspectionSteps', () => {
  scenario(
    'returns all inspectionSteps',
    async (scenario: StandardScenario) => {
      const result = await inspectionSteps()

      expect(result.length).toEqual(Object.keys(scenario.inspectionStep).length)
    }
  )

  scenario(
    'returns a single inspectionStep',
    async (scenario: StandardScenario) => {
      const result = await inspectionStep({
        id: scenario.inspectionStep.one.id,
      })

      expect(result).toEqual(scenario.inspectionStep.one)
    }
  )

  scenario('creates a inspectionStep', async (scenario: StandardScenario) => {
    const result = await createInspectionStep({
      input: {
        description: 'String',
        gliderTypeId: scenario.inspectionStep.two.gliderTypeId,
      },
    })

    expect(result.description).toEqual('String')
    expect(result.gliderTypeId).toEqual(
      scenario.inspectionStep.two.gliderTypeId
    )
  })

  scenario('updates a inspectionStep', async (scenario: StandardScenario) => {
    const original = await inspectionStep({
      id: scenario.inspectionStep.one.id,
    })
    const result = await updateInspectionStep({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a inspectionStep', async (scenario: StandardScenario) => {
    const original = await deleteInspectionStep({
      id: scenario.inspectionStep.one.id,
    })
    const result = await inspectionStep({ id: original.id })

    expect(result).toEqual(null)
  })
})
