"use client";

import { Skeleton } from "@mantine/core";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "@libs/requests";
import { UserAccount } from "./UserAccount";
import { IUser } from "@/libs/types/user";

export const Auth = () => {
  const { data, isLoading } = useQuery<IUser>({
    queryKey: ["me"],
    queryFn: () => {
      // const res = await request.get("auth/me");
      
      const res = {
        data: {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'ADMIN',
        },
      }

      return res.data as unknown as IUser;
    },
  });

  if (isLoading) {
    return <Skeleton height={24} circle />;
  }

  const isLogin = !!data?.email;

  return !isLogin ? <>None</> : <UserAccount user={data} />;
};
