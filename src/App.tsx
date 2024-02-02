import "./App.css";
import { images, statements } from "./const";

function App() {
  return (
    <>
      <section className="statements">
        <h2>真正的账号记录</h2>
        {statements.map((s) => (
          <a
            href={s.file}
            key={s.month}
            target="_blank"
          >
            {s.month}
          </a>
        ))}
      </section>
      <hr />
      <section className="images">
        {images.map((i) => (
          <img
            src={i}
            key={i}
            alt="transactions"
          ></img>
        ))}
      </section>
    </>
  );
}

export default App;
