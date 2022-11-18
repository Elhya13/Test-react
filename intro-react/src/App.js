import "./style/main.scss"
import Input from './components.js/input.js';
import SubmitButton from './components.js/submit_button';
import List from './components.js/list';


function Todolist() {
    return (
      <div className="Todolist">
        <header className="Todo-header">
          <h1> My Todo App</h1>
          </header>
          <div className="Newtodo">
      
          < Input />
          < SubmitButton />
          </div>
          < List />
        </div>
    )
};

export default Todolist;
