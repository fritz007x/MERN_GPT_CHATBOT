import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  //   coldarkCold,
  coldarkDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Avatar, Box, Typography } from "@mui/material";
function extractCodeFromString(message: string) {
  if (message.includes("```")) {
    const blocks = message.split("```");
    return blocks;
  }
}

function isCodeBlock(str: string) {
  if (
    str.includes("=") ||
    str.includes(";") ||
    str.includes("[") ||
    str.includes("]") ||
    str.includes("{") ||
    str.includes("}") ||
    str.includes("#") ||
    str.includes("//")
  ) {
    return true;
  }
  return false;
}
const ChatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  const messageBlocks = extractCodeFromString(content);
  const auth = useAuth();
  return role === "assistant" ? (
    <Box
      sx={{
        display: "flex",
        p: 2,
        bgcolor: "#004d5612",
        gap: 2,
        borderRadius: 2,
        my: 1,
      }}
    >
      <Avatar sx={{ ml: "0", bgcolor: "black", color: "white" }}>
        <img src="openai.png" alt="openai" width={"30px"} />
        {auth?.user?.name[0]}
        {/* {auth?.user?.name.split(" ")[1][0]} */}
      </Avatar>
      <Box>
        {!messageBlocks && (
          <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
        )}
        {messageBlocks &&
          messageBlocks.length &&
          messageBlocks.map((block) =>
            isCodeBlock(block) ? (
              <SyntaxHighlighter style={coldarkDark} language="javascript">
                {block}
              </SyntaxHighlighter>
            ) : (
              <Typography sx={{ fontSize: "20px" }}>{block}</Typography>
            )
          )}
      </Box>
    </Box>
  ) : (
    <Typography sx={{ fontSize: "20px" }}>{content}</Typography>
  );
};

export default ChatItem;
