import React from "react";
import Loadable from 'react-loadable';
import LinearProgress from 'mihy-ui-framework/ui-atoms/LinearSpinner';
import * as mainRouteConstants from "./route-names";

const Loading = () => <LinearProgress/>;

const Landing = Loadable({
  loader: () => import('../../ui-views/Landing'),
  loading: Loading,
});

const Playground = Loadable({
  loader: () => import('../../ui-views/Playground'),
  loading: Loading,
});

const ScreenInterface=Loadable({
  loader:()=>import ('../../ui-views/ScreenInterface'),
  loading:Loading
})

const Catalog=Loadable({
  loader:()=>import ('../../ui-views/Catalog'),
  loading:Loading
})

const mainRoutes = [
  {
    path: mainRouteConstants.LANDING,
    component: Landing
  },
  {
    path:mainRouteConstants.SCREEN_INTERFACE,
    component:ScreenInterface
  },
  {
    path: mainRouteConstants.PLAYGROUND,
    component: Playground
  },
  {
    path: mainRouteConstants.CATALOG,
    component: Catalog
  },
  {
    isRedirect:true,
    to:mainRouteConstants.REDIRECT
  }
];

export default mainRoutes;
