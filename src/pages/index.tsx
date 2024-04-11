import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/Layout";
import "../styles/reset.css";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <article>
        <h1>SEATTLE VOLLEYBALL</h1>
        <section>
          <h4>
            Explore the latest updates on recreational volleyball in King county and surrounding areas. Find information
            about upcoming tournaments, leagues, and regular open gyms for adults.
          </h4>
        </section>
        <section>
          <h6>
            We do not organize every event ourselves and aren't responsible for keeping events up to date. Reach out to
            the organizer to check and see if an event has changed.
          </h6>
        </section>
        <section>Interested in getting your local open gym or event added to our list? Fill out our form.</section>
      </article>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <title>Home Page</title>
  </>
);
