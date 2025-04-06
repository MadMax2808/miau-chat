"use client";

import ConversationContainer from "@/components/shared/conversation/ConversationContainer";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import ChatInput from "./_components/input/ChatInput";
import React, { use, useState } from "react";
import RemoveFriendDialog from "./_components/dialogs/RemoveFriendDialog";
import Header from "./_components/Header";
import Body from "./_components/body/Body";
import { Loader2 } from "lucide-react";

type Props = {
  params: Promise<{
    conversationId: Id<"conversations">;
  }>;
};

const ConversationPage = ({ params }: Props) => {
  const { conversationId } = use(params); 
  const conversation = useQuery(api.conversation.get, { id: conversationId });
  const [removeFriendDialogOpen, setRemoveFriendDialogOpen] = useState(false);

  return conversation === undefined ? (
    <div className="w-full h-full flex items-center justify-center">
      <Loader2 className="h-8 w-8" />
    </div>
  ) : conversation === null ? (
    <p className="w-full h-full flex items-center justify-center">
      Conversation not found
    </p>
  ) : (
    <ConversationContainer>
      <RemoveFriendDialog
        conversationId={conversationId}
        open={removeFriendDialogOpen}
        setOpen={setRemoveFriendDialogOpen}
      />
      <Header
        name={
          (conversation.isGroup
            ? conversation.name
            : conversation.otherMember?.username) || ""
        }
        imageUrl={
          conversation.isGroup ? undefined : conversation.otherMember?.imageUrl
        }
        options={
          conversation.isGroup
            ? [
                {
                  label: "Leave group",
                  destructive: false,
                  onClick: () => alert("open dialog"), // o aún mejor: implementar el diálogo después
                },
                {
                  label: "Delete group",
                  destructive: true,
                  onClick: () => alert("open dialog"), // o aún mejor: implementar el diálogo después
                },
              ]
            : [
                {
                  label: "Remove friend",
                  destructive: true,
                  onClick: () => setRemoveFriendDialogOpen(true),
                },
              ]
        }
      />
      <Body />
      <ChatInput />
    </ConversationContainer>
  );
};

export default ConversationPage;
