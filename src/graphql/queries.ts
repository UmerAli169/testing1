/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const customListUsers = /* GraphQL */ `query CustomListUsers {
  customListUsers {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CustomListUsersQueryVariables,
  APITypes.CustomListUsersQuery
>;
export const getUser1 = /* GraphQL */ `query GetUser1($id: ID!) {
  getUser1(id: $id) {
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
` as GeneratedQuery<APITypes.GetUser1QueryVariables, APITypes.GetUser1Query>;
export const listUser1s = /* GraphQL */ `query ListUser1s(
  $filter: ModelUser1FilterInput
  $limit: Int
  $nextToken: String
) {
  listUser1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUser1sQueryVariables,
  APITypes.ListUser1sQuery
>;
export const getBlog1 = /* GraphQL */ `query GetBlog1($id: ID!) {
  getBlog1(id: $id) {
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
` as GeneratedQuery<APITypes.GetBlog1QueryVariables, APITypes.GetBlog1Query>;
export const listBlog1s = /* GraphQL */ `query ListBlog1s(
  $filter: ModelBlog1FilterInput
  $limit: Int
  $nextToken: String
) {
  listBlog1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      imageKey
      category
      createdAt
      updatedAt
      userId
      user1BlogsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBlog1sQueryVariables,
  APITypes.ListBlog1sQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      createdAt
      updatedAt
      blogId
      blog1CommentsId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const getTodo1 = /* GraphQL */ `query GetTodo1($id: ID!) {
  getTodo1(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodo1QueryVariables, APITypes.GetTodo1Query>;
export const listTodo1s = /* GraphQL */ `query ListTodo1s(
  $filter: ModelTodo1FilterInput
  $limit: Int
  $nextToken: String
) {
  listTodo1s(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTodo1sQueryVariables,
  APITypes.ListTodo1sQuery
>;
