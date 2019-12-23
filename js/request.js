axios({
    method:"get",
    url:'https://jsonplaceholder.typicode.com/todos',
})
.then(response => getTodo(response.data))
.catch(error => console.log("connot get data"));

var getTodo = (data)=>{
    data.forEach(element => {
        console.log(element);
    });
}