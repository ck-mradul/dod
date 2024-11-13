import React, { useCallback } from "react";
import { Button, ButtonProps } from "antd";

interface ReusableButtonProps extends ButtonProps {
  icon?: React.ReactNode;
  customLabel?: string;
}

const MyButton: React.FC<ReusableButtonProps> = ({
  type = "primary",
  size = "large",
  icon = "",
  customLabel = "",
  onClick,
  disabled = false,
  className = "",
  ...rest
}) => {
  const handleClick = useCallback(
    (e: any) => {
      if (onClick) {
        onClick(e);
      }
    },
    [onClick]
  );

  return (
    <Button
      type={type}
      icon={icon}
      onClick={handleClick}
      disabled={disabled}
      size={size}
      className={className}
      {...rest}
      style={{ fontSize: 14 }}
    >
      {customLabel}
    </Button>
  );
};

export default React.memo(MyButton);
