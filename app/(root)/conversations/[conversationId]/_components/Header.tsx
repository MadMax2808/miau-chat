import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { CircleArrowLeft,  Settings,  } from "lucide-react";
import Link from "next/link";
import React/*{,  Dispatch, SetStateAction }*/ from "react";

type Props = {
  imageUrl?: string;
  name: string;
  options?: {
    label: string;
    destructive: boolean;
    onClick: () => void;
  }[];
};

const Header = ({ imageUrl, name, options }: Props) => {
  return (
    <Card className="w-full p-4 rounded-lg">
      <div className="flex items-center justify-between">
        {/* IZQUIERDA: Avatar + Nombre */}
        <div className="flex items-center gap-2">
          <Link className="block lg:hidden" href="/conversations">
            <CircleArrowLeft />
          </Link>
          <Avatar className="w-8 h-8">
            <AvatarImage src={imageUrl} />
            <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <h2 className="font-semibold">{name}</h2>
        </div>

        {/* DERECHA: Dropdown de opciones */}
        {options && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <Settings />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {options.map((option, id) => (
                <DropdownMenuItem
                  key={id}
                  onClick={option.onClick}
                  className={cn("font-semibold", {
                    "text-destructive": option.destructive,
                  })}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </Card>
  );
};

export default Header;
