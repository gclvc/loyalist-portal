export const niches = {
  cafe: {
    id: 'cafe',
    name: 'Cafes & Restaurants',
    heroTitle: 'Turn First-Time Sippers into Daily Regulars',
    heroSubtitle: 'Say goodbye to paper punch cards. Automate your rewards and eliminate dead hours with perfectly timed push notifications.',
    painPoint: 'Empty seats on Tuesday mornings? High customer acquisition cost?',
    solution: 'Loyalist automatically tags your best customers and sends "We miss you" offers to those who haven\'t visited in 30 days.',
    calculator: {
      name: 'Cafes & Coffee Shops',
      customerLabel: 'Customers',
      minCustomers: 500,
      maxCustomers: 5000,
      step: 100,
      defaultCustomers: 1500,
      avgTicket: 5,
      increaseRate: 0.15 // 15% increase in visits
    }
  },
  salon: {
    id: 'salon',
    name: 'Salons & Spas',
    heroTitle: 'Keep Your Chairs Full, Automatically',
    heroSubtitle: 'Fill your calendar effortlessly with VIP memberships and automated re-booking reminders that feel personal.',
    painPoint: 'Clients stretching out time between haircuts? No-shows hurting your bottom line?',
    solution: 'Sell upfront Multi-pass bundles to secure revenue, and use Geofenced Push Notifications to bring walk-ins when you have an open chair.',
    calculator: {
      name: 'Salons & Spas',
      customerLabel: 'Clients',
      minCustomers: 100,
      maxCustomers: 2000,
      step: 50,
      defaultCustomers: 500,
      avgTicket: 50,
      increaseRate: 0.10 // 10% increase
    }
  },
  gym: {
    id: 'gym',
    name: 'Gyms & Fitness',
    heroTitle: 'Crush Churn. Build a Cult Following.',
    heroSubtitle: 'Reward check-ins, build referral loops, and gamify the fitness journey to keep your members hooked.',
    painPoint: 'Members canceling after 3 months? Hard to differentiate from big-box gyms?',
    solution: 'Gamify attendance with Kiosk Mode check-ins and predictive churn prevention that flags members who stop attending.',
    calculator: {
      name: 'Fitness Centers',
      customerLabel: 'Members',
      minCustomers: 200,
      maxCustomers: 5000,
      step: 100,
      defaultCustomers: 1000,
      avgTicket: 30, // Monthly value
      increaseRate: 0.08 // 8% retention boost
    }
  },
  retail: {
    id: 'retail',
    name: 'Retail & Fashion',
    heroTitle: 'Compete with the Giants',
    heroSubtitle: 'Launch your own branded Wallet app in minutes. Issue cashback, VIP tiers, and custom digital cards to build extreme loyalty.',
    painPoint: 'One-time buyers never returning? Hard to collect customer data?',
    solution: 'With Apple/Google Wallet integration, your brand lives in their phone. Send instant push notifications for flash sales.',
    calculator: {
      name: 'Retail Stores',
      customerLabel: 'Shoppers',
      minCustomers: 1000,
      maxCustomers: 10000,
      step: 500,
      defaultCustomers: 3000,
      avgTicket: 40,
      increaseRate: 0.12 // 12% boost
    }
  }
}
