import React, { Component } from "react";
import "./Main.css";

//form

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();


    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    });

  }


  handleChange = (event) => {
    this.setState({ novaTarefa: event.target.value });
  }

  handleDelete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  handleEdit = (e, index) => {
    console.log('edit', index)
  };

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <form action="#" onSubmit={this.handleSubmit} className="form">
          <input
            placeholder="Digite algo:"
            value={novaTarefa}
            onChange={this.handleChange}
            type="text" />
          <button type="submit">
            Enviar <FontAwesomeIcon icon={faShareFromSquare} />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) =>
          (

            <li key={tarefa}>

              {tarefa}
              <div className="btn-tarefas">
                <button
                  onClick={(e) => this.handleEdit(e, index)}
                  type="button"> <FontAwesomeIcon
                    icon={faPenToSquare} /></button>
                <button
                  onClick={(e) => this.handleDelete(e, index)}
                  type="button"> <FontAwesomeIcon
                    icon={faTrashCan} /></button>
              </div>

            </li>

          ))}

        </ul>

      </div>
    )
  }
}