import { Component } from "react";

export default class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      editingTask: false,
      taskToEditIndex: null,
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.setState({
        tasks: JSON.parse(savedTasks),
      });
    }
  }

  addTask = () => {
    let newTasks;

    if (this.state.editingTask) {
      newTasks = [...this.state.tasks];
      newTasks[this.state.taskToEditIndex] = this.state.task;
    } else {
      newTasks = [...this.state.tasks, this.state.task];
    }

    this.setState({
      tasks: newTasks,
      task: "",
      editingTask: false,
      taskToEditIndex: null,
    });

    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  deleteTask = (index) => {
    const newTasks = this.state.tasks.filter((_, i) => i !== index);

    this.setState({ tasks: newTasks });
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  startEdit = (index) => {
    this.setState({
      task: this.state.tasks[index],
      editingTask: true,
      taskToEditIndex: index,
    });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Todo Form</h2>

        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
            placeholder="Enter a task..."
            style={{
              padding: "8px",
              marginRight: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          <button
            onClick={this.addTask}
            style={{
              padding: "8px 16px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            {this.state.editingTask ? "Update Task" : "Add Task"}
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {this.state.tasks.map((task, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: "#f5f5f5",
                borderRadius: "4px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{task}</span>

              <div>
                <button
                  onClick={() => this.deleteTask(index)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Delete
                </button>

                <button
                  onClick={() => this.startEdit(index)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#2196F3",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                  }}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
