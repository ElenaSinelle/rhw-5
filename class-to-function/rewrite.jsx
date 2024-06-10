//class component

class Counter extends Component {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

//functional component
import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return <button onClick={handleClick}>{count}</button>;
}
