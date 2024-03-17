
import DataTable from '../../Components/DataTable/DataTable';
import { userRows } from '../../Data/data';


const Users = () => {
    const columns = [
        { field: "id", headerName: "ID", width: 80 },
        {
            field: "img",
            headerName: "Avatar",
            width: 100,
            renderCell: (params) => {
                return <img src={params.row.img || "/noavatar.png"} alt="" className='w-8 h-8 rounded-full object-cover'/>;
            },
        },
        {
            field: "firstName",
            type: "string",
            headerName: "First name",
            width: 120,
        },
        {
            field: "lastName",
            type: "string",
            headerName: "Last name",
            width: 120,
        },
        {
            field: "email",
            type: "string",
            headerName: "Email",
            width: 200,
        },
        {
            field: "phone",
            type: "string",
            headerName: "Phone",
            width: 200,
        },
        {
            field: "createdAt",
            headerName: "Created At",
            width: 100,
            type: "string",
        },
        {
            field: "verified",
            headerName: "Verified",
            width: 150,
            type: "boolean",
        },
    ];
    return (
        <div>
            This is users page.

            <DataTable slug="users" columns={columns} rows={userRows}></DataTable>
        </div>
    );
};

export default Users;