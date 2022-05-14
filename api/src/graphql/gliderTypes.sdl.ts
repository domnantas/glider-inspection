export const schema = gql`
  type GliderType {
    id: Int!
    name: String!
    gliders: [Glider]!
    inspectionSteps: [InspectionStep]!
  }

  type Query {
    gliderTypes: [GliderType!]! @requireAuth
    gliderType(id: Int!): GliderType @requireAuth
  }

  input CreateGliderTypeInput {
    name: String!
  }

  input UpdateGliderTypeInput {
    name: String
  }

  type Mutation {
    createGliderType(input: CreateGliderTypeInput!): GliderType! @requireAuth
    updateGliderType(id: Int!, input: UpdateGliderTypeInput!): GliderType!
      @requireAuth
    deleteGliderType(id: Int!): GliderType! @requireAuth
  }
`
