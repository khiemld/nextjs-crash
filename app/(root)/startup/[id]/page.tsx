import React from "react";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  return (
    <div>
      <h1 className="text-3xl">This is startup page with id: {id}</h1>
    </div>
  );
};

export default Page;
