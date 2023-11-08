import React from "react";

export default async function CustomersPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Customers page</div>;
}
