import React from "react"
import { Link } from "react-router"
import main from "main.js"
const App = React.createClass({
  render() {
    return (
      <div>

        <h1>Products</h1>
        <form>
          <input id="productInput" />
        </form>
      </div>
    )
  }
})

export default App;