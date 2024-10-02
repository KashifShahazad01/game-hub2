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
import useGameQueryStore from "../store";

export const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatffrom();
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

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
