export default function Home() {
  return (
    <>
      <button
        onClick={() => {
          analytics.identify("ikram4298", {
            name: "Ikram",
            email: "Ikram@example.com",
          });
        }}
      >
        log in as Ikram
      </button>
      <button
        onClick={() => {
          analytics.identify("kaoutar8426", {
            name: "kaoutar",
            email: "kaoutar@example.com",
          });
          console.log("button 3 clicked");
        }}
      >
        log in as kaoutar
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          analytics.track("button 1 clicked");
          console.log("button 1 clicked");
        }}
      >
        click me 1
      </button>

      <button
        onClick={() => {
          analytics.track("button 2 clicked");
          console.log("button 2 clicked");
        }}
      >
        click me 2
      </button>
    </>
  );
}
