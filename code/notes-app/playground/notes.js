const tasks = {
    tasks : [{
        text : 'Grocery shopping',
        completed : true
    },{
        text : 'Clean yeard',
        completed : false
    },{
        text : 'film course',
        completed : false
    }],
    
    getTasksToDo(){
        return this.tasks.filter((task)=>{
            return task.completed === false
        })

    }
}

console.log(tasks.getTasksToDo())
