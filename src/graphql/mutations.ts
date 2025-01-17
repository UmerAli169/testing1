/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const customAddUsers = /* GraphQL */ `mutation CustomAddUsers($input: CreateTodoInput) {
  customAddUsers(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CustomAddUsersMutationVariables,
  APITypes.CustomAddUsersMutation
>;
export const customUpdateUsers = /* GraphQL */ `mutation CustomUpdateUsers($input: UpdateTodoInput) {
  customUpdateUsers(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CustomUpdateUsersMutationVariables,
  APITypes.CustomUpdateUsersMutation
>;
export const customDeleteUsers = /* GraphQL */ `mutation CustomDeleteUsers($input: DeleteTodoInput) {
  customDeleteUsers(input: $input) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CustomDeleteUsersMutationVariables,
  APITypes.CustomDeleteUsersMutation
>;
export const createUser1 = /* GraphQL */ `mutation CreateUser1(
  $input: CreateUser1Input!
  $condition: ModelUser1ConditionInput
) {
  createUser1(input: $input, condition: $condition) {
    id
    name
    email
    userType
    imageKey
    category
    description
    createdAt
    updatedAt
    blogs {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUser1MutationVariables,
  APITypes.CreateUser1Mutation
>;
export const updateUser1 = /* GraphQL */ `mutation UpdateUser1(
  $input: UpdateUser1Input!
  $condition: ModelUser1ConditionInput
) {
  updateUser1(input: $input, condition: $condition) {
    id
    name
    email
    userType
    imageKey
    category
    description
    createdAt
    updatedAt
    blogs {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUser1MutationVariables,
  APITypes.UpdateUser1Mutation
>;
export const deleteUser1 = /* GraphQL */ `mutation DeleteUser1(
  $input: DeleteUser1Input!
  $condition: ModelUser1ConditionInput
) {
  deleteUser1(input: $input, condition: $condition) {
    id
    name
    email
    userType
    imageKey
    category
    description
    createdAt
    updatedAt
    blogs {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUser1MutationVariables,
  APITypes.DeleteUser1Mutation
>;
export const createBlog1 = /* GraphQL */ `mutation CreateBlog1(
  $input: CreateBlog1Input!
  $condition: ModelBlog1ConditionInput
) {
  createBlog1(input: $input, condition: $condition) {
    id
    name
    description
    imageKey
    category
    createdAt
    updatedAt
    user {
      id
      name
      email
      userType
      imageKey
      category
      description
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      nextToken
      __typename
    }
    user1BlogsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBlog1MutationVariables,
  APITypes.CreateBlog1Mutation
>;
export const updateBlog1 = /* GraphQL */ `mutation UpdateBlog1(
  $input: UpdateBlog1Input!
  $condition: ModelBlog1ConditionInput
) {
  updateBlog1(input: $input, condition: $condition) {
    id
    name
    description
    imageKey
    category
    createdAt
    updatedAt
    user {
      id
      name
      email
      userType
      imageKey
      category
      description
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      nextToken
      __typename
    }
    user1BlogsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBlog1MutationVariables,
  APITypes.UpdateBlog1Mutation
>;
export const deleteBlog1 = /* GraphQL */ `mutation DeleteBlog1(
  $input: DeleteBlog1Input!
  $condition: ModelBlog1ConditionInput
) {
  deleteBlog1(input: $input, condition: $condition) {
    id
    name
    description
    imageKey
    category
    createdAt
    updatedAt
    user {
      id
      name
      email
      userType
      imageKey
      category
      description
      createdAt
      updatedAt
      __typename
    }
    userId
    comments {
      nextToken
      __typename
    }
    user1BlogsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBlog1MutationVariables,
  APITypes.DeleteBlog1Mutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createTodo1 = /* GraphQL */ `mutation CreateTodo1(
  $input: CreateTodo1Input!
  $condition: ModelTodo1ConditionInput
) {
  createTodo1(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodo1MutationVariables,
  APITypes.CreateTodo1Mutation
>;
export const updateTodo1 = /* GraphQL */ `mutation UpdateTodo1(
  $input: UpdateTodo1Input!
  $condition: ModelTodo1ConditionInput
) {
  updateTodo1(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodo1MutationVariables,
  APITypes.UpdateTodo1Mutation
>;
export const deleteTodo1 = /* GraphQL */ `mutation DeleteTodo1(
  $input: DeleteTodo1Input!
  $condition: ModelTodo1ConditionInput
) {
  deleteTodo1(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodo1MutationVariables,
  APITypes.DeleteTodo1Mutation
>;
