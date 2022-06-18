import React from "react";
import { CustomTextField } from "../custom-text-field";

const SmallTextField = ({ ...props }) => {
  return <CustomTextField {...props} xs={12} sm={6} />;
};

const LargeTextField = ({ ...props }) => {
  return <CustomTextField {...props} xs={12} />;
};

export { SmallTextField, LargeTextField };
