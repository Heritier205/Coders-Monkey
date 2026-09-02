import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

export const SocialNetworkButtons = ({
  className,
  theme = "accent",
}: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={socialNetwork.label}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
