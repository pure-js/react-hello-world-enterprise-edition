import { GrowthBook } from '@growthbook/growthbook-react';

export const growthbook = new GrowthBook({
  apiHost: 'https://cdn.growthbook.io',
  clientKey: 'sdk-NTekJ6Q3mZPZungM',
  enableDevMode: true,
  subscribeToChanges: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log('Viewed Experiment', {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
