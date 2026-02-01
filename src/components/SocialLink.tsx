import { Social } from "../../types";
import Button from "./Button";
import { IconEmail, IconGitHub, IconLinkedIn, IconWeChat } from "@/icons";

function getTwColorClassName(id: string) {
  switch (id) {
    case "github":
      return "bg-[#151b23]";
    case "linkedin":
      return "bg-[#0a66c2]";
    case "wechat":
      return "bg-[#368c20]";
    default:
      return "";
  }
}

function getSocialIcon(id: string): React.ReactNode {
  switch (id) {
    case "github":
      return <IconGitHub />;
    case "linkedin":
      return <IconLinkedIn />;
    case "wechat":
      return <IconWeChat />;
    case "email":
      return <IconEmail />;
    default:
      return null;
  }
}

export const SocialLink: React.FC<{ 
  social: Social, 
  isRound?: boolean,
  handleClickOverride?: () => void 
}> = ({ 
  social,
  isRound = false, 
  handleClickOverride 
}) => {
  const handleClick = () => {
    if (handleClickOverride) {
      return handleClickOverride();
    }

    if (social.url) {
      window.open(social.url)
      return;
    }
  }

  if (isRound) {
    return <Button
      onClick={handleClick}
      className={`rounded-full flex flex-row items-center text-white gap-4 p-4 ${
        getTwColorClassName(social.id)
      }`}
    >
      <span className="text-3xl sm:text-xl">
        {getSocialIcon(social.id)}
      </span>
    </Button>
  }

  return (
    <Button
      onClick={handleClick}
      className={`flex flex-row items-center text-white gap-4 p-4 ${
        getTwColorClassName(social.id)
      }`}
    >
      <span className="text-3xl sm:text-xl">
        {getSocialIcon(social.id)}
      </span>
      <p className="text-base font-bold sm:text-base">
        {social.text}
      </p>
    </Button>
  );
}
