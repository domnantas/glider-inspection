export const schema = gql`
  type Inspection {
    id: Int!
    date: DateTime!
    glider: Glider!
    gliderId: Int!
    inspectorName: String!
  }

  type Query {
    inspections: [Inspection!]! @requireAuth
    inspection(id: Int!): Inspection @requireAuth
  }

  input CreateInspectionInput {
    date: DateTime!
    gliderId: Int!
    inspectorName: String!
  }

  input UpdateInspectionInput {
    date: DateTime
    gliderId: Int
    inspectorName: String
  }

  type Mutation {
    createInspection(input: CreateInspectionInput!): Inspection! @requireAuth
    updateInspection(id: Int!, input: UpdateInspectionInput!): Inspection!
      @requireAuth
    deleteInspection(id: Int!): Inspection! @requireAuth
  }
`
