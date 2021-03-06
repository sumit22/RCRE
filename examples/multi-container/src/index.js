import React from "react";
import ReactDOM from "react-dom";
import {RCREProvider, Container, ES, createReduxStore} from 'rcre';

import "./styles.css";
import {Input} from "./components/Input";

const store = createReduxStore();

function App() {
  return (
    <div className="App">
      <RCREProvider store={store}>
        <h2>Use Multi Container Components as multi reducers</h2>
        <p>Container has their own namespaces, components with the same name will not affect each other</p>
        <div className={'demo1'}>
          <div>demo 1 Container</div>
          <Container model={'demo1'} data={{username: 'aaa'}}>
            <span>UserName: </span>
            <ES name={'username'}>{({$name, $value}, context) => (
              <input value={$value || ''} onChange={event => context.container.$setData($name, event.target.value)}/>
            )}</ES>

            <div>Components in the same container will share the same name</div>
            <Input name={'username'} />
            <div>demo1 state value: <ES>{({$data}) => <span>{JSON.stringify($data)}</span>}</ES></div>
          </Container>
        </div>
        <div className={'demo2'}>
          <div>demo 2 Container</div>
          <Container model={'demo2'}>
            <span>UserName: </span>
            <Input name={'username'} />
            <div>demo1 state value: <ES>{({$data}) => <span>{JSON.stringify($data)}</span>}</ES></div>
          </Container>
        </div>
      </RCREProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
