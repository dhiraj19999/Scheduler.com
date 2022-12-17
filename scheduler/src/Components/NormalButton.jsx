import { Button } from "@chakra-ui/react";

function NormalButton({ text }) {
  return (
    <Button w="45%" h="26px" colorScheme="purple" size="lg" borderRadius="30px" bgColor="#6c6cff" color="white" fontSize="12px" border="none">
      {text}
    </Button>
  );
}

export default NormalButton;
