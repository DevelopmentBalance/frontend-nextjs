/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import { Helmet } from "react-helmet";

import * as S from "./styles";

export const ContentFromBank = ({ content }) => {
  if (!content) {
    return null;
  }

  const regex = /<script.*?src="(.*?)"/g;
  const scripts = [];

  let match;
  while ((match = regex.exec(content))) {
    scripts.push(match[1]);
  }

  return (
    <S.Container>
      <S.Content dangerouslySetInnerHTML={{ __html: content }} />

      <Helmet>
        {scripts.map((src) => (
          <script key={src} src={src}></script>
        ))}
      </Helmet>
    </S.Container>
  );
};
