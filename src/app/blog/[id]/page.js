// import { Container, Stack, Typography } from "@mui/material";
import { Container } from "@/components/Container";
const getData = async (id) => {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  return data;
};

export default async function Page(props) {
  const id = props.params.id;
  const post = await getData(id);
  return (
    <Container>
      <div
        className="markdown-body"
        gap={4}
        dangerouslySetInnerHTML={{
          __html: post.body_html,
        }}
      ></div>
    </Container>
  );
}

{
  /* <Container>
<div className="flex flex-col justify-center items-center w-full gap-[40px]">
  <img src={post.cover_image ? post.cover_image : "/nrl.jpg"}></img>
  <h1 className="text-[50px] ">{post.title}</h1>
  <p>
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
    {post.description}
  </p>
  <div
    className="markdown-body"
    gap={4}
    dangerouslySetInnerHTML={{
      __html: post.body_html,
    }}
  ></div>
</div>
</Container> */
}
