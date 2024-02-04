import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
export const Footer = () => {
  return (
    <footer className=" w-full h-256 flex justify-center items-end pb-24">
      <section className=" flex gap-x-16">
        <GitHubLogoIcon />
        <LinkedInLogoIcon />
        <PersonIcon />
      </section>
    </footer>
  );
};
