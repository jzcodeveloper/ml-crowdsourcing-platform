import React from "react";
import { isEqual } from "lodash";

import AnimatedSwitch from "../../hoc/AnimatedSwitch";
import CustomRoute from "../../hoc/CustomRoute";
import Summary from "../../components/Models";
import NotFound from "../../components/UI/NotFound";

const Models = () => {
  return (
    <AnimatedSwitch>
      <CustomRoute
        exact
        path="/dashboard/models/overview"
        component={Summary}
        role="admin"
        animated
      />
      <CustomRoute component={NotFound} animated />
    </AnimatedSwitch>
  );
};

const areEqual = (prevProps, nextProps) =>
  isEqual(prevProps.location.pathname, nextProps.location.pathname);

export default React.memo(Models, areEqual);
