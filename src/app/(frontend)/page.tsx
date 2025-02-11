import ExploringTopics from "@/components/frontend/body/ExploringTopics";
import QuestionAnswerSection from "@/components/frontend/body/QuestionAnswerSection";
import SearchCard from "@/components/frontend/body/SearchCard";
export default function Home() {
  return (
    <div className="w-[55%] flex flex-col gap-5">
      <SearchCard />
      <ExploringTopics />
      <QuestionAnswerSection />
    </div>
  );
}
