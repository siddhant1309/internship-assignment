// Data.js
import React, { useState, useEffect } from 'react';
import { Table, Tag } from 'antd';
import {PieChart, Pie, Cell } from 'recharts';

const Data = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // Filter posts with user ID 1
        const filteredData = data.filter((post) => post.userId === 1);
        setPostData(filteredData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to ensure useEffect runs only once

  // Calculate the number of posts
  const postCount = postData.length;
  const user1Posts = postData.filter((post) => post.userId === 1).length;

  const pieChartData = [
    { name: 'User ID 1 Posts', value: user1Posts },
    { name: 'Other Posts', value: postCount - user1Posts },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];

  return (
    <div>
      <h2>Data Page</h2>
      <Table dataSource={postData} columns={columns} />
      <div style={{ marginTop: '20px' }}>
        <h3>Pie Chart - User ID 1 Posts</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

//   return (
//     <div>
//       <h2>Data Page</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {postData.map((post) => (
//             <tr key={post.id}>
//               <td>{post.id}</td>
//               <td>{post.title}</td>
//               <td>{post.body}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div style={{ marginTop: '20px' }}>
//         <h3>Pie Chart - User ID 1 Posts</h3>
//         <PieChart width={400} height={400}>
//           <Pie
//             data={pieChartData}
//             dataKey="value"
//             cx={200}
//             cy={200}
//             outerRadius={80}
//             fill="#8884d8"
//             label
//           >
//             {pieChartData.map((entry, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//             ))}
//           </Pie>
//         </PieChart>
//       </div>
//     </div>
//   );
// };


// return (
//   <div>
//     <h2>Data Page</h2>
//     <Table dataSource={postData}>
//       <Table.Column title="ID" dataIndex="id" />
//       <Table.Column title="Title" dataIndex="title" />
//       <Table.Column title="Body" dataIndex="body" />
//     </Table>
//     <div style={{ marginTop: '20px' }}>
//       <h3>Pie Chart - User ID 1 Posts</h3>
//       <PieChart width={400} height={400}>
//         <Pie
//           data={pieChartData}
//           dataKey="value"
//           cx={200}
//           cy={200}
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         >
//           {pieChartData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   </div>
// );
// };

// return (
//   <div>
//     <h2>Data Page</h2>
//     <Table dataSource={postData}>
//       <Table.Column title="ID" dataIndex="id" />
//       <Table.Column title="Title" dataIndex="title" />
//       <Table.Column title="Body" dataIndex="body" />
//     </Table>
//     <div style={{ marginTop: '20px' }}>
//       <h3>Pie Chart - User ID 1 Posts</h3>
//       <PieChart width={400} height={400}>
//         <Pie
//           data={pieChartData}
//           dataKey="value"
//           cx={200}
//           cy={200}
//           outerRadius={80}
//           fill="#8884d8"
//           label
//         >
//           {pieChartData.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//           ))}
//         </Pie>
//       </PieChart>
//     </div>
//   </div>
// );
// };

export default Data;
