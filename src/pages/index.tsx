import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/Layout";
import "../styles/reset.css";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <h1>Absolute Zero Volleyball</h1>
        <section>
          <h4>
            Explore the latest updates on recreational volleyball in King county and surrounding areas. Find information
            about upcoming tournaments, leagues, and regular open gyms for adults.
          </h4>
        </section>
        <section>
        </section>
      </article>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
