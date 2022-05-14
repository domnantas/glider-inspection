import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GliderCreateArgs>({
  glider: {
    one: {
      data: {
        callsign: 'String',
        gliderType: { create: { name: 'String7629755' } },
      },
    },
    two: {
      data: {
        callsign: 'String',
        gliderType: { create: { name: 'String5314595' } },
      },
    },
  },
})

export type StandardScenario = typeof standard
