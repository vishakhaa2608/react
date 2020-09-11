import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import TodoList from "../../components/TodoList/TodoList";

class TodoBuilder extends Component {
    state = {
        items: {
            movies: 0,
            home: 0,
            work: 0,
            finance: 0,
            personal: 0,
            health: 0
        }
    }
    render (){
        return(
            <Aux>
                <div> <TodoList items={this.state.items}/> </div>
                <div> Builds </div>
            </Aux>
        );
    }
}

export default TodoBuilder;