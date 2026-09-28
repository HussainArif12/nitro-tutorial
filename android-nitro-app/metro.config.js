// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);
const batteryModulePath = path.resolve(__dirname, "../react-native-battery");
config.watchFolders = [batteryModulePath];

const blockListRegex = new RegExp(
  `^${batteryModulePath.replace(/[/\\\\]/g, "[/\\\\]")}[/\\\\]node_modules[/\\\\].*$`,
);
config.resolver.blockList = [blockListRegex];

config.resolver.nodeModulesPaths = [path.resolve(__dirname, "node_modules")];

config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, "node_modules/react"),
  "react-native": path.resolve(__dirname, "node_modules/react-native"),
  "react-native-nitro-modules": path.resolve(
    __dirname,
    "node_modules/react-native-nitro-modules",
  ),
};
module.exports = config;
