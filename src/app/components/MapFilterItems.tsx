"use client";
import Image from "next/image";
import Link from "next/link";
import React, { use, useCallback } from "react";
import { categoryItems } from "../lib/CategoryItems";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

const MapFilterItems = () => {
  //update the search based on the search params
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("filter");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex justify-between gap-x-10 mt-5 w-full overflow-x-scroll no-scrollbar">
      {categoryItems.map((item) => (
        <Link
          key={item.id}
          href={pathname + "?" + createQueryString("filter", item.name)}
          className={cn(
            search === item.name
              ? "border-b-2 border-black pb-2 flex-shrink-0"
              : "opacity-70 flex-shrink-0",
            "flex flex-col gap-y-3 items-center"
          )}>
          <div className="relative w-6 h-6">
            <Image
              src={item.imageUrl}
              alt="Category image"
              className="w-6 h-6"
              width={24}
              height={24}
            />
          </div>
          <p className="text-xs font-medium">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default MapFilterItems;
