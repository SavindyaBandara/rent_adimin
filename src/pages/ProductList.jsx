import React, { Component } from "react";
import "../styles/product-list.css";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {
          orderFee: "",
          destination: " ",
          distance: " ",
          pickupDate: " ",
          pickupTime: " ",
          orderStatus: " ",
          paymentStatus: " ",
          rentalDates: " ",
          description: " ",
          noOfPassengers: " ",
          noOfLuggages: " ",
          vehicles: {
            vehicleId: " ",
          },
          customer: {
            userId: " ",
          },
        },
        // You can add more orders as needed
      ],
    };
  }

  render() {
    const { orders } = this.state;

    return (
      <div className="product-list">
        <h1 className="product-list-title">Order List</h1>
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Fee</th>
              <th>Destination</th>
              <th>Distance</th>
              <th>Pickup Date</th>
              <th>Pickup Time</th>
              <th>Order Status</th>
              <th>Payment Status</th>
              <th>Rental Dates</th>
              <th>Description</th>
              <th>No. of Passengers</th>
              <th>No. of Luggages</th>
              <th>Vehicle ID</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>${order.orderFee}</td>
                <td>{order.destination}</td>
                <td>{order.distance} miles</td>
                <td>{order.pickupDate}</td>
                <td>{order.pickupTime}</td>
                <td>{order.orderStatus}</td>
                <td>{order.paymentStatus}</td>
                <td>{order.rentalDates}</td>
                <td>{order.description}</td>
                <td>{order.noOfPassengers}</td>
                <td>{order.noOfLuggages}</td>
                <td>{order.vehicles.vehicleId}</td>
                <td>{order.customer.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductList;


// import React, { Component } from "react";
// import axios from "axios";
// import "../styles/product-list.css"; // Ensure correct path to your CSS file

// class ProductList extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: [],
//       loading: true,
//       error: null,
//     };
//   }

//   componentDidMount() {
//     this.fetchOrders();
//   }

//   fetchOrders = () => {
//     axios
//       .get("https://api.example.com/orders") // Replace with your API endpoint
//       .then((response) => {
//         this.setState({
//           orders: response.data,
//           loading: false,
//           error: null,
//         });
//       })
//       .catch((error) => {
//         this.setState({
//           loading: false,
//           error: "Error fetching data",
//         });
//         console.error("Error fetching data:", error);
//       });
//   };

//   render() {
//     const { orders, loading, error } = this.state;

//     if (loading) {
//       return <div>Loading...</div>;
//     }

//     if (error) {
//       return <div>Error: {error}</div>;
//     }

//     return (
//       <div className="product-list">
//         <h1 className="product-list-title">Order List</h1>
//         <table className="orders-table">
//           <thead>
//             <tr>
//               <th>Order ID</th>
//               <th>Order Fee</th>
//               <th>Destination</th>
//               <th>Distance</th>
//               <th>Pickup Date</th>
//               <th>Pickup Time</th>
//               <th>Order Status</th>
//               <th>Payment Status</th>
//               <th>Rental Dates</th>
//               <th>Description</th>
//               <th>No. of Passengers</th>
//               <th>No. of Luggages</th>
//               <th>Vehicle ID</th>
//               <th>User ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orders.map((order) => (
//               <tr key={order.orderId}>
//                 <td>{order.orderId}</td>
//                 <td>${order.orderFee}</td>
//                 <td>{order.destination}</td>
//                 <td>{order.distance} miles</td>
//                 <td>{order.pickupDate}</td>
//                 <td>{order.pickupTime}</td>
//                 <td>{order.orderStatus}</td>
//                 <td>{order.paymentStatus}</td>
//                 <td>{order.rentalDates}</td>
//                 <td>{order.description}</td>
//                 <td>{order.noOfPassengers}</td>
//                 <td>{order.noOfLuggages}</td>
//                 <td>{order.vehicles.vehicleId}</td>
//                 <td>{order.customer.userId}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// export default ProductList;



// Explanation:
// ComponentDidMount: The fetchOrders method is called in componentDidMount to fetch data when the component mounts.
// fetchOrders Function: Uses Axios to make a GET request to https://api.example.com/orders. Replace this URL with your actual API endpoint.
// State: Includes orders to store fetched data, loading to manage loading state, and error to handle errors during API fetch.
// Conditional Rendering: Displays "Loading..." while fetching data, and shows an error message if an error occurs.
// Table Rendering: Maps over orders in state to dynamically render rows (<tr>) and cells (<td>) for each order attribute.
// Notes:
// Error Handling: Axios handles HTTP errors automatically, but additional error handling (catch block) is implemented for robustness.
// Loading State: Ensures a loading indicator (Loading...) is shown while fetching data.
// API Endpoint: Replace "https://api.example.com/orders" with your actual API endpoint URL.
// Styling: Ensure your CSS (product-list.css) styles the table (orders-table) and other elements as needed.
