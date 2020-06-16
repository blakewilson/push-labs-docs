import React from 'react';

import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Index() {
  return <Redirect to={useBaseUrl('video-background-pro/index')} />;
}

export default Index;