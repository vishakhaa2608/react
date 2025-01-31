import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'


const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(myfirstelement, document.getElementById('root'));

// class HelloWorld extends React.Component {
//     render() {
//       return React.createElement("div", null, "Hello World");
//     }
//   }


// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>Hello World!</div>
//     )
//   }
// }
//ReactDOM.render(<HelloWorld />, document.getElementById('root'));


class FriendsContainer extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        name: 'Tyler McGinnis',
        friends: [
          'Jake Lingwall',
          'Sarah Drasner',
          'Merrick Christensen'
        ],
      }
  
      this.addFriend = this.addFriend.bind(this)
    }
    addFriend(friend) {
      this.setState((state) => ({
        friends: state.friends.concat([friend])
      }))
    }
    render() {
      return (
        <div>
          <h3> Name: {this.state.name} </h3>
          <AddFriend addNew={this.addFriend} />
          <ShowList names={this.state.friends} />
        </div>
      )
    }
  }

class AddFriend extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            newFriend: ''
        }
    
        this.updateNewFriend = this.updateNewFriend.bind(this)
        this.handleAddNew = this.handleAddNew.bind(this)
    }
    updateNewFriend(e) {
        this.setState({
            newFriend: e.target.value
        })
    }
    handleAddNew() {
        this.props.addNew(this.state.newFriend)
        this.setState({
            newFriend: ''
        })
    }
    render() {
        return (
            <div>
            <input
                type="text"
                value={this.state.newFriend}
                onChange={this.updateNewFriend}
            />
            <button onClick={this.handleAddNew}> Add Friend </button>
            </div>
        )
    }
}
AddFriend.propTypes =  {
    addNew: PropTypes.func.isRequired
}

class ShowList extends React.Component {
    render() {
      return (
        <div>
          <h3> Friends </h3>
          <ul>
            {this.props.names.map((friend) => {
              return <li> {friend} </li>
            })}
          </ul>
        </div>
      )
    }
  }
  ShowList.defaultProps = {
    names: ["hey"]
  }

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));

