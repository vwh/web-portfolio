export const layout = "layout.tsx";

export const title = "About Me";

export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>Hi, I'm {data.resume.name} 👋</h1>
    <p>{data.resume.about}</p>
    <a href={data.resume.locationLink}>{data.resume.location}</a>
  </>
);
