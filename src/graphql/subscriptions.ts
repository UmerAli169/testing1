/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUser1 = /* GraphQL */ `subscription OnCreateUser1($filter: ModelSubscriptionUser1FilterInput) {
  onCreateUser1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUser1SubscriptionVariables,
  APITypes.OnCreateUser1Subscription
>;
export const onUpdateUser1 = /* GraphQL */ `subscription OnUpdateUser1($filter: ModelSubscriptionUser1FilterInput) {
  onUpdateUser1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUser1SubscriptionVariables,
  APITypes.OnUpdateUser1Subscription
>;
export const onDeleteUser1 = /* GraphQL */ `subscription OnDeleteUser1($filter: ModelSubscriptionUser1FilterInput) {
  onDeleteUser1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUser1SubscriptionVariables,
  APITypes.OnDeleteUser1Subscription
>;
export const onCreateBlog1 = /* GraphQL */ `subscription OnCreateBlog1($filter: ModelSubscriptionBlog1FilterInput) {
  onCreateBlog1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBlog1SubscriptionVariables,
  APITypes.OnCreateBlog1Subscription
>;
export const onUpdateBlog1 = /* GraphQL */ `subscription OnUpdateBlog1($filter: ModelSubscriptionBlog1FilterInput) {
  onUpdateBlog1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBlog1SubscriptionVariables,
  APITypes.OnUpdateBlog1Subscription
>;
export const onDeleteBlog1 = /* GraphQL */ `subscription OnDeleteBlog1($filter: ModelSubscriptionBlog1FilterInput) {
  onDeleteBlog1(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBlog1SubscriptionVariables,
  APITypes.OnDeleteBlog1Subscription
>;
export const onCreateComment = /* GraphQL */ `subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
  onCreateComment(filter: $filter) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCommentSubscriptionVariables,
  APITypes.OnCreateCommentSubscription
>;
export const onUpdateComment = /* GraphQL */ `subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
  onUpdateComment(filter: $filter) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCommentSubscriptionVariables,
  APITypes.OnUpdateCommentSubscription
>;
export const onDeleteComment = /* GraphQL */ `subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
  onDeleteComment(filter: $filter) {
    id
    content
    createdAt
    updatedAt
    blogId
    blog1CommentsId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCommentSubscriptionVariables,
  APITypes.OnDeleteCommentSubscription
>;
export const onCreateTodo1 = /* GraphQL */ `subscription OnCreateTodo1($filter: ModelSubscriptionTodo1FilterInput) {
  onCreateTodo1(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodo1SubscriptionVariables,
  APITypes.OnCreateTodo1Subscription
>;
export const onUpdateTodo1 = /* GraphQL */ `subscription OnUpdateTodo1($filter: ModelSubscriptionTodo1FilterInput) {
  onUpdateTodo1(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodo1SubscriptionVariables,
  APITypes.OnUpdateTodo1Subscription
>;
export const onDeleteTodo1 = /* GraphQL */ `subscription OnDeleteTodo1($filter: ModelSubscriptionTodo1FilterInput) {
  onDeleteTodo1(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodo1SubscriptionVariables,
  APITypes.OnDeleteTodo1Subscription
>;
