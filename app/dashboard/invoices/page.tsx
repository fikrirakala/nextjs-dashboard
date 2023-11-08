import React from "react";

export default async function InvoicesPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Invoices page</div>;
}
