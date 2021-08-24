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
    ],
    []
)

const data = React.useMemo(
() => props.jsonData,
[]
)
    var a=props.jsonData
  console.log("a=",a);

// const tableInstance = useTable({ columns, data })
