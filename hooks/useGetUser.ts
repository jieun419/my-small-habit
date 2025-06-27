import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

import { createClient } from "@/lib/supabase/client";

export const useGetUser = () => {
  const [user, setUser] = useState<User | null>();

  const getUser = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return { user };
};
