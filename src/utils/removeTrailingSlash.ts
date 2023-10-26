export default function removeTrailingSlash(pathname: string) {
  return pathname === "/" ? pathname : pathname.replace(/\/$/, "");
}
