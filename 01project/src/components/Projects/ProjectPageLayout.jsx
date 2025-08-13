import { Outlet } from "react-router-dom"
import ProjectNavbar from "./ProjectNavbar"

function ProjectPageLayout() {
  return (
    <>
    <ProjectNavbar/>
    <Outlet/>
    </>
  )
}

export default ProjectPageLayout
