import { Routes , Route } from "react-router-dom"
import { CreateProject } from "./pages/CreateProject"
import { ProjectPlayground } from "./pages/ProjectPlayground"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<CreateProject />}></Route>
            <Route path="/project/:projectId" element={<ProjectPlayground />}></Route>
        </Routes>
    )
}