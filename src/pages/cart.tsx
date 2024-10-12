import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {
  const { rows } = await sql`SELECT * from CARTS where user_id=${params.user}`;
  console.log(JSON.stringify(rows));
  return (
    <div>
      {/* {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))} */}
    </div>
  );
}