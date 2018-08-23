import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props); // pass props so we can have access to this.props
    this.state = {
      hasError: false
    }
  }

  // if anything errors out, run componentDidCatch
  componentDidCatch(error, info) { // introduced in React16, similar to try/catch block in JS
    this.setState({ hasError: true })
  }

  render() {
    if (this.state.hasError) {
      return <h1>There is an error!!</h1>
    }
    return this.props.children // render the children of this.props, which will be the children of ErrorBoundary
  }
}

export default ErrorBoundary;
