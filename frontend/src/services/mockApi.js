// Realistic sample dataset for offline / Vercel demonstration
const baseCategories = ["Electronics", "Furniture", "Clothing", "Toys", "Books"];
const customersList = [
  "Rahul Sharma", "Amit Patel", "Sneha Gupta", "Vikram Singh", "Pooja Verma",
  "Arjun Reddy", "Neha Joshi", "Karan Mehta", "Priya Nair", "Rohan Das",
  "Anita Kumari", "Suresh Yadav", "Meena Iyer", "Deepak Jain", "Kavita Rao",
  "Ananya Roy", "Rajesh Khanna", "Pooja Hegde", "Sunil Gavaskar", "Simran Kaur"
];

// Seeded baseline records (Jan 2024)
const seedOrders = [
  { orderId: "ORD-1001", customer: "Rahul Sharma", date: "2024-01-01", items: 3, amount: 2200, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1002", customer: "Amit Patel", date: "2024-01-01", items: 1, amount: 1500, category: "Furniture", deliveryStatus: "Delayed", deliveryDays: 8 },
  { orderId: "ORD-1003", customer: "Sneha Gupta", date: "2024-01-02", items: 5, amount: 3100, category: "Clothing", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1004", customer: "Vikram Singh", date: "2024-01-02", items: 2, amount: 900, category: "Books", deliveryStatus: "Delivered", deliveryDays: 4 },
  { orderId: "ORD-1005", customer: "Pooja Verma", date: "2024-01-03", items: 4, amount: 4200, category: "Electronics", deliveryStatus: "Delayed", deliveryDays: 9 },
  { orderId: "ORD-1006", customer: "Arjun Reddy", date: "2024-01-03", items: 2, amount: 1800, category: "Toys", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1007", customer: "Neha Joshi", date: "2024-01-04", items: 1, amount: 650, category: "Books", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1008", customer: "Karan Mehta", date: "2024-01-04", items: 3, amount: 5400, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 5 },
  { orderId: "ORD-1009", customer: "Priya Nair", date: "2024-01-05", items: 2, amount: 2100, category: "Furniture", deliveryStatus: "Delayed", deliveryDays: 10 },
  { orderId: "ORD-1010", customer: "Rohan Das", date: "2024-01-05", items: 6, amount: 3600, category: "Clothing", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1011", customer: "Anita Kumari", date: "2024-01-06", items: 1, amount: 1200, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 4 },
  { orderId: "ORD-1012", customer: "Suresh Yadav", date: "2024-01-06", items: 4, amount: 2800, category: "Toys", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1013", customer: "Meena Iyer", date: "2024-01-07", items: 2, amount: 1750, category: "Clothing", deliveryStatus: "Delayed", deliveryDays: 7 },
  { orderId: "ORD-1014", customer: "Deepak Jain", date: "2024-01-07", items: 3, amount: 4100, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1015", customer: "Kavita Rao", date: "2024-01-08", items: 1, amount: 950, category: "Books", deliveryStatus: "Delivered", deliveryDays: 5 },
  { orderId: "ORD-1016", customer: "Ananya Roy", date: "2024-01-08", items: 4, amount: 3300, category: "Furniture", deliveryStatus: "Delivered", deliveryDays: 4 },
  { orderId: "ORD-1017", customer: "Rajesh Khanna", date: "2024-01-09", items: 2, amount: 2150, category: "Clothing", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1018", customer: "Pooja Hegde", date: "2024-01-09", items: 3, amount: 4800, category: "Electronics", deliveryStatus: "Delayed", deliveryDays: 9 },
  { orderId: "ORD-1019", customer: "Sunil Gavaskar", date: "2024-01-10", items: 1, amount: 1250, category: "Toys", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1020", customer: "Simran Kaur", date: "2024-01-10", items: 5, amount: 3900, category: "Furniture", deliveryStatus: "Delivered", deliveryDays: 4 },
  { orderId: "ORD-1021", customer: "Rahul Sharma", date: "2024-01-11", items: 2, amount: 1850, category: "Books", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1022", customer: "Amit Patel", date: "2024-01-11", items: 4, amount: 5600, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1023", customer: "Sneha Gupta", date: "2024-01-12", items: 3, amount: 2750, category: "Clothing", deliveryStatus: "Delayed", deliveryDays: 8 },
  { orderId: "ORD-1024", customer: "Vikram Singh", date: "2024-01-12", items: 2, amount: 1400, category: "Toys", deliveryStatus: "Delivered", deliveryDays: 4 },
  { orderId: "ORD-1025", customer: "Pooja Verma", date: "2024-01-13", items: 6, amount: 6200, category: "Electronics", deliveryStatus: "Delivered", deliveryDays: 3 },
  { orderId: "ORD-1026", customer: "Arjun Reddy", date: "2024-01-13", items: 1, amount: 850, category: "Books", deliveryStatus: "Delivered", deliveryDays: 2 },
  { orderId: "ORD-1027", customer: "Neha Joshi", date: "2024-01-14", items: 3, amount: 3100, category: "Furniture", deliveryStatus: "Delivered", deliveryDays: 5 },
  { orderId: "ORD-1028", customer: "Karan Mehta", date: "2024-01-14", items: 5, amount: 4700, category: "Clothing", deliveryStatus: "Delayed", deliveryDays: 7 },
];

export const mockProducts = [
  { id: "P101", name: "Laptop", category: "Electronics", price: 45000, stock: 120 },
  { id: "P102", name: "Smartphone", category: "Electronics", price: 25000, stock: 340 },
  { id: "P103", name: "Tablet", category: "Electronics", price: 18000, stock: 85 },
  { id: "P104", name: "Monitor", category: "Electronics", price: 12000, stock: 60 },
  { id: "P201", name: "Office Chair", category: "Furniture", price: 8500, stock: 45 },
  { id: "P202", name: "Standing Desk", category: "Furniture", price: 15000, stock: 30 },
  { id: "P203", name: "Bookshelf", category: "Furniture", price: 6500, stock: 55 },
  { id: "P301", name: "T-Shirt", category: "Clothing", price: 800, stock: 500 },
  { id: "P302", name: "Jeans", category: "Clothing", price: 1500, stock: 280 },
  { id: "P303", name: "Jacket", category: "Clothing", price: 3500, stock: 90 },
  { id: "P401", name: "Building Blocks", category: "Toys", price: 1200, stock: 200 },
  { id: "P402", name: "RC Car", category: "Toys", price: 2500, stock: 75 },
  { id: "P501", name: "Novel Set", category: "Books", price: 600, stock: 400 },
  { id: "P502", name: "Programming Guide", category: "Books", price: 950, stock: 150 },
];

/**
 * Dynamically synthesizes orders for an arbitrary date window so that selecting
 * ANY date range (even today, 2025, or 2026) produces coherent, realistic charts.
 */
function synthesizeOrdersForDateRange(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) return [];

  const orders = [];
  let curr = new Date(start);
  let idCounter = 2000;

  // Max 60 days to prevent excessive loops
  let daysCount = 0;
  while (curr <= end && daysCount < 60) {
    const dateStr = curr.toISOString().slice(0, 10);
    // Deterministic pseudo-random orders per day based on date string
    const seed = (curr.getDate() * 7 + curr.getMonth() * 13 + curr.getFullYear()) % 10;
    const ordersToday = 2 + (seed % 4); // 2 to 5 orders/day

    for (let i = 0; i < ordersToday; i++) {
      const cat = baseCategories[(seed + i) % baseCategories.length];
      const isDelayed = (seed + i) % 5 === 0;
      const amount = 800 + ((seed * 340 + i * 510) % 5000);
      orders.push({
        orderId: `ORD-${idCounter++}`,
        customer: customersList[(seed * 2 + i) % customersList.length],
        date: dateStr,
        items: 1 + ((seed + i) % 4),
        amount,
        category: cat,
        deliveryStatus: isDelayed ? "Delayed" : "Delivered",
        deliveryDays: isDelayed ? 7 + ((seed + i) % 4) : 2 + ((seed + i) % 3)
      });
    }

    curr.setDate(curr.getDate() + 1);
    daysCount++;
  }

  return orders;
}

/**
 * Filter orders based on user inputs. If the user picks dates outside seed data,
 * dynamically generate realistic orders for that date window.
 */
function getFilteredDataset(filters = {}) {
  let dataset = [...seedOrders];

  if (filters.startDate && filters.endDate) {
    const seedMatches = seedOrders.filter(o => o.date >= filters.startDate && o.date <= filters.endDate);
    if (seedMatches.length > 0) {
      dataset = seedMatches;
    } else {
      // Dynamic generation for arbitrary user date selection
      dataset = synthesizeOrdersForDateRange(filters.startDate, filters.endDate);
    }
  } else if (filters.startDate) {
    dataset = dataset.filter(o => o.date >= filters.startDate);
  } else if (filters.endDate) {
    dataset = dataset.filter(o => o.date <= filters.endDate);
  }

  if (filters.category) {
    dataset = dataset.filter(o => o.category.toLowerCase() === filters.category.toLowerCase());
  }

  if (filters.deliveryStatus) {
    dataset = dataset.filter(o => o.deliveryStatus.toLowerCase() === filters.deliveryStatus.toLowerCase());
  }

  return dataset;
}

const delay = (ms = 250) => new Promise(resolve => setTimeout(resolve, ms));

// Dynamically calculated Summary KPI Card data
export const getMockSummary = async (filters = {}) => {
  await delay(150);
  const orders = getFilteredDataset(filters);

  // If no filters at all, provide headline benchmark metrics
  const isUnfiltered = !filters.startDate && !filters.endDate && !filters.category && !filters.deliveryStatus;
  if (isUnfiltered) {
    return {
      totalOrders: 1250,
      totalRevenue: 458000,
      delayedOrders: 87,
      deliveredOrders: 1163,
      averageOrderValue: 366.4,
      averageDeliveryDays: 4.2
    };
  }

  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, o) => sum + (o.amount || 0), 0);
  const delayedOrders = orders.filter(o => o.deliveryStatus === 'Delayed').length;
  const deliveredOrders = orders.filter(o => o.deliveryStatus === 'Delivered').length;
  const averageOrderValue = totalOrders > 0 ? Number((totalRevenue / totalOrders).toFixed(1)) : 0;
  const totalDays = orders.reduce((sum, o) => sum + (o.deliveryDays || 3), 0);
  const averageDeliveryDays = totalOrders > 0 ? Number((totalDays / totalOrders).toFixed(1)) : 0;

  return {
    totalOrders,
    totalRevenue,
    delayedOrders,
    deliveredOrders,
    averageOrderValue,
    averageDeliveryDays
  };
};

// Dynamically aggregated Revenue trend chart
export const getMockRevenue = async (filters = {}) => {
  await delay(150);
  const orders = getFilteredDataset(filters);

  // If unfiltered, return the standard 14-day trend
  const isUnfiltered = !filters.startDate && !filters.endDate && !filters.category && !filters.deliveryStatus;
  if (isUnfiltered) {
    return [
      { date: "2024-01-01", revenue: 12500, orders: 42 },
      { date: "2024-01-02", revenue: 14800, orders: 51 },
      { date: "2024-01-03", revenue: 16000, orders: 60 },
      { date: "2024-01-04", revenue: 13500, orders: 45 },
      { date: "2024-01-05", revenue: 18200, orders: 65 },
      { date: "2024-01-06", revenue: 21000, orders: 78 },
      { date: "2024-01-07", revenue: 19500, orders: 70 },
      { date: "2024-01-08", revenue: 17300, orders: 58 },
      { date: "2024-01-09", revenue: 15600, orders: 52 },
      { date: "2024-01-10", revenue: 22100, orders: 80 },
      { date: "2024-01-11", revenue: 20400, orders: 72 },
      { date: "2024-01-12", revenue: 18900, orders: 63 },
      { date: "2024-01-13", revenue: 16700, orders: 55 },
      { date: "2024-01-14", revenue: 23500, orders: 85 },
    ];
  }

  // Aggregate by date
  const map = new Map();
  orders.forEach(o => {
    if (!map.has(o.date)) {
      map.set(o.date, { date: o.date, revenue: 0, orders: 0 });
    }
    const item = map.get(o.date);
    item.revenue += o.amount;
    item.orders += 1;
  });

  return Array.from(map.values()).sort((a, b) => a.date.localeCompare(b.date));
};

// Dynamically aggregated Category chart
export const getMockCategories = async (filters = {}) => {
  await delay(150);
  const orders = getFilteredDataset(filters);

  const isUnfiltered = !filters.startDate && !filters.endDate && !filters.category && !filters.deliveryStatus;
  if (isUnfiltered) {
    return [
      { category: "Electronics", revenue: 185000, orders: 420 },
      { category: "Furniture", revenue: 92000, orders: 210 },
      { category: "Clothing", revenue: 74000, orders: 310 },
      { category: "Toys", revenue: 45000, orders: 150 },
      { category: "Books", revenue: 62000, orders: 160 },
    ];
  }

  const map = new Map();
  baseCategories.forEach(cat => map.set(cat, { category: cat, revenue: 0, orders: 0 }));

  orders.forEach(o => {
    if (map.has(o.category)) {
      const item = map.get(o.category);
      item.revenue += o.amount;
      item.orders += 1;
    }
  });

  let result = Array.from(map.values());
  if (filters.category) {
    result = result.filter(c => c.category.toLowerCase() === filters.category.toLowerCase());
  }
  return result;
};

// Dynamically aggregated Delivery performance donut
export const getMockDelivery = async (filters = {}) => {
  await delay(150);
  const orders = getFilteredDataset(filters);

  const isUnfiltered = !filters.startDate && !filters.endDate && !filters.category && !filters.deliveryStatus;
  if (isUnfiltered) {
    return {
      delivered: 1163,
      delayed: 87,
      unknown: 0
    };
  }

  const delivered = orders.filter(o => o.deliveryStatus === 'Delivered').length;
  const delayed = orders.filter(o => o.deliveryStatus === 'Delayed').length;

  return { delivered, delayed, unknown: 0 };
};

// Dynamically filtered Orders table
export const getMockOrders = async (filters = {}) => {
  await delay(150);
  return getFilteredDataset(filters);
};

export const getMockProducts = async (filters = {}) => {
  await delay(150);
  let data = [...mockProducts];
  if (filters?.category) {
    data = data.filter(p => p.category.toLowerCase() === filters.category.toLowerCase());
  }
  return data;
};
