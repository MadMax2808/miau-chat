"use client";

import ItemList from "@/components/shared/item-list/ItemList";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import DMConversationItem from "./_components/DMConversationItem";
import { Loader2 } from "lucide-react";

type Props = React.PropsWithChildren<object>;

const ConversationLayout = ({ children }: Props) => {
  const conversations = useQuery(api.conversations.get);

  return (
    <>
      <ItemList title="Conversations">
        {conversations ? (
          conversations.length === 0 ? (
            <p className="w-full h-full flex items-center justify-center">
              No conversations found
            </p>
          ) : (
            conversations.map((conversation) => {
              return conversation.conversation.isGroup ? null : (
                <DMConversationItem
                  key={conversation.conversation._id}
                  id={conversation.conversation._id}
                  username={conversation.otherMember?.username || ""}
                  imageUrl={conversation.otherMember?.imageUrl || ""}
                  lastMessageSender={conversation.lastMessage?.sender}
                  lastMessageContent={conversation.lastMessage?.content}
                  
                />
              );
            })
          )
        ) : (
          <Loader2 className="h-8 w-8" />
        )}
      </ItemList>
      {children}
    </>
  );
};

export default ConversationLayout;
