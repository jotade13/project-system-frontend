import NewUser from "./newUser"

const ASideDashboard = () => {

    return (
        <aside className="border-grid fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-1/8 shrink-0 border-r md:sticky md:block">
          <NewUser />
        </aside>
    )
}
export default ASideDashboard