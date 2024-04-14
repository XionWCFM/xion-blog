import Link from "next/link";
import { EXTERNAL_URL } from "src/shared/constant/external/external-url";

import { GitHubLogoIcon, LinkedInLogoIcon, PersonIcon } from "@radix-ui/react-icons";

export const Footer = () => {
  return (
    <footer className=" w-full h-256 flex justify-center items-end pb-24">
      <section className=" flex gap-x-16">
        <Link href={EXTERNAL_URL.github} target={"_blank"}>
          <GitHubLogoIcon />
        </Link>
        <Link href={EXTERNAL_URL.linkedIn} target={"_blank"}>
          <LinkedInLogoIcon />
        </Link>
        <Link href={EXTERNAL_URL.tistory} target={"_blank"}>
          <PersonIcon />
        </Link>
      </section>
    </footer>
  );
};
