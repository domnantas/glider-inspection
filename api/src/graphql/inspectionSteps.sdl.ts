export const schema = gql`
  type InspectionStep {
    id: Int!
    description: String!
    gliderType: GliderType!
    gliderTypeId: Int!
  }

  type Query {
    inspectionSteps: [InspectionStep!]! @requireAuth
    inspectionStep(id: Int!): InspectionStep @requireAuth
  }

  input CreateInspectionStepInput {
    description: String!
    gliderTypeId: Int!
  }

  input UpdateInspectionStepInput {
    description: String
    gliderTypeId: Int
  }

  type Mutation {
    createInspectionStep(input: CreateInspectionStepInput!): InspectionStep!
      @requireAuth
    updateInspectionStep(
      id: Int!
      input: UpdateInspectionStepInput!
    ): InspectionStep! @requireAuth
    deleteInspectionStep(id: Int!): InspectionStep! @requireAuth
  }
`
