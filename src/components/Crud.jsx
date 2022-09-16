import React,{ useState, useEffect } from "react";
export default Crud;



function Crud(){
   const [lastname, setLastname] = useState("");
   const [firstname, setFirstname] = useState("");
   const [purpose, setPurpose] = useState("");
   const [date, setDate] = useState("");
   const [visitors, setVisitors] = useState([

//Array of data -> Visitors//

     {
        id: 0,
        lastname:"Snape",
        firstname:"Severus",
        purpose: "Bills Payment",
        date: "2022-10-16",

     },
     {
        id: 1,
        lastname:"Dumbledore",
        firstname:"Severus",
        purpose: "Bills Payment",
        date: "2022-11-14",
     },
     {
        id: 2,
        lastname:"Grindelwald",
        firstname:"Gellert",
        purpose: "Contract Signing",
        date: "2022-10-11",
     },

     {
        id: 3,
        lastname:"Malfoy",
        firstname:"Draco",
        purpose: "Submit Application",
        date: "2022-12-24",
     },

   ]);

 
  // For Add Button Function
   const addVisitor = () =>{
    const newVisitor = {
        lastname: lastname,
        firstname: firstname,
        purpose:purpose,
        date:date,

    };
    
    setVisitors((prev) => [...prev, newVisitor]);
  }

   //For Delete Button Function//
const handleDelete = (id ) => {
    setVisitors(visitors.filter(i => i.id !== id));
  
};

return(
    <div className="container  m-5  d-flex justify-content-between">
      
            <div className="crud">
          
                <h1 className="">Visitor Entry</h1>
            
            
                <label htmlFor="lastname">Last Name</label> <br />
                <input type="text" name="lastname" id="" required
                onChange={(e) => {
                    setLastname(e.target.value);
                }}/> <br />

                
                <label htmlFor="firstname">First Name</label><br />
                <input type="text" name="firstname" id="" required
                onChange={(e) => {
                    setFirstname(e.target.value);
                }} /> <br />


                <label htmlFor="purpose">Purpose of Visit</label><br />
                <input type="text" name="purpose" id="" required
                onChange={(e) => {
                    setPurpose(e.target.value);
                }} /> <br />


                <label htmlFor="date">Date</label><br />
                <input type="date" name="date"
                onChange={(e) => {
                    setDate(e.target.value);
                }}/> <br />
                
                <button className="btn btn-sm btn-secondary mt-3" onClick={addVisitor}>Submit</button>
            </div>
        

                <div className="table ml-5 w-75">
                   <table className="table table-bordered text-white text-center">
                    <thead className="bg-secondary">
                        <th scope="col">Name</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Date</th>
                        <th scope="col">Delete</th>
                    </thead>
                       <tbody className="text-dark">
                       {visitors.map((visitor, index)=>{
                          return(
                            <tr key={index}>
                                 <td>{visitor.lastname}, {visitor.firstname}</td>
                                 <td>{visitor.purpose}</td>
                                 <td>{visitor.date}</td>
                                 <td><button  className="btn btn-sm bg-danger m-1 w-10 text-white btn-sh" onClick={() => handleDelete(visitor.id)}>&times;</button></td>
                            </tr>
                          )
                       })}
                       </tbody>

                   </table>
                </div>
    </div>
   );
}
