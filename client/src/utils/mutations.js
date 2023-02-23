import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, password: $String!) {
    login(email: $email, password: $password) {
      token
      me {
        _id
        username
      }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      me {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookInput) {
      _id
      username
      email
      password
      savedBooks{
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $ID) {
      _id
      username
      email
      password
      savedBooks{
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
