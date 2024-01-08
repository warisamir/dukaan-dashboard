import React from "react";

type Props = {};

const Table = (props: Props) => {
  const orders = [
    {
      orderId: "#123456",
      orderDate: "7 Jul 2023",
      orderAmount: "₹500",
      transactionFees: "₹20",
    },
    {
      orderId: "#234567",
      orderDate: "7 Jul 2023",
      orderAmount: "₹750",
      transactionFees: "₹30",
    },
    {
      orderId: "#345678",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1000",
      transactionFees: "₹40",
    },
    {
      orderId: "#456789",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1200",
      transactionFees: "₹50",
    },
    {
      orderId: "#567890",
      orderDate: "7 Jul 2023",
      orderAmount: "₹900",
      transactionFees: "₹35",
    },
    {
      orderId: "#678901",
      orderDate: "7 Jul 2023",
      orderAmount: "₹600",
      transactionFees: "₹25",
    },
    {
      orderId: "#789012",
      orderDate: "7 Jul 2023",
      orderAmount: "₹1100",
      transactionFees: "₹45",
    },
  ];
  return (
    <>
      <div className="">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs  uppercase bg-gray-300  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                Order Date
              </th>
              <th scope="col" className="px-6 py-3">
                Order Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Transaction Fees
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-blue-600 underline cursor-pointer whitespace-nowrap"
                >
                  {order.orderId}
                </th>
                <td className="px-6 py-4">{order.orderDate}</td>
                <td className="px-6 py-4">{order.orderAmount}</td>
                <td className="px-6 py-4">{order.transactionFees}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
