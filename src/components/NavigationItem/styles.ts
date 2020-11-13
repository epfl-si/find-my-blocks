export const item = (isActive: boolean) => ({
  bg: isActive ? "primary" : "white",
  cursor: isActive ? "default" : "pointer",
  color: isActive ? "white" : "inherit",
  pointerEvents: isActive ? "none" : "default",
  position: "relative",
  px: 4,
  py: 3,
  transition: "background 300ms",
  borderBottom: (t) => `1px solid ${t.colors.grey}`,

  "&:hover": {
    svg: {
      right: 3,
    },
  },

  svg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    mt: "1px",
    right: 4,
    transition: "right 300ms",
  },
});

export const count = {
  fontSize: 1,
};