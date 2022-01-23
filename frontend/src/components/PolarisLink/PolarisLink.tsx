import { LinkLikeComponent } from "@shopify/polaris/build/ts/latest/src/utilities/link";
import Link from "next/link";
import { IS_EXTERNAL_LINK_REGEX, MAIL_TO_SCHEME } from "./const";

export const PolarisLink: LinkLikeComponent = ({ children, external, url, ...rest }) => {
  // * The Link component evaluates all 'a' tags
  // * If the 'a' tags href is an external url, everything stays the same
  if (external ||
    IS_EXTERNAL_LINK_REGEX.test(url) ||
    url.startsWith(MAIL_TO_SCHEME)) {
      const target = external ? "_blank" : "_top";
      const rel = external ? "noopener noreferrer" : undefined
      return (
        <a target={target} href={url} rel={rel} {...rest}>
          {children}
        </a>
      );
  }

  return (
    <Link href={url}>
      <a {...rest}>{children}</a>
    </Link>
  )
}
