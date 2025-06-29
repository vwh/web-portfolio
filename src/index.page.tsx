export const title = "Welcome";
export const layout = "layout.tsx";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>{data.title}</h1>
    <p>hi {data.yazan.name}</p>
  </>
);