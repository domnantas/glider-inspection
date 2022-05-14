import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.GliderTypeCreateArgs>({
  gliderType: {
    one: { data: { name: 'String1712478' } },
    two: { data: { name: 'String7118881' } },
  },
})

export type StandardScenario = typeof standard
