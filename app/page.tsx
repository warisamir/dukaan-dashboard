import Nav from "@/app/(components)/Nav/Nav";
import Payment from "@/app/(components)/Payment/Payment";
export default function Home() {
  return (
    <main className="h-screen w-screen">
      <section className="flex items-center justify-between gap-0">
        <section className="w-72">
          <Nav />
        </section>
        <section className="w-[82%]">
          <Payment />
        </section>
      </section>
    </main>
  );
}
