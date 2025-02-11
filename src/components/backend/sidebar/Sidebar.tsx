import NavItem from "./NavItem"

let sidebarItems = [
  {
    title: "Dashboard",
    path: "/dashboard"
  },
  {
    title: "User",
    path: "/dashboard/user"
  },
  {
    title: "Category",
    path: "/dashboard/category"
  },
  {
    title: "Sub Category",
    path: "/dashboard/sub-category"
  },
  {
    title: "Question",
    path: '/dashboard/question'
  }
]
const Sidebar = () => {
  return (
    <div className="w-[20%] bg-bgLightSecondary dark:bg-bgDarkSecondary flex flex-col gap-8 px-2 py-8 min-h-screen">
      <h1 className="text-4xl font-semibold">Logo</h1>
      <div className="flex flex-col">
      {
        sidebarItems.map((item, i) => (
          <NavItem item={item} key={i} />
        ))
      }
      </div>
    </div>
  )
}

export default Sidebar
