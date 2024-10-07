import { CashCard } from "@/components/dashboard/CashCard";
import { Header } from "@/components/dashboard/Header";
import { YourExpenses } from "@/components/dashboard/YourExpenses";
import { YourIncome } from "@/components/dashboard/YourIncome";

export default function Home() {
  return (
    <div className="pl-4 bg-gray-100">
      <Header />
      <CashCard />
      <YourIncome />
      <YourExpenses />
    </div>
  );
}
