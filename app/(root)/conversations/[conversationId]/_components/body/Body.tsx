"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Message from "./Message";
import { useMutationState } from "@/hooks/useMutationState";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useConversation } from "@/hooks/useConversation";
//import { CallRoom } from "./CallRoom";


type Props = {};

const Body = (props: Props) => {
  const { conversationId } = useConversation();

  const messages = useQuery(api.messages.get, {
    id: conversationId as Id<"conversations">,
  });

  return (
    <div className="flex-1 w-full flex overflow-y-scroll flex-col-reverse gap-2 p-3 no-scrollbar">
    {messages?.map(
          ({ message, senderImage, senderName, isCurrentUser }, index) => {
            const lastByUser =
              messages[index - 1]?.message.senderId ===
              messages[index].message.senderId;

            //const seenMessage = getSeenMessage(message._id, message.senderId);

            return (
              <Message
                key={message._id}
                fromCurrentUser={isCurrentUser}
                senderImage={senderImage}
                senderName={senderName}
                lastByUser={lastByUser}
                content={message.content}
                createdAt={message._creationTime}
                //seen={seenMessage}
                type={message.type}
              />
            );
          }
        )}
    </div>
  );
};

export default Body;
