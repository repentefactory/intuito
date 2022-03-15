import { PLUGIN_GENERAL_PERMISSIONS } from "metabase/plugins";
import { hasPremiumFeature } from "metabase-enterprise/settings";

import getRoutes from "./routes";

if (hasPremiumFeature("advanced_permissions")) {
  PLUGIN_GENERAL_PERMISSIONS.getRoutes = getRoutes;
}
