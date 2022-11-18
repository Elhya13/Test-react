function List() {
    const todos = ["Coffee", "Tea", "Chocolate"]
    return (
    <ul>
        {todos.map ((hotbeverage)=> (
        <li key={hotbeverage}>
            < input type="checkbox" />  {hotbeverage}
       
        </li>
        ))}
    </ul> 
    );
}
export default List;