import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  GliderTypeResolvers,
} from 'types/graphql'

export const gliderTypes: QueryResolvers['gliderTypes'] = () => {
  return db.gliderType.findMany()
}

export const gliderType: QueryResolvers['gliderType'] = ({ id }) => {
  return db.gliderType.findUnique({
    where: { id },
  })
}

export const createGliderType: MutationResolvers['createGliderType'] = ({
  input,
}) => {
  return db.gliderType.create({
    data: input,
  })
}

export const updateGliderType: MutationResolvers['updateGliderType'] = ({
  id,
  input,
}) => {
  return db.gliderType.update({
    data: input,
    where: { id },
  })
}

export const deleteGliderType: MutationResolvers['deleteGliderType'] = ({
  id,
}) => {
  return db.gliderType.delete({
    where: { id },
  })
}

export const GliderType: GliderTypeResolvers = {
  gliders: (_obj, { root }) =>
    db.gliderType.findUnique({ where: { id: root.id } }).gliders(),
  inspectionSteps: (_obj, { root }) =>
    db.gliderType.findUnique({ where: { id: root.id } }).inspectionSteps(),
}
