import React,{ useState, useEffect } from "react";

function Crud(){
   const [lastname, setLastname] = useState("");
   const [firstname, setFirstname] = useState("");
   const [purpose, setPurpose] = useState("");
   const [date, setDate] = useState("");
   const [visitors, setVisitors] = useState([

//Array of data -> Visitors//

     {
        id: 1,
        lastname:"Snape",
        firstname:"Severus",
        purpose: "Bills Payment",
        date: "2022-10-16",

     },
     {
        id: 2,
        lastname:"Dumbledore",
        firstname:"Severus",
        purpose: "Bills Payment",
        date: "2022-11-14",
     },
     {
        id: 3,
        lastname:"Grindelwald",
        firstname:"Gellert",
        purpose: "Contract Signing",
        date: "2022-10-11",
     },

     {
        id: 4,
        lastname:"Malfoy",
        firstname:"Draco",
        purpose: "Submit Application",
        date: "2022-12-24",
     },

   ]);
        
   const addVisitor = () =>{
    const newVisitor = {
        lastname: lastname,
        firstname: firstname,
        purpose:purpose,
        date:date,

    };
    
    setVisitors((prev) => [...prev, newVisitor]);
    console.log(visitors);
  }

   //For Delete Button Function//
   const handleDelete = (id) => {
    const newVisitor = visitors.filter((visitor) => visitor.id != id);
    // setVisitors(newVisitor);
    console.log(newVisitor);
  
};

return(
    <div className="container  m-5 p-3 d-flex justify-content-between">
      
            <div className="crud">
                <h1>Visitor Entry</h1>
            
            
                <label htmlFor="lastname">Last Name</label><br />
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
                <input type="date" name="date" id="" required
                onChange={(e) => {
                    setDate(e.target,value);
                }}/> <br />
                
                <button className="btn btn-sm btn-secondary mt-3" onClick={addVisitor}>Submit</button>
            </div>

                <div className="table ml-5 w-75">
                   <table className="table -table-striped">
                    <thead className="bg-secondary">
                        <th scope="col">First Name</th>
                    </thead>
                   </table>
                </div> 




    
    </div>
);
         

    
   
}


export default Crud;