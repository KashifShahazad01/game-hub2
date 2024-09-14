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

export const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatffrom();

  if (error) return null;

  return (
    <Menu>
      {isLoading ? (
        <Spinner />
      ) : (
        <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
          Platform
        </MenuButton>
      )}

      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
