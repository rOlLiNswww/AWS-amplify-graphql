import { Amplify } from 'aws-amplify';
import { Divider, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';

import { listTodos } from './graphql/queries';
import { listProducts,searchProducts } from './graphql/queries';

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



const MyQuery = `
query MyQuery {
  searchProducts(sort: {direction: asc, field: name}, limit: 4, filter: {colour: {wildcard: "*b*"}, supplierID: {wildcard: "*"}, lowest_price: {gte: 1, lte: 20}}) {
    items {
      name
      lowest_price
      colour
      Inventories(filter: {stock_onhand: {ge: 1}}) {
        items {
          name
          stock_onhand
        }
      }
    }
    nextToken
  }
}

`;

async function fetchSortedProducts() {
  try {
    const productsData = await API.graphql({
      query: MyQuery,
    });

    const originalProducts = productsData.data.searchProducts.items;
    
    // 此时originalProducts已经是满足条件的产品了，不需要再过滤
    console.log("Filtered product list:", originalProducts);
  } catch (err) {
    console.log('Error fetching todos:', err);
  }
}

fetchSortedProducts();



// const productFilter = {
//   name: { wildcard: "*" },
//   lowest_price: { gte: 0, lte: 20 },
//   colour: { wildcard: "*" }
// };

// const inventoryFilter = { stock_onhand: { ge: 1 } };


// const productSort = {
//   field: "code",
//   direction: "asc"
// };

// async function fetchSortedProducts() {
//   try {
//     const todosData1 = await API.graphql({
//       query: searchProducts,
//       variables: {
//         filter: productFilter,
//         sort: productSort,
//         limit:3
//       }
//     });

//     const originalProducts = todosData1.data.searchProducts.items;

//     // 过滤出至少有一个库存大于等于90的产品
//     const filteredProducts = originalProducts.filter(product => {
//       // 可能有些产品没有库存信息，我们可以使用一个空数组作为默认值
//       const inventories = product.Inventories.items || [];
//       return inventories.some(inventory => inventoryFilter.stock_onhand.ge <= inventory.stock_onhand);
//     });

//     console.log("Filtered product list:", filteredProducts);
//   } catch (err) {
//     console.log('Error fetching todos:', err);
//   }
// }

// fetchSortedProducts();



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

