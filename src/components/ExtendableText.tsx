import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}
export const ExtendableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summery = expanded ? children : children.substring(0, limit) + "...";
  return (
    <div>
      {summery}
      <Button
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </div>
  );
};
