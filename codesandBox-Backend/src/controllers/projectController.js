import util from 'util';
import child_process  from 'child_process';
import fs from 'fs/promises';
import uuid4 from 'uuid4';
import { REACT_PROJECT_COMMAND } from '../config/serverConfig.js';
import { createProjectService, getProjectTreeServices } from '../service/projectService.js';

//const execPromisified = util.promisify(child_process.exec);

export const createProjectController = async (req,res) => {

    // // Create a unique id and then inside the projects folder create a new folder with that id

    // const projectId = uuid4();
    // console.log("New project id is", projectId);

    // await fs.mkdir(`./projects/${projectId}`);

    // // After this call the npm create vite command in the newly created project folder

    // const response = await execPromisified(REACT_PROJECT_COMMAND,{
    //     cwd: `./projects/${projectId}`
    // })

    const projectId = await createProjectService();
    
    return res.json({ message: 'Project created', data: projectId});
}

export const getProjectTree = async (req,res) => {
    const tree = await getProjectTreeServices(req.params.projectId);
    return res.status(200).json({
        data: tree,
        success: true,
        message: "Successfully fetched the tree"
    })
}