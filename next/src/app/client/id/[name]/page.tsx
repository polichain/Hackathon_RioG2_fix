export default function Page({ params }: { params: { name: string } }) {
  return <div>My Post: {params.name}</div>;
}
