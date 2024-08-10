import { Box } from "@chakra-ui/react";
import Codeeditor from "./components/codeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Codeeditor />
      <h1 className="align-middle text-center to-slate-300">Made by PREM SAI TEJA</h1>
    </Box>
  );
}

export default App;
