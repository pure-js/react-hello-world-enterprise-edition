'use client';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GrowthBookProvider } from '@growthbook/growthbook-react';

import { growthbook } from './growthbook';

type ProvidersProps = React.PropsWithChildren<{}>;

export default function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    growthbook.loadFeatures();
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </GrowthBookProvider>
  );
}
