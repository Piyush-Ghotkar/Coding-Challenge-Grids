import React from 'react';
import { useTable,useSortBy,useBlockLayout, useResizeColumns } from 'react-table'
import '../styles/App.css';
import '../styles/Body.css';
import sortIcon from '../images/sort.png';

function Body(props) {

  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
    }),
    []
  )

    const columns = React.useMemo(
        () => [
          {
            Header: 'Emp Id',
            accessor: 'id', // accessor is the "key" in the data
            width: 119,
          },
          {
            Header: 'Name',
            accessor: 'name',
            width: 160,
          },
          {
            Header: 'Email',
            accessor: 'email',
            width: 270,
          },
          {
            Header: 'DOB',
            accessor: 'dob',
            width: 105,
          },
          {
            Header: 'Status',
            accessor: 'userStatus',
            width: 119,
          },
          {
            Header: 'Credits',
            accessor: 'creditBalance',
            width: 121,
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
            <Table columns={columns} data={data} defaultColumn={defaultColumn}/>
        </div>
   );
}

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return <input type="checkbox" ref={resolvedRef} {...rest} />
  }
)

function Table({ columns, data, defaultColumn }) {
    // Use the state and functions returned from useTable to build your UI
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      allColumns,
      state,
      getToggleHideAllColumnsProps,
      resetResizing,
    } = useTable({
      columns,
      data,
      defaultColumn,
    },
    useSortBy,
    useBlockLayout,
    useResizeColumns
    )
  
    // Render the UI for your table
    return (
      <>

      <div className="filter-checkbox">
        {allColumns.map(column => (
          <div key={column.id} className="checkbox-item">
            <label>
              <input type="checkbox" {...column.getToggleHiddenProps()} />{' '}
              {column.Header}
            </label>
          </div>
        ))}
        <br />
      </div>


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
                        
                        {/* Use column.getResizerProps to hook up the events correctly */}
                        <div
                          {...column.getResizerProps()}
                          className={`resizer ${
                            column.isResizing ? 'isResizing' : ''
                          }`}
                        />
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

      </>
    )
  }

export default Body;