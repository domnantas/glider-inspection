import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  GliderResolvers,
} from 'types/graphql'

export const gliders: QueryResolvers['gliders'] = () => {
  return db.glider.findMany()
}

export const glider: QueryResolvers['glider'] = ({ id }) => {
  return db.glider.findUnique({
    where: { id },
  })
}

export const createGlider: MutationResolvers['createGlider'] = ({ input }) => {
  return db.glider.create({
    data: input,
  })
}

export const updateGlider: MutationResolvers['updateGlider'] = ({
  id,
  input,
}) => {
  return db.glider.update({
    data: input,
    where: { id },
  })
}

export const deleteGlider: MutationResolvers['deleteGlider'] = ({ id }) => {
  return db.glider.delete({
    where: { id },
  })
}

export const Glider: GliderResolvers = {
  gliderType: (_obj, { root }) =>
    db.glider.findUnique({ where: { id: root.id } }).gliderType(),
  inspections: (_obj, { root }) =>
    db.glider.findUnique({ where: { id: root.id } }).inspections(),
}
