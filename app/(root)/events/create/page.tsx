import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import React from "react";

function CreateEvent() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  console.log(userId);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h1 className="wrapper h3-bold text-center sm:text-left ">
          Create Event
        </h1>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
}

export default CreateEvent;
