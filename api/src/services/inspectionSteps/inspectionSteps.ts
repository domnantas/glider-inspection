import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  InspectionStepResolvers,
} from 'types/graphql'

export const inspectionSteps: QueryResolvers['inspectionSteps'] = () => {
  return db.inspectionStep.findMany()
}

export const inspectionStep: QueryResolvers['inspectionStep'] = ({ id }) => {
  return db.inspectionStep.findUnique({
    where: { id },
  })
}

export const createInspectionStep: MutationResolvers['createInspectionStep'] =
  ({ input }) => {
    return db.inspectionStep.create({
      data: input,
    })
  }

export const updateInspectionStep: MutationResolvers['updateInspectionStep'] =
  ({ id, input }) => {
    return db.inspectionStep.update({
      data: input,
      where: { id },
    })
  }

export const deleteInspectionStep: MutationResolvers['deleteInspectionStep'] =
  ({ id }) => {
    return db.inspectionStep.delete({
      where: { id },
    })
  }

export const InspectionStep: InspectionStepResolvers = {
  gliderType: (_obj, { root }) =>
    db.inspectionStep.findUnique({ where: { id: root.id } }).gliderType(),
}
