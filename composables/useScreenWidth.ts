import { useBreakpoints } from "@vueuse/core";

export default function () {

  // Same values are used in _helpers.scss.
  // Any changes here in the values of breakpoints should be reflected there too.
  const breakpoints = useBreakpoints({
    extraSmallScreen: 480,
    tablet: 720,
    desktop: 1025,
    largeScreen: 1440,
  });

  const extraSmallScreen = breakpoints.isSmallerOrEqual("extraSmallScreen");

  const smallScreen = breakpoints.isInBetween("extraSmallScreen", "tablet");

  const tablet = breakpoints.greaterOrEqual("tablet");

  const desktop = breakpoints.greaterOrEqual("desktop");

  const largeScreen = breakpoints.greaterOrEqual("largeScreen");

  return { extraSmallScreen, smallScreen, tablet, desktop, largeScreen };

}
