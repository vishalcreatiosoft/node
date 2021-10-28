const employee = [
    {
        empId : 101,
        empName : 'Allen',
        location : 'New York'
    },
    {
       
        location : 'Pennsylvania'
    },
    {
        empId : 103,
        empName : 'Mike'
       
    },{

    }
]

const traverse = (employee)=>{
    return employee.filter((obj)=>{
        
        

        if(obj.empId === undefined){
            obj.empId = 102
        }
        if(obj.empName === undefined){
            obj.empName = 'Hero'
        }
        if(obj.location === undefined){
            obj.location = 'NOIDA'
        }
    })
}

console.log(traverse(employee))
console.log(employee)





