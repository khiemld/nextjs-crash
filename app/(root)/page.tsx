export default function Home() {
  console.log("Hello World! Run from the server side");
  return (
    <div className="w-full">
      <section className="pink_container">
        <h1 className="heading ">
          Pitch Your Startup, <br /> Connect With Entrepreneurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches and Get Noticed in Virtual Competitions.
        </p>
      </section>
    </div>
  );
}
