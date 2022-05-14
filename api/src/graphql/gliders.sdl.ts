export const schema = gql`
  type Glider {
    id: Int!
    gliderType: GliderType!
    gliderTypeId: Int!
    callsign: String!
    inspections: [Inspection]!
  }

  type Query {
    gliders: [Glider!]! @requireAuth
    glider(id: Int!): Glider @requireAuth
  }

  input CreateGliderInput {
    gliderTypeId: Int!
    callsign: String!
  }

  input UpdateGliderInput {
    gliderTypeId: Int
    callsign: String
  }

  type Mutation {
    createGlider(input: CreateGliderInput!): Glider! @requireAuth
    updateGlider(id: Int!, input: UpdateGliderInput!): Glider! @requireAuth
    deleteGlider(id: Int!): Glider! @requireAuth
  }
`
