import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";

type TournamentPageProps = {
  data:
}

export default function TournamentsPage({ data }: any) {
  console.log(data);
  return <Layout>for now, hi</Layout>;
}

export const pageQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          title
        }
      }
    }
  }
}`;
