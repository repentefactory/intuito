import { t } from "ttag";

export const GENERAL_PERMISSIONS_OPTIONS = {
  yes: {
    label: t`Yes`,
    value: "write",
    icon: "check",
    iconColor: "success",
  },
  no: {
    label: t`No`,
    value: "none",
    icon: "close",
    iconColor: "danger",
  },
};
