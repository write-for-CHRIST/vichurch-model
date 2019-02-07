export const typeDefs = /* GraphQL */ `type ActivityAttendance {
  id: ID!
  schedule: ActivitySchedule!
  member: Profile!
  presence: Boolean!
}

type ActivityAttendanceConnection {
  pageInfo: PageInfo!
  edges: [ActivityAttendanceEdge]!
  aggregate: AggregateActivityAttendance!
}

input ActivityAttendanceCreateInput {
  schedule: ActivityScheduleCreateOneWithoutAttendancesInput!
  member: ProfileCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

input ActivityAttendanceCreateManyWithoutMemberInput {
  create: [ActivityAttendanceCreateWithoutMemberInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
}

input ActivityAttendanceCreateManyWithoutScheduleInput {
  create: [ActivityAttendanceCreateWithoutScheduleInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
}

input ActivityAttendanceCreateWithoutMemberInput {
  schedule: ActivityScheduleCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

input ActivityAttendanceCreateWithoutScheduleInput {
  member: ProfileCreateOneWithoutAttendancesInput!
  presence: Boolean!
}

type ActivityAttendanceEdge {
  node: ActivityAttendance!
  cursor: String!
}

enum ActivityAttendanceOrderByInput {
  id_ASC
  id_DESC
  presence_ASC
  presence_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityAttendancePreviousValues {
  id: ID!
  presence: Boolean!
}

input ActivityAttendanceScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  presence: Boolean
  presence_not: Boolean
  AND: [ActivityAttendanceScalarWhereInput!]
  OR: [ActivityAttendanceScalarWhereInput!]
  NOT: [ActivityAttendanceScalarWhereInput!]
}

type ActivityAttendanceSubscriptionPayload {
  mutation: MutationType!
  node: ActivityAttendance
  updatedFields: [String!]
  previousValues: ActivityAttendancePreviousValues
}

input ActivityAttendanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityAttendanceWhereInput
  AND: [ActivityAttendanceSubscriptionWhereInput!]
  OR: [ActivityAttendanceSubscriptionWhereInput!]
  NOT: [ActivityAttendanceSubscriptionWhereInput!]
}

input ActivityAttendanceUpdateInput {
  schedule: ActivityScheduleUpdateOneRequiredWithoutAttendancesInput
  member: ProfileUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateManyDataInput {
  presence: Boolean
}

input ActivityAttendanceUpdateManyMutationInput {
  presence: Boolean
}

input ActivityAttendanceUpdateManyWithoutMemberInput {
  create: [ActivityAttendanceCreateWithoutMemberInput!]
  delete: [ActivityAttendanceWhereUniqueInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
  set: [ActivityAttendanceWhereUniqueInput!]
  disconnect: [ActivityAttendanceWhereUniqueInput!]
  update: [ActivityAttendanceUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [ActivityAttendanceUpsertWithWhereUniqueWithoutMemberInput!]
  deleteMany: [ActivityAttendanceScalarWhereInput!]
  updateMany: [ActivityAttendanceUpdateManyWithWhereNestedInput!]
}

input ActivityAttendanceUpdateManyWithoutScheduleInput {
  create: [ActivityAttendanceCreateWithoutScheduleInput!]
  delete: [ActivityAttendanceWhereUniqueInput!]
  connect: [ActivityAttendanceWhereUniqueInput!]
  set: [ActivityAttendanceWhereUniqueInput!]
  disconnect: [ActivityAttendanceWhereUniqueInput!]
  update: [ActivityAttendanceUpdateWithWhereUniqueWithoutScheduleInput!]
  upsert: [ActivityAttendanceUpsertWithWhereUniqueWithoutScheduleInput!]
  deleteMany: [ActivityAttendanceScalarWhereInput!]
  updateMany: [ActivityAttendanceUpdateManyWithWhereNestedInput!]
}

input ActivityAttendanceUpdateManyWithWhereNestedInput {
  where: ActivityAttendanceScalarWhereInput!
  data: ActivityAttendanceUpdateManyDataInput!
}

input ActivityAttendanceUpdateWithoutMemberDataInput {
  schedule: ActivityScheduleUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateWithoutScheduleDataInput {
  member: ProfileUpdateOneRequiredWithoutAttendancesInput
  presence: Boolean
}

input ActivityAttendanceUpdateWithWhereUniqueWithoutMemberInput {
  where: ActivityAttendanceWhereUniqueInput!
  data: ActivityAttendanceUpdateWithoutMemberDataInput!
}

input ActivityAttendanceUpdateWithWhereUniqueWithoutScheduleInput {
  where: ActivityAttendanceWhereUniqueInput!
  data: ActivityAttendanceUpdateWithoutScheduleDataInput!
}

input ActivityAttendanceUpsertWithWhereUniqueWithoutMemberInput {
  where: ActivityAttendanceWhereUniqueInput!
  update: ActivityAttendanceUpdateWithoutMemberDataInput!
  create: ActivityAttendanceCreateWithoutMemberInput!
}

input ActivityAttendanceUpsertWithWhereUniqueWithoutScheduleInput {
  where: ActivityAttendanceWhereUniqueInput!
  update: ActivityAttendanceUpdateWithoutScheduleDataInput!
  create: ActivityAttendanceCreateWithoutScheduleInput!
}

input ActivityAttendanceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  schedule: ActivityScheduleWhereInput
  member: ProfileWhereInput
  presence: Boolean
  presence_not: Boolean
  AND: [ActivityAttendanceWhereInput!]
  OR: [ActivityAttendanceWhereInput!]
  NOT: [ActivityAttendanceWhereInput!]
}

input ActivityAttendanceWhereUniqueInput {
  id: ID
}

type ActivitySchedule {
  id: ID!
  start: DateTime!
  end: DateTime!
  activity: ActivityType!
  attendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance!]
}

type ActivityScheduleConnection {
  pageInfo: PageInfo!
  edges: [ActivityScheduleEdge]!
  aggregate: AggregateActivitySchedule!
}

input ActivityScheduleCreateInput {
  start: DateTime!
  end: DateTime!
  activity: ActivityTypeCreateOneWithoutSchedulesInput!
  attendances: ActivityAttendanceCreateManyWithoutScheduleInput
}

input ActivityScheduleCreateManyWithoutActivityInput {
  create: [ActivityScheduleCreateWithoutActivityInput!]
  connect: [ActivityScheduleWhereUniqueInput!]
}

input ActivityScheduleCreateOneWithoutAttendancesInput {
  create: ActivityScheduleCreateWithoutAttendancesInput
  connect: ActivityScheduleWhereUniqueInput
}

input ActivityScheduleCreateWithoutActivityInput {
  start: DateTime!
  end: DateTime!
  attendances: ActivityAttendanceCreateManyWithoutScheduleInput
}

input ActivityScheduleCreateWithoutAttendancesInput {
  start: DateTime!
  end: DateTime!
  activity: ActivityTypeCreateOneWithoutSchedulesInput!
}

type ActivityScheduleEdge {
  node: ActivitySchedule!
  cursor: String!
}

enum ActivityScheduleOrderByInput {
  id_ASC
  id_DESC
  start_ASC
  start_DESC
  end_ASC
  end_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivitySchedulePreviousValues {
  id: ID!
  start: DateTime!
  end: DateTime!
}

input ActivityScheduleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  AND: [ActivityScheduleScalarWhereInput!]
  OR: [ActivityScheduleScalarWhereInput!]
  NOT: [ActivityScheduleScalarWhereInput!]
}

type ActivityScheduleSubscriptionPayload {
  mutation: MutationType!
  node: ActivitySchedule
  updatedFields: [String!]
  previousValues: ActivitySchedulePreviousValues
}

input ActivityScheduleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityScheduleWhereInput
  AND: [ActivityScheduleSubscriptionWhereInput!]
  OR: [ActivityScheduleSubscriptionWhereInput!]
  NOT: [ActivityScheduleSubscriptionWhereInput!]
}

input ActivityScheduleUpdateInput {
  start: DateTime
  end: DateTime
  activity: ActivityTypeUpdateOneRequiredWithoutSchedulesInput
  attendances: ActivityAttendanceUpdateManyWithoutScheduleInput
}

input ActivityScheduleUpdateManyDataInput {
  start: DateTime
  end: DateTime
}

input ActivityScheduleUpdateManyMutationInput {
  start: DateTime
  end: DateTime
}

input ActivityScheduleUpdateManyWithoutActivityInput {
  create: [ActivityScheduleCreateWithoutActivityInput!]
  delete: [ActivityScheduleWhereUniqueInput!]
  connect: [ActivityScheduleWhereUniqueInput!]
  set: [ActivityScheduleWhereUniqueInput!]
  disconnect: [ActivityScheduleWhereUniqueInput!]
  update: [ActivityScheduleUpdateWithWhereUniqueWithoutActivityInput!]
  upsert: [ActivityScheduleUpsertWithWhereUniqueWithoutActivityInput!]
  deleteMany: [ActivityScheduleScalarWhereInput!]
  updateMany: [ActivityScheduleUpdateManyWithWhereNestedInput!]
}

input ActivityScheduleUpdateManyWithWhereNestedInput {
  where: ActivityScheduleScalarWhereInput!
  data: ActivityScheduleUpdateManyDataInput!
}

input ActivityScheduleUpdateOneRequiredWithoutAttendancesInput {
  create: ActivityScheduleCreateWithoutAttendancesInput
  update: ActivityScheduleUpdateWithoutAttendancesDataInput
  upsert: ActivityScheduleUpsertWithoutAttendancesInput
  connect: ActivityScheduleWhereUniqueInput
}

input ActivityScheduleUpdateWithoutActivityDataInput {
  start: DateTime
  end: DateTime
  attendances: ActivityAttendanceUpdateManyWithoutScheduleInput
}

input ActivityScheduleUpdateWithoutAttendancesDataInput {
  start: DateTime
  end: DateTime
  activity: ActivityTypeUpdateOneRequiredWithoutSchedulesInput
}

input ActivityScheduleUpdateWithWhereUniqueWithoutActivityInput {
  where: ActivityScheduleWhereUniqueInput!
  data: ActivityScheduleUpdateWithoutActivityDataInput!
}

input ActivityScheduleUpsertWithoutAttendancesInput {
  update: ActivityScheduleUpdateWithoutAttendancesDataInput!
  create: ActivityScheduleCreateWithoutAttendancesInput!
}

input ActivityScheduleUpsertWithWhereUniqueWithoutActivityInput {
  where: ActivityScheduleWhereUniqueInput!
  update: ActivityScheduleUpdateWithoutActivityDataInput!
  create: ActivityScheduleCreateWithoutActivityInput!
}

input ActivityScheduleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  start: DateTime
  start_not: DateTime
  start_in: [DateTime!]
  start_not_in: [DateTime!]
  start_lt: DateTime
  start_lte: DateTime
  start_gt: DateTime
  start_gte: DateTime
  end: DateTime
  end_not: DateTime
  end_in: [DateTime!]
  end_not_in: [DateTime!]
  end_lt: DateTime
  end_lte: DateTime
  end_gt: DateTime
  end_gte: DateTime
  activity: ActivityTypeWhereInput
  attendances_every: ActivityAttendanceWhereInput
  attendances_some: ActivityAttendanceWhereInput
  attendances_none: ActivityAttendanceWhereInput
  AND: [ActivityScheduleWhereInput!]
  OR: [ActivityScheduleWhereInput!]
  NOT: [ActivityScheduleWhereInput!]
}

input ActivityScheduleWhereUniqueInput {
  id: ID
}

type ActivityType {
  id: ID!
  name: String!
  schedules(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySchedule!]
}

type ActivityTypeConnection {
  pageInfo: PageInfo!
  edges: [ActivityTypeEdge]!
  aggregate: AggregateActivityType!
}

input ActivityTypeCreateInput {
  name: String!
  schedules: ActivityScheduleCreateManyWithoutActivityInput
}

input ActivityTypeCreateOneWithoutSchedulesInput {
  create: ActivityTypeCreateWithoutSchedulesInput
  connect: ActivityTypeWhereUniqueInput
}

input ActivityTypeCreateWithoutSchedulesInput {
  name: String!
}

type ActivityTypeEdge {
  node: ActivityType!
  cursor: String!
}

enum ActivityTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ActivityTypePreviousValues {
  id: ID!
  name: String!
}

type ActivityTypeSubscriptionPayload {
  mutation: MutationType!
  node: ActivityType
  updatedFields: [String!]
  previousValues: ActivityTypePreviousValues
}

input ActivityTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ActivityTypeWhereInput
  AND: [ActivityTypeSubscriptionWhereInput!]
  OR: [ActivityTypeSubscriptionWhereInput!]
  NOT: [ActivityTypeSubscriptionWhereInput!]
}

input ActivityTypeUpdateInput {
  name: String
  schedules: ActivityScheduleUpdateManyWithoutActivityInput
}

input ActivityTypeUpdateManyMutationInput {
  name: String
}

input ActivityTypeUpdateOneRequiredWithoutSchedulesInput {
  create: ActivityTypeCreateWithoutSchedulesInput
  update: ActivityTypeUpdateWithoutSchedulesDataInput
  upsert: ActivityTypeUpsertWithoutSchedulesInput
  connect: ActivityTypeWhereUniqueInput
}

input ActivityTypeUpdateWithoutSchedulesDataInput {
  name: String
}

input ActivityTypeUpsertWithoutSchedulesInput {
  update: ActivityTypeUpdateWithoutSchedulesDataInput!
  create: ActivityTypeCreateWithoutSchedulesInput!
}

input ActivityTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  schedules_every: ActivityScheduleWhereInput
  schedules_some: ActivityScheduleWhereInput
  schedules_none: ActivityScheduleWhereInput
  AND: [ActivityTypeWhereInput!]
  OR: [ActivityTypeWhereInput!]
  NOT: [ActivityTypeWhereInput!]
}

input ActivityTypeWhereUniqueInput {
  id: ID
}

type Address {
  id: ID!
  no: String
  street: String
  commune: Commune
  district: District
  province: Province
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  no: String
  street: String
  commune: CommuneCreateOneInput
  district: DistrictCreateOneInput
  province: ProvinceCreateOneInput
}

input AddressCreateOneInput {
  create: AddressCreateInput
  connect: AddressWhereUniqueInput
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  no_ASC
  no_DESC
  street_ASC
  street_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  no: String
  street: String
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

input AddressUpdateDataInput {
  no: String
  street: String
  commune: CommuneUpdateOneInput
  district: DistrictUpdateOneInput
  province: ProvinceUpdateOneInput
}

input AddressUpdateInput {
  no: String
  street: String
  commune: CommuneUpdateOneInput
  district: DistrictUpdateOneInput
  province: ProvinceUpdateOneInput
}

input AddressUpdateManyMutationInput {
  no: String
  street: String
}

input AddressUpdateOneInput {
  create: AddressCreateInput
  update: AddressUpdateDataInput
  upsert: AddressUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AddressWhereUniqueInput
}

input AddressUpsertNestedInput {
  update: AddressUpdateDataInput!
  create: AddressCreateInput!
}

input AddressWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  no: String
  no_not: String
  no_in: [String!]
  no_not_in: [String!]
  no_lt: String
  no_lte: String
  no_gt: String
  no_gte: String
  no_contains: String
  no_not_contains: String
  no_starts_with: String
  no_not_starts_with: String
  no_ends_with: String
  no_not_ends_with: String
  street: String
  street_not: String
  street_in: [String!]
  street_not_in: [String!]
  street_lt: String
  street_lte: String
  street_gt: String
  street_gte: String
  street_contains: String
  street_not_contains: String
  street_starts_with: String
  street_not_starts_with: String
  street_ends_with: String
  street_not_ends_with: String
  commune: CommuneWhereInput
  district: DistrictWhereInput
  province: ProvinceWhereInput
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateActivityAttendance {
  count: Int!
}

type AggregateActivitySchedule {
  count: Int!
}

type AggregateActivityType {
  count: Int!
}

type AggregateAddress {
  count: Int!
}

type AggregateCommune {
  count: Int!
}

type AggregateDistrict {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateMemberType {
  count: Int!
}

type AggregateProfile {
  count: Int!
}

type AggregateProvince {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Commune {
  id: ID!
  name: String!
  district: District!
}

type CommuneConnection {
  pageInfo: PageInfo!
  edges: [CommuneEdge]!
  aggregate: AggregateCommune!
}

input CommuneCreateInput {
  name: String!
  district: DistrictCreateOneWithoutCommunesInput!
}

input CommuneCreateManyWithoutDistrictInput {
  create: [CommuneCreateWithoutDistrictInput!]
  connect: [CommuneWhereUniqueInput!]
}

input CommuneCreateOneInput {
  create: CommuneCreateInput
  connect: CommuneWhereUniqueInput
}

input CommuneCreateWithoutDistrictInput {
  name: String!
}

type CommuneEdge {
  node: Commune!
  cursor: String!
}

enum CommuneOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CommunePreviousValues {
  id: ID!
  name: String!
}

input CommuneScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [CommuneScalarWhereInput!]
  OR: [CommuneScalarWhereInput!]
  NOT: [CommuneScalarWhereInput!]
}

type CommuneSubscriptionPayload {
  mutation: MutationType!
  node: Commune
  updatedFields: [String!]
  previousValues: CommunePreviousValues
}

input CommuneSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CommuneWhereInput
  AND: [CommuneSubscriptionWhereInput!]
  OR: [CommuneSubscriptionWhereInput!]
  NOT: [CommuneSubscriptionWhereInput!]
}

input CommuneUpdateDataInput {
  name: String
  district: DistrictUpdateOneRequiredWithoutCommunesInput
}

input CommuneUpdateInput {
  name: String
  district: DistrictUpdateOneRequiredWithoutCommunesInput
}

input CommuneUpdateManyDataInput {
  name: String
}

input CommuneUpdateManyMutationInput {
  name: String
}

input CommuneUpdateManyWithoutDistrictInput {
  create: [CommuneCreateWithoutDistrictInput!]
  delete: [CommuneWhereUniqueInput!]
  connect: [CommuneWhereUniqueInput!]
  set: [CommuneWhereUniqueInput!]
  disconnect: [CommuneWhereUniqueInput!]
  update: [CommuneUpdateWithWhereUniqueWithoutDistrictInput!]
  upsert: [CommuneUpsertWithWhereUniqueWithoutDistrictInput!]
  deleteMany: [CommuneScalarWhereInput!]
  updateMany: [CommuneUpdateManyWithWhereNestedInput!]
}

input CommuneUpdateManyWithWhereNestedInput {
  where: CommuneScalarWhereInput!
  data: CommuneUpdateManyDataInput!
}

input CommuneUpdateOneInput {
  create: CommuneCreateInput
  update: CommuneUpdateDataInput
  upsert: CommuneUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CommuneWhereUniqueInput
}

input CommuneUpdateWithoutDistrictDataInput {
  name: String
}

input CommuneUpdateWithWhereUniqueWithoutDistrictInput {
  where: CommuneWhereUniqueInput!
  data: CommuneUpdateWithoutDistrictDataInput!
}

input CommuneUpsertNestedInput {
  update: CommuneUpdateDataInput!
  create: CommuneCreateInput!
}

input CommuneUpsertWithWhereUniqueWithoutDistrictInput {
  where: CommuneWhereUniqueInput!
  update: CommuneUpdateWithoutDistrictDataInput!
  create: CommuneCreateWithoutDistrictInput!
}

input CommuneWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  district: DistrictWhereInput
  AND: [CommuneWhereInput!]
  OR: [CommuneWhereInput!]
  NOT: [CommuneWhereInput!]
}

input CommuneWhereUniqueInput {
  id: ID
}

scalar DateTime

type District {
  id: ID!
  name: String!
  communes(where: CommuneWhereInput, orderBy: CommuneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commune!]
  province: Province!
}

type DistrictConnection {
  pageInfo: PageInfo!
  edges: [DistrictEdge]!
  aggregate: AggregateDistrict!
}

input DistrictCreateInput {
  name: String!
  communes: CommuneCreateManyWithoutDistrictInput
  province: ProvinceCreateOneWithoutDistrictsInput!
}

input DistrictCreateManyWithoutProvinceInput {
  create: [DistrictCreateWithoutProvinceInput!]
  connect: [DistrictWhereUniqueInput!]
}

input DistrictCreateOneInput {
  create: DistrictCreateInput
  connect: DistrictWhereUniqueInput
}

input DistrictCreateOneWithoutCommunesInput {
  create: DistrictCreateWithoutCommunesInput
  connect: DistrictWhereUniqueInput
}

input DistrictCreateWithoutCommunesInput {
  name: String!
  province: ProvinceCreateOneWithoutDistrictsInput!
}

input DistrictCreateWithoutProvinceInput {
  name: String!
  communes: CommuneCreateManyWithoutDistrictInput
}

type DistrictEdge {
  node: District!
  cursor: String!
}

enum DistrictOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type DistrictPreviousValues {
  id: ID!
  name: String!
}

input DistrictScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [DistrictScalarWhereInput!]
  OR: [DistrictScalarWhereInput!]
  NOT: [DistrictScalarWhereInput!]
}

type DistrictSubscriptionPayload {
  mutation: MutationType!
  node: District
  updatedFields: [String!]
  previousValues: DistrictPreviousValues
}

input DistrictSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DistrictWhereInput
  AND: [DistrictSubscriptionWhereInput!]
  OR: [DistrictSubscriptionWhereInput!]
  NOT: [DistrictSubscriptionWhereInput!]
}

input DistrictUpdateDataInput {
  name: String
  communes: CommuneUpdateManyWithoutDistrictInput
  province: ProvinceUpdateOneRequiredWithoutDistrictsInput
}

input DistrictUpdateInput {
  name: String
  communes: CommuneUpdateManyWithoutDistrictInput
  province: ProvinceUpdateOneRequiredWithoutDistrictsInput
}

input DistrictUpdateManyDataInput {
  name: String
}

input DistrictUpdateManyMutationInput {
  name: String
}

input DistrictUpdateManyWithoutProvinceInput {
  create: [DistrictCreateWithoutProvinceInput!]
  delete: [DistrictWhereUniqueInput!]
  connect: [DistrictWhereUniqueInput!]
  set: [DistrictWhereUniqueInput!]
  disconnect: [DistrictWhereUniqueInput!]
  update: [DistrictUpdateWithWhereUniqueWithoutProvinceInput!]
  upsert: [DistrictUpsertWithWhereUniqueWithoutProvinceInput!]
  deleteMany: [DistrictScalarWhereInput!]
  updateMany: [DistrictUpdateManyWithWhereNestedInput!]
}

input DistrictUpdateManyWithWhereNestedInput {
  where: DistrictScalarWhereInput!
  data: DistrictUpdateManyDataInput!
}

input DistrictUpdateOneInput {
  create: DistrictCreateInput
  update: DistrictUpdateDataInput
  upsert: DistrictUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: DistrictWhereUniqueInput
}

input DistrictUpdateOneRequiredWithoutCommunesInput {
  create: DistrictCreateWithoutCommunesInput
  update: DistrictUpdateWithoutCommunesDataInput
  upsert: DistrictUpsertWithoutCommunesInput
  connect: DistrictWhereUniqueInput
}

input DistrictUpdateWithoutCommunesDataInput {
  name: String
  province: ProvinceUpdateOneRequiredWithoutDistrictsInput
}

input DistrictUpdateWithoutProvinceDataInput {
  name: String
  communes: CommuneUpdateManyWithoutDistrictInput
}

input DistrictUpdateWithWhereUniqueWithoutProvinceInput {
  where: DistrictWhereUniqueInput!
  data: DistrictUpdateWithoutProvinceDataInput!
}

input DistrictUpsertNestedInput {
  update: DistrictUpdateDataInput!
  create: DistrictCreateInput!
}

input DistrictUpsertWithoutCommunesInput {
  update: DistrictUpdateWithoutCommunesDataInput!
  create: DistrictCreateWithoutCommunesInput!
}

input DistrictUpsertWithWhereUniqueWithoutProvinceInput {
  where: DistrictWhereUniqueInput!
  update: DistrictUpdateWithoutProvinceDataInput!
  create: DistrictCreateWithoutProvinceInput!
}

input DistrictWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  communes_every: CommuneWhereInput
  communes_some: CommuneWhereInput
  communes_none: CommuneWhereInput
  province: ProvinceWhereInput
  AND: [DistrictWhereInput!]
  OR: [DistrictWhereInput!]
  NOT: [DistrictWhereInput!]
}

input DistrictWhereUniqueInput {
  id: ID
}

type Group {
  id: ID!
  name: String!
  members(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
  leader: Profile
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  members: ProfileCreateManyWithoutGroupInput
  leader: ProfileCreateOneWithoutLeaderInput
}

input GroupCreateOneWithoutLeaderInput {
  create: GroupCreateWithoutLeaderInput
  connect: GroupWhereUniqueInput
}

input GroupCreateOneWithoutMembersInput {
  create: GroupCreateWithoutMembersInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutLeaderInput {
  name: String!
  members: ProfileCreateManyWithoutGroupInput
}

input GroupCreateWithoutMembersInput {
  name: String!
  leader: ProfileCreateOneWithoutLeaderInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  name: String
  members: ProfileUpdateManyWithoutGroupInput
  leader: ProfileUpdateOneWithoutLeaderInput
}

input GroupUpdateManyMutationInput {
  name: String
}

input GroupUpdateOneWithoutLeaderInput {
  create: GroupCreateWithoutLeaderInput
  update: GroupUpdateWithoutLeaderDataInput
  upsert: GroupUpsertWithoutLeaderInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateOneWithoutMembersInput {
  create: GroupCreateWithoutMembersInput
  update: GroupUpdateWithoutMembersDataInput
  upsert: GroupUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutLeaderDataInput {
  name: String
  members: ProfileUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutMembersDataInput {
  name: String
  leader: ProfileUpdateOneWithoutLeaderInput
}

input GroupUpsertWithoutLeaderInput {
  update: GroupUpdateWithoutLeaderDataInput!
  create: GroupCreateWithoutLeaderInput!
}

input GroupUpsertWithoutMembersInput {
  update: GroupUpdateWithoutMembersDataInput!
  create: GroupCreateWithoutMembersInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  members_every: ProfileWhereInput
  members_some: ProfileWhereInput
  members_none: ProfileWhereInput
  leader: ProfileWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

scalar Long

type MemberType {
  id: ID!
  name: String!
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile!]
}

type MemberTypeConnection {
  pageInfo: PageInfo!
  edges: [MemberTypeEdge]!
  aggregate: AggregateMemberType!
}

input MemberTypeCreateInput {
  name: String!
  profiles: ProfileCreateManyWithoutMemberTypeInput
}

input MemberTypeCreateOneWithoutProfilesInput {
  create: MemberTypeCreateWithoutProfilesInput
  connect: MemberTypeWhereUniqueInput
}

input MemberTypeCreateWithoutProfilesInput {
  name: String!
}

type MemberTypeEdge {
  node: MemberType!
  cursor: String!
}

enum MemberTypeOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MemberTypePreviousValues {
  id: ID!
  name: String!
}

type MemberTypeSubscriptionPayload {
  mutation: MutationType!
  node: MemberType
  updatedFields: [String!]
  previousValues: MemberTypePreviousValues
}

input MemberTypeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberTypeWhereInput
  AND: [MemberTypeSubscriptionWhereInput!]
  OR: [MemberTypeSubscriptionWhereInput!]
  NOT: [MemberTypeSubscriptionWhereInput!]
}

input MemberTypeUpdateInput {
  name: String
  profiles: ProfileUpdateManyWithoutMemberTypeInput
}

input MemberTypeUpdateManyMutationInput {
  name: String
}

input MemberTypeUpdateOneWithoutProfilesInput {
  create: MemberTypeCreateWithoutProfilesInput
  update: MemberTypeUpdateWithoutProfilesDataInput
  upsert: MemberTypeUpsertWithoutProfilesInput
  delete: Boolean
  disconnect: Boolean
  connect: MemberTypeWhereUniqueInput
}

input MemberTypeUpdateWithoutProfilesDataInput {
  name: String
}

input MemberTypeUpsertWithoutProfilesInput {
  update: MemberTypeUpdateWithoutProfilesDataInput!
  create: MemberTypeCreateWithoutProfilesInput!
}

input MemberTypeWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  profiles_every: ProfileWhereInput
  profiles_some: ProfileWhereInput
  profiles_none: ProfileWhereInput
  AND: [MemberTypeWhereInput!]
  OR: [MemberTypeWhereInput!]
  NOT: [MemberTypeWhereInput!]
}

input MemberTypeWhereUniqueInput {
  id: ID
  name: String
}

type Mutation {
  createActivityAttendance(data: ActivityAttendanceCreateInput!): ActivityAttendance!
  updateActivityAttendance(data: ActivityAttendanceUpdateInput!, where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  updateManyActivityAttendances(data: ActivityAttendanceUpdateManyMutationInput!, where: ActivityAttendanceWhereInput): BatchPayload!
  upsertActivityAttendance(where: ActivityAttendanceWhereUniqueInput!, create: ActivityAttendanceCreateInput!, update: ActivityAttendanceUpdateInput!): ActivityAttendance!
  deleteActivityAttendance(where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  deleteManyActivityAttendances(where: ActivityAttendanceWhereInput): BatchPayload!
  createActivitySchedule(data: ActivityScheduleCreateInput!): ActivitySchedule!
  updateActivitySchedule(data: ActivityScheduleUpdateInput!, where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  updateManyActivitySchedules(data: ActivityScheduleUpdateManyMutationInput!, where: ActivityScheduleWhereInput): BatchPayload!
  upsertActivitySchedule(where: ActivityScheduleWhereUniqueInput!, create: ActivityScheduleCreateInput!, update: ActivityScheduleUpdateInput!): ActivitySchedule!
  deleteActivitySchedule(where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  deleteManyActivitySchedules(where: ActivityScheduleWhereInput): BatchPayload!
  createActivityType(data: ActivityTypeCreateInput!): ActivityType!
  updateActivityType(data: ActivityTypeUpdateInput!, where: ActivityTypeWhereUniqueInput!): ActivityType
  updateManyActivityTypes(data: ActivityTypeUpdateManyMutationInput!, where: ActivityTypeWhereInput): BatchPayload!
  upsertActivityType(where: ActivityTypeWhereUniqueInput!, create: ActivityTypeCreateInput!, update: ActivityTypeUpdateInput!): ActivityType!
  deleteActivityType(where: ActivityTypeWhereUniqueInput!): ActivityType
  deleteManyActivityTypes(where: ActivityTypeWhereInput): BatchPayload!
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createCommune(data: CommuneCreateInput!): Commune!
  updateCommune(data: CommuneUpdateInput!, where: CommuneWhereUniqueInput!): Commune
  updateManyCommunes(data: CommuneUpdateManyMutationInput!, where: CommuneWhereInput): BatchPayload!
  upsertCommune(where: CommuneWhereUniqueInput!, create: CommuneCreateInput!, update: CommuneUpdateInput!): Commune!
  deleteCommune(where: CommuneWhereUniqueInput!): Commune
  deleteManyCommunes(where: CommuneWhereInput): BatchPayload!
  createDistrict(data: DistrictCreateInput!): District!
  updateDistrict(data: DistrictUpdateInput!, where: DistrictWhereUniqueInput!): District
  updateManyDistricts(data: DistrictUpdateManyMutationInput!, where: DistrictWhereInput): BatchPayload!
  upsertDistrict(where: DistrictWhereUniqueInput!, create: DistrictCreateInput!, update: DistrictUpdateInput!): District!
  deleteDistrict(where: DistrictWhereUniqueInput!): District
  deleteManyDistricts(where: DistrictWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createMemberType(data: MemberTypeCreateInput!): MemberType!
  updateMemberType(data: MemberTypeUpdateInput!, where: MemberTypeWhereUniqueInput!): MemberType
  updateManyMemberTypes(data: MemberTypeUpdateManyMutationInput!, where: MemberTypeWhereInput): BatchPayload!
  upsertMemberType(where: MemberTypeWhereUniqueInput!, create: MemberTypeCreateInput!, update: MemberTypeUpdateInput!): MemberType!
  deleteMemberType(where: MemberTypeWhereUniqueInput!): MemberType
  deleteManyMemberTypes(where: MemberTypeWhereInput): BatchPayload!
  createProfile(data: ProfileCreateInput!): Profile!
  updateProfile(data: ProfileUpdateInput!, where: ProfileWhereUniqueInput!): Profile
  updateManyProfiles(data: ProfileUpdateManyMutationInput!, where: ProfileWhereInput): BatchPayload!
  upsertProfile(where: ProfileWhereUniqueInput!, create: ProfileCreateInput!, update: ProfileUpdateInput!): Profile!
  deleteProfile(where: ProfileWhereUniqueInput!): Profile
  deleteManyProfiles(where: ProfileWhereInput): BatchPayload!
  createProvince(data: ProvinceCreateInput!): Province!
  updateProvince(data: ProvinceUpdateInput!, where: ProvinceWhereUniqueInput!): Province
  updateManyProvinces(data: ProvinceUpdateManyMutationInput!, where: ProvinceWhereInput): BatchPayload!
  upsertProvince(where: ProvinceWhereUniqueInput!, create: ProvinceCreateInput!, update: ProvinceUpdateInput!): Province!
  deleteProvince(where: ProvinceWhereUniqueInput!): Province
  deleteManyProvinces(where: ProvinceWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Profile {
  id: ID!
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: Address
  hometown: Province
  memberType: MemberType
  group: Group
  leader: Group
  attendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance!]
}

type ProfileConnection {
  pageInfo: PageInfo!
  edges: [ProfileEdge]!
  aggregate: AggregateProfile!
}

input ProfileCreateInput {
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressCreateOneInput
  hometown: ProvinceCreateOneInput
  memberType: MemberTypeCreateOneWithoutProfilesInput
  group: GroupCreateOneWithoutMembersInput
  leader: GroupCreateOneWithoutLeaderInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

input ProfileCreateManyWithoutGroupInput {
  create: [ProfileCreateWithoutGroupInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateManyWithoutMemberTypeInput {
  create: [ProfileCreateWithoutMemberTypeInput!]
  connect: [ProfileWhereUniqueInput!]
}

input ProfileCreateOneInput {
  create: ProfileCreateInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutAttendancesInput {
  create: ProfileCreateWithoutAttendancesInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateOneWithoutLeaderInput {
  create: ProfileCreateWithoutLeaderInput
  connect: ProfileWhereUniqueInput
}

input ProfileCreateWithoutAttendancesInput {
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressCreateOneInput
  hometown: ProvinceCreateOneInput
  memberType: MemberTypeCreateOneWithoutProfilesInput
  group: GroupCreateOneWithoutMembersInput
  leader: GroupCreateOneWithoutLeaderInput
}

input ProfileCreateWithoutGroupInput {
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressCreateOneInput
  hometown: ProvinceCreateOneInput
  memberType: MemberTypeCreateOneWithoutProfilesInput
  leader: GroupCreateOneWithoutLeaderInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

input ProfileCreateWithoutLeaderInput {
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressCreateOneInput
  hometown: ProvinceCreateOneInput
  memberType: MemberTypeCreateOneWithoutProfilesInput
  group: GroupCreateOneWithoutMembersInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

input ProfileCreateWithoutMemberTypeInput {
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressCreateOneInput
  hometown: ProvinceCreateOneInput
  group: GroupCreateOneWithoutMembersInput
  leader: GroupCreateOneWithoutLeaderInput
  attendances: ActivityAttendanceCreateManyWithoutMemberInput
}

type ProfileEdge {
  node: Profile!
  cursor: String!
}

enum ProfileOrderByInput {
  id_ASC
  id_DESC
  oldId_ASC
  oldId_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  gender_ASC
  gender_DESC
  email_ASC
  email_DESC
  facebookId_ASC
  facebookId_DESC
  phoneNumber_ASC
  phoneNumber_DESC
  birthday_ASC
  birthday_DESC
  joinDate_ASC
  joinDate_DESC
  dayOfBirth_ASC
  dayOfBirth_DESC
  monthOfBirth_ASC
  monthOfBirth_DESC
  yearOfBirth_ASC
  yearOfBirth_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProfilePreviousValues {
  id: ID!
  oldId: ID!
  firstName: String!
  lastName: String!
  gender: Boolean!
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: ID
  oldId_not: ID
  oldId_in: [ID!]
  oldId_not_in: [ID!]
  oldId_lt: ID
  oldId_lte: ID
  oldId_gt: ID
  oldId_gte: ID
  oldId_contains: ID
  oldId_not_contains: ID
  oldId_starts_with: ID
  oldId_not_starts_with: ID
  oldId_ends_with: ID
  oldId_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  gender: Boolean
  gender_not: Boolean
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  facebookId: String
  facebookId_not: String
  facebookId_in: [String!]
  facebookId_not_in: [String!]
  facebookId_lt: String
  facebookId_lte: String
  facebookId_gt: String
  facebookId_gte: String
  facebookId_contains: String
  facebookId_not_contains: String
  facebookId_starts_with: String
  facebookId_not_starts_with: String
  facebookId_ends_with: String
  facebookId_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  joinDate: DateTime
  joinDate_not: DateTime
  joinDate_in: [DateTime!]
  joinDate_not_in: [DateTime!]
  joinDate_lt: DateTime
  joinDate_lte: DateTime
  joinDate_gt: DateTime
  joinDate_gte: DateTime
  dayOfBirth: Int
  dayOfBirth_not: Int
  dayOfBirth_in: [Int!]
  dayOfBirth_not_in: [Int!]
  dayOfBirth_lt: Int
  dayOfBirth_lte: Int
  dayOfBirth_gt: Int
  dayOfBirth_gte: Int
  monthOfBirth: Int
  monthOfBirth_not: Int
  monthOfBirth_in: [Int!]
  monthOfBirth_not_in: [Int!]
  monthOfBirth_lt: Int
  monthOfBirth_lte: Int
  monthOfBirth_gt: Int
  monthOfBirth_gte: Int
  yearOfBirth: Int
  yearOfBirth_not: Int
  yearOfBirth_in: [Int!]
  yearOfBirth_not_in: [Int!]
  yearOfBirth_lt: Int
  yearOfBirth_lte: Int
  yearOfBirth_gt: Int
  yearOfBirth_gte: Int
  AND: [ProfileScalarWhereInput!]
  OR: [ProfileScalarWhereInput!]
  NOT: [ProfileScalarWhereInput!]
}

type ProfileSubscriptionPayload {
  mutation: MutationType!
  node: Profile
  updatedFields: [String!]
  previousValues: ProfilePreviousValues
}

input ProfileSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProfileWhereInput
  AND: [ProfileSubscriptionWhereInput!]
  OR: [ProfileSubscriptionWhereInput!]
  NOT: [ProfileSubscriptionWhereInput!]
}

input ProfileUpdateDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  memberType: MemberTypeUpdateOneWithoutProfilesInput
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  memberType: MemberTypeUpdateOneWithoutProfilesInput
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateManyDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileUpdateManyMutationInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
}

input ProfileUpdateManyWithoutGroupInput {
  create: [ProfileCreateWithoutGroupInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  set: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [ProfileScalarWhereInput!]
  updateMany: [ProfileUpdateManyWithWhereNestedInput!]
}

input ProfileUpdateManyWithoutMemberTypeInput {
  create: [ProfileCreateWithoutMemberTypeInput!]
  delete: [ProfileWhereUniqueInput!]
  connect: [ProfileWhereUniqueInput!]
  set: [ProfileWhereUniqueInput!]
  disconnect: [ProfileWhereUniqueInput!]
  update: [ProfileUpdateWithWhereUniqueWithoutMemberTypeInput!]
  upsert: [ProfileUpsertWithWhereUniqueWithoutMemberTypeInput!]
  deleteMany: [ProfileScalarWhereInput!]
  updateMany: [ProfileUpdateManyWithWhereNestedInput!]
}

input ProfileUpdateManyWithWhereNestedInput {
  where: ProfileScalarWhereInput!
  data: ProfileUpdateManyDataInput!
}

input ProfileUpdateOneInput {
  create: ProfileCreateInput
  update: ProfileUpdateDataInput
  upsert: ProfileUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateOneRequiredWithoutAttendancesInput {
  create: ProfileCreateWithoutAttendancesInput
  update: ProfileUpdateWithoutAttendancesDataInput
  upsert: ProfileUpsertWithoutAttendancesInput
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateOneWithoutLeaderInput {
  create: ProfileCreateWithoutLeaderInput
  update: ProfileUpdateWithoutLeaderDataInput
  upsert: ProfileUpsertWithoutLeaderInput
  delete: Boolean
  disconnect: Boolean
  connect: ProfileWhereUniqueInput
}

input ProfileUpdateWithoutAttendancesDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  memberType: MemberTypeUpdateOneWithoutProfilesInput
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
}

input ProfileUpdateWithoutGroupDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  memberType: MemberTypeUpdateOneWithoutProfilesInput
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateWithoutLeaderDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  memberType: MemberTypeUpdateOneWithoutProfilesInput
  group: GroupUpdateOneWithoutMembersInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateWithoutMemberTypeDataInput {
  oldId: ID
  firstName: String
  lastName: String
  gender: Boolean
  email: String
  facebookId: String
  phoneNumber: String
  birthday: DateTime
  joinDate: DateTime
  dayOfBirth: Int
  monthOfBirth: Int
  yearOfBirth: Int
  address: AddressUpdateOneInput
  hometown: ProvinceUpdateOneInput
  group: GroupUpdateOneWithoutMembersInput
  leader: GroupUpdateOneWithoutLeaderInput
  attendances: ActivityAttendanceUpdateManyWithoutMemberInput
}

input ProfileUpdateWithWhereUniqueWithoutGroupInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutGroupDataInput!
}

input ProfileUpdateWithWhereUniqueWithoutMemberTypeInput {
  where: ProfileWhereUniqueInput!
  data: ProfileUpdateWithoutMemberTypeDataInput!
}

input ProfileUpsertNestedInput {
  update: ProfileUpdateDataInput!
  create: ProfileCreateInput!
}

input ProfileUpsertWithoutAttendancesInput {
  update: ProfileUpdateWithoutAttendancesDataInput!
  create: ProfileCreateWithoutAttendancesInput!
}

input ProfileUpsertWithoutLeaderInput {
  update: ProfileUpdateWithoutLeaderDataInput!
  create: ProfileCreateWithoutLeaderInput!
}

input ProfileUpsertWithWhereUniqueWithoutGroupInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutGroupDataInput!
  create: ProfileCreateWithoutGroupInput!
}

input ProfileUpsertWithWhereUniqueWithoutMemberTypeInput {
  where: ProfileWhereUniqueInput!
  update: ProfileUpdateWithoutMemberTypeDataInput!
  create: ProfileCreateWithoutMemberTypeInput!
}

input ProfileWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  oldId: ID
  oldId_not: ID
  oldId_in: [ID!]
  oldId_not_in: [ID!]
  oldId_lt: ID
  oldId_lte: ID
  oldId_gt: ID
  oldId_gte: ID
  oldId_contains: ID
  oldId_not_contains: ID
  oldId_starts_with: ID
  oldId_not_starts_with: ID
  oldId_ends_with: ID
  oldId_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  gender: Boolean
  gender_not: Boolean
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  facebookId: String
  facebookId_not: String
  facebookId_in: [String!]
  facebookId_not_in: [String!]
  facebookId_lt: String
  facebookId_lte: String
  facebookId_gt: String
  facebookId_gte: String
  facebookId_contains: String
  facebookId_not_contains: String
  facebookId_starts_with: String
  facebookId_not_starts_with: String
  facebookId_ends_with: String
  facebookId_not_ends_with: String
  phoneNumber: String
  phoneNumber_not: String
  phoneNumber_in: [String!]
  phoneNumber_not_in: [String!]
  phoneNumber_lt: String
  phoneNumber_lte: String
  phoneNumber_gt: String
  phoneNumber_gte: String
  phoneNumber_contains: String
  phoneNumber_not_contains: String
  phoneNumber_starts_with: String
  phoneNumber_not_starts_with: String
  phoneNumber_ends_with: String
  phoneNumber_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  joinDate: DateTime
  joinDate_not: DateTime
  joinDate_in: [DateTime!]
  joinDate_not_in: [DateTime!]
  joinDate_lt: DateTime
  joinDate_lte: DateTime
  joinDate_gt: DateTime
  joinDate_gte: DateTime
  dayOfBirth: Int
  dayOfBirth_not: Int
  dayOfBirth_in: [Int!]
  dayOfBirth_not_in: [Int!]
  dayOfBirth_lt: Int
  dayOfBirth_lte: Int
  dayOfBirth_gt: Int
  dayOfBirth_gte: Int
  monthOfBirth: Int
  monthOfBirth_not: Int
  monthOfBirth_in: [Int!]
  monthOfBirth_not_in: [Int!]
  monthOfBirth_lt: Int
  monthOfBirth_lte: Int
  monthOfBirth_gt: Int
  monthOfBirth_gte: Int
  yearOfBirth: Int
  yearOfBirth_not: Int
  yearOfBirth_in: [Int!]
  yearOfBirth_not_in: [Int!]
  yearOfBirth_lt: Int
  yearOfBirth_lte: Int
  yearOfBirth_gt: Int
  yearOfBirth_gte: Int
  address: AddressWhereInput
  hometown: ProvinceWhereInput
  memberType: MemberTypeWhereInput
  group: GroupWhereInput
  leader: GroupWhereInput
  attendances_every: ActivityAttendanceWhereInput
  attendances_some: ActivityAttendanceWhereInput
  attendances_none: ActivityAttendanceWhereInput
  AND: [ProfileWhereInput!]
  OR: [ProfileWhereInput!]
  NOT: [ProfileWhereInput!]
}

input ProfileWhereUniqueInput {
  id: ID
  oldId: ID
}

type Province {
  id: ID!
  name: String!
  districts(where: DistrictWhereInput, orderBy: DistrictOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [District!]
}

type ProvinceConnection {
  pageInfo: PageInfo!
  edges: [ProvinceEdge]!
  aggregate: AggregateProvince!
}

input ProvinceCreateInput {
  name: String!
  districts: DistrictCreateManyWithoutProvinceInput
}

input ProvinceCreateOneInput {
  create: ProvinceCreateInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateOneWithoutDistrictsInput {
  create: ProvinceCreateWithoutDistrictsInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceCreateWithoutDistrictsInput {
  name: String!
}

type ProvinceEdge {
  node: Province!
  cursor: String!
}

enum ProvinceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProvincePreviousValues {
  id: ID!
  name: String!
}

type ProvinceSubscriptionPayload {
  mutation: MutationType!
  node: Province
  updatedFields: [String!]
  previousValues: ProvincePreviousValues
}

input ProvinceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProvinceWhereInput
  AND: [ProvinceSubscriptionWhereInput!]
  OR: [ProvinceSubscriptionWhereInput!]
  NOT: [ProvinceSubscriptionWhereInput!]
}

input ProvinceUpdateDataInput {
  name: String
  districts: DistrictUpdateManyWithoutProvinceInput
}

input ProvinceUpdateInput {
  name: String
  districts: DistrictUpdateManyWithoutProvinceInput
}

input ProvinceUpdateManyMutationInput {
  name: String
}

input ProvinceUpdateOneInput {
  create: ProvinceCreateInput
  update: ProvinceUpdateDataInput
  upsert: ProvinceUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateOneRequiredWithoutDistrictsInput {
  create: ProvinceCreateWithoutDistrictsInput
  update: ProvinceUpdateWithoutDistrictsDataInput
  upsert: ProvinceUpsertWithoutDistrictsInput
  connect: ProvinceWhereUniqueInput
}

input ProvinceUpdateWithoutDistrictsDataInput {
  name: String
}

input ProvinceUpsertNestedInput {
  update: ProvinceUpdateDataInput!
  create: ProvinceCreateInput!
}

input ProvinceUpsertWithoutDistrictsInput {
  update: ProvinceUpdateWithoutDistrictsDataInput!
  create: ProvinceCreateWithoutDistrictsInput!
}

input ProvinceWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  districts_every: DistrictWhereInput
  districts_some: DistrictWhereInput
  districts_none: DistrictWhereInput
  AND: [ProvinceWhereInput!]
  OR: [ProvinceWhereInput!]
  NOT: [ProvinceWhereInput!]
}

input ProvinceWhereUniqueInput {
  id: ID
}

type Query {
  activityAttendance(where: ActivityAttendanceWhereUniqueInput!): ActivityAttendance
  activityAttendances(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityAttendance]!
  activityAttendancesConnection(where: ActivityAttendanceWhereInput, orderBy: ActivityAttendanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityAttendanceConnection!
  activitySchedule(where: ActivityScheduleWhereUniqueInput!): ActivitySchedule
  activitySchedules(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivitySchedule]!
  activitySchedulesConnection(where: ActivityScheduleWhereInput, orderBy: ActivityScheduleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityScheduleConnection!
  activityType(where: ActivityTypeWhereUniqueInput!): ActivityType
  activityTypes(where: ActivityTypeWhereInput, orderBy: ActivityTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ActivityType]!
  activityTypesConnection(where: ActivityTypeWhereInput, orderBy: ActivityTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ActivityTypeConnection!
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  commune(where: CommuneWhereUniqueInput!): Commune
  communes(where: CommuneWhereInput, orderBy: CommuneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Commune]!
  communesConnection(where: CommuneWhereInput, orderBy: CommuneOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommuneConnection!
  district(where: DistrictWhereUniqueInput!): District
  districts(where: DistrictWhereInput, orderBy: DistrictOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [District]!
  districtsConnection(where: DistrictWhereInput, orderBy: DistrictOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DistrictConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  memberType(where: MemberTypeWhereUniqueInput!): MemberType
  memberTypes(where: MemberTypeWhereInput, orderBy: MemberTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MemberType]!
  memberTypesConnection(where: MemberTypeWhereInput, orderBy: MemberTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberTypeConnection!
  profile(where: ProfileWhereUniqueInput!): Profile
  profiles(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Profile]!
  profilesConnection(where: ProfileWhereInput, orderBy: ProfileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProfileConnection!
  province(where: ProvinceWhereUniqueInput!): Province
  provinces(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Province]!
  provincesConnection(where: ProvinceWhereInput, orderBy: ProvinceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProvinceConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  activityAttendance(where: ActivityAttendanceSubscriptionWhereInput): ActivityAttendanceSubscriptionPayload
  activitySchedule(where: ActivityScheduleSubscriptionWhereInput): ActivityScheduleSubscriptionPayload
  activityType(where: ActivityTypeSubscriptionWhereInput): ActivityTypeSubscriptionPayload
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  commune(where: CommuneSubscriptionWhereInput): CommuneSubscriptionPayload
  district(where: DistrictSubscriptionWhereInput): DistrictSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  memberType(where: MemberTypeSubscriptionWhereInput): MemberTypeSubscriptionPayload
  profile(where: ProfileSubscriptionWhereInput): ProfileSubscriptionPayload
  province(where: ProvinceSubscriptionWhereInput): ProvinceSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  password: String!
  role: Int!
  active: Boolean!
  profile: Profile
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  password: String!
  role: Int
  active: Boolean
  profile: ProfileCreateOneInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  role_ASC
  role_DESC
  active_ASC
  active_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  password: String!
  role: Int!
  active: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  username: String
  password: String
  role: Int
  active: Boolean
  profile: ProfileUpdateOneInput
}

input UserUpdateManyMutationInput {
  username: String
  password: String
  role: Int
  active: Boolean
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  role: Int
  role_not: Int
  role_in: [Int!]
  role_not_in: [Int!]
  role_lt: Int
  role_lte: Int
  role_gt: Int
  role_gte: Int
  active: Boolean
  active_not: Boolean
  profile: ProfileWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
}
`