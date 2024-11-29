export const deviceSizes = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobile: `(max-width: ${deviceSizes.mobile})`,
  tablet: `(min-width: calc(${deviceSizes.mobile} + 1px)) and (max-width: ${deviceSizes.tablet})`,
  desktop: `(min-width: calc(${deviceSizes.tablet} + 1px))`,
};
