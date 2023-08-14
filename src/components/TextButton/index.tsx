import Link from "@/components/Link"

const TextButton = props => {
  const { children, sx, ...restProps } = props
  return (
    <Link
      component="button"
      sx={{
        color: "primary.main",
        verticalAlign: "baseline",
        fontSize: "1.4rem",
        fontWeight: 600,
        ...sx,
      }}
      underline="always"
      {...restProps}
    >
      {children}
    </Link>
  )
}

export default TextButton
