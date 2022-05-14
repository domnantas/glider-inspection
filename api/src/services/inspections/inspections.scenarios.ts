import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InspectionCreateArgs>({
  inspection: {
    one: {
      data: {
        inspectorName: 'String',
        glider: {
          create: {
            callsign: 'String',
            gliderType: { create: { name: 'String4423723' } },
          },
        },
      },
    },
    two: {
      data: {
        inspectorName: 'String',
        glider: {
          create: {
            callsign: 'String',
            gliderType: { create: { name: 'String3700579' } },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
