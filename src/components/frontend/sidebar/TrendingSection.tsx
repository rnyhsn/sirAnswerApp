import Link from "next/link"

let trendingQues = [
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
    {
        title: "How old should a baby be before they can safely sit in a high chair?",
        slug: ""
    },
]

const TrendingSection = () => {
  return (
    <div className="bg-bgLightSecondary dark:bg-bgDarkSecondary px-4 py-2 rounded-md">
      <h2 className="text-3xl border-b border-gray-500">Trending Questions</h2>
      <div className="flex flex-col">
      {
        trendingQues.map((q, i) => (
            <Link href={q.slug} key={i} className="py-2.5 border-b border-gray-500"> {q.title} </Link>
        ))
      }
      </div>
    </div>
  )
}

export default TrendingSection
