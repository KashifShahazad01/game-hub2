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

interface Props {
  onSelectPlatform: (platformId: number) => void;
  selectedPlatformId?: number;
}

export const PlatformSelector = ({
  onSelectPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error, isLoading } = usePlatffrom();
  const selectedPlatformName = data?.results.find(
    (p) => p.id === selectedPlatformId
  );
  if (error) return null;

  return (
    <Menu>
      {isLoading ? (
        <Spinner />
      ) : (
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          {selectedPlatformName?.name || "Platform"}
        </MenuButton>
      )}

      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
