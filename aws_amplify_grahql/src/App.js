import { Amplify } from 'aws-amplify';
import { Divider, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

import { listTodos } from './graphql/queries';
import { listProducts } from './graphql/queries';

import awsExports from './aws-exports';
import { onUpdateTodo, onCreateTodo } from './graphql/subscriptions';

import { useEffect } from 'react';
import config from './aws-exports';


Amplify.configure(awsExports);



// const filterTodo = {
//   and: [
//     { name: { contains:'wdc' } },
//     { count: {ge:4}}
//   ]
// };


// async function fetchTodos() {
//   try {
//     const todosData = await API.graphql({
//       query: listTodos,
//       variables:{ filter: filterTodo },
//       authMode: 'API_KEY',
//       apiKey: 'da2-c7fsdmjhqzbd3nfh5anc7dpujy'
    
//     });
//     console.log("query filter:",todosData.data.listTodos.items); // 输出查询结果
//   } catch (err) {
//     console.log('Error fetching todos:', err);
//   }
// }

// fetchTodos();




const productTodo = {
  and: [
    { colour: { contains:'r' } },
    { name: {contains:'a'}},
    {supplierID: {contains:'Dex'}}
  ]
};

async function fetchproTodos() {
  try {
    const todosData1 = await API.graphql({
      query: listProducts,
      //variables: { filter: productTodo },
      authMode: 'API_KEY',
      apiKey: 'da2-c7fsdmjhqzbd3nfh5anc7dpujy'
    });

    const sortedItems = todosData1.data.listProducts.items.sort((a, b) => {
      const productA = a.name.toLowerCase();
      const productB = b.name.toLowerCase();

      if (productA < productB) {
        return -1;
      }
      if (productA > productB) {
        return 1;
      }
      return 0;
    });

    console.log("Sorted product list:", sortedItems);
  } catch (err) {
    console.log('Error fetching todos:', err);
  }
}

fetchproTodos();

//订阅
// const subscribeToUpdateTodo = () => {
//   API.graphql(graphqlOperation(onUpdateTodo)).subscribe({
//     next: (payload) => {
//       const updatedTodo = payload.value.data?.onUpdateTodo;
//       console.log('Updated todo:', updatedTodo);
//     },
//     error: (error) => {
//       console.error('Subscription error:', error);
//     },
//   });
// };

// subscribeToUpdateTodo();

// const subscribeTocreateTodo = () => {
//   API.graphql(graphqlOperation(onCreateTodo)).subscribe({
//     next: (payload) => {
//       const CreateTodo = payload.value.data?.onCreateTodo;
//       console.log('Create todo:', CreateTodo);
//     },
//     error: (error) => {
//       console.error('Subscription error:', error);
//     },
//   });
// };

// subscribeTocreateTodo();

//const todo = { name: "My first todo", description: "Hello world!",count: 3};
// 创建待办事项
//await API.graphql(graphqlOperation(createTodo, { input: todo }));

// 更新待办事项
//await API.graphql(graphqlOperation(updateTodo, { input: { id: "863287f3-46db-4834-9242-17a23ae1a082", name: "newn123" } }));

// 删除待办事项
//await API.graphql(graphqlOperation(deleteTodo, { input: { id: "987ec831-84b4-4a09-8eea-91598295b7e4" } }));

//输出所有值
// const todos = await API.graphql(graphqlOperation(listTodos));
// console.log('Todos:', todos.data.listTodos);


// //输出指定值
// const oneTodo = await API.graphql({
//   query: queries.getTodo,
//   variables: { id: 'c29b30fc-d261-4bd0-8118-4427f390d6b3' }
// });

// console.log(oneTodo);


// //触发订阅
// async function triggerUpdateTodo() {
//   const todoId = "c29b30fc-d261-4bd0-8118-4427f390d6b3";
//   const updatedTodo = { id: todoId, name: "new 123" };

//   try {
//     await API.graphql(graphqlOperation(updateTodo, { input: updatedTodo }));
//   } catch (error) {
//     console.error('Error updating todo:', error);
//   }
// }

// // 调用触发更新待办事项的方法
// triggerUpdateTodo();


// async function triggerCreateTodo() {
  
//   const todo1 = { name: "wdc4", description: "wdc4" ,count :11};
//   try {
//     //await API.graphql(graphqlOperation(createTodo, { input: todo1 }));
//   } catch (error) {
//     console.error('Error create todo:', error);
//   }
// }

// // 调用触发更新待办事项的方法
// triggerCreateTodo();




// //fliter

//   const filter = {
//     and: [
//       { name: { contains:'111' } },
//       { description: { eq:'1111' } },
//       { count: {le:5}}
//     ]
//   };

//   const response = await API.graphql(graphqlOperation(listTodos, { filter }));
//   const filteredTodos = response.data.listTodos.items;

//   console.log(filteredTodos);



function App({ signOut, user }) {

  // useEffect(()=>{
  //   const pullData = async () => {
  //     let data = await fetch(config.aws_appsync_graphqlEndpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //         'x-api_key':config.aws_appsync_authenticationType
  //       },
  //       body: JSON.stringify({
  //         query:
  //         `query MyQuery {
  //           listTodos(filter: {and: {name: {contains: "wdc"}}, count: {ge: 4}}) {
  //             items {
  //               name
  //               description
  //               count
  //             }
  //           }
  //         }`
  //       })
  //     })
  //     data = await data.json();
  //     console.log(data);
  //   }
  //   pullData();
  // },[])


  return (
    <>
      <h1>Hello ROLLINS</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);

