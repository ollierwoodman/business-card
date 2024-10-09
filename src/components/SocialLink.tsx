<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> 68b24419416f0a5e1e0bb4990d5fb489e8cfe005
import { Social } from "../../types";
import Button from "./Button";

function getTwColorClassName(id: string) {
  switch (id) {
    case "github":
      return "bg-white";
    case "linkedin":
      return "bg-[#0a66c2]";
    case "wechat":
      return "bg-[#02e16e]";
    default:
      return "";
  }
}

export const SocialLink: React.FC<{ 
  social: Social, 
  handleClickOverride?: () => void 
}> = ({ 
  social, 
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

  return (
    <Button
      onClick={handleClick}
      className={`flex flex-row items-center gap-4 p-4 ${
        getTwColorClassName(social.id)
      }`}
    >
<<<<<<< HEAD
      <Image
        src={social.icon.src}
        alt={`${social.name} logo`}
        width={32}
        height={32}
=======
      <img
        className="size-5 sm:h-8"
        src={social.icon.src}
        alt={`${social.name} logo`}
>>>>>>> 68b24419416f0a5e1e0bb4990d5fb489e8cfe005
      />
      <p className="text-sm font-bold sm:text-base">
        {social.text}
      </p>
    </Button>
  );
}
