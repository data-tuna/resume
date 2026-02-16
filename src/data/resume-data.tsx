import { RESUME_DATA as MLR_DATA } from "./resume-data-mlr";
import { RESUME_DATA as MLE_DATA } from "./resume-data-mle";
import { RESUME_DATA as MLV_DATA } from "./resume-data-mlv";
import { RESUME_DATA as MLM_DATA } from "./resume-data-mlm";

export const RESUME_DATA = MLE_DATA;

export { MLR_DATA, MLE_DATA, MLV_DATA, MLM_DATA };

export const RESUME_VERSIONS = {
  "mlr": MLR_DATA,
  "mle": MLE_DATA,
  "mlv": MLV_DATA,
  "mlm": MLM_DATA,
} as const;

export type ResumeData = typeof MLR_DATA | typeof MLE_DATA | typeof MLV_DATA | typeof MLM_DATA;
