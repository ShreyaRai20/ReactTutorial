import { Link } from "react-router-dom"

const projects = [
    {
        name: "Password Generator",
        to: "projects/password-generator"
    },
        {
        name: "Context Page",
        to: "projects/context-page"
    },    
    {
        name: "Theme changer",
        to: "projects/theme-changer"
    }
]

function ProjectPage() {
  return (
    <div>
    projects
    {projects.map(({name,to})=>(
    <div key = {name} className="flex items-center justify-center bg-amber-900 mx-2 my-2 h-[50px] w-[200px] text-amber-300 rounded-2xl">
        <Link to={`/${to}`}>
            <div className="">
                {name}
            </div>
        </Link>
    </div>
    )
    )}
    </div>
  )
}

export default ProjectPage
