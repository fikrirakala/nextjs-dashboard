import React from "react";

export default async function OverviewPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>Overview page</div>;
}
