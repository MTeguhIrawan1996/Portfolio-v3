import * as React from 'react';

import Layout from '@/components/layout/Layout';
import { Home } from '@/components/section';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return <Home />;
}

HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
