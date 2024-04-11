import React from "react";
import { TournamentCollectionTemplate } from "../../templates/TournamentCollectionTemplate";
import { PreviewTemplateComponentProps } from "netlify-cms-core";

const TournamentCollectionPreview = ({ entry }: PreviewTemplateComponentProps) => {
  const data = entry.getIn(["data"]).toJS();

  console.log("DATA", data);

  if (data) {
    return <TournamentCollectionTemplate />;
  } else {
    return <>Loading...</>;
  }
};

export default TournamentCollectionPreview;
