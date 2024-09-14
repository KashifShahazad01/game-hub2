import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatffrom from "../hooks/usePlatform";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatform,
}: Props) => {
  const { data, error, isLoading } = usePlatffrom();

  if (error) return null;

  return (
    <Menu>
      {isLoading ? (
        <Spinner />
      ) : (
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          {selectedPlatform?.name || "Platform"}
        </MenuButton>
      )}

      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
