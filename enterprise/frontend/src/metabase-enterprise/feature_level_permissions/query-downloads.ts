import { t } from "ttag";
import { Dataset } from "metabase-types/api/dataset";

export const canDownloadResults = (result: Dataset) =>
  result.data.results_metadata.download_results !== "none";

export const getDownloadWidgetMessageOverride = (result: Dataset) => {
  const download_results = result.data.results_metadata.download_results;

  if (download_results === "limited") {
    return t`The maximum download size is 10 thousand rows.`;
  }

  return null;
};
