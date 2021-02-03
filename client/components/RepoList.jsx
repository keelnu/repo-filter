import React from 'react';
import { gql, Query } from '@apollo/client';

  const GET_REPOS = gql`
    query($number_of_repos:Int!){
      viewer {
        name
        repositories(last: $number_of_repos) {
          nodes {
            name
          }
        }
      }
    }
  `;

  const RepoList = () => {
    return (
      <Query query={GET_REPOS}>
        {({ loading, error, data }) => {
          if (loading) return <div>Loading...</div>;
          if (error) return <div>Error :(</div>;

          return <RepoList url={data} />;
        }}
      </Query>
    );
  }

export default RepoList;