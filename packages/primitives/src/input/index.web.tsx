import { forwardRef } from "react";
import { Text } from "#text";
import { Box } from "#box";
import { InputProps } from "./props";

export const Input = forwardRef<any, InputProps>((props, ref) => {
  const { label, _Control, _Label, ...rest } = props;

  return (
    <Box ref={ref} {...rest}>
      <input {..._Control} />
      {label !== undefined && <Text {..._Label}>{label}</Text>}
    </Box>
  );
});