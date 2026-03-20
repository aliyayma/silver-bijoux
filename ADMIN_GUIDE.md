# 📦 Silver Bijoux Admin Panel Guide

## Overview
The Admin Panel is a complete order management system that allows you to receive, review, and confirm customer orders from Silver Bijoux.

## 🔐 Access Admin Panel

1. **From Homepage**: Click the **⚙️ Admin** button in the top-right corner of the navigation bar
2. **Direct URL**: Visit `admin.html` directly in your browser

## 🔑 Login Credentials
- **Default Password**: `admin123`
- You can change this by editing the `adminPassword` variable in the admin.html script section

## 📊 Dashboard Overview

### Stats Cards
- **Total Orders**: All orders received from customers
- **Pending**: Orders waiting for confirmation
- **Confirmed**: Orders confirmed by admin
- **Delivered**: Orders marked as delivered

### Orders List
A table showing all orders with:
- Order ID (unique identifier)
- Customer name and email
- Order date
- Total amount
- Current status
- Quick action button to view details

## 🔍 Filtering & Search

### Search
Search orders by:
- Order ID (e.g., `ORD-1705123456`)
- Customer name
- Email address
- Phone number

### Filter by Status
- All Statuses (default)
- Pending
- Confirmed
- Shipped
- Delivered

### Sort By
- **Newest First** (default): Recently placed orders first
- **Oldest First**: Earliest orders first
- **Highest Total**: Orders by amount (descending)
- **Lowest Total**: Orders by amount (ascending)

## 👁️ View Order Details

1. Click **"View Details"** button on any order
2. A modal popup opens showing:

### Order Information
- **Order ID**: Unique order reference number
- **Order Date**: Full timestamp of when order was placed
- **Status**: Current order status (color-coded badge)

### Customer Information
- Full name
- Email address
- Phone number
- City
- Complete shipping address

### Items Ordered
- Product images (thumbnails)
- Product names and specifications
- Quantity ordered
- Price per item and total for each item

### Order Totals
- **Subtotal**: Sum of all items
- **Tax**: 8% calculated tax
- **Total**: Final amount including tax

### Payment Information
- **Payment Method**: Shows it's a 30% deposit payment
- **Payment Gateway**: Instapay or Vodafone Cash
- **Deposit Amount**: 30% of total (amount customer must pay)
- **Remaining Balance**: 70% due at delivery
- **Payment Phone Number**: Where to send funds to

## 📝 Admin Notes

Add internal notes about each order:
- Click in the notes textarea
- Type any notes (e.g., "Customer requested gift wrapping", "Rush order", "Has VIP discount")
- Notes are saved when you click "Save Changes"

## ✅ Update Order Status

Click status buttons to change the order state:

| Status | Button Color | Meaning |
|--------|-------------|---------|
| **Pending** | Yellow | Awaiting admin confirmation |
| **Confirmed** | Blue | Admin has confirmed, payment verified |
| **Shipped** | Purple | Order sent to customer |
| **Delivered** | Green | Customer received the order |

### Status Workflow
```
Customer Places Order
        ↓
    PENDING (yellow)
        ↓
Admin Confirms
        ↓
   CONFIRMED (blue)
        ↓
Send Shipment
        ↓
    SHIPPED (purple)
        ↓
Customer Receives
        ↓
  DELIVERED (green)
```

## 💾 Save Changes

After making updates:
1. Modify the status, notes, or other information
2. Click **"Save Changes"** button
3. Confirmation message appears
4. Changes are saved to localStorage

## 🗑️ Delete Order

To remove an order:
1. Click **"Delete Order"** (red button at bottom of modal)
2. Confirm deletion when prompted
3. Order is permanently removed
4. **Note**: Use carefully - this cannot be undone!

## 📊 Order Data Structure

Each order contains:
```javascript
{
  id: "ORD-1705123456",              // Unique order ID
  customerName: "John Doe",           // Full name
  email: "john@example.com",          // Email address
  phone: "+1 (555) 123-4567",         // Phone number
  address: "123 Main St",             // Shipping address
  city: "New York",                   // City
  state: "NY",                        // State
  items: [                            // Array of products
    {
      id: 1,
      name: "Crescent Silver Ring",
      price: 85,
      quantity: 1,
      image: "https://..."
    }
  ],
  subtotal: 85,                       // Before tax
  tax: 6.80,                          // 8% tax
  total: 91.80,                       // Final amount
  depositAmount: 27.54,               // 30% of total
  remainingBalance: 64.26,            // 70% due later
  status: "pending",                  // Current status
  paymentGateway: "instapay",         // Payment method
  createdAt: "2024-01-15T10:30:00Z",  // Order timestamp
  notes: ""                           // Admin notes
}
```

## 💾 Data Storage

- All orders are saved to browser's **localStorage** under the key `"orders"`
- This persists across browser sessions
- Data is NOT synchronized with any backend (client-side only)

### Backup Orders
To backup your orders:
1. Open browser Developer Tools (F12)
2. Go to Console tab
3. Type: `copy(JSON.stringify(JSON.parse(localStorage.getItem('orders')), null, 2))`
4. Paste into a text file to save

## 🔒 Security Notes

- **Password Protection**: Default password is `admin123` - CHANGE THIS in production!
- **localStorage**: Anyone with browser access can see orders - consider backend security
- **No Email Alerts**: Orders don't auto-send confirmations - manually notify customers if needed

## 📴 Logout

Click **"Logout"** button in top-right:
- Admin session ends
- Login page reappears
- Session stored in localStorage is cleared

## 🐛 Troubleshooting

### Orders Not Showing?
- Check browser's localStorage isn't disabled
- Verify customers completed checkout successfully
- Check browser console for errors (F12 → Console)

### Can't Login?
- Verify correct password (default: `admin123`)
- Check caps lock isn't on
- Clear browser cache and try again

### Lost Admin Access?
- Open browser console (F12)
- Type: `localStorage.removeItem('adminLoggedIn')`
- Refresh page

### Export All Orders
```javascript
// Copy to console to export all orders as JSON
JSON.stringify(JSON.parse(localStorage.getItem('orders')), null, 2)
```

## 📱 Mobile Support
- Admin panel is responsive and works on tablets/mobile
- Touch-friendly interface on all devices
- All features available on small screens

## 🔄 Integration with Checkout

When customers complete purchase on checkout.html:
1. Full order data is captured
2. Order is automatically saved to localStorage
3. Admin can immediately see it in the panel
4. Order persists even if page is closed

---

**Last Updated**: January 2024
**Version**: 1.0
