export default function Home() {
  return (
    <>
      <div>
        <button
          className="bg-indigo-300 text-white uppercase font-extralight text-sm m-11 p-3 rounded"
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
          className="bg-indigo-300 text-white uppercase font-extralight text-sm m-11 p-3 rounded"
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

        <div class="space-x-2">
          <button
            className="bg-yellow-400 border px-4 py-2 rounded uppercase "
            onClick={() => {
              analytics.track("button 1 clicked");
              console.log("button 1 clicked");
            }}
          >
            click me 1
          </button>

          <button
            className="bg-green-400 border px-4 py-2 rounded uppercase"
            onClick={() => {
              analytics.track("button 2 clicked");
              console.log("button 2 clicked");
            }}
          >
            click me 2
          </button>
        </div>
      </div>
    </>
  );
}
