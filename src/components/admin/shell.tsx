'use client';

import { createContext, useContext } from 'react';

export const AdminShellContext = createContext<{ openMenu: () => void }>({
  openMenu: () => undefined
});

export const useAdminShell = () => useContext(AdminShellContext);
