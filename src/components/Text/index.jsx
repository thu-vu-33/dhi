import React from "react";

const sizeClasses = {
  txtGilroyRegular16Black900: "font-gilroy font-normal",
  txtGilroyBold34: "font-bold font-gilroy",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyBold30: "font-bold font-gilroy",
  txtGilroyRegular16Black90002: "font-gilroy font-normal",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
