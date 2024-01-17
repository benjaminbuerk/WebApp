import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="benjaminbuerk/WebApp"
      //repoId="156300692"
      repoId="R_kgDOLEG5-w"
      category="General"
      categoryId="DIC_kwDOLEG5-84Ccdcy"  // E.g. id of "General"
      mapping="url"                        // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="de"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}