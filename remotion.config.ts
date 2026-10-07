import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("png");
Config.setOverwriteOutput(true);
Config.setPublicDir("./public");
Config.setBundler("esbuild");

export const remotionConfig = Config;