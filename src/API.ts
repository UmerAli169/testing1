/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  name?: string | null,
  description?: string | null,
};

export type Todo1 = {
  __typename: "Todo1",
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateTodoInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id?: string | null,
};

export type CreateUser1Input = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  userType?: string | null,
  imageKey?: string | null,
  category?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUser1ConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userType?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUser1ConditionInput | null > | null,
  or?: Array< ModelUser1ConditionInput | null > | null,
  not?: ModelUser1ConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User1 = {
  __typename: "User1",
  id?: string | null,
  name?: string | null,
  email?: string | null,
  userType?: string | null,
  imageKey?: string | null,
  category?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  blogs?: ModelBlog1Connection | null,
};

export type ModelBlog1Connection = {
  __typename: "ModelBlog1Connection",
  items:  Array<Blog1 | null >,
  nextToken?: string | null,
};

export type Blog1 = {
  __typename: "Blog1",
  id?: string | null,
  name?: string | null,
  description?: string | null,
  imageKey?: string | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  user?: User1 | null,
  userId?: string | null,
  comments?: ModelCommentConnection | null,
  user1BlogsId?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  blogId?: string | null,
  blog1CommentsId?: string | null,
};

export type UpdateUser1Input = {
  id: string,
  name?: string | null,
  email?: string | null,
  userType?: string | null,
  imageKey?: string | null,
  category?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUser1Input = {
  id: string,
};

export type CreateBlog1Input = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  imageKey?: string | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  user1BlogsId?: string | null,
};

export type ModelBlog1ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelBlog1ConditionInput | null > | null,
  or?: Array< ModelBlog1ConditionInput | null > | null,
  not?: ModelBlog1ConditionInput | null,
  user1BlogsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBlog1Input = {
  id: string,
  name?: string | null,
  description?: string | null,
  imageKey?: string | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
  user1BlogsId?: string | null,
};

export type DeleteBlog1Input = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  blogId?: string | null,
  blog1CommentsId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  blog1CommentsId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  blogId?: string | null,
  blog1CommentsId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateTodo1Input = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelTodo1ConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo1ConditionInput | null > | null,
  or?: Array< ModelTodo1ConditionInput | null > | null,
  not?: ModelTodo1ConditionInput | null,
};

export type UpdateTodo1Input = {
  id: string,
  name?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteTodo1Input = {
  id: string,
};

export type ModelUser1FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  userType?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  category?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUser1FilterInput | null > | null,
  or?: Array< ModelUser1FilterInput | null > | null,
  not?: ModelUser1FilterInput | null,
};

export type ModelUser1Connection = {
  __typename: "ModelUser1Connection",
  items:  Array<User1 | null >,
  nextToken?: string | null,
};

export type ModelBlog1FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelBlog1FilterInput | null > | null,
  or?: Array< ModelBlog1FilterInput | null > | null,
  not?: ModelBlog1FilterInput | null,
  user1BlogsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  blogId?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  blog1CommentsId?: ModelIDInput | null,
};

export type ModelTodo1FilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodo1FilterInput | null > | null,
  or?: Array< ModelTodo1FilterInput | null > | null,
  not?: ModelTodo1FilterInput | null,
};

export type ModelTodo1Connection = {
  __typename: "ModelTodo1Connection",
  items:  Array<Todo1 | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUser1FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  userType?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUser1FilterInput | null > | null,
  or?: Array< ModelSubscriptionUser1FilterInput | null > | null,
  user1BlogsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBlog1FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBlog1FilterInput | null > | null,
  or?: Array< ModelSubscriptionBlog1FilterInput | null > | null,
  blog1CommentsId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCommentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  blogId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCommentFilterInput | null > | null,
  or?: Array< ModelSubscriptionCommentFilterInput | null > | null,
};

export type ModelSubscriptionTodo1FilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodo1FilterInput | null > | null,
  or?: Array< ModelSubscriptionTodo1FilterInput | null > | null,
};

export type CustomAddUsersMutationVariables = {
  input?: CreateTodoInput | null,
};

export type CustomAddUsersMutation = {
  customAddUsers?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CustomUpdateUsersMutationVariables = {
  input?: UpdateTodoInput | null,
};

export type CustomUpdateUsersMutation = {
  customUpdateUsers?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CustomDeleteUsersMutationVariables = {
  input?: DeleteTodoInput | null,
};

export type CustomDeleteUsersMutation = {
  customDeleteUsers?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateUser1MutationVariables = {
  input: CreateUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type CreateUser1Mutation = {
  createUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type UpdateUser1MutationVariables = {
  input: UpdateUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type UpdateUser1Mutation = {
  updateUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type DeleteUser1MutationVariables = {
  input: DeleteUser1Input,
  condition?: ModelUser1ConditionInput | null,
};

export type DeleteUser1Mutation = {
  deleteUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type CreateBlog1MutationVariables = {
  input: CreateBlog1Input,
  condition?: ModelBlog1ConditionInput | null,
};

export type CreateBlog1Mutation = {
  createBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type UpdateBlog1MutationVariables = {
  input: UpdateBlog1Input,
  condition?: ModelBlog1ConditionInput | null,
};

export type UpdateBlog1Mutation = {
  updateBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type DeleteBlog1MutationVariables = {
  input: DeleteBlog1Input,
  condition?: ModelBlog1ConditionInput | null,
};

export type DeleteBlog1Mutation = {
  deleteBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type CreateTodo1MutationVariables = {
  input: CreateTodo1Input,
  condition?: ModelTodo1ConditionInput | null,
};

export type CreateTodo1Mutation = {
  createTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTodo1MutationVariables = {
  input: UpdateTodo1Input,
  condition?: ModelTodo1ConditionInput | null,
};

export type UpdateTodo1Mutation = {
  updateTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTodo1MutationVariables = {
  input: DeleteTodo1Input,
  condition?: ModelTodo1ConditionInput | null,
};

export type DeleteTodo1Mutation = {
  deleteTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CustomListUsersQueryVariables = {
};

export type CustomListUsersQuery = {
  customListUsers?:  Array< {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null > | null,
};

export type GetUser1QueryVariables = {
  id: string,
};

export type GetUser1Query = {
  getUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type ListUser1sQueryVariables = {
  filter?: ModelUser1FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUser1sQuery = {
  listUser1s?:  {
    __typename: "ModelUser1Connection",
    items:  Array< {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBlog1QueryVariables = {
  id: string,
};

export type GetBlog1Query = {
  getBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type ListBlog1sQueryVariables = {
  filter?: ModelBlog1FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBlog1sQuery = {
  listBlog1s?:  {
    __typename: "ModelBlog1Connection",
    items:  Array< {
      __typename: "Blog1",
      id?: string | null,
      name?: string | null,
      description?: string | null,
      imageKey?: string | null,
      category?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
      user1BlogsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id?: string | null,
      content?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      blogId?: string | null,
      blog1CommentsId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetTodo1QueryVariables = {
  id: string,
};

export type GetTodo1Query = {
  getTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListTodo1sQueryVariables = {
  filter?: ModelTodo1FilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodo1sQuery = {
  listTodo1s?:  {
    __typename: "ModelTodo1Connection",
    items:  Array< {
      __typename: "Todo1",
      id?: string | null,
      name?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnCreateUser1Subscription = {
  onCreateUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnUpdateUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnUpdateUser1Subscription = {
  onUpdateUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnDeleteUser1SubscriptionVariables = {
  filter?: ModelSubscriptionUser1FilterInput | null,
};

export type OnDeleteUser1Subscription = {
  onDeleteUser1?:  {
    __typename: "User1",
    id?: string | null,
    name?: string | null,
    email?: string | null,
    userType?: string | null,
    imageKey?: string | null,
    category?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogs?:  {
      __typename: "ModelBlog1Connection",
      nextToken?: string | null,
    } | null,
  } | null,
};

export type OnCreateBlog1SubscriptionVariables = {
  filter?: ModelSubscriptionBlog1FilterInput | null,
};

export type OnCreateBlog1Subscription = {
  onCreateBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type OnUpdateBlog1SubscriptionVariables = {
  filter?: ModelSubscriptionBlog1FilterInput | null,
};

export type OnUpdateBlog1Subscription = {
  onUpdateBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type OnDeleteBlog1SubscriptionVariables = {
  filter?: ModelSubscriptionBlog1FilterInput | null,
};

export type OnDeleteBlog1Subscription = {
  onDeleteBlog1?:  {
    __typename: "Blog1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    imageKey?: string | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    user?:  {
      __typename: "User1",
      id?: string | null,
      name?: string | null,
      email?: string | null,
      userType?: string | null,
      imageKey?: string | null,
      category?: string | null,
      description?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null,
    userId?: string | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    user1BlogsId?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  filter?: ModelSubscriptionCommentFilterInput | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id?: string | null,
    content?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    blogId?: string | null,
    blog1CommentsId?: string | null,
  } | null,
};

export type OnCreateTodo1SubscriptionVariables = {
  filter?: ModelSubscriptionTodo1FilterInput | null,
};

export type OnCreateTodo1Subscription = {
  onCreateTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTodo1SubscriptionVariables = {
  filter?: ModelSubscriptionTodo1FilterInput | null,
};

export type OnUpdateTodo1Subscription = {
  onUpdateTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTodo1SubscriptionVariables = {
  filter?: ModelSubscriptionTodo1FilterInput | null,
};

export type OnDeleteTodo1Subscription = {
  onDeleteTodo1?:  {
    __typename: "Todo1",
    id?: string | null,
    name?: string | null,
    description?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
