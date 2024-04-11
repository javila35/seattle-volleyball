import React from "react";

type TournamentSetProps = {
  tourneys: any;
};

export const TournamentSet = ({ tourneys }: TournamentSetProps) => {
  return (
    <>
      {tourneys.map(({ node: tourney }, idx) => {
        const fm = tourney.frontmatter;
        return <TournamentPreview />;
      })}
    </>
  );
};
