import type { WebpackOverrideFn } from "@remotion/cli/config";

export const webpackOverride: WebpackOverrideFn = (config) => {
  config.module?.rules?.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: {
      filename: "static/media/[name].[hash][ext]",
    },
  });

  return config;
};