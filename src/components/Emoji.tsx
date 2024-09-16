import { FaThumbsUp } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";
import { FaFaceMehBlank } from "react-icons/fa6";
import { IconType } from "react-icons";
interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: IconType } = {
    3: FaFaceMehBlank,
    4: FaThumbsUp,
    5: GiBullseye,
  };

  const IconComponent = emojiMap[rating];

  if (!IconComponent) return null;

  return <IconComponent color="yellow" size={20} />;
};
