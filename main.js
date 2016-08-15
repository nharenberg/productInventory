const Title = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to React</h1>
      </div>
    );
  }
});

const NewItemForm = React.createClass({
  getInitialState: function() {
    return {
      text: ""
    }
  },
  addItem: function() {
    this.props.addItem(this.state.text);
    this.setState({text: ''})
  },

  render: function() {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={e => this.setState({text: e.target.value})}/>
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
});

const ItemList = React.createClass({

  render: function() {

    let items = this.props.items.map(item => {
      return <li key={item.id}>{item.text + '  '}<button>EDIT</button><button onClick={
                                                                                      this.props.removeItem.bind(null, item.id)
                                                                                    }>X</button></li> 
    });
    return (
      <ul>
        {items}
      </ul>
    )
  }
})

const ItemBoard = React.createClass({
  getInitialState: function() {
    try{
      var items = JSON.parse(localStorage.items)
    } catch (err) {
      var items= []
    }
    return {items};
  },
  componentDidUpdate() {
    localStorage.items = JSON.stringify(this.state.items);
  },
  addItem: function(text) {
    let item = {
      text,
      id: uuid()
    };

    this.setState({
      items: this.state.items.concat(item)
    })
  },
  removeItem: function(id, event){
    console.log("id to delete:", id);
    console.log("event:", event);

    this.setState({
    item: this.state.items.filter(m => m.id !== id)
    })
  },
  render: function() {
    return (
      <div>
        <h1>ItemBoard</h1>
        <NewItemForm addItem={this.addItem}/>
        <ItemList items={this.state.items} removeItem={this.removeItem}/>
      </div>
    )
  }
})