import { useState } from "react"
import { data } from "../utils/data"
import { BsThreeDots } from "react-icons/bs"
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { BiSort } from "react-icons/bi"
import { MdSort } from "react-icons/md"

const ProjectTable = () => {

    const [projects,setProjects] = useState(data);
    const [dropDownVisible,setDropDownVisible] = useState(false);
    const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
    const [filtersVisible,setFiltersVisible] = useState(false)


    const sortProjects = (key:string) => {
      const sortedProjects = [...projects];

        if(sortConfig && sortConfig.key === key && sortConfig.direction === 'asc'){
            sortedProjects.sort((a,b)=> a[key] > b[key] ? 1 : -1)
            setSortConfig({key, direction: 'desc'})
        }else if(sortConfig && sortConfig.key === key && sortConfig.direction === 'desc'){
          sortedProjects.sort((a,b)=> a[key] < b[key] ? 1 : -1)
          setSortConfig({key, direction: 'asc'}) 
        }
        setProjects(sortedProjects)
    }
        const handleSortOptionClick = (key:string) => {

          sortProjects(key) ;
          setDropDownVisible(false);
            
            

        }


  return (
    <div className="p-4 w-[93%] ml-[5rem]">
                 {/* Sorting */}
      <div className="flex items-center mb-5">
        <div className="relative">
          <button onClick={() =>  setDropDownVisible(!dropDownVisible)}
           
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <BiSort className="mr-[0.3rem]" />
            Sort
            
            {dropDownVisible ? (<AiOutlineUp className="ml-2"  />):(<AiOutlineDown className=" ml-2" />)}
          </button>
          {dropDownVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
                <button
                onClick={()=> handleSortOptionClick("click")} 
                className="block px-4 py-2 text-white hover:bg-gray-700 w-full" >Name

                </button>
                <button
                onClick={()=> handleSortOptionClick("date")} 
                className="block px-4 py-2 text-white hover:bg-gray-700 w-full" >Date

                </button>
                <button
                onClick={()=> handleSortOptionClick("country")} 
                className="block px-4 py-2 text-white hover:bg-gray-700 w-full" >Country

                </button>
                
            </div>
        )}
          </div>
       

 {/* Filters */}
 <div className="relative ml-4 w-full">
          <button
            onClick={() => setFiltersVisible(!filtersVisible)}
            className="border border-gray-700 flex items-center justify-center text-white p-2 rounded"
          >
            <MdSort className="mr-[0.3rem]" />
            Filters
            {filtersVisible ? (<AiOutlineUp className="ml-2"  />):(<AiOutlineDown className=" ml-2" />)}
          </button>
          {filtersVisible && (
            <div className="absolute top-full left-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-lg p-4">
              <div className="mb-2">
                <label className="block text-white">Filter by Name:</label>
                <input
                  type="text"
                  name="name"
                
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Country:</label>
                <input
                  type="text"
                  name="country"
                 
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Email:</label>
                <input
                  type="text"
                  name="email"
                  
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Project:</label>
                <input
                  type="text"
                  name="project"
                 
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
              <div className="mb-2">
                <label className="block text-white">Filter by Status:</label>
                <input
                  type="text"
                  name="status"
                  
                  className="bg-gray-900 text-white rounded p-2 w-full"
                />
              </div>
            </div>
          )}
        </div>

        </div>

       

         {/* Main Table */}
      <table className="min-w-full table-auto rounded border border-gray-700 text-white">
        <thead>
          <tr>
            <th className="px-5 py-3 text-left">Image</th>
            <th className="px-5 py-3 text-left">Name</th>
            <th className="px-5 py-3 text-left">Country</th>
            <th className="px-5 py-3 text-left">Email</th>
            <th className="px-5 py-3 text-left">Project Name</th>
            <th className="px-5 py-3 text-left">Task Progress</th>
            <th className="px-5 py-3 text-left">Status</th>
            <th className="px-5 py-3 text-left">Date</th>
            <th className="px-5 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
   
   {projects.map((project, index) => (
    <tr key={index} className="border border-gray-700">
    <td className="px-4 py-2">
      <img src={project.image} alt=""  className="w-[3rem] h-[3rem] object-cover rounded-full" />
    </td>
    <td className="px-4 py-2">{project.client}</td>
              <td className="px-4 py-2">{project.country}</td>
              <td className="px-4 py-2">{project.email}</td>
              <td className="px-4 py-2">{project.project}</td>
              <td className="px-4 py-2">
                    <span>{project.progress}</span>
                <div className="w-24 h-2 bg-gray-700 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${project.progress}` }}
                  ></div>
                </div>
              </td>
              <td className="px-4 py-2 w-[10rem]">
                <span  className={`px-2 py-1 text-white rounded ${
      project.status === "Completed" ? "bg-green-500" : "bg-yellow-400"
    }`}>{project.status}</span>
              </td>
                <td className="px-4 py-2">{project.date}</td>
                <td className="px-4 py-2"> 
                    <div className="relative">
                    <BsThreeDots className="cursor-pointer" />
                    </div>
                </td>
    </tr>
   ))}                      


        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
        
          className="px-4 py-2 bg-gray-700 text-white rounded mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-white">
          {/* Page {currentPage} of {totalPages} */}
        </span>
        <button
         
          className="px-4 py-2 bg-gray-700 text-white rounded ml-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>


    </div>
  )
}

export default ProjectTable