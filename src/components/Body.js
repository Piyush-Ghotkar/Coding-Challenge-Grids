import React from 'react';
import { useTable,useSortBy } from 'react-table'
import '../styles/App.css';
import '../styles/Body.css';
import sortIcon from '../images/sort.png';

function Body(props) {

    const columns = React.useMemo(
        () => [
          {
            Header: 'Emp Id',
            accessor: 'id', // accessor is the "key" in the data
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'DOB',
            accessor: 'dob',
          },
          {
            Header: 'Status',
            accessor: 'userStatus',
          },
          {
            Header: 'Credits',
            accessor: 'creditBalance',
          },
        ],
        []
    )
    
    const data = React.useMemo(
    () => props.jsonData,
    [props.jsonData]
    )
 
   return (
       <div className="body-container">
            <Table columns={columns} data={data} />
        </div>
   );
}

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = useTable({
      columns,
      data,
    },
    useSortBy
    )
  
    // Render the UI for your table
    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                        <span className="sortingIcons">
                            {column.isSorted
                            ? column.isSortedDesc
                                ? ' 🔽'
                                : ' 🔼'
                            : " 🔽🔼"}
                        </span>
                    </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

export default Body;