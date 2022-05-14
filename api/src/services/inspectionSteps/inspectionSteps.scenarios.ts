import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InspectionStepCreateArgs>({
  inspectionStep: {
    one: {
      data: {
        description: 'String',
        gliderType: { create: { name: 'String5119334' } },
      },
    },
    two: {
      data: {
        description: 'String',
        gliderType: { create: { name: 'String5615268' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
