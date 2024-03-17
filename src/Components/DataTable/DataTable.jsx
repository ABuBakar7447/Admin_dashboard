import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import './DataTable.css'
import { Link } from "react-router-dom";

const DataTable = ({slug, columns, rows }) => {

    const handleDelete = (id) => {
        console.log(id);
        //delete the item
        // mutation.mutate(id)
    };

    const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (rows) => {
            return (
                <div className="w-16 h-16 cursor-pointer flex justify-evenly items-center gap-4">
                    <Link to={`/${slug}/${rows.id}`}>
                        <img src="https://i.ibb.co/TmtnxZ9/icons8-view-24.png" alt="" className="w-6 h-6"/>
                    </Link>
                    <div className="delete" onClick={() => handleDelete(rows.id)}>
                        <img src="https://i.ibb.co/HXVWrjT/icons8-trash-32.png" alt="" className="w-6 h-6"/>
                    </div>
                </div>
            );
        },
    };


    return (
        <div>
            <div className="MuiDataGrid-toolbarContainer bg-white" style={{ width: '100%' }}>
                <DataGrid className=""
                    rows={rows}
                    columns={[...columns, actionColumn]}
                    initialState={{
                        pagination: {
                            paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                    pageSizeOptions={[10, 15]}
                    checkboxSelection
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}

                    disableRowSelectionOnClick
                    disableColumnFilter
                    disableDensitySelector
                    disableColumnSelector
                />
            </div>
        </div>
    );
};

export default DataTable;