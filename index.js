/** @format */

import { AppRegistry } from "react-native";
import RNStart from "./app/index";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => RNStart);
